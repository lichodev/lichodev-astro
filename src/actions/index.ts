import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  RECAPTCHA_SECRET_KEY,
  RESEND_API_KEY,
} from "astro:env/server";
import { Resend } from "resend";

const RECAPTCHA_ACTION = "contact";
const RECAPTCHA_MIN_SCORE = 0.5;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    },
  );
  if (!response.ok) return false;

  const result = (await response.json()) as {
    success: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
  };

  if (!result.success) {
    console.error("reCAPTCHA error:", result["error-codes"]);
    return false;
  }

  return (
    result.action === RECAPTCHA_ACTION &&
    (result.score ?? 0) >= RECAPTCHA_MIN_SCORE
  );
}

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().trim().min(1).max(100),
      email: z.email(),
      message: z.string().trim().min(10).max(5000),
      // Honeypot: oculto para humanos, los bots suelen completarlo.
      website: z.string().optional(),
      recaptchaToken: z.string().min(1),
    }),
    handler: async ({ name, email, message, website, recaptchaToken }) => {
      if (website) return { sent: true };

      if (!(await verifyRecaptcha(recaptchaToken))) {
        throw new ActionError({
          code: "FORBIDDEN",
          message: "No pudimos verificar que no seas un bot.",
        });
      }

      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Contacto web: ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el mensaje.",
        });
      }

      return { sent: true };
    },
  }),
};

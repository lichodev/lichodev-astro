import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.lichodev.com.ar",
  // Las páginas siguen siendo estáticas; el adaptador solo sirve las Actions como función.
  adapter: vercel(),
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-AR", en: "en" } },
      // El blog está oculto mientras no haya publicaciones: no se indexa.
      filter: (page) => !page.includes("/blog/"),
    }),
  ],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      CONTACT_TO_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
      CONTACT_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
        default: "Contacto <onboarding@resend.dev>",
      }),
      RECAPTCHA_SITE_KEY: envField.string({
        context: "client",
        access: "public",
      }),
      RECAPTCHA_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

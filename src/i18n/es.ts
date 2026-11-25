// Textos del sitio en español. Estilo nominal: sin primera persona.

export const es = {
  meta: {
    title:
      "Lisandro Marchionni — Redes, virtualización y capacitación para pymes y equipos de desarrollo",
    description:
      "Diseño, implementación y mantenimiento de redes e infraestructura virtualizada para pymes y equipos de desarrollo, con monitoreo integrado. Servicio remoto para LatAm y el mundo.",
    ogLocale: "es_AR",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    experience: "Experiencia",
    contact: "Contacto",
    switchLabel: "English version",
    switchText: "EN",
  },
  hero: {
    eyebrow: "Redes · Virtualización · Monitoreo",
    lead: "Diseño, implementación y mantenimiento de infraestructura para pymes y equipos de desarrollo: redes estables, servidores virtualizados y en contenedores, con monitoreo integrado.",
    cta: "Primera consulta sin cargo",
    remote: "Servicio remoto para LatAm y el resto del mundo.",
  },
  services: {
    title: "Servicios",
    monitoringBadge: "Monitoreo incluido",
    items: [
      {
        label: "Redes",
        title: "Conectividad estable entre oficinas, sedes y la nube",
        body: "Diseño, implementación y soporte de redes para que la conectividad deje de ser un problema.",
        includes: [
          "MikroTik / RouterOS",
          "VLANs y segmentación",
          "VPN y túneles",
          "Ruteo dinámico OSPF / BGP",
          "IPv6",
          "Interconexión entre sedes",
        ],
        monitoring: true,
      },
      {
        label: "Virtualización",
        title: "Infraestructura virtualizada y en contenedores",
        body: "Consolidación de servidores y despliegue de aplicaciones con alta disponibilidad y procesos reproducibles.",
        includes: [
          "Clusters Proxmox VE",
          "Migración a Docker y Kubernetes",
          "Alta disponibilidad",
          "Backups y recuperación",
          "Despliegues con CI/CD",
        ],
        monitoring: true,
      },
      {
        label: "Capacitación",
        title: "Equipos técnicos con criterio propio",
        body: "Formación práctica en diseño de redes, ruteo dinámico y virtualización, con laboratorios y material propio, basada en experiencia docente universitaria.",
        includes: [
          "Laboratorios prácticos",
          "Diseño de redes y ruteo dinámico",
          "Virtualización y contenedores",
          "Modalidad remota",
        ],
        monitoring: false,
      },
    ],
  },
  experience: {
    title: "Experiencia",
    cases: [
      {
        area: "Redes multi-sede",
        sector: "Sector educativo",
        title: "Red entre un centro de datos y 3 dependencias remotas",
        body: "Routers de frontera, ruteo dinámico, VLANs y direccionamiento IPv4/IPv6, con monitoreo continuo de enlaces.",
        tags: ["MikroTik", "OSPF", "BGP", "IPv6"],
      },
      {
        area: "Operación de datacenter",
        sector: "Sector educativo",
        title: "Más de 100 sistemas críticos en producción",
        body: "Operación de entornos virtualizados y clusters Kubernetes: ciclo de vida completo de los servicios, alta disponibilidad, hardening y despliegues reproducibles con CI/CD.",
        tags: ["Proxmox VE", "Kubernetes", "Docker", "GitLab CI/CD"],
      },
      {
        area: "Monitoreo integrado",
        sector: "Sector educativo",
        title: "Una sola fuente de verdad para más de 300 servicios y dispositivos",
        body: "Unificación de métricas, logs y alertas de redes, servidores y aplicaciones en una única plataforma: un solo lugar para ver el estado de la infraestructura y detectar fallas antes de que lleguen a los usuarios.",
        tags: ["Prometheus", "Grafana", "Loki"],
      },
    ],
    credentialsTitle: "Formación y certificaciones",
    credentials: [
      {
        title: "Tecnicatura Universitaria en Administración de Redes Informáticas",
        detail: "Título universitario · UNICEN",
      },
      {
        title: "Operación de Redes Data Centers — Nivel Avanzado",
        detail: "Especialización LACNIC Campus",
        image: "/credentials/lacnic-datacenters.png",
        url: "https://badges.parchment.com/public/assertions/BeTKwq2xQOuIRvOzVzRk4A",
      },
      {
        title: "Operación de Redes ISP — Nivel Intermedio",
        detail: "Especialización LACNIC Campus",
        image: "/credentials/lacnic-isp.png",
        url: "https://badges.parchment.com/public/assertions/M5lKZ-cATcWYEOCextyyDQ",
      },
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      {
        label: "Observabilidad y confiabilidad",
        tags: ["Prometheus", "Grafana", "Loki", "Nagios"],
      },
      {
        label: "Virtualización y contenedores",
        tags: ["Kubernetes", "Proxmox VE", "Docker"],
      },
      {
        label: "Redes",
        tags: [
          "MikroTik / RouterOS",
          "OSPF",
          "BGP",
          "RIP",
          "IPv6 / túneles",
          "VLANs",
        ],
      },
      {
        label: "Sistemas, CI/CD e integraciones",
        tags: [
          "Linux",
          "HA clustering",
          "Bash",
          "DNS",
          "GitLab CI/CD",
          "Git",
          "APIs (Moodle, SIU)",
        ],
      },
    ],
  },
  contact: {
    title: "Contacto",
    intro:
      "Primera consulta sin cargo: una llamada de 30 minutos para evaluar la infraestructura y definir próximos pasos.",
    name: "Nombre",
    namePlaceholder: "Nombre y apellido",
    email: "Email",
    emailPlaceholder: "nombre@empresa.com",
    message: "Mensaje",
    messagePlaceholder:
      "Breve descripción de la infraestructura o del proyecto",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    sentTitle: "Mensaje recibido",
    sentBody: "Respuesta en 24–48 h.",
    errorInput:
      "Email inválido o mensaje demasiado corto (mínimo 10 caracteres).",
    errorForbidden:
      "No fue posible verificar el envío. Reintentar o escribir a marchionni.lisandro@gmail.com.",
    errorFallback:
      "No fue posible enviar el mensaje. Contacto directo: marchionni.lisandro@gmail.com.",
  },
  footer: {
    homeLabel: "Inicio",
  },
};

export type UI = typeof es;

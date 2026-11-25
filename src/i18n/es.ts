// Textos del sitio en español. Estilo nominal: sin primera persona.

export const es = {
  meta: {
    title:
      "Lisandro Marchionni — Redes, virtualización y capacitación para empresas y equipos de desarrollo",
    description:
      "Redes multi-sede con MikroTik, clusters Proxmox y Kubernetes, y monitoreo con Prometheus y Grafana para empresas y equipos de desarrollo. Trabajo remoto en español e inglés.",
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
    headline: "Infraestructura estable para empresas y equipos de desarrollo.",
    lead: "Redes multi-site, clusters Proxmox/Kubernetes y monitoreo con Grafana, desde el router de frontera hasta cada aplicación.",
    cta: "Primera consulta sin cargo",
  },
  services: {
    title: "Servicios",
    monitoringNote:
      "Redes y virtualización incluyen monitoreo con Prometheus y Grafana.",
    items: [
      {
        label: "Redes",
        body: "Sedes, oficinas y nube conectadas por VPN, con ruteo dinámico, segmentación por VLANs y soporte una vez en producción.",
      },
      {
        label: "Virtualización",
        body: "Servidores físicos consolidados en clusters Proxmox, aplicaciones en Docker y Kubernetes, y despliegues automatizados con CI/CD.",
      },
      {
        label: "Capacitación",
        body: "Cursos prácticos de diseño de redes, ruteo dinámico y virtualización, con laboratorios y material propio, basados en experiencia docente universitaria.",
      },
      {
        label: "Auditoría",
        body: "Revisión de la red, los servidores y la seguridad actuales, con un informe de riesgos y cambios ordenados por prioridad.",
      },
    ],
  },
  experience: {
    title: "Experiencia",
    cases: [
      {
        metric: "Redes HA",
        metricLabel: "alta disponibilidad",
        title: "Redes multi-site",
        body: [
          "Conexión del centro de datos con locaciones remotas: routers de frontera, VLANs y direccionamiento IPv4/IPv6, con cada enlace monitoreado.",
          "Ruteo dinámico con OSPF y BGP, para que el tráfico tome otro camino si un enlace cae.",
        ],
        logos: ["MikroTik", "Linux"],
      },
      {
        metric: "100+",
        metricLabel: "sistemas críticos",
        title: "Servicios en producción sobre Proxmox y Kubernetes",
        body: "Ciclo de vida completo de cada servicio: alta disponibilidad, hardening y despliegues con CI/CD que se repiten sin pasos manuales.",
        logos: ["Proxmox", "Kubernetes", "Docker"],
      },
      {
        metric: "300+",
        metricLabel: "servicios y dispositivos",
        title: "Monitoreo de redes, servidores y aplicaciones en una plataforma",
        body: "Métricas, logs y alertas juntos, para detectar fallas antes de que lleguen a los usuarios.",
        logos: ["Prometheus", "Grafana", "Nagios", "NetBox"],
      },
      {
        metric: "Webinars",
        metricLabel: "capacitaciones",
        title: "Webinars sobre WAF y etiquetado de logs con GeoIP",
        body: "Dos webinars para redes universitarias: protección de aplicaciones web con un WAF, y etiquetado de logs por ubicación geográfica (GeoIP) con el stack de Grafana.",
        logos: ["Grafana", "Loki", "Alloy"],
      },
    ],
    credentialsMetric: "Formación",
    credentialsLabel: "títulos y certificaciones",
    credentials: [
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
      {
        title: "Tecnicatura Universitaria en Administración de Redes Informáticas",
        detail: "Título universitario · UNICEN",
      },
    ],
  },
  contact: {
    title: "Contacto",
    intro:
      "Primera consulta sin cargo: 30 minutos para revisar la red o los servidores actuales y ver qué conviene cambiar primero.",
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

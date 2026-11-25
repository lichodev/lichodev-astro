// Site copy in English. Nominal style: no first person.
import type { UI } from "./es";

export const en: UI = {
  meta: {
    title:
      "Lisandro Marchionni — Networking, virtualization & training for SMBs and dev teams",
    description:
      "Design, implementation and maintenance of networks and virtualized infrastructure for SMBs and development teams, with built-in monitoring. Remote service for LatAm and worldwide.",
    ogLocale: "en_US",
  },
  nav: {
    home: "Home",
    services: "Services",
    experience: "Experience",
    contact: "Contact",
    switchLabel: "Versión en español",
    switchText: "ES",
  },
  hero: {
    eyebrow: "Networking · Virtualization · Monitoring",
    lead: "Design, implementation and maintenance of infrastructure for SMBs and development teams: reliable networks, virtualized and containerized servers, with built-in monitoring.",
    cta: "Free first consultation",
    remote: "Remote service for LatAm and worldwide.",
  },
  services: {
    title: "Services",
    monitoringBadge: "Monitoring included",
    items: [
      {
        label: "Networking",
        title: "Reliable connectivity across offices, sites and the cloud",
        body: "Network design, implementation and support, so connectivity stops being a problem.",
        includes: [
          "MikroTik / RouterOS",
          "VLANs and segmentation",
          "VPNs and tunnels",
          "OSPF / BGP dynamic routing",
          "IPv6",
          "Multi-site interconnection",
        ],
        monitoring: true,
      },
      {
        label: "Virtualization",
        title: "Virtualized and containerized infrastructure",
        body: "Server consolidation and application deployment with high availability and reproducible processes.",
        includes: [
          "Proxmox VE clusters",
          "Migration to Docker and Kubernetes",
          "High availability",
          "Backup and recovery",
          "CI/CD deployments",
        ],
        monitoring: true,
      },
      {
        label: "Training",
        title: "Technical teams with sound judgment",
        body: "Hands-on training in network design, dynamic routing and virtualization, with labs and original material, backed by university teaching experience.",
        includes: [
          "Hands-on labs",
          "Network design and dynamic routing",
          "Virtualization and containers",
          "Remote delivery",
        ],
        monitoring: false,
      },
    ],
  },
  experience: {
    title: "Experience",
    cases: [
      {
        area: "Multi-site networking",
        sector: "Education sector",
        title: "Network linking a data center and 3 remote sites",
        body: "Border routers, dynamic routing, VLANs and IPv4/IPv6 addressing, with continuous link monitoring.",
        tags: ["MikroTik", "OSPF", "BGP", "IPv6"],
      },
      {
        area: "Data center operations",
        sector: "Education sector",
        title: "100+ critical systems in production",
        body: "Operation of virtualized environments and Kubernetes clusters: full service lifecycle, high availability, hardening and reproducible CI/CD deployments.",
        tags: ["Proxmox VE", "Kubernetes", "Docker", "GitLab CI/CD"],
      },
      {
        area: "Integrated monitoring",
        sector: "Education sector",
        title: "A single source of truth for 300+ services and devices",
        body: "Metrics, logs and alerts from networks, servers and applications unified in one platform: a single place to see the state of the infrastructure and catch failures before they reach users.",
        tags: ["Prometheus", "Grafana", "Loki"],
      },
    ],
    credentialsTitle: "Education & certifications",
    credentials: [
      {
        title: "University Degree in Computer Network Administration",
        detail: "University degree · UNICEN",
      },
      {
        title: "Data Center Network Operations — Advanced Level",
        detail: "LACNIC Campus specialization",
        image: "/credentials/lacnic-datacenters.png",
        url: "https://badges.parchment.com/public/assertions/BeTKwq2xQOuIRvOzVzRk4A",
      },
      {
        title: "ISP Network Operations — Intermediate Level",
        detail: "LACNIC Campus specialization",
        image: "/credentials/lacnic-isp.png",
        url: "https://badges.parchment.com/public/assertions/M5lKZ-cATcWYEOCextyyDQ",
      },
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      {
        label: "Observability & reliability",
        tags: ["Prometheus", "Grafana", "Loki", "Nagios"],
      },
      {
        label: "Virtualization & containers",
        tags: ["Kubernetes", "Proxmox VE", "Docker"],
      },
      {
        label: "Networking",
        tags: [
          "MikroTik / RouterOS",
          "OSPF",
          "BGP",
          "RIP",
          "IPv6 / tunnels",
          "VLANs",
        ],
      },
      {
        label: "Systems, CI/CD & integrations",
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
    title: "Contact",
    intro:
      "Free first consultation: a 30-minute call to assess the infrastructure and define next steps.",
    name: "Name",
    namePlaceholder: "Full name",
    email: "Email",
    emailPlaceholder: "name@company.com",
    message: "Message",
    messagePlaceholder: "Short description of the infrastructure or project",
    submit: "Send message",
    sending: "Sending…",
    sentTitle: "Message received",
    sentBody: "Reply within 24–48 h.",
    errorInput: "Invalid email or message too short (10 characters minimum).",
    errorForbidden:
      "The submission could not be verified. Try again or write to marchionni.lisandro@gmail.com.",
    errorFallback:
      "The message could not be sent. Direct contact: marchionni.lisandro@gmail.com.",
  },
  footer: {
    homeLabel: "Home",
  },
};

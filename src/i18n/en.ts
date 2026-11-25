// Site copy in English. Nominal style: no first person.
import type { UI } from "./es";

export const en: UI = {
  meta: {
    title:
      "Lisandro Marchionni — Networking, virtualization & training for businesses and dev teams",
    description:
      "Multi-site networks on MikroTik, Proxmox and Kubernetes clusters, cloud infrastructure and Prometheus/Grafana monitoring for businesses and development teams. Remote work in English and Spanish.",
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
    headline: "Reliable infrastructure for businesses and development teams.",
    lead: "Multi-site networks, Proxmox/Kubernetes clusters, cloud infrastructure and Grafana monitoring, from the border router to each application.",
    cta: "Free first consultation",
    diagram: {
      label:
        "Diagram: a data center connected to the cloud and to an office, a site and a branch, with an alternate path between sites and monitoring across the network.",
      datacenter: "data center",
      sites: ["office", "site", "branch"],
      cloud: "cloud",
      monitoring: "monitoring",
    },
  },
  services: {
    title: "Services",
    monitoringNote:
      "Networking and virtualization include monitoring with Prometheus and Grafana.",
    items: [
      {
        label: "Networking",
        icon: "network",
        body: "Sites, offices and cloud linked over VPN, with dynamic routing, VLAN segmentation and support once in production.",
      },
      {
        label: "Virtualization & cloud",
        icon: "virtualization",
        body: "Proxmox clusters, cloud or hybrid infrastructure, applications on Docker and Kubernetes, and automated CI/CD deployments.",
      },
      {
        label: "Training",
        icon: "training",
        body: "Hands-on courses in network design, dynamic routing and virtualization, with labs and original material, backed by university teaching experience.",
      },
      {
        label: "Audit",
        icon: "audit",
        body: "Review of the current network, servers and security, with a report of risks and changes ranked by priority.",
      },
    ],
  },
  experience: {
    title: "Experience",
    cases: [
      {
        metric: "HA networks",
        metricLabel: "high availability",
        title: "Multi-site networks",
        body: [
          "Data center connected to remote locations: border routers, VLANs and IPv4/IPv6 addressing, with every link monitored.",
          "Dynamic routing with OSPF and BGP, so traffic takes another path if a link goes down.",
        ],
        logos: ["MikroTik", "Linux"],
        diagram: "multisite",
      },
      {
        metric: "100+",
        metricLabel: "critical systems",
        title: "Production services on Proxmox and Kubernetes",
        body: "Full lifecycle of each service: high availability, hardening and CI/CD deployments that repeat without manual steps.",
        logos: ["Proxmox", "Kubernetes", "Docker"],
        diagram: "cluster",
      },
      {
        metric: "300+",
        metricLabel: "services and devices",
        title: "Network, server and application monitoring in one platform",
        body: "Metrics, logs and alerts together, to catch failures before they reach users.",
        logos: ["Prometheus", "Grafana", "Nagios", "NetBox"],
        diagram: "monitoring",
      },
      {
        metric: "Webinars",
        metricLabel: "training",
        title: "Webinars on WAFs and GeoIP log tagging",
        body: "Two webinars for university networks: protecting web applications with a WAF, and tagging logs by geographic location (GeoIP) with the Grafana stack.",
        logos: ["Grafana", "Loki", "Alloy"],
        diagram: "geoip",
      },
    ],
    credentialsMetric: "Education",
    credentialsLabel: "degree & certifications",
    credentials: [
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
      {
        title: "University Degree in Computer Network Administration",
        detail: "University degree · UNICEN",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "Free first consultation: 30 minutes to review the current network or servers and see what to change first.",
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

interface Experience {
  startDate: string;
  endDate: string;
  companyName: string;
  role: string;
  companyLogo: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    startDate: "08/2025",
    endDate: "Actualidad",
    companyName: "CLT – Grupo Banco Continental",
    role: "Desarrollador Frontend",
    companyLogo: "/images/experience/clt-logo.svg",
    responsibilities: [
      "Desarrollo Frontend con React/Next.js y apoyo en Backend (.NET/NestJS).",
      "Migración de una Bandeja de Entrada crítica, reduciendo la complejidad del código.",
      "Reestructuración de lógica hacia el backend para mayor escalabilidad.",
      "Estandarización de arquitectura y creación de componentes reutilizables."
    ],
  },
  {
    startDate: "01/2024",
    endDate: "08/2025",
    companyName: "ONNIX – Financiera Paraguayo Japonesa",
    role: "Desarrollador Full Stack",
    companyLogo: "/images/experience/onnix-logo.png",
    responsibilities: [
      "Desarrollo de aplicaciones web Full Stack.",
      "Creación de módulos complejos: gestión documental, turnos y fideicomisos.",
      "Implementación de control de permisos y contabilidad multimoneda.",
      "Optimización de rendimiento y experiencia de usuario."
    ],
  },
];

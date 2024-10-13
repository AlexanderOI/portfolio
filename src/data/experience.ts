interface Experience {
  startDate: string;
  endDate: string;
  companyName: string;
  companyLogo: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    startDate: "02/01/2024",
    endDate: "Actualidad",
    companyName: "Onnix Tecnología y Servicios S.A.",
    companyLogo: "images/experience/onnix-logo.png",
    responsibilities: [
      "Desarrollo de aplicaciones web utilizando Laravel y JavaScript",
      "Implementación de nuevas funcionalidades y mejoras en aplicaciones existentes",
      "Desarrollo de APIs utilizando Laravel",
    ],
  },
];

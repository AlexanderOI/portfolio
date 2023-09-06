export const projectsInfo: ProjectsInfo = {
  'es': [
    {
      name: "Dentsuzu Shop",
      description: "Tienda de supermercado inspirada en Stock Supermarkets",
      skills: ["TypeScript", "React"]
    },
    {
      name: "Database Scrum",
      description: "Scrum de base de datos de producto simple",
      skills: ["Python", "PyQt5", "SQLite"]
    }
  ],
  'en': [
    {
      name: 'Dentsuzu Shop',
      description: 'Supermarket store inspired by Stock Supermarkets',
      skills: ['TypeScrip', 'React']
    },
    {
      name: 'Database Scrum',
      description: 'Simple Product Database Scrum',
      skills: ['Python', 'PyQt5', 'SQLite']
    }
  ]
}

export interface ProjectsInfo {
  [key: string]: ProjectInfo[];
}

interface ProjectInfo {
  name: string;
  description: string;
  skills: string[];
}
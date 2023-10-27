import logoDesnsuzu from '../assets/images/projectcsImg/main.png'
import logoDatabase from '../assets/images/projectcsImg/database.png'
import logoProductsAdmin from '../assets/images/projectcsImg/products-admin-view.png'

export const projectsInfo: ProjectsInfo = {
  'es': [
    {
      name: "Dentsuzu Shop",
      description: "Tienda de supermercado inspirada en Stock Supermarkets",
      image: logoDesnsuzu,
      skills: ["TypeScript", "React"]
    },
    {
      name: "Database CRUD",
      description: "Base de datos de productos CRUD",
      image: logoDatabase,
      skills: ["Python", "PyQt5", "SQLite"]
    },
    {
      name: "Products Admin",
      description: "Sistema de administración de Productos",
      image: logoProductsAdmin,
      skills: ["TypeScript", "React", "Python", "Django", "SQLite"]
    }
  ],
  'en': [
    {
      name: 'Dentsuzu Shop',
      description: 'Supermarket store inspired by Stock Supermarkets',
      image: logoDesnsuzu,
      skills: ['TypeScrip', 'React']
    },
    {
      name: 'Database CRUD',
      description: 'CRUD Product Database',
      image: logoDatabase,
      skills: ['Python', 'PyQt5', 'SQLite']
    },
    {
      name: "Products Admin",
      description: "Product management system",
      image: logoProductsAdmin,
      skills: ["TypeScript", "React", "Python", "Django", "SQLite"]
    }
  ]
}

export interface ProjectsInfo {
  [key: string]: ProjectInfo[];
}

interface ProjectInfo {
  name: string;
  description: string;
  image: string
  skills: string[];
}
import logoDesnsuzu from '../assets/images/projectcsImg/main.png'
import logoDatabase from '../assets/images/projectcsImg/database.png'
import logoProductsAdmin from '../assets/images/projectcsImg/products-admin-view.png'

import { TypeScriptIcon, ReactIcon, PythonIcon, Pyqt5Icon, QtDesignerIcon, SQLiteIcon, NodeIcon, ExpressIcon, DjangoIcon } from '../assets/icons/SkillsIcons'
export const projectsInfo: ProjectsInfo = {
  'es': [
    {
      name: "Dentsuzu Shop",
      description: "Tienda de supermercado",
      image: logoDesnsuzu,
      skills: [<TypeScriptIcon />, <ReactIcon />]
    },
    {
      name: "Database CRUD",
      description: "Base de datos de productos CRUD",
      image: logoDatabase,
      skills: [<PythonIcon />, <Pyqt5Icon />, <QtDesignerIcon />, <SQLiteIcon />]
    },
    {
      name: "Products Admin",
      description: "Sistema de administración de Productos",
      image: logoProductsAdmin,
      skills: [<TypeScriptIcon />, <ReactIcon />, <PythonIcon />, <DjangoIcon />, <SQLiteIcon />, <NodeIcon />, <ExpressIcon />]
    }
  ],
  'en': [
    {
      name: 'Dentsuzu Shop',
      description: 'Supermarket store',
      image: logoDesnsuzu,
      skills: [<TypeScriptIcon />, <ReactIcon />]
    },
    {
      name: 'Database CRUD',
      description: 'CRUD Product Database',
      image: logoDatabase,
      skills: [<PythonIcon />, <Pyqt5Icon />, <QtDesignerIcon />, <SQLiteIcon />]
    },
    {
      name: "Products Admin",
      description: "Product management system",
      image: logoProductsAdmin,
      skills: [<TypeScriptIcon />, <ReactIcon />, <PythonIcon />, <DjangoIcon />, <SQLiteIcon />, <NodeIcon />, <ExpressIcon />]

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
  skills: JSX.Element[];
}
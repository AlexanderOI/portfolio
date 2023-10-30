import dentzusuShopMain from '../assets/images/projectcsImg/main.png'
import dentzusuShopCharacteristics from '../assets/images/projectcsImg/characteristics.png'
import dentzusuShopSearch from '../assets/images/projectcsImg/search.png'
import dentzusuShopFooter from '../assets/images/projectcsImg/footer.png'


import crudDatabase from '../assets/images/projectcsImg/database.png'
import crudRegister from '../assets/images/projectcsImg/register.png'
import crudUpdate from '../assets/images/projectcsImg/update.png'
import crudDelete from '../assets/images/projectcsImg/delete.png'


export const ProjectsData: ProjectsInfo = {
  'dentsuzu-shop': {
    'es': [
      {
        id: crypto.randomUUID(),
        name: "Dentsuzu Shop",
        description: "Proyecto desarrollado con la intención de mejorar mis habilidades de Desarrollo Front-End con React y TypeScript",
        tools: ["TypeScript", "React", "React-router-dom", "Styled-components"],
        characteristics: [
          {
            boldFont: "Barra lateral por seccion de supermercado: ",
            paragraph: "esta barra permite al usuario desplazarse rapidamente hacia la seccion de supermercado para ver productos especificos, por ejemplo: panaderia, carnes, lacteos, etc."
          },
          {
            boldFont: "Filtrado por nombre, categoría y precio: ",
            paragraph: "Los usuarios puedes filtrar sus productos por distintos campos, para poder acceder rapidamente al producto deseado."
          },
          {
            boldFont: "Búsqueda de productos por nombre: ",
            paragraph: "Los usuarios pueden buscar productos específicos escribiendo el nombre en un campo de búsqueda."
          },
          {
            boldFont: "Paginación numérica de productos (28 por página): ",
            paragraph: "Para gestionar grandes listas de productos, se utiliza la paginación numérica."
          },
          {
            boldFont: "Carrito de compra: ",
            paragraph: "La página incluye un carrito de compra que muestra los productos seleccionados por el usuario, la cantidad y el precio total. Los usuarios pueden agregar y eliminar productos de su carrito y ver un resumen de sus compras antes de finalizar la compra."
          }
        ],
        images: [
          { name: dentzusuShopMain, alt: "Imagen de la pantalla de inicio del proyecto de supermercado" },
          { name: dentzusuShopCharacteristics, alt: "Imagen de las características del proyecto de supermercado" },
          { name: dentzusuShopFooter, alt: "Imagen de la footer del proyecto de supermercado" },
          {
            name: dentzusuShopSearch, alt: 'Foto de ejemplo de búsqueda de productos de proyecto de supermercado'
          }
        ],
        git: "https://github.com/AlexanderOI/dentsuzu-shop-front-end"
      }
    ],
    'en': [
      {
        id: crypto.randomUUID(),
        name: "Dentsuzu Shop",
        description: "Project developed with the intention of improving my Front-End Development skills with React and TypeScript",
        tools: ["TypeScript", "React", "React-router-dom", "Styled-components"],
        characteristics: [
          {
            boldFont: "Side menu for supermarket sections: ",
            paragraph: "This bar allows users to quickly navigate to specific supermarket sections to view specific products, such as bakery, meat, dairy, etc."
          },
          {
            boldFont: "Filtering by name, category, and price: ",
            paragraph: "Users can filter products by different criteria to quickly access the desired product."
          },
          {
            boldFont: "Product search by name: ",
            paragraph: "Users can search for specific products by typing the name in a search field."
          },
          {
            boldFont: "Numeric product pagination (28 per page): ",
            paragraph: "Numeric pagination is used to manage large product lists."
          },
          {
            boldFont: "Shopping cart: ",
            paragraph: "The page includes a shopping cart that displays the products selected by the user, quantity, and total price. Users can add and remove products from their cart and review their purchases before completing the purchase."
          }
        ],
        images: [
          { name: dentzusuShopMain, alt: "Image of the project's supermarket homepage" },
          { name: dentzusuShopCharacteristics, alt: "Image of the project's characteristics" },
          { name: dentzusuShopFooter, alt: "Image of the project's footer" },
          {
            name: dentzusuShopSearch, alt: 'FSupermarket project product search example photo'
          }
        ],
        git: "https://github.com/AlexanderOI/dentsuzu-shop-front-end"
      }
    ]
  },
  'database-crud': {
    'es': [
      {
        id: crypto.randomUUID(),
        name: "Database CRUD",
        description: "Proyecto desarrollado como práctica de Python con PyQt5. Es un proyecto que simula un CRUD de base de datos, permitiendo gestionar productos de forma básica.",
        tools: ["Python", "PyQt5", "Qt Designer", "SQLite"],
        characteristics: [
          {
            boldFont: "Visualización de la base de datos en tablas: ",
            paragraph: "Los usuarios pueden ver los datos almacenados en la base de datos en un formato de tabla."
          },
          {
            boldFont: "Registro de un nuevo elemento: ",
            paragraph: "Los usuarios pueden agregar nuevos elementos a la base de datos completando un formulario."
          },
          {
            boldFont: "Actualización de los datos: ",
            paragraph: "Los usuarios pueden buscar un elemento existente en la base de datos utilizando su nombre, para luego modificar sus datos."
          },
          {
            boldFont: "Eliminación de un elemento: ",
            paragraph: "Los usuarios pueden buscar un elemento por su nombre, para luego poder eliminarlo de la base de datos."
          }
        ],
        images: [
          { name: crudDatabase, alt: "Imagen de la visualización de productos en la base de datos" },
          { name: crudRegister, alt: "Imagen del formulario de registro de productos en la base de datos" },
          { name: crudUpdate, alt: "Imagen del formulario de actualización de producto en la base de datos" },
          { name: crudDelete, alt: "Imagen de cómo eliminar un producto de la base de datos" }
        ],
        git: "https://github.com/AlexanderOI/CRUD_for_database"
      }
    ],
    'en': [
      {
        id: crypto.randomUUID(),
        name: "Database CRUD",
        description: "Project developed as a Python practice with PyQt5. It is a project that simulates a database CRUD, allowing basic product management.",
        tools: ["Python", "PyQt5", "Qt Designer", "SQLite"],
        characteristics: [
          {
            boldFont: "Database Visualization in Tables: ",
            paragraph: "Users can view the data stored in the database in a table format."
          },
          {
            boldFont: "Adding a New Item: ",
            paragraph: "Users can add new items to the database by completing a form."
          },
          {
            boldFont: "Data Update: ",
            paragraph: "Users can search for an existing item in the database using its name, and then modify its data."
          },
          {
            boldFont: "Item Deletion: ",
            paragraph: "Users can search for an item by its name and then delete it from the database."
          }
        ],
        images: [
          { name: crudDatabase, alt: "Image of the database product visualization" },
          { name: crudRegister, alt: "Image of the product registration form in the database" },
          { name: crudUpdate, alt: "Image of the product update form in the database" },
          { name: crudDelete, alt: "Image of how to delete a product from the database" }
        ],
        git: "https://github.com/AlexanderOI/CRUD_for_database"
      }
    ]
  }

}

export interface ProjectsInfo {
  [key: string]: Languaje
}

export interface Languaje {
  [key: string]: ProjectInfo[]
}

interface CharacteristicsInfo {
  boldFont: string
  paragraph: string
}

interface ImagesInfo {
  name: string
  alt: string
}

interface ProjectInfo {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  description: string
  tools: string[]
  characteristics: CharacteristicsInfo[]
  images: ImagesInfo[]
  git: string
}
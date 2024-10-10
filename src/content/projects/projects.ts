import { Icons } from "../../data/icons";

export type Project = {
  id: string;
  name: string;
  description: string;
  summary: string;
  technologies: { name: string; Icon: any }[];
  features: string[];
  thumbnail: string;
  images: { src: string; alt: string }[];
  githubLink: string;
};

export const projects: Project[] = [
  {
    id: "pyqt-crud",
    name: "PyQt CRUD",
    description:
      "Proyecto desarrollado como práctica de Python con PyQt5. Es un proyecto que simula un CRUD de base de datos, permitiendo gestionar productos de forma básica.",
    summary: "CRUD de base de datos de productos",
    technologies: [Icons.PythonIcon, Icons.Pyqt5Icon, Icons.QtDesignerIcon, Icons.SQLiteIcon],
    features: [
      "Visualización de la base de datos en tablas: Los usuarios pueden ver los datos almacenados en la base de datos en un formato de tabla.",
      "Registro de un nuevo elemento: Los usuarios pueden agregar nuevos elementos a la base de datos completando un formulario.",
      "Actualización de los datos: Los usuarios pueden buscar un elemento existente en la base de datos utilizando su nombre, para luego modificar sus datos.",
      "Eliminación de un elemento: Los usuarios pueden buscar un elemento por su nombre, para luego poder eliminarlo de la base de datos.",
    ],
    thumbnail: "",
    images: [
      {
        src: "/images/database.png",
        alt: "Imagen de la visualización de productos en la base de datos",
      },
      {
        src: "/images/register.png",
        alt: "Imagen del formulario de registro de productos en la base de datos",
      },
      {
        src: "/images/update.png",
        alt: "Imagen del formulario de actualización de producto en la base de datos",
      },
      {
        src: "/images/delete.png",
        alt: "Imagen de cómo eliminar un producto de la base de datos",
      },
    ],
    githubLink: "https://github.com/AlexanderOI/CRUD_for_database",
  },
  {
    id: "dentsuzu-shop",
    name: "Dentsuzu Shop",
    description:
      "Proyecto desarrollado con la intención de mejorar mis habilidades de Desarrollo Front-End con React y TypeScript.",
    summary: "Tienda de supermercado",
    technologies: [Icons.TypeScriptIcon, Icons.ReactIcon, Icons.StyledComponentsIcon],
    features: [
      "Barra lateral por seccion de supermercado: esta barra permite al usuario desplazarse rapidamente hacia la seccion de supermercado para ver productos especificos, por ejemplo: panaderia, carnes, lacteos, etc.",
      "Filtrado por nombre, categoría y precio: Los usuarios puedes filtrar sus productos por distintos campos, para poder acceder rapidamente al producto deseado.",
      "Búsqueda de productos por nombre: Los usuarios pueden buscar productos específicos escribiendo el nombre en un campo de búsqueda.",
      "Paginación numérica de productos (28 por página): Para gestionar grandes listas de productos, se utiliza la paginación numérica.",
      "La página incluye un carrito de compra que muestra los productos seleccionados por el usuario, la cantidad y el precio total. Los usuarios pueden agregar y eliminar productos de su carrito y ver un resumen de sus compras antes de finalizar la ",
    ],
    thumbnail: "",
    images: [
      {
        src: "/images/main.png",
        alt: "Imagen de la pantalla de inicio del proyecto de supermercado",
      },
      {
        src: "/images/characteristics.png",
        alt: "Imagen de las características del proyecto de supermercado",
      },
      {
        src: "/images/search.png",
        alt: "Imagen de la footer del proyecto de supermercado",
      },
      {
        src: "/images/footer.png",
        alt: "Foto de ejemplo de búsqueda de productos de proyecto de supermercado",
      },
    ],
    githubLink: "https://github.com/AlexanderOI/dentsuzu-shop-front-end",
  },
  {
    id: "products-admin",
    name: "Products Admin",
    description:
      "Este proyecto se creó con el propósito de sumergirme aún más en el desarrollo tanto Frontend como Backend. Esta página es una aplicación web para la administración de productos con características comunes. Se ha desarrollado utilizando React con la intención de fortalecer mis conocimientos en esta biblioteca, y Django se empleó como práctica para el desarrollo del Backend.",
    summary: "Tienda de supermercado",
    technologies: [
      Icons.TypeScriptIcon,
      Icons.ReactIcon,
      Icons.StyledComponentsIcon,
      Icons.PythonIcon,
      Icons.DjangoIcon,
      Icons.SQLiteIcon,
      Icons.ExpressIcon,
    ],
    features: [
      "Menú de Navegación: Navega sin problemas entre las pestañas 'View Products', 'Administration' y 'SQL Queries'",
      "View Products: Explora una lista completa de productos en forma de tabla.",
      "Administration: Agrega y elimina productos con facilidad.",
      "SQL Queries: Realiza consultas SQL y visualiza los datos en forma de tabla de manera eficaz.",
      "Búsqueda Avanzada: Realiza búsquedas por ID, precio y nombre de manera intuitiva.",
      "Filtrado por Sección y Categoría: Filtra por sección, y una vez seleccionada, refina la búsqueda por categorías.",
      "Filtro por Subcategoría: Después de aplicar filtros por sección y categoría, explora subcategorías en la barra lateral.",
      "Inserción de Productos: Agrega productos con un formulario sencillo. Selecciona la sección, categoría y subcategoría antes de completar el formulario.",
      "Eliminación de Productos: Elimina productos con facilidad usando la búsqueda por ID. Los detalles del producto a eliminar se muestran en un formulario de solo lectura.",
      "Visualización de Datos en Formato JSON: Observa los datos en formato JSON al insertar o eliminar productos.",
      "Editor SQL Integrado: Realiza consultas SQL con el editor incorporado, con acceso a las opciones seleccionadas en la barra lateral.",
      "Visualización de Consultas: Los resultados de tus consultas se muestran en una tabla que se ajusta automáticamente a la estructura de los datos, independientemente de las columnas o filas.",
      "Edición de Celdas: Selecciona celdas de la tabla y edítalas, excepto el campo ID. El texto editable aparece en una sección dedicada en la barra lateral.",
      "Personalización del Editor: Adapta el editor según tus preferencias, incluyendo colores de fondo, barra lateral, líneas y tamaño de letra.",
    ],
    thumbnail: "",
    images: [
      {
        src: "/images/products-admin-view.png",
        alt: "Imagen de la pantalla dende se visualizan los productos",
      },
      {
        src: "/images/products-admin-administration-insert.png",
        alt: "Imagen de la pantalla de inserción de productos",
      },
      {
        src: "/images/products-admin-administration-delete.png",
        alt: "Imagen de la pantalla de eliminación de productos",
      },
      {
        src: "/images/products-admin-sql-queries.png",
        alt: "Imagen de la pantalla de consultas SQL",
      },
    ],
    githubLink: "https://github.com/AlexanderOI/products_admin",
  },
];

import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GitHubIcon } from "../../assets/icons/SocialIcons"

import { useLanguageContext } from "../../context/LanguageProveder"
import { Details, DivEnlarge, NavBackGit, ProjectsImg } from "./style"

import productsAdminView from '../../assets/images/projectcsImg/products-admin-view.png'
import productsAdminInsert from '../../assets/images/projectcsImg/products-admin-administration-insert.png'
import productsAdminDelete from '../../assets/images/projectcsImg/products-admin-administration-delete.png'
import productsAdminQueries from '../../assets/images/projectcsImg/products-admin-sql-queries.png'
import { DjangoIcon, PythonIcon, ReactIcon, ReactRouterIcon, SQLiteIcon, StyledComponentsIcon, TypeScriptIcon } from "../../assets/icons/SkillsIcons"
import { BackIcon } from "../../assets/icons/Icons"


export function ProductsAdmin() {
  const [enlarge, setEnlarge] = useState(false)
  const [indexImg, setIndexImg] = useState<number>(0)
  const { language } = useParams()

  const { languagePage, setLanguagePage } = useLanguageContext()

  useEffect(() => {
    setLanguagePage((prevLenguage) => {
      return prevLenguage ? prevLenguage : language ? language : 'en'
    })
  }, [language])

  const handleClickImg = (num: number) => {
    setEnlarge(!enlarge)
    setIndexImg(num)
  }

  const images = [
    { name: productsAdminView, alt: "Imagen de la pantalla de inicio del proyecto de supermercado" },
    { name: productsAdminInsert, alt: "Imagen de las características del proyecto de supermercado" },
    { name: productsAdminDelete, alt: "Imagen de la footer del proyecto de supermercado" },
    { name: productsAdminQueries, alt: 'Foto de ejemplo de búsqueda de productos de proyecto de supermercado' }
  ]

  return (
    <>
      {languagePage === 'es' ?
        <Details>
          <NavBackGit>
            <NavLink to={'/'}><BackIcon />Volver</NavLink>
            <a target="_blank" href="https://github.com/AlexanderOI/dentsuzu-shop-front-end">
              <i><GitHubIcon /></i>
              Ver proyecto en GitHub
            </a>
          </NavBackGit>

          <div >
            <h2>Products Admin</h2>
            <p>Este proyecto se creó con el propósito de sumergirme aún más en el desarrollo tanto Frontend como Backend. Esta página es una aplicación web para la administración de productos con características comunes. Se ha desarrollado utilizando React con la intención de fortalecer mis conocimientos en esta biblioteca, y Django se empleó como práctica para el desarrollo del Backend.</p>

            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li><TypeScriptIcon />TypeScript</li>
              <li><ReactIcon />React</li>
              <li><ReactRouterIcon />React-router-dom</li>
              <li><StyledComponentsIcon />Styled-components</li>
              <li><PythonIcon />Python</li>
              <li><DjangoIcon />Django</li>
              <li><SQLiteIcon />SQlite</li>
            </ul>

            <h4>Caracteristicas</h4>
            <p>
              <b>Menú de Navegación:</b> Navega sin problemas entre las pestañas "View Products", "Administration" y "SQL Queries".
            </p>
            <p>
              <b>View Products:</b> Explora una lista completa de productos en forma de tabla.
            </p>
            <p>
              <b>Administration:</b> Agrega y elimina productos con facilidad.
            </p>
            <p>
              <b>SQL Queries:</b> Realiza consultas SQL y visualiza los datos en forma de tabla de manera eficaz.
            </p>

            <h4>View Products</h4>
            <p>
              <b>Búsqueda Avanzada:</b> Realiza búsquedas por ID, precio y nombre de manera intuitiva.
            </p>
            <p>
              <b>Filtrado por Sección y Categoría:</b> Filtra por sección, y una vez seleccionada, refina la búsqueda por categorías.
            </p>
            <p>
              <b>Filtro por Subcategoría:</b> Después de aplicar filtros por sección y categoría, explora subcategorías en la barra lateral.
            </p>

            <h4>Administration: </h4>
            <p>
              <b>Inserción de Productos:</b> Agrega productos con un formulario sencillo. Selecciona la sección, categoría y subcategoría antes de completar el formulario.
            </p>
            <p>
              <b>Eliminación de Productos:</b> Elimina productos con facilidad usando la búsqueda por ID. Los detalles del producto a eliminar se muestran en un formulario de solo lectura.
            </p>
            <p>
              <b>Visualización de Datos en Formato JSON:</b> Observa los datos en formato JSON al insertar o eliminar productos.
            </p>

            <h4>SQL Queries</h4>
            <p>
              <b>Editor SQL Integrado:</b> Realiza consultas SQL con el editor incorporado, con acceso a las opciones seleccionadas en la barra lateral.
            </p>
            <p>
              <b>Visualización de Consultas:</b> Los resultados de tus consultas se muestran en una tabla que se ajusta automáticamente a la estructura de los datos, independientemente de las columnas o filas.
            </p>
            <p>
              <b>Edición de Celdas:</b> Selecciona celdas de la tabla y edítalas, excepto el campo ID. El texto editable aparece en una sección dedicada en la barra lateral.
            </p>
            <p>
              <b>Personalización del Editor:</b> Adapta el editor según tus preferencias, incluyendo colores de fondo, barra lateral, líneas y tamaño de letra.
            </p>

            {enlarge &&
              <DivEnlarge onClick={() => handleClickImg(0)}>
                <span>
                  Has click para minimizar
                </span>
                <img
                  src={images[indexImg].name}
                  alt={images[indexImg].alt} />
              </DivEnlarge>
            }

            <section>
              <h4>Galería</h4>
              <ProjectsImg>

                {images.map((img, index) => (
                  <img
                    key={img.name}
                    src={img.name}
                    alt={img.alt}
                    onClick={() => handleClickImg(index)} />
                ))}
              </ProjectsImg>
            </section>
          </div>
        </Details>

        :
        <Details>
          <NavBackGit>
            <NavLink to={'/'}><BackIcon />Back</NavLink>
            <a target="_blank" href="https://github.com/AlexanderOI/dentsuzu-shop-front-end">
              <i><GitHubIcon /></i>
              View project on GitHub
            </a>
          </NavBackGit>

          <div>
            <h2>Products Admin</h2>
            <p>This project was created with the purpose of delving deeper into both Frontend and Backend development. This page is a web application for product management with common features. It was developed using React to strengthen my knowledge of this library, and Django was used as practice for Backend development.</p>

            <h4>Technologies used</h4>
            <ul>
              <li><TypeScriptIcon />TypeScript</li>
              <li><ReactIcon />React</li>
              <li><ReactRouterIcon />React-router-dom</li>
              <li><StyledComponentsIcon />Styled-components</li>
              <li><PythonIcon />Python</li>
              <li><DjangoIcon />Django</li>
              <li><SQLiteIcon />SQLite</li>
            </ul>

            <h4>Features</h4>
            <p>
              <b>Navigation Menu:</b> Navigate seamlessly between "View Products," "Administration," and "SQL Queries" tabs.
            </p>
            <p>
              <b>View Products:</b> Explore a complete list of products in the form of a table.
            </p>
            <p>
              <b>Administration:</b> Easily add and remove products.
            </p>
            <p>
              <b>SQL Queries:</b> Perform SQL queries and view data in an efficient table format.
            </p>

            <h4>View Products</h4>
            <p>
              <b>Advanced Search:</b> Intuitively search by ID, price, and name.
            </p>
            <p>
              <b>Section and Category Filtering:</b> Filter by section, and once selected, refine the search by categories.
            </p>
            <p>
              <b>Subcategory Filtering:</b> After applying filters by section and category, explore subcategories in the sidebar.
            </p>

            <h4>Administration: </h4>
            <p>
              <b>Product Insertion:</b> Add products with a simple form. Select the section, category, and subcategory before completing the form.
            </p>
            <p>
              <b>Product Deletion:</b> Easily delete products using the ID search. Product details for deletion are displayed in a read-only form.
            </p>
            <p>
              <b>JSON Data Display:</b> View data in JSON format when inserting or deleting products.
            </p>

            <h4>SQL Queries</h4>
            <p>
              <b>Integrated SQL Editor:</b> Perform SQL queries with the built-in editor, with access to the selected options in the sidebar.
            </p>
            <p>
              <b>Query Display:</b> Query results are displayed in a table that automatically adjusts to the data structure, regardless of columns or rows.
            </p>
            <p>
              <b>Cell Editing:</b> Select table cells and edit them, except for the ID field. Editable text appears in a dedicated section in the sidebar.
            </p>
            <p>
              <b>Editor Customization:</b> Customize the editor to your preferences, including background colors, sidebar, lines, and font size.
            </p>

            {enlarge &&
              <DivEnlarge onClick={() => handleClickImg(0)}>
                <span>
                  Click to minimize
                </span>
                <img
                  src={images[indexImg].name}
                  alt={images[indexImg].alt} />
              </DivEnlarge>
            }

            <section>
              <h4>Gallery</h4>
              <ProjectsImg>

                {images.map((img, index) => (
                  <img
                    key={img.name}
                    src={img.name}
                    alt={img.alt}
                    onClick={() => handleClickImg(index)} />
                ))}
              </ProjectsImg>
            </section>
          </div>
        </Details>

      }
    </>
  )
}
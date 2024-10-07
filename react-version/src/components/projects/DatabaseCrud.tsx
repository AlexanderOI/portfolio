import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GitHubIcon } from "../../assets/icons/SocialIcons";

import { useLanguageContext } from "../../context/LanguageProveder";
import { Details, DivEnlarge, NavBackGit, ProjectsImg } from "./style";

import crudDatabase from "../../assets/images/projectcsImg/database.png";
import crudRegister from "../../assets/images/projectcsImg/register.png";
import crudUpdate from "../../assets/images/projectcsImg/update.png";
import crudDelete from "../../assets/images/projectcsImg/delete.png";

import { Pyqt5Icon, PythonIcon, QtDesignerIcon, SQLiteIcon } from "../../assets/icons/SkillsIcons";
import { BackIcon } from "../../assets/icons/Icons";

export function DatabaseCrud() {
  const [enlarge, setEnlarge] = useState(false);
  const [indexImg, setIndexImg] = useState<number>(0);
  const { language } = useParams();

  const { languagePage, setLanguagePage } = useLanguageContext();

  useEffect(() => {
    setLanguagePage((prevLenguage) => {
      return prevLenguage ? prevLenguage : language ? language : "en";
    });
  }, [language]);

  const handleClickImg = (num: number) => {
    setEnlarge(!enlarge);
    setIndexImg(num);
  };

  const images = [
    { name: crudDatabase, alt: "Imagen de la visualización de productos en la base de datos" },
    {
      name: crudRegister,
      alt: "Imagen del formulario de registro de productos en la base de datos",
    },
    {
      name: crudUpdate,
      alt: "Imagen del formulario de actualización de producto en la base de datos",
    },
    { name: crudDelete, alt: "Imagen de cómo eliminar un producto de la base de datos" },
  ];

  return (
    <>
      {languagePage === "es" ? (
        <Details>
          <NavBackGit>
            <NavLink to={"/"}>
              <BackIcon />
              Volver
            </NavLink>
            <a target="_blank" href="https://github.com/AlexanderOI/CRUD_for_database">
              <i>
                <GitHubIcon />
              </i>
              Ver proyecto en GitHub
            </a>
          </NavBackGit>

          <div>
            <h2>Database CRUD</h2>
            <p>
              Proyecto desarrollado como práctica de Python con PyQt5. Es un proyecto que simula un
              CRUD de base de datos, permitiendo gestionar productos de forma básica.
            </p>

            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <PythonIcon />
                Python
              </li>
              <li>
                <Pyqt5Icon />
                PyQt5
              </li>
              <li>
                <QtDesignerIcon />
                Qt Designer
              </li>
              <li>
                <SQLiteIcon />
                SQLite
              </li>
            </ul>

            <h4>Caracteristicas</h4>
            <p>
              <b>Visualización de la base de datos en tablas: </b>Los usuarios pueden ver los datos
              almacenados en la base de datos en un formato de tabla.
            </p>
            <p>
              <b>Registro de un nuevo elemento: </b>Los usuarios pueden agregar nuevos elementos a
              la base de datos completando un formulario.
            </p>
            <p>
              <b>Actualización de los datos: </b>Los usuarios pueden buscar un elemento existente en
              la base de datos utilizando su nombre, para luego modificar sus datos.
            </p>
            <p>
              <b>Eliminación de un elemento: </b>Los usuarios pueden buscar un elemento por su
              nombre, para luego poder eliminarlo de la base de datos.
            </p>

            {enlarge && (
              <DivEnlarge onClick={() => handleClickImg(0)}>
                <span>Has click para minimizar</span>
                <img src={images[indexImg].name} alt={images[indexImg].alt} />
              </DivEnlarge>
            )}

            <section>
              <h4>Galería</h4>
              <ProjectsImg>
                {images.map((img, index) => (
                  <img
                    key={img.name}
                    src={img.name}
                    alt={img.alt}
                    onClick={() => handleClickImg(index)}
                  />
                ))}
              </ProjectsImg>
            </section>
          </div>
        </Details>
      ) : (
        <Details>
          <NavBackGit>
            <NavLink to={"/"}>
              <BackIcon />
              Back
            </NavLink>
            <a target="_blank" href="https://github.com/AlexanderOI/CRUD_for_database">
              <i>
                <GitHubIcon />
              </i>
              View project on GitHub
            </a>
          </NavBackGit>
          <div>
            <h2>Database CRUD</h2>
            <p>
              Project developed as a Python practice with PyQt5. It is a project that simulates a
              database CRUD, allowing basic product management.
            </p>

            <h4>Technologies used</h4>
            <ul>
              <li>
                <PythonIcon />
                Python
              </li>
              <li>
                <Pyqt5Icon />
                PyQt5
              </li>
              <li>
                <QtDesignerIcon />
                Qt Designer
              </li>
              <li>
                <SQLiteIcon />
                SQLite
              </li>
            </ul>

            <h4>Characteristics</h4>
            <p>
              <b>Database Visualization in Tables: </b>Users can view the data stored in the
              database in a table format.
            </p>
            <p>
              <b>Adding a New Item: </b>Users can add new items to the database by completing a
              form.
            </p>
            <p>
              <b>Data Update: </b>Users can search for an existing item in the database using its
              name, and then modify its data.
            </p>
            <p>
              <b>Item Deletion: </b>Users can search for an item by its name and then delete it from
              the database.
            </p>

            {enlarge && (
              <DivEnlarge onClick={() => handleClickImg(0)}>
                <span>Click to minimize</span>
                <img src={images[indexImg].name} alt={images[indexImg].alt} />
              </DivEnlarge>
            )}

            <section>
              <h4>Gallery</h4>
              <ProjectsImg>
                {images.map((img, index) => (
                  <img
                    key={img.name}
                    src={img.name}
                    alt={img.alt}
                    onClick={() => handleClickImg(index)}
                  />
                ))}
              </ProjectsImg>
            </section>
          </div>
        </Details>
      )}
    </>
  );
}

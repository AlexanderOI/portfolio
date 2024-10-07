import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GitHubIcon } from "../../assets/icons/SocialIcons";

import { useLanguageContext } from "../../context/LanguageProveder";
import { Details, DivEnlarge, NavBackGit, ProjectsImg } from "./style";

import dentzusuShopMain from "../../assets/images/projectcsImg/main.png";
import dentzusuShopCharacteristics from "../../assets/images/projectcsImg/characteristics.png";
import dentzusuShopSearch from "../../assets/images/projectcsImg/search.png";
import dentzusuShopFooter from "../../assets/images/projectcsImg/footer.png";
import {
  ReactIcon,
  ReactRouterIcon,
  StyledComponentsIcon,
  TypeScriptIcon,
} from "../../assets/icons/SkillsIcons";
import { BackIcon } from "../../assets/icons/Icons";

export function DentzusuShop() {
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
    { name: dentzusuShopMain, alt: "Imagen de la pantalla de inicio del proyecto de supermercado" },
    {
      name: dentzusuShopCharacteristics,
      alt: "Imagen de las características del proyecto de supermercado",
    },
    { name: dentzusuShopFooter, alt: "Imagen de la footer del proyecto de supermercado" },
    {
      name: dentzusuShopSearch,
      alt: "Foto de ejemplo de búsqueda de productos de proyecto de supermercado",
    },
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
            <a target="_blank" href="https://github.com/AlexanderOI/dentsuzu-shop-front-end">
              <i>
                <GitHubIcon />
              </i>
              Ver proyecto en GitHub
            </a>
          </NavBackGit>

          <div>
            <h2>Dentsuzu Shop</h2>
            <p>
              Proyecto desarrollado con la intención de mejorar mis habilidades de Desarrollo
              Front-End con React y TypeScript
            </p>

            <h4>Tecnologias utilizadas</h4>
            <ul>
              <li>
                <TypeScriptIcon />
                TypeScript
              </li>
              <li>
                <ReactIcon />
                React
              </li>
              <li>
                <ReactRouterIcon />
                React-router-dom
              </li>
              <li>
                <StyledComponentsIcon />
                Styled-components
              </li>
            </ul>

            <h4>Caracteristicas</h4>
            <p>
              <b>Barra lateral por seccion de supermercado: </b>esta barra permite al usuario
              desplazarse rapidamente hacia la seccion de supermercado para ver productos
              especificos, por ejemplo: panaderia, carnes, lacteos, etc.
            </p>
            <p>
              <b>Filtrado por nombre, categoría y precio: </b>Los usuarios puedes filtrar sus
              productos por distintos campos, para poder acceder rapidamente al producto deseado.
            </p>
            <p>
              <b>Búsqueda de productos por nombre: </b>Los usuarios pueden buscar productos
              específicos escribiendo el nombre en un campo de búsqueda.
            </p>
            <p>
              <b>Paginación numérica de productos (28 por página): </b>Para gestionar grandes listas
              de productos, se utiliza la paginación numérica.
            </p>
            <p>
              <b>Carrito de compra: </b>La página incluye un carrito de compra que muestra los
              productos seleccionados por el usuario, la cantidad y el precio total. Los usuarios
              pueden agregar y eliminar productos de su carrito y ver un resumen de sus compras
              antes de finalizar la compra.
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
            <a target="_blank" href="https://github.com/AlexanderOI/dentsuzu-shop-front-end">
              <i>
                <GitHubIcon />
              </i>
              View project on GitHub
            </a>
          </NavBackGit>
          <div>
            <h2>Dentsuzu Shop</h2>
            <p>
              Project developed with the intention of improving my Front-End Development skills with
              React and TypeScript
            </p>

            <h4>Technologies used</h4>
            <ul>
              <li>
                <TypeScriptIcon />
                TypeScript
              </li>
              <li>
                <ReactIcon />
                React
              </li>
              <li>
                <ReactRouterIcon />
                React-router-dom
              </li>
              <li>
                <StyledComponentsIcon />
                Styled-components
              </li>
            </ul>

            <h4>Characteristics</h4>
            <p>
              <b>Side menu for supermarket sections: </b>This bar allows users to quickly navigate
              to specific supermarket sections to view specific products, such as bakery, meat,
              dairy, etc.
            </p>
            <p>
              <b>Filtering by name, category, and price: </b>Users can filter products by different
              criteria to quickly access the desired product.
            </p>
            <p>
              <b>Product search by name: </b>Users can search for specific products by typing the
              name in a search field.
            </p>
            <p>
              <b>Numeric product pagination (28 per page): </b>Numeric pagination is used to manage
              large product lists.
            </p>
            <p>
              <b>Shopping cart: </b>The page includes a shopping cart that displays the products
              selected by the user, quantity, and total price. Users can add and remove products
              from their cart and review their purchases before completing the purchase.
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

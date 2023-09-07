import { keyframes, styled } from "styled-components"
import dentzusuShopMain from '../assets/images/projectcsImg/main.png'
import dentzusuShopCharacteristics from '../assets/images/projectcsImg/characteristics.png'
import dentzusuShopFooter from '../assets/images/projectcsImg/footer.png'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { GitHubIcon } from "../assets/icons/SocialIcons"

const Details = styled.div`
  display: inline-block;
  text-align: left;
  padding: 30px;

  p {
    padding-bottom: 15px;
  }

  a {
    color: #7b9de7;

    &:hover {
      color: #adc3f1;
    }
  }

  h4 {
    padding-top: 15px;
    padding-bottom: 5px;
  }

  ul {
    padding-left: 20px;
  }
`
const Git = styled.a`
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 15px;
  width: 220px;
  height: 40px;

  i{
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }

  &:hover {
    background-color: #111111;
  }
`

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`

const Img = styled.img`
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1)
  }
`

const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  button {
    background-color: #fff;
    cursor: pointer;
    padding: 4px;
    width: 70px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover {
      background-color: #979696;
    }

    &:active {
      background-color: #768a8a;
    }
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    width: 50%;
  }
  to {
    opacity: 1;
    width: 100%;
  }
`

const DivEnlarge = styled.div`
  display: inline-block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-in-out;

  span {
    display: block;
    text-align: center;
    background-color: #fff;
    width: 200px;
    height: 30px;
    color: #000;
    margin: auto;
  }

  img {
    width: 80%;
    border-radius: 30px
  }
`


export function DrojectDetails() {
  const [enlarge, setEnlarge] = useState(false)
  const [indexImg, setIndexImg] = useState<number>(0)

  const ImgRendering = [
    { name: dentzusuShopMain, alt: "Imagen de la pantalla de inicio del proyecto de supermercado" },
    { name: dentzusuShopCharacteristics, alt: "Imagen de las características del proyecto de supermercado" },
    { name: dentzusuShopFooter, alt: "Imagen de la footer del proyecto de supermercado" }
  ]

  const handleClickImg = (num: number) => {
    setEnlarge(!enlarge)
    setIndexImg(num)
  }

  return (
    <Details>
      <NavLinkStyle to={'/projects'}><button>Volver</button></NavLinkStyle>
      <h2>Project: Dentsuzu Shop</h2>
      <p>
        Proyecto desarrollado con la intención de mejorar mis habilidades de Desarrollo Front-End con React y TypeScript
      </p>
      <p>
        Este proyecto está inspirado en la <a href="https://www.stock.com.py/default.aspx#">pagina web de Supermecados Stock</a>
      </p>

      <h4>Tecnologías Utilizadas:</h4>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Styled-components</li>
        <li>React-router-dom</li>
      </ul>

      <h4>Características</h4>
      <p>
        <b>Barra lateral por seccion de supermercado: </b> esta barra permite al usuario desplazarse rapidamente hacia la seccion de supermercado para ver productos especificos, por ejemplo: panaderia, carnes, lacteos, etc.
      </p>

      <p>
        <b>Filtrado por nombre, categoría y precio: </b> Los usuarios puedes filtrar sus productos por distintos campos, para poder acceder rapidamente al producto deseado.
      </p>

      <p>
        <b>Búsqueda de productos por nombre: </b>Los usuarios pueden buscar productos específicos escribiendo el nombre en un campo de búsqueda.
      </p>

      <p>
        <b>Paginación numérica de productos (28 por página): </b> Para gestionar grandes listas de productos, se utiliza la paginación numérica.
      </p>

      <p>
        <b>Carrito de compra: </b>La página incluye un carrito de compra que muestra los productos seleccionados por el usuario, la cantidad y el precio total. Los usuarios pueden agregar y eliminar productos de su carrito y ver un resumen de sus compras antes de finalizar la compra.
      </p>
      {enlarge &&
        <DivEnlarge onClick={() => handleClickImg(0)}>
          <span>Has click para minimizar</span>
          <img src={ImgRendering[indexImg].name} alt={ImgRendering[indexImg].alt} />
        </DivEnlarge>
      }


      <ImgContainer>
        {ImgRendering.map((img, index) => (
          <Img src={img.name} alt={img.alt} onClick={() => handleClickImg(index)} />
        ))}
      </ImgContainer>

      <Git href="https://github.com/AlexanderOI/dentsuzu-shop-front-end"><i><GitHubIcon /></i>Ver proyecto en Github</Git>
    </Details>
  )
}
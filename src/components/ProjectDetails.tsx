import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GitHubIcon } from "../assets/icons/SocialIcons"

import { ProjectsData } from '../constants/ProcjectsDetails'
import { useLanguageContext } from "../context/LanguageProveder"
import { NavLink } from "react-router-dom"
import styled, { keyframes } from "styled-components"

export const Details = styled.div`
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
export const Git = styled.a`
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

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`

export const Img = styled.img`
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1)
  }
`

export const NavLinkStyle = styled(NavLink)`
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

export const DivEnlarge = styled.div`
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

export function ProjectDetails() {
  const [enlarge, setEnlarge] = useState(false)
  const [indexImg, setIndexImg] = useState<number>(0)
  const { project, language } = useParams()

  const { languagePage, setLanguagePage } = useLanguageContext()

  const projectPage = project ? project : 'dentzusu-shop'

  useEffect(() => {
    setLanguagePage((prevLenguage) => {
      return prevLenguage ? prevLenguage : language ? language : 'en'
    })
  }, [language])

  const handleClickImg = (num: number) => {
    setEnlarge(!enlarge)
    setIndexImg(num)
  }

  return (
    <Details>
      <NavLinkStyle to={'/projects'}><button>{languagePage === 'en' ? 'Back' : 'Volver'}</button></NavLinkStyle>
      {ProjectsData[projectPage][languagePage].map((project) => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.inspiration.start &&
            <p>{project.inspiration.start}<a href={project.inspiration.url}>{project.inspiration.end}</a></p>
          }

          <h4>{languagePage === 'en' ? 'Technologies used:' : 'Tecnologias utilizadas: '}</h4>
          <ul>
            {project.tools.map((tools) => (
              <li key={tools}>
                {tools}
              </li>
            ))}
          </ul>

          <h4>{languagePage === 'en' ? 'Characteristics' : 'Caracteristicas'}</h4>
          {project.characteristics.map((chatacteristic) => (
            <p key={chatacteristic.boldFont}>
              <b>{chatacteristic.boldFont}</b>{chatacteristic.paragraph}
            </p>
          ))}
          {enlarge &&
            <DivEnlarge onClick={() => handleClickImg(0)}>
              <span>Has click para minimizar</span>
              <img src={project.images[indexImg].name} alt={project.images[indexImg].alt} />
            </DivEnlarge>
          }

          <ImgContainer>
            {project.images.map((img, index) => (
              <Img key={img.name} src={img.name} alt={img.alt} onClick={() => handleClickImg(index)} />
            ))}
          </ImgContainer>
          <Git target="_blank" href={project.git}><i><GitHubIcon /></i>Ver proyecto en Github</Git>
        </div>
      ))}
    </Details>
  )
}
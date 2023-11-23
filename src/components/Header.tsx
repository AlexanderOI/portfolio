import { useNavigate } from "react-router-dom"
import { GitHubIcon, LinkedinIcon } from "../assets/icons/SocialIcons"
import { useLanguageContext } from "../context/LanguageProveder"
import styled from "styled-components"
import { between_flex_colum, center_flex } from "../assets/style/css.style"

export const HeaderMain = styled.header`
  ${center_flex}
  position: fixed;
  background-color: #1f2937ea;
  border-bottom: 2px solid #e5e5e51a;
  z-index: 40;
  width: 100%;
  height: 90px;

  div {
    ${center_flex}
  }

  span {
    padding-right: 10px;
  }

  select {
    background-color: #ffffff;
    font-size: 1em;
    margin-right: 10px;
    border: none;
    outline: none;
  }

  i {
    display: inline-block;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin-left: 10px;
    margin-right: 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      fill: #00416d;
      transform: scale(1.2);
    }
  }

  @media(max-width: 768px) {
    height: 85px;
    ${between_flex_colum}
    padding: 10px 10px 0px 0px;
  }
`

export const NavLinkStyle = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px;
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before, &::after {
    margin-top: 5px;
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    transition: width 0.3s ease;
    color: #248cd1;
  }

  &::before {
    left: 0;
    background-color: #248cd1;
    color: #248cd1;
  }

  &::after {
    right: 0;
    background-color: #248cd1;
  }

  &:hover::before, &:hover::after {
    width: 100%;
  }

  &.active::before, &.active::after {
    width: 100%;
  }
  
  &:hover {
    color: #248cd1;
  }

  &.active {
    color: #248cd1;
  }
`

export function Header() {
  const { languagePage, setLanguagePage } = useLanguageContext()
  const navigate = useNavigate()

  let path = window.location.pathname

  const scrollToSection = (id: string) => {
    if (path.length > 2) {
      navigate('/')
    }

    const element = document.getElementById(id)

    if (element) {
      const offset = element.offsetTop - 60
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <HeaderMain>
      <nav>
        {path.length > 2 ?
          <NavLinkStyle onClick={() => scrollToSection('title')}>{languagePage == 'en' ? 'Home' : 'Inicio'}</NavLinkStyle>
          :
          <>
            <NavLinkStyle onClick={() => scrollToSection('title')}>{languagePage == 'en' ? 'Home' : 'Inicio'}</NavLinkStyle>
            <NavLinkStyle onClick={() => scrollToSection('projects')}>{languagePage == 'en' ? 'Projects' : 'Proyectos'}</NavLinkStyle>
            <NavLinkStyle onClick={() => scrollToSection('abaut-me')}>{languagePage == 'en' ? 'About me' : 'Sobre mi'}</NavLinkStyle>
            <NavLinkStyle onClick={() => scrollToSection('contact-me')}>{languagePage == 'en' ? 'Contact me' : 'Contactame'}</NavLinkStyle>
          </>
        }

      </nav>
      <div>
        <span>{languagePage == 'en' ? 'Language' : 'Idioma'}</span>
        <select value={languagePage} onChange={(event) => setLanguagePage(event.target.value)}>
          <option value="es">Es</option>
          <option value="en">En</option>
        </select>
        <a href="https://www.linkedin.com/in/alexander-o-18a7a1248" target="_blank"><i><LinkedinIcon /></i></a>
        <a href="https://github.com/AlexanderOI" target="_blank"><i><GitHubIcon /></i></a>
      </div>
    </HeaderMain>
  )
}
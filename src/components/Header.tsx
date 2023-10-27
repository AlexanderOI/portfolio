import { GitHubIcon, LinkedinIcon } from "../assets/icons/SocialIcons"
import { useLanguageContext } from "../context/LanguageProveder"
import styled from "styled-components"

export const HeaderMain = styled.header`
  display: flex;
  position: fixed;
  background-color: #1a1a1aea;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e5e5e51a;
  z-index: 40;
  width: 100%;
  height: 90px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    padding-right: 10px;
  }

  select {
    background-color: #ffffff;
    font-size: 1em;
    margin-right: 10px;
    border: none;

    &:focus {
      outline: none;
    }
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
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 10px 0px 0px;
  }
`

export const NavLinkStyle = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px 10px 10px 10px;
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

  return (
    <HeaderMain>
      <nav>
        <NavLinkStyle >{languagePage == 'en' ? 'Home' : 'Inicio'}</NavLinkStyle>
        <NavLinkStyle >{languagePage == 'en' ? 'Projects' : 'Proyectos'}</NavLinkStyle>
        <NavLinkStyle >{languagePage == 'en' ? 'About me' : 'Sobre mi'}</NavLinkStyle>
        <NavLinkStyle >{languagePage == 'en' ? 'Contact me' : 'Contactame'}</NavLinkStyle>
      </nav>
      <div>
        <span>Language</span>
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
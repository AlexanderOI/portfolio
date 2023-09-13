import { GitHubIcon, LinkedinIcon } from "../assets/icons/SocialIcons"
import { useLanguageContext } from "../context/LanguageProveder"
import { HeaderMain, NavLinkStyle } from "../assets/style/HeaderStyled"

export function Header() {
  const { languagePage, setLanguagePage } = useLanguageContext()

  return (
    <HeaderMain>
      <nav>
        <NavLinkStyle to={'/'}>{languagePage == 'en' ? 'Home' : 'Inicio'}</NavLinkStyle>
        <NavLinkStyle to={'/projects'}>{languagePage == 'en' ? 'Projects' : 'Proyectos'}</NavLinkStyle>
        <NavLinkStyle to={'/contact'}>{languagePage == 'en' ? 'Contact me' : 'Contactame'}</NavLinkStyle>
      </nav>
      <div>
        <span>Language</span>
        <select value={languagePage} onChange={(event) => setLanguagePage(event.target.value)}>
          <option value="en">En</option>
          <option value="es">Es</option>
        </select>
        <a href="https://www.linkedin.com/in/alexander-o-18a7a1248"><i><LinkedinIcon /></i></a>
        <a href="https://github.com/AlexanderOI"><i><GitHubIcon /></i></a>
      </div>
    </HeaderMain>
  )
}
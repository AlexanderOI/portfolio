import html from '../assets/images/homeImg/img-html.png'
import css from '../assets/images/homeImg/img-css.png'
import javascript from '../assets/images/homeImg/img-javascript.png'
import typescript from '../assets/images/homeImg/img-typescript.png'
import react from '../assets/images/homeImg/img-react.png'
import python from '../assets/images/homeImg/img-python.png'
import sql_lite from '../assets/images/homeImg/img-sqlite.png'
import git from '../assets/images/homeImg/img-git.png'
import github from '../assets/images/homeImg/img-github.png'
import { styled } from 'styled-components'

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
      transform: scale(1.3);
  }
`

export function ImgSkills() {
  return (
    <div>
      <Img src={javascript} alt="logo de JavaScript" />
      <Img src={typescript} alt="logo de TyoeScript" />
      <Img src={python} alt="logo de Python" />
      <Img src={html} alt="logo de HTML" />
      <Img src={css} alt="logo de CSS" />
      <Img src={react} alt="logo de React" />
      <Img src={sql_lite} alt="logo de SQLite" />
      <Img src={git} alt="logo de Git" />
      <Img src={github} alt="logo de GitHub" />
    </div>
  )
}
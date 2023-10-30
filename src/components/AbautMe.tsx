import { useLanguageContext } from "../context/LanguageProveder"
import { aboutMe } from "../constants/asideLenguaje"
import styled from "styled-components"
import { theme } from "../assets/style/themes"
import { GitHubIcon, LinkedinIcon } from "../assets/icons/SocialIcons"

interface DivProps {
  $border?: string
}

export const AbautMeStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
  "title title title title"
  "text text text aside";
  text-align: left;
  margin-top: 70px;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  h2 {
    grid-area: title;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: ${theme.dark.blue};
    border: 1px solid #e5e5e51a;
    box-shadow: 0px 0px 20px #e5e5e52f;
  }

  @media (max-width: 768px) {
    grid-template-areas:
  "title title title title"
  "text text text text"
  "aside aside aside aside";
  }
`

const KnowMe = styled.div`
  grid-area: text;

  p {
    padding: 15px;
  }

  strong {
    color: ${theme.dark.blue};
  }
`
export const Me = styled.div<DivProps>`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  color: ${theme.dark.blue};
  height: 100%;
  margin-bottom: 15px;
  padding: 5px 15px 0 15px;

  div {
    background-color: ${theme.dark.blue};
    border: 1px solid ${theme.dark.withe};
    border-radius: 10px;
  }

  p {
    color: ${theme.dark.withe};
    text-align: center;
    padding: 15px;
  }

  a {
    display: flex;
    background-color: ${theme.dark.blue};
    color: ${theme.dark.withe};
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    margin: 30px 0 0 0;
    transition: transform 0.2s ease-in-out;
    border: 1px solid ${theme.dark.withe};

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  i {
    padding: 0px 15px 0px 0px;
  }

  svg {
    width: 35px;
  }
`
export function AbautMe() {
  const { languagePage } = useLanguageContext()

  return (
    <AbautMeStyle>
      <h2 id="abaut-me">{languagePage === 'en' ? 'About me' : 'Sobre mi'}</h2>

      <KnowMe>
        {languagePage === 'en' ?
          <>
            <p>Hello! I am Alexander Ortiz, a passionate Junior Developer who finds his main source of inspiration in the world of technology and programming. I am currently a Computer Engineering student at the University of the Southern Cone of the Americas.</p>

            <p>I'm excited about frontend development with React and backend development with Node. I am always willing to explore new technologies and accept challenges related to software development.</p>

            <p>A philosophy that guides me is the phrase "Never stop learning." I invite you to explore my GitHub, where you will find the projects I work on. Furthermore, in the "Projects" section you will find brief explanations of each of them.</p>

            <p>If you have any questions, suggestions or just want to connect, feel free to contact me via my email: <strong>alexanderoi037@gmail.com</strong> or by filling out the form in the "Contact Me" section. I look forward to hearing your ideas and working on interesting projects. Let's put our ideas into code!</p>

          </>
          :
          <>
            <p>¡Hola! Soy Alexander Ortiz, un apasionado Desarrollador Junior que encuentra su principal fuente de inspiración en el mundo de la tecnología y la programación. Actualmente soy estudiante de Ingeniería en Informática en la Universidad del Cono Sur de las Américas.</p>

            <p>Estoy entusiasmado con el desarrollo frontend con React y el desarrollo backend con Node. Siempre estoy dispuesto a explorar nuevas tecnologías y aceptar desafíos relacionados con el desarrollo de software.</p>

            <p>Una filosofía que me guía es la frase "Nunca dejes de aprender". Te invito a explorar mi GitHub, donde encontrarás los proyectos en los que trabajo. Además, en el apartado "Proyectos" encontrarás breves explicaciones de cada uno de ellos.</p>

            <p>Si tienes alguna pregunta, sugerencia o simplemente quieres conectarte, no dudes en contactarme a través de mi correo electrónico: <strong>alexanderoi037@gmail.com</strong> o completando el formulario en la sección "Contáctame". Espero escuchar sus ideas y trabajar en proyectos interesantes. ¡Pongamos nuestras ideas en código!</p>
          </>
        }
      </KnowMe>
      <Me>
        <div>
          <p>{aboutMe[languagePage].age}</p>
          <p>{aboutMe[languagePage].birtday}</p>
          <p>{aboutMe[languagePage].country}</p>
        </div>
        <a href="https://www.linkedin.com/in/alexander-o-18a7a1248" target="_blank"><i><LinkedinIcon /></i>Linkedin</a>
        <a href="https://github.com/AlexanderOI" target="_blank"><i><GitHubIcon /></i>GitHub</a>

      </Me>
    </AbautMeStyle>

  )
}
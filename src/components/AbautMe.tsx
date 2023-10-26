import { useLanguageContext } from "../context/LanguageProveder"
import { aboutMe } from "../constants/asideLenguaje"
import styled from "styled-components"
import { theme } from "../assets/style/themes"

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
    background-color: ${theme.dark.darkblue};
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
`
export const Me = styled.div<DivProps>`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  color: ${theme.dark.darkblue};
  height: 100%;
  margin-bottom: 15px;
  padding: 5px 15px 0 15px;

  p {
    background-color: ${theme.dark.darkblue};
    color: ${theme.dark.darkWithe};
    text-align: center;
    padding: 15px;
  }

  a {
    background-color: ${theme.dark.darkblue};
    color: ${theme.dark.darkWithe};
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    margin: 30px 0 0 0;
  }
`
export function AbautMe() {
  const { languagePage } = useLanguageContext()

  return (
    <AbautMeStyle>
      <h2>{languagePage === 'en' ? 'About me' : 'Sobre mi'}</h2>

      <KnowMe>
        {languagePage === 'en' ?
          <>
            <p>Hello! I'm Alexander Ortiz, a passionate Junior Developer who finds his primary source of inspiration in the world of technology and programming. Currently, I'm immersed in the exciting journey of computer engineering at the University of the Southern Cone of the Americas, already in the fourth semester.</p>

            <p>When I'm not engrossed in my studies, I'm enthusiastic about Front-End development with React. I'm always eager to explore new technologies and embrace challenges related to software development. This website is a reflection of the knowledge I've acquired so far and my enthusiasm for sharing what I've learned.</p>

            <p>A philosophy that guides me on this journey is the belief in "Never stop learning." I invite you to explore my virtual corner on GitHub, where you'll find the projects I've worked on. Additionally, in the "Projects" tab, you'll find brief explanations of each of them.</p>

            <p>If you have any questions, suggestions, or simply want to connect, don't hesitate to reach out to me via my email: alexanderoi037@gmail.com or by filling out the form in the "Contact Me" tab. I'm eager to hear your ideas and collaborate on exciting projects. Let's make technology work for us!</p>

          </>
          :
          <>
            <p>¡Hola! Soy Alexander Ortiz, un apasionado Desarrollador Junior que encuentra en el mundo de la tecnología y la programación su principal fuente de inspiración. Actualmente, estoy inmerso en el emocionante viaje de la ingeniería informática en la Universidad del Cono Sur de las Américas, ya en el cuarto semestre.</p>

            <p>Cuando no estoy sumergido en mis estudios, me entusiasma el desarrollo Front-End con React. Siempre estoy dispuesto a explorar nuevas tecnologías y abrazar desafíos relacionados con el desarrollo de software. Esta página web es un reflejo de los conocimientos que he adquirido hasta ahora y mi entusiasmo por compartir lo que he aprendido.</p>

            <p>Una filosofía que me guía en este viaje es la creencia en "Nunca pares de aprender". Te invito a explorar mi rincón virtual en GitHub, donde encontrarás los proyectos en los que he trabajado. Además, en la pestaña "Proyectos," encontrarás breves explicaciones de cada uno de ellos.</p>

            <p>Si tienes alguna pregunta, sugerencia o simplemente deseas conectarte, no dudes en contactarme a través de mi correo electrónico: <strong>alexanderoi037@gmail.com</strong> o completando el formulario en la pestaña "Contáctame." Estoy ansioso por escuchar tus ideas y colaborar en proyectos emocionantes. ¡Hagamos la tecnología trabajar para nosotros!</p>
          </>
        }
      </KnowMe>
      <Me>
        <p>{aboutMe[languagePage].age}</p>
        <p>{aboutMe[languagePage].birtday}</p>
        <p>{aboutMe[languagePage].country}</p>
        <a href="">Linkedin</a>
        <a href="">Discord</a>
        <a href="">GitHub</a>
      </Me>
    </AbautMeStyle>

  )
}
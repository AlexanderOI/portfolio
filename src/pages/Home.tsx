import { IconsSkills } from "../components/IconsSkills"
import { useLanguageContext } from "../context/LanguageProveder"

import styled from "styled-components"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { theme } from "../assets/style/themes"
import { AbautMe } from "../components/AbautMe"

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Presentation = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "profile title title"
    "profile text text";

  p {
    font-size: 2em;
    text-align: left;
    padding-top: 15px;
    padding-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }

  a {
    color: #fff;

    &:hover{
      color:#ffa;
    }
  }

  @media (max-width: 768px){
    width: 100%;
    grid-template-areas:
    "profile title title"
    "text text text";
  }
`
export const Profile = styled.div`
  grid-area: profile;
  position: relative;
  max-width: 300px;
  padding: 15px;

  span {
    font-size: 2em;
    color: ${theme.dark.darkblue};

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }

  @media (max-width: 768px){
    display: block;
    flex-direction: row;
    max-width: 200px;
    margin: 0;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: 768px){
      flex-direction: row;
      max-width: 80px;
      max-height: 80px;
    }
  }
`

const Title = styled.div`
  grid-area: title;
  margin: auto;

  h1 {
    padding-bottom: 15px;
    background: linear-gradient(to top right, #00416d, #7cb4da);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
    font-size: 3em;
  }

  @media (max-width: 768px) {
    h1 {
      line-height: 100%;
      margin-top: 15px;
      font-size: 1.5em;
    }
  }
`

const Text = styled.div`
  grid-area: text;
  
  p {
    text-align: center;
    margin: auto;
  }
`

export function Home() {
  const { languagePage } = useLanguageContext()

  return (
    <Main>
      <Presentation>
        <Profile>
          <img src="https://avatars.githubusercontent.com/u/112521170?s=400&u=6b8d0fde5dc60c33f02e4d2772708bdf5a37196c&v=4" alt="Foto de perfil" />
          <span>{languagePage === 'en'
            ? 'Programming'
            : 'Programando'}
            ...
          </span>
        </Profile>
        <Title>
          {languagePage === 'en'
            ? <h1>Welcome to My Portfolio: AlexanderOI</h1>
            : <h1>Desarrollador Junior AlexanderOI</h1>
          }
        </Title>
        <Text>
          {languagePage === 'en'
            ? <p> My name is Alexander Ortiz, I'm a Junior Developer passionate about computer technology and programming. Currently, I am studying computer engineering</p>
            : <p>Me llamo Alexander Ortiz Ibañez. Soy Desarrollador Junior & estudiante de Ingeniería en Informática.</p>
          }
        </Text>
      </Presentation>
      <IconsSkills />
      <Projects />
      <AbautMe />
      <Contact />
    </Main >
  )
}
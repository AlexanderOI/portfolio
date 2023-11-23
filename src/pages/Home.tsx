import { IconsSkills } from "../components/IconsSkills"
import { useLanguageContext } from "../context/LanguageProveder"

import styled from "styled-components"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { theme } from "../assets/style/themes"
import { AbautMe } from "../components/AbautMe"

import perfil from '../assets/images/perfil.png'

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
  "profile profile profile"
  "title title title"
  "text text text";
  margin-top: 25px;

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
    "profile profile profile"
    "title title title"
    "text text text";
  }
`
export const Profile = styled.div`
  grid-area: profile;
  position: relative;
  margin: auto;
  max-width: 300px;
  padding: 15px;

  @media (max-width: 768px){
    display: block;
    flex-direction: row;
    max-width: 200px;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 2px solid ${theme.dark.blue};

    @media (max-width: 768px){
      flex-direction: row;
      max-width: 200px;
      max-height: 200px;
    }
  }
`

const Title = styled.div`
  grid-area: title;
  border-bottom: 2px solid ${theme.dark.blueWhite};
  margin-top: 30px;

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
  margin-top: 30px;
  
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
          <img id="title" src={perfil} alt="Foto de perfil" />
        </Profile>
        <Title>
          {languagePage === 'en'
            ? <h1 >{"< Jr. Developer AlexanderOI/>"}</h1>
            : <h1 >{"< Desarrollador Jr. AlexanderOI />"}</h1>
          }
        </Title>
        <Text>
          {languagePage === 'en'
            ? <p>My name is Alexander Ortiz Ibáñez. I am a Junior Developer & Computer Engineering student</p>
            : <p>Mi nombre es Alexander Ortiz Ibáñez. Soy Desarrollador Junior & estudiante de Ingeniería Informática</p>
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
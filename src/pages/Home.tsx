import styled from "styled-components"
import { ImgSkills } from "../components/ImgSkills"

const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  margin: 15px;
`

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    padding-bottom: 15px;
  }
`

export function Home() {
  return (
    <>
      <Img>
        <Profile src="https://avatars.githubusercontent.com/u/112521170?s=400&u=6b8d0fde5dc60c33f02e4d2772708bdf5a37196c&v=4" alt="Foto de perfil" />
        <span>Programming...</span>
        <ImgSkills />
      </Img>

      <Presentation>
        <h2>AlexanderOI</h2>
        <p>University student of Computer Engineering, I study programming on my own</p>
      </Presentation>

    </>
  )
}
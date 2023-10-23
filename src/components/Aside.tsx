import { useLanguageContext } from "../context/LanguageProveder"
import { aboutMe } from "../constants/asideLenguaje"
import styled from "styled-components"

interface DivProps {
  $border?: string
}

export const AsideMain = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  @media (max-width: 768px){
    display: none;
  }
`
export const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  background-color: rgba(36, 36, 36, 0.70);
  border-radius: 30px;
  border: ${(props) => props.$border || '5px double #666666'};
  height: 100%;
  padding: 15px;
  margin-bottom: 15px;

  h3 {
    margin: auto;
    margin-top: 0;
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 5px;
  }
`

export function Aside() {
  const { languagePage } = useLanguageContext()

  return (
    <AsideMain>
      <Div>
        <h3>About me</h3>
        <p>{aboutMe[languagePage].age}</p>
        <p>{aboutMe[languagePage].birtday}</p>
        <p>{aboutMe[languagePage].country}</p>
      </Div>
      {
        languagePage === 'en' &&
        <Div $border="5px double #ffb7b7">
          <h3>Warning</h3>
          <p>No se ingles, pero estoy estudiando :D</p>
          <p>Solo quería poner más idiomas a la página.</p>
        </Div>
      }
    </AsideMain>

  )
}
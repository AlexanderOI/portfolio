import { useLanguageContext } from "../context/LanguageProveder"
import { aboutMe } from "../constants/asideLenguaje"
import { AsideMain, Div } from "../assets/style/AsideStyled"

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
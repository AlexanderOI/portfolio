import { styled } from "styled-components"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #272742;
  border-radius: 20px;
  width: 1200px;
  height: 600px;
`

const Header = styled.header`
  display: flex;
  background-color: #242424;
  border-radius: 30px;
  width: 100%;
  height: 70px;
  margin-bottom: 30px;
`

const Conteiner = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  display: flex;
  background-color: #242424;
  border-radius: 30px;
  margin-right: 30px;
  width: 80%;
  height: 100%;
`

const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
`

const Aside = styled.aside`
  display: flex;
  background-color: #242424;
  border-radius: 30px;
  width: 20%;
  height: 100%;
`

function App() {
  return (
    <Div>
      <Header>

      </Header>
      <Conteiner>
        <Main>
          <Img>
            <img src="https://avatars.githubusercontent.com/u/112521170?s=400&u=6b8d0fde5dc60c33f02e4d2772708bdf5a37196c&v=4" alt="Foto de perfil" />
            <span>Programming...</span>
          </Img>

          <Presentation>
            <h2>AlexanderOI</h2>
            <p>University student of Computer Engineering, I study programming on my own</p>
          </Presentation>
        </Main>

        <Aside>

        </Aside>
      </Conteiner>

    </Div>
  )
}

export default App

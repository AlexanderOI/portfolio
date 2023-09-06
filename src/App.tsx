import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { styled } from "styled-components"
import { GitHubIcon, LinkedinIcon } from "./assets/icons/SocialIcons"
import { ImgSkills } from "./components/ImgSkills"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"

const Div = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 20px;
  width: 80%;
  height: 600px;
  top: 50px;
`

const Header = styled.header`
  display: flex;
  background-color: #242424;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  border: 5px double #666666;
  width: 100%;
  height: 70px;
  margin-bottom: 30px;

  div {
    padding-right: 1%;
  }

  i {
    display: inline-block;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin-left: 15px;

    &:hover {
      fill: #00416d;
      width: 40px;
      height: 40px;
    }
  }
`

const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 5px;
  margin-left: 5px;
  font-weight: 500;

  &:hover {
    color: #00416d;
    width: 1%;
  }

  &.active {
    background-color: rgba(167, 167, 167, 0.5);
    border-radius: 15px;
    color: #00416d;
  }
`

const Conteiner = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  display: flex;
  background-color: #242424;
  border: 5px double #666666;
  border-radius: 30px;
  margin-right: 30px;
  width: 80%;
  height: 100%;

  @media (max-width: 768px){
    width: 100%;
    margin: 0;
  }
`

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

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #242424;
  border-radius: 30px;
  border: 5px double #666666;
  width: 20%;
  height: 100%;
  padding: 15px;

  h3 {
    margin: auto;
    margin-top: 0;
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 5px;
  }

  @media (max-width: 768px){
    display: none;
  }
`
function Body() {
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

function App() {
  return (
    <BrowserRouter >
      <Div>
        <Header>
          <nav>
            <NavLinkStyle to={'/'}>Home</NavLinkStyle>
            <NavLinkStyle to={'/projects'}>Projects</NavLinkStyle>
            <NavLinkStyle to={'/contact'}>Contact me</NavLinkStyle>

          </nav>
          <div>
            <i><LinkedinIcon /></i>
            <i><GitHubIcon /></i>
          </div>
        </Header>
        <Conteiner>
          <Main>
            <Routes>
              <Route path={'/'} element={<Body />} />
              <Route path={'/projects'} element={<Projects />} />
              <Route path={'/contact'} element={<Contact />} />
            </Routes>
          </Main>
          <Aside>
            <h3>About me</h3>
            <p>Age: 20</p>
            <p>Birthday: August 5</p>
            <p>Country: Paraguay</p>
            <p></p>
            <p></p>
          </Aside>
        </Conteiner>

      </Div>
    </BrowserRouter>
  )
}

export default App

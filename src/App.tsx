import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { ProjectDetails } from "./components/ProjectDetails"
import { Header } from "./components/Header"
import { LanguageProvider } from "./context/LanguageProveder"
import { Aside } from "./components/Aside"
import img from './assets/images/homeImg/backgraud.png'
import styled from "styled-components"

export const Div = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 20px;
  width: 80%;
  height: 100%;
  top: 50px;
  padding-bottom: 50px;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Conteiner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.main`
  display: flex;
  background-color: rgba(36, 36, 36, 0.70);
  border: 5px double #666666;
  border-radius: 30px;
  margin-right: 30px;
  width: 80%;
  height: 100%;
  min-height: 600px;

  @media (max-width: 768px){
    width: 100%;
    margin: 0;
  }
`

export const Backgraund = styled.div`
  position: fixed;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <BrowserRouter >
      <LanguageProvider>
        <Backgraund />
        <Div>
          <Header />

          <Conteiner>
            <Main>
              <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/projects'} element={<Projects />} />
                <Route path={'/projects/:project'} element={<ProjectDetails />} />
                <Route path={'/projects/:project/:language'} element={<ProjectDetails />} />
                <Route path={'/contact'} element={<Contact />} />
              </Routes>
            </Main>

            <Aside />
          </Conteiner>
        </Div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { ProjectDetails } from "./components/ProjectDetails"
import { Header } from "./components/Header"
import { LanguageProvider } from "./context/LanguageProveder"
import { Aside } from "./components/Aside"
import { Backgraund, Conteiner, Div, Main } from "./assets/style/AppStyled"

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

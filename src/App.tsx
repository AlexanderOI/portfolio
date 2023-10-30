import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { LanguageProvider } from "./context/LanguageProveder"
import styled from "styled-components"
import { DentzusuShop } from "./components/projects/DentzusuShop"
import { DatabaseCrud } from "./components/projects/DatabaseCrud"
import { ProductsAdmin } from "./components/projects/ProductsAdmin"

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;

`

export const Conteiner = styled.div`
  display: flex;
  position: relative;
  z-index: 20;
  top: 90px;
  width: 80%;
  height: 100%;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <BrowserRouter >
      <LanguageProvider>
        <Div>
          <Header />

          <Conteiner>
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/dentsuzu-shop" element={<DentzusuShop />} />
                <Route path="/projects/database-crud" element={<DatabaseCrud />} />
                <Route path="/projects/products-admin" element={<ProductsAdmin />} />
              </Routes>
            </Main>
          </Conteiner>
        </Div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App

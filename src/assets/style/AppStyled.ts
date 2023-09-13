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
  background-image: url(/src/assets/images/homeImg/backgraud.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
`
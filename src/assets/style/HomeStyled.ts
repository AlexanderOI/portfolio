import styled from "styled-components"

export const Div = styled.div`
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  max-height: 250px;
  width: 30%;
  margin: 15px;

  @media (max-width: 768px){
    flex-direction: row;
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    padding: 15px;
  }
`

export const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media (max-width: 768px){
    flex-direction: row;
    max-width: 100px;
    max-height: 100px;
  }
`

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;

  h1 {
    color: #249999;
    padding-bottom: 15px;
  }

  p {
    text-align: left;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  a {
    color: #fff;

    &:hover{
      color:#ffa;
    }
  }

  @media (max-width: 768px){
    width: 100%;
  }
  
`
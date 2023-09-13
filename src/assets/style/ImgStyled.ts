import { styled } from 'styled-components'

export const Div = styled.div`
  padding-top: 20px;
`

export const Img = styled.img`

  width: 60px;
  height: 60px;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
      transform: scale(1.3);
  }

  @media (max-width: 1460px){
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1110px){
    width: 40px;
    height: 40px;
  }
 
  @media (max-width: 768px){
    width: 30px;
    height: 30px;
  }
`
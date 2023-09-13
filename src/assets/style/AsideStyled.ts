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
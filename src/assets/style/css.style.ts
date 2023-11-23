import { css } from "styled-components";
import { theme } from "./themes";

export const center_flex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const between_flex_colum = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const TitleStyle = css`
  width: 100%;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: ${theme.dark.blue};
  border: 1px solid #e5e5e51a;

  @media (max-width: 768px){
    width: 95%;
  }
`
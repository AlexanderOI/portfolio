import styled, { keyframes } from "styled-components"

import { theme } from "../../assets/style/themes"
import { luminousBorder } from "../../assets/style/css.style"

export const Details = styled.div`
  display: inline-block;
  text-align: left;
  width: 100%;
  padding: 30px;

  h2 {
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: ${theme.dark.blue};
    border: 1px solid #e5e5e51a;
    box-shadow: 0px 0px 20px #e5e5e52f;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      margin: 5px;
      border: 1px solid ${theme.dark.blue};
      border-radius: 5px;
    }

    svg {
      background-color: ${theme.dark.blue};
      padding: 5px;
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
  }

  p {
    padding-bottom: 15px;

    b {
      color: ${theme.dark.blueWhite};
    }
  }

  h4 {
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: ${theme.dark.blue};
    border: 1px solid #e5e5e51a;
  }
`

export const NavBackGit = styled.nav`
  display: flex;

  a {
    display: flex;
    align-items: center;
    background-color: ${theme.dark.blue};
    color: ${theme.dark.withe};
    text-decoration: none;
    border-radius: 10px;
    margin-top: 15px;
    margin-right: 15px;
    width: 220px;
    height: 40px;

    svg {
      width: 40px;
      height: 40px;
      padding: 5px;
      margin-right: 5px;
    }

    &:hover {
      background-color: ${theme.dark.blueWhite}a1;
    }
  }

`

export const ProjectsImg = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-content: center;

  @media(max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  img {
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    max-width: 100%;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    height: 40%;
    width: 40%;
  }

  to {
    opacity: 1;
    height: 80%;
    width: 80%;
  }
`

export const DivEnlarge = styled.div`
  display: inline-block;
  position: fixed;
  width: 80%;
  height: 80%;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  z-index: 99;
  animation: ${fadeIn} 0.3s ease-in-out;

  @media(max-width: 768px) {
    display: none;
  }

  span {
    display: block;
    text-align: center;
    line-height: 40px;
    color: ${theme.dark.withe};
    width: 200px;
    height: 40px;
    margin: auto;
    ${luminousBorder};
  }

  img {
    height: 100%;
    width: 100%;
    background-color: ${theme.dark.blue};
    border: 1px solid #e5e5e51a;
    ${luminousBorder};
  }
`
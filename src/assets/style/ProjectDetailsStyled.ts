import { NavLink } from "react-router-dom"
import styled, { keyframes } from "styled-components"

export const Details = styled.div`
  display: inline-block;
  text-align: left;
  padding: 30px;

  p {
    padding-bottom: 15px;
  }

  a {
    color: #7b9de7;

    &:hover {
      color: #adc3f1;
    }
  }

  h4 {
    padding-top: 15px;
    padding-bottom: 5px;
  }

  ul {
    padding-left: 20px;
  }
`
export const Git = styled.a`
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 15px;
  width: 220px;
  height: 40px;

  i{
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }

  &:hover {
    background-color: #111111;
  }
`

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`

export const Img = styled.img`
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1)
  }
`

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  button {
    background-color: #fff;
    cursor: pointer;
    padding: 4px;
    width: 70px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover {
      background-color: #979696;
    }

    &:active {
      background-color: #768a8a;
    }
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    width: 50%;
  }
  to {
    opacity: 1;
    width: 100%;
  }
`

export const DivEnlarge = styled.div`
  display: inline-block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-in-out;

  span {
    display: block;
    text-align: center;
    background-color: #fff;
    width: 200px;
    height: 30px;
    color: #000;
    margin: auto;
  }

  img {
    width: 80%;
    border-radius: 30px
  }
`
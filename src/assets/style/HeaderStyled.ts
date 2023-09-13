import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderMain = styled.header`
  display: flex;
  background-color: rgba(36, 36, 36, 0.70);
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  border: 5px double #666666;
  width: 100%;
  height: 70px;
  margin-bottom: 30px;

  div {
    display: flex;
    padding-right: 1%;
    justify-content: center;
    align-items: center;
  }

  span {
    padding-right: 10px;
  }

  select {
    background-color: #ffffff;
    font-size: 14px;
    border: none;
  }

  i {
    display: inline-block;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin-left: 15px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      fill: #00416d;
      transform: scale(1.2);
    }
  }

  @media(max-width: 768px) {
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
`

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 5px;
  margin-left: 5px;
  font-weight: 500;
  font-size: 15px;

  &:hover {
    color: #00416d;
    width: 1%;
  }

  &.active {
    background-color: rgba(167, 167, 167, 0.5);
    border-radius: 15px;
    color: #00416d;
  }
`
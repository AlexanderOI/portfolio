import { styled } from "styled-components"
import { projectsInfo } from "../constants/PagesProjects"
import { NavLink } from "react-router-dom"

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 10px;
  gap: 20px;
  list-style: none;
  width: 100%;

  li {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: rgba(97, 97, 97, 0.5);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    max-height: 250px;
    padding: 20px 20px 20px 0px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    div {
      background-color: #202020;
      position: absolute;
      width: 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      padding-bottom: 5px;
      padding: 5px;
      bottom: 0;
      span:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.87);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export function Project() {
  return (
    <Ul>
      {projectsInfo['es'].map(info => (
        <li key={info.name}>
          <NavLinkStyled to={`/projects/${info.name.replace(' ', '-').toLocaleLowerCase()}`}>
            <h4>{info.name}</h4>
            <p>{info.description}</p>
            <div>
              {info.skills.map(skill => (
                <span>{skill}</span>
              ))}
            </div>
          </NavLinkStyled>
        </li>
      ))}
    </Ul>
  )
}

export function Projects() {
  return (
    <>
      <Project />
    </>
  )
}
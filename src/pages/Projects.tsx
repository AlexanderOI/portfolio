import { theme } from "../assets/style/themes"
import { projectsInfo } from "../constants/PagesProjects"
import { useLanguageContext } from "../context/LanguageProveder"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const ContainerProyects = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: ${theme.dark.darkblue};
    border: 1px solid #e5e5e51a;
  box-shadow: 0px 0px 20px #e5e5e52f;
  }
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  padding: 10px;
  gap: 20px;
  list-style: none;

  li {
    align-items: center;
    box-shadow: 0px 0px 5px #e5e5e51a;
    border: 1px solid #e5e5e51a;
    border-radius: 10px;
    height: 300px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 3px solid #00416d;
    }
    
    section {
      height: 80px;
      padding: 15px;
    }

    div {
      background-color: #868686;
      background: linear-gradient(to bottom, #8f8f8f, #c7c7c7, #818181, #333333);
      width: 100%;
      height: 180px;
      border-radius: 8px 8px 0px 0px;
      padding-bottom: 5px;
      padding: 5px;
      bottom: 0;
      span:not(:last-child) {
        margin-right: 10px;
      }
    }

    img {
      box-shadow: 0 0px 6px rgba(0, 0, 0, 0.5);
      padding-top: 10px;
      height: 150px;
      width: 280px;
    }

    span {
      
    }
  }
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.87);
`
export function Projects() {
  const { languagePage } = useLanguageContext()

  return (
    <ContainerProyects>
      <h2 id="#projects">Proyectos</h2>
      <Ul>
        {projectsInfo[languagePage].map(info => (
          <li key={info.name}>
            <NavLinkStyled to={`/projects/${info.name.replace(' ', '-').toLocaleLowerCase()}`}>
              <div>
                <img src={info.image} alt={info.description} />
              </div>
              <section>
                <h4>{info.name}</h4>
                <p>{info.description}</p>
                {info.skills.map(skill => (
                  <span key={skill}>{skill}</span>
                ))}
              </section>
            </NavLinkStyled>
          </li>
        ))}
      </Ul>
    </ContainerProyects>
  )
}
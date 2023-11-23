import { EyesIcon } from "../assets/icons/Icons"
import { TitleStyle } from "../assets/style/css.style"
import { theme } from "../assets/style/themes"
import { projectsInfo } from "../constants/PagesProjects"
import { useLanguageContext } from "../context/LanguageProveder"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const ContainerProyects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    ${TitleStyle}
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
    position: relative;
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

      h4 {
        padding-top: 10px;
      }

      p {
        padding-top: 10px;
      }
    }

    img {
      box-shadow: 0 0px 6px rgba(0, 0, 0, 0.5);
      padding-top: 10px;
      height: 150px;
      width: 280px;
    }
  }
`

const ImageDemonstration = styled.div`
  background-color: #868686;
  background: linear-gradient(to bottom, #8f8f8f, #c7c7c7, #818181, #333333);
  width: 100%;
  height: 180px;
  border-radius: 8px 8px 0px 0px;
  padding-bottom: 5px;
  padding: 5px;
  bottom: 0;
`

const SkillsUsed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  padding: 15px;
  bottom: 0px;

  i {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

const View = styled.div`
  position: absolute;
  margin: 0px 0px 5px 5px;

  svg {
    fill: ${theme.dark.blue};
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
      <h2 id="projects">{languagePage == 'en' ? 'Projects' : 'Proyectos'}</h2>
      <Ul>
        {projectsInfo[languagePage].map(info => (
          <li key={info.name}>
            <NavLinkStyled to={`/projects/${info.name.replace(' ', '-').toLocaleLowerCase()}`}>
              <View><EyesIcon /></View>
              <ImageDemonstration>
                <img src={info.image} alt={info.description} />
              </ImageDemonstration>
              <section>
                <h4>{info.name}</h4>
                <p>{info.description}</p>
                <SkillsUsed>
                  {info.skills.map((skill, index) => (
                    <i key={index}>{skill}</i>
                  ))}
                </SkillsUsed>
              </section>
            </NavLinkStyled>
          </li>
        ))}
      </Ul>
    </ContainerProyects>
  )
}
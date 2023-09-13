import { NavLinkStyled, Ul } from "../assets/style/ProjectStyled"
import { projectsInfo } from "../constants/PagesProjects"
import { useLanguageContext } from "../context/LanguageProveder"

export function Project() {
  const { languagePage } = useLanguageContext()

  return (
    <Ul>
      {projectsInfo[languagePage].map(info => (
        <li key={info.name}>
          <NavLinkStyled to={`/projects/${info.name.replace(' ', '-').toLocaleLowerCase()}`}>
            <section>
              <h4>{info.name}</h4>
              <p>{info.description}</p>
            </section>
            <div>
              <img src={info.image} alt={info.description} />
              {info.skills.map(skill => (
                <span key={skill}>{skill}</span>
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
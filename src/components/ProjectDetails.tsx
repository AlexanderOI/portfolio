import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GitHubIcon } from "../assets/icons/SocialIcons"

import { ProjectsData } from '../constants/ProcjectsDetails'
import { useLanguageContext } from "../context/LanguageProveder"
import { Details, DivEnlarge, ProjectsImg } from "./projects/style"


export function ProjectDetails() {
  const [enlarge, setEnlarge] = useState(false)
  const [indexImg, setIndexImg] = useState<number>(0)
  const { project, language } = useParams()

  const { languagePage, setLanguagePage } = useLanguageContext()

  const projectPage = project ? project : 'dentzusu-shop'

  useEffect(() => {
    setLanguagePage((prevLenguage) => {
      return prevLenguage ? prevLenguage : language ? language : 'en'
    })
  }, [language])

  const handleClickImg = (num: number) => {
    setEnlarge(!enlarge)
    setIndexImg(num)
  }

  return (
    <Details>
      <NavLink to={'/'}><button>{languagePage === 'en' ? 'Back' : 'Volver'}</button></NavLink>
      {ProjectsData[projectPage][languagePage].map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          <h4>{languagePage === 'en' ? 'Technologies used:' : 'Tecnologias utilizadas: '}</h4>
          <ul>
            {project.tools.map((tools) => (
              <li key={tools}>
                {tools}
              </li>
            ))}
          </ul>

          <h4>{languagePage === 'en' ? 'Characteristics' : 'Caracteristicas'}</h4>
          {project.characteristics.map((chatacteristic) => (
            <p key={chatacteristic.boldFont}>
              <b>{chatacteristic.boldFont}</b>
              {chatacteristic.paragraph}
            </p>
          ))}
          {enlarge &&
            <DivEnlarge onClick={() => handleClickImg(0)}>
              <span>

                {languagePage === 'en' ? 'Click to minimize' : 'Has click para minimizar'}
              </span>
              <img
                src={project.images[indexImg].name}
                alt={project.images[indexImg].alt} />
            </DivEnlarge>
          }


          <ProjectsImg>
            {project.images.map((img, index) => (
              <img
                key={img.name}
                src={img.name}
                alt={img.alt}
                onClick={() => handleClickImg(index)} />
            ))}
          </ProjectsImg>
          <a target="_blank" href={project.git}>
            <i>
              <GitHubIcon />
            </i>
            {languagePage === 'en' ? 'View project on Github' : 'Ver proyecto en GitHub'}
          </a>
        </div>
      ))}
    </Details>
  )
}
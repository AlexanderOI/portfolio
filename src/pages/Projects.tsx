import { styled } from "styled-components"
import { projectsInfo } from "../constants/PagesProjects"

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 10px;
  gap: 20px;
  list-style: none;

  li {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: rgba(97, 97, 97, 0.5);
    border-radius: 20px;
    max-height: 250px;
    padding: 20px;

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

export function Project() {
  return (
    <Ul>
      {projectsInfo['es'].map(info => (
        <li key={info.name}>
          <h4>{info.name}</h4>
          <p>{info.description}</p>
          <div>
            {info.skills.map(skill => (
              <span>{skill}</span>
            ))}
          </div>
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
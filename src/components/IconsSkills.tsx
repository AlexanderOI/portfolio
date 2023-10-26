import { styled } from 'styled-components';
import { CSSIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, PythonIcon, ReactIcon, SQLiteIcon, TypeScriptIcon } from '../assets/icons/SkillsIcons';
import { theme } from '../assets/style/themes';

export const SectionSkills = styled.section`
  padding-top: 20px;
  background-color: ${theme.dark.darkblue};
  border: 1px solid #e5e5e51a;
  box-shadow: 0px 0px 20px #e5e5e52f;
  margin: 60px 0px 100px 0px;
  
  h2 {
    color: ${theme.dark.darkWithe};
    font-size: 2em;
    margin-bottom: 15px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    justify-content: center;
    place-items: center;
    margin-bottom: 10px;
  }
  @media (max-width: 768px){
    h2 {
      font-size: 1.5em;
    }
    
    div {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1em;
    margin-top: 10px;
    width: 110px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #95b8cf;
  }

  @media (max-width: 768px){
      width: 80px;
      font-size: 0.8em;
  }

  svg {
    width: 60px;
    height: 60px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    @media (max-width: 1460px){
      width: 50px;
      height: 50px;
    }

    @media (max-width: 1110px){
      width: 40px;
      height: 40px;
    }
  
    @media (max-width: 768px){
      width: 30px;
      height: 30px;
    }

    &:hover {
    transform: scale(1.3);
  }
  }
`;

export function IconsSkills() {
  return (
    <SectionSkills>
      <h2>Skills</h2>
      <div>
        <Icon><JavaScriptIcon /><span>JavaScript</span></Icon>
        <Icon><TypeScriptIcon /><span>TypeScript</span></Icon>
        <Icon><PythonIcon /><span>Python</span></Icon>
        <Icon><HTMLIcon /><span>HTML</span></Icon>
        <Icon><CSSIcon /><span>CSS</span></Icon>
        <Icon><ReactIcon /><span>React</span></Icon>
        <Icon><SQLiteIcon /><span>SQLite</span></Icon>
        <Icon><GitIcon /><span>Git</span></Icon>
        <Icon><GitHubIcon /><span>GitHub</span></Icon>
      </div>
    </SectionSkills>
  );
}

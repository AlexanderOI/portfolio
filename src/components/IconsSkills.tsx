import { styled } from 'styled-components';
import { CSSIcon, ExpressIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, NodeIcon, PythonIcon, QtDesignerIcon, ReactIcon, SQLiteIcon, TypeScriptIcon } from '../assets/icons/SkillsIcons';
import { theme } from '../assets/style/themes';
import { TitleStyle } from '../assets/style/css.style';

export const SectionSkills = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  /* border: 3px solid #e5e5e51a;
  border-radius: 15px; */
  margin: 60px 0px 60px 0px;
  
  h2 {
    margin: auto;
    color: ${theme.dark.white};
    font-size: 2em;
    ${TitleStyle}
    margin-bottom: 50px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(50px, auto);
    justify-content: center;
    place-items: center;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
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
    width: 110px;
  }

  svg {
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-in-out;
  
    /* @media (max-width: 768px){
      width: 60px;
      height: 60px;
    } */

    &:hover {
    transform: scale(1.3);
  }
  }
`

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
        <Icon><NodeIcon /><span>Node</span></Icon>
        <Icon><ExpressIcon /><span>Express</span></Icon>
        <Icon><SQLiteIcon /><span>SQLite</span></Icon>
        <Icon><QtDesignerIcon /><span>QtDesigner</span></Icon>
        <Icon><GitIcon /><span>Git</span></Icon>
        <Icon><GitHubIcon /><span>GitHub</span></Icon>
      </div>
    </SectionSkills>
  );
}

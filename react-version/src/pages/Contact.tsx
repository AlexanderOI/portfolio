import { useLanguageContext } from "../context/LanguageProveder";
import { styled } from "styled-components"
import { TitleStyle, center } from "../assets/style/css.style";
import { ConfirmIcon, CopyIcon, EmailIcon } from "../assets/icons/Icons";
import { theme } from "../assets/style/themes";
import { useState } from "react";

export const SectionContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 50px;
  width: 100%;
  margin-bottom: 100px;
  
  h2{
    ${TitleStyle}
  }

  div {
    height: 45px;
    display: flex;
    align-items: center;
  }

  span {
    ${center}
    margin: 0px 15px 0px 15px;
    padding: 0px 15px 0px 15px;
    background-color: #2c3847;
    height: 100%;
    border-radius: 5px;
  }
    
  button {
    ${center}
    background-color: ${theme.dark.blue};
    border: none;
    cursor: pointer;
    color: ${theme.dark.white};
    height: 100%;
    width: 45px;
    border-radius: 5px;
  }

  i {
    ${center}
    background-color: #2c3847;
    color: ${theme.dark.white};
    height: 100%;
    width: 45px;
    border-radius: 5px;
  }

  svg {
    fill: ${theme.dark.white};
  }
`

export function Contact() {
  const { languagePage } = useLanguageContext()
  const [isCopied, setIsCopied] = useState(false)
  const emailContent = 'alexanderoi037@gmail.com'

  const handleCopyClick = () => {
    navigator.clipboard.writeText(emailContent)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch((err) => console.error('Error copying to clipboard', err))
  };

  return (
    <SectionContact>
      <h2 id="contact-me">{languagePage === 'en' ? 'Contact me: ' : 'Contáctame: '}</h2>
      <div>
        <i><EmailIcon /></i>
        <span>{emailContent}</span>
        <button onClick={handleCopyClick} disabled={isCopied}>{isCopied ? <ConfirmIcon /> : <CopyIcon />}</button>
      </div>
    </SectionContact>
  )
}
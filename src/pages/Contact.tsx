import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../context/LanguageProveder";
import { inputLanguage } from "../constants/inputLenguaje";
import { formItIsValid, languageMessages } from "../constants/ContactLenguage";
import { styled } from "styled-components"
import { theme } from "../assets/style/themes";
import { TitleStyle } from "../assets/style/css.style";

export const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 60px;
  margin-bottom: 50px;
  width: 100%;

  p {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  h2 {
    display: block;
    ${TitleStyle}
  }

  section {
    width: 60%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    display: flex;
    color: ${theme.dark.withe};
    background-color: transparent;
    height: 30px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    border-bottom: 3px solid ${theme.dark.blue};

    &:focus {
      background: linear-gradient(to top, ${theme.dark.blue}, ${theme.dark.black});
    }
  }

  textarea {
    height: 200px;
    resize: none;
  }

  label {
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    height: 40px;
    color: ${theme.dark.withe};
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${theme.dark.blue};
    transition: transform 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;


    &:hover, &:active {
      background-color: #248cd1a1;
    }
  }

  strong {
    display: block;
    color: #000;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media(max-width: 768px){
    section {
      width: 80%;
    }
  }

`

export function Contact() {
  const { languagePage } = useLanguageContext()
  const refForm = useRef<HTMLFormElement>(null)

  const [shippingConfirm, setShippingConfirm] = useState('')
  const [emailCurrent, setEmailCurrent] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  })

  const [formValidation, setFormValidation] = useState({
    isValidEmail: true,
    isValidForm: false,
    isEmailSent: false
  })

  const inputLanguageCurrent = inputLanguage[languagePage]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = regex.test(formData.email)
    const isValidForm = formData.email.trim() === '' || formData.message.trim() === '' || formData.name.trim() === '' || formData.subject.trim() === ''
    console.log(formValidation.isValidEmail, formValidation.isValidForm)
    setFormValidation({
      isValidEmail: isValidEmail,
      isValidForm: isValidForm,
      isEmailSent: false
    })

    return !isValidEmail || isValidForm;
  }


  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validateForm()) {
      return
    }

    try {
      const response = await fetch('https://alexander-oi-back-vw2h-dev.fl0.io/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      setEmailCurrent(formData.email)

      setFormData({
        name: '',
        email: '',
        message: '',
        subject: '',
      })

      if (response.ok) {
        const successMessage = languageMessages[languagePage].successMessage.replace('{email}', formData.email)
        setShippingConfirm(successMessage)
      } else {
        const serverResponse = await response.json()

        if (serverResponse.error) {
          console.log('error response:', serverResponse.error)
          setFormValidation({
            isValidEmail: true,
            isValidForm: false,
            isEmailSent: true
          })
          setEmailCurrent('')
        }
      }
    } catch (error) {

      const errorMessage = languageMessages[languagePage].errorMessage
      setShippingConfirm(errorMessage)
    }
  }

  useEffect(() => {
    if (emailCurrent) {
      const successMessage = languageMessages[languagePage].successMessage.replace('{email}', emailCurrent)
      setShippingConfirm(successMessage)
    }
  }, [languagePage])


  return (
    <DivContact>
      <h2 id="contact-me">{languagePage === 'en' ? 'Contact me' : 'Contáctame'}</h2>

      {formValidation.isValidEmail && formValidation.isValidForm && <strong>{formItIsValid[languagePage].empty}</strong>}
      {!formValidation.isValidEmail && <strong>{formItIsValid[languagePage].email}</strong>}
      {formValidation.isValidEmail && emailCurrent && <strong>{shippingConfirm}</strong>}
      {formValidation.isEmailSent && <strong>{formItIsValid[languagePage].error}</strong>}

      <section>
        <form ref={refForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">{inputLanguageCurrent.name.label}</label>
            <input
              id="name"
              name="name"
              placeholder={inputLanguageCurrent.name.placeholder}
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label htmlFor="email">{inputLanguageCurrent.gmail.label}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={inputLanguageCurrent.gmail.placeholder}
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">{inputLanguageCurrent.subject.label}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={inputLanguageCurrent.subject.placeholder}
              value={formData.subject}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="message">{inputLanguageCurrent.message.label}</label>
            <textarea
              id="message"
              name="message"
              placeholder={inputLanguageCurrent.message.placeholder}
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <button type="submit">{languagePage === 'en' ? 'Send' : 'Enviar'}</button>
        </form>
      </section>
    </DivContact>
  )
}
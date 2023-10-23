import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../context/LanguageProveder";
import { inputLanguage } from "../constants/inputLenguaje";
import { formItIsValid, languageMessages } from "../constants/ContactLenguage";
import { styled } from "styled-components"

export const DivContact = styled.div`
  display: inline-block;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 50px;

  p {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  h3 {
    padding-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    display: flex;
    width: 80%;
    height: 30px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
  }

  textarea {
    display: flex;
    max-width: 80%;
    width: 80%;
    height: 200px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
  }

  label {
    margin-bottom: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
     background-color: #979696; 
    }

    &:active {
     background-color: #979696; 
    }
  }

  strong {
    display: block;
    color: #000;
    background-color: #fff;
    max-width: 80%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media(max-width: 768px){
    input {
      width: 100%;
    }

    textarea {
      width: 100%;
      max-width: 100%;
    }

    strong {
      max-width: 100%;
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
      <div>
        <h3>{languagePage === 'en' ? 'Contact me' : 'Contactame'}</h3>
        <p>{languagePage === 'en' ? 'You can write to my Gmail or complete the form' : 'Puedes escribirme a mi Gmail o completa el formulario'}</p>
        <p>Gmail: alexanderoi037@gmail.com</p>
      </div>
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
              required
            />
          </div>
          <button type="submit">{languagePage === 'en' ? 'Send' : 'Enviar'}</button>
        </form>
      </section>
    </DivContact>
  )
}
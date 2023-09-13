import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../context/LanguageProveder";
import { inputLanguage } from "../constants/inputLenguaje";
import { DivContact } from "../assets/style/ContactStyled";
import { formItIsValid, languageMessages } from "../constants/ContactLenguage";

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
    const isValidEmail = regex.test(formData.email);
    const isValidForm = formData.email.trim() === '' || formData.message.trim() === '' || formData.name.trim() === '' || formData.subject.trim() === '';

    setFormValidation({
      isValidEmail: isValidEmail,
      isValidForm: isValidForm,
    });

    return !isValidEmail || isValidForm;
  }


  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validateForm()) {
      return;
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
        const errorMessage = languageMessages[languagePage].errorMessage
        setShippingConfirm(errorMessage)
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
      {!formValidation.isValidEmail && emailCurrent && <strong>{shippingConfirm}</strong>}


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
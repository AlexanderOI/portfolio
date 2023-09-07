import { useState } from "react";
import { styled } from "styled-components"

const DivContact = styled.div`
  display: inline-block;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 50px;

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
    height: 40px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
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
  }
`

export function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    subject: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <DivContact>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Gmail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example03@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto del mensaje"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </DivContact>
  )
}
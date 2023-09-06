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

  input {
    display: flex;
    width: 80%;
    height: 40px;
    padding-left: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  span {
    margin-bottom: 10px;
  }
`

export function Contact() {
  return (
    <DivContact>
      <h3>Contact me</h3>
      <section>
        <form action="">
          <span>Gmail</span>
          <input type="text" placeholder="example03@gamil.com" />
          <span>Mensaje</span>
          <input type="text" placeholder="example03@gamil.com" />
          <span>Asunto</span>
          <input type="text" placeholder="example03@gamil.com" />
        </form>
      </section>
    </DivContact>
  )
}
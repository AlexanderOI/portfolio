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
    cursor: pointer;

    &:hover {
     background-color: #979696; 
    }
  }

  @media(max-width: 768px){
    input {
      width: 100%
    }

    textarea {
      width: 100%;
      max-width: 100%;
    }
  }

  strong {
    display: block;
    color: #000;
    background-color: #fff;
    max-width: 80%;
    border-radius: 10px;
    border: 3px double #000000;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
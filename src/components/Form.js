import React, { useState } from "react";
import styled from "styled-components";

const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  .form__container {
    width: 540px;
    border: 1px solid black;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 10px;
    label {
      font-weight: 700;
    }
    input {
      width: 100%;
      height: 2rem;
      margin-top: 0.2rem;
      border-radius: 5px;
      border: 2px solid rgb(174, 184, 192);
      background: rgb(244, 248, 251);
    }
    .form__input--wrapper > div {
      margin-bottom: 0.75rem;
    }
    .form__textbox {
      display: flex;
      flex-direction: column;
    }
    .form__submit {
      input {
        width: 100%;
        height: 4rem;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 10px;
        background: rgb(71, 90, 105);
        color: rgb(244, 248, 251);
        box-shadow: none;
        cursor: pointer;
        :hover {
          background: #ff8b8b;
        }
      }
    }
    #story {
      margin-top: 0.2rem;
      height: 5rem;
      border-radius: 5px;
      border: 2px solid rgb(174, 184, 192);
      background: rgb(244, 248, 251);
    }
  }
`;

function Form({ submitHandler }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const changeHandler = (e, set) => set(e.target.value);

  return (
    <FormComponent>
      <section className="form__container">
        <form action="" method="get" className="form">
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <label>Enter your name: </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => changeHandler(e, setName)}
              />
            </div>
            <div className="form__input--title">
              <label>Enter your title: </label>
              <input
                type="text"
                name="name"
                id="title"
                required
                onChange={(e) => changeHandler(e, setTitle)}
              />
            </div>
            <div className="form__textbox">
              <label>Your question: </label>
              <textarea
                id="story"
                name="story"
                placeholder="질문을 작성하세요"
                required
                onChange={(e) => changeHandler(e, setQuestion)}
              ></textarea>
            </div>
          </div>
          <div
            className="form__submit"
            onClick={(e) => submitHandler(e, name, title, question)}
          >
            <input type="submit" value="submit" />
          </div>
        </form>
      </section>
    </FormComponent>
  );
}

export default Form;

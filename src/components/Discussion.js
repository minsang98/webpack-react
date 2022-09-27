import React from "react";
import styled from "styled-components";
const DiscussionComponent = styled.div`
  display: flex;
  justify-content: center;
  .discussion__container {
    padding: 0;
    margin-top: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 540px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(238, 238, 238);
    :nth-child(1) {
      background: rgb(213, 213, 213);
    }
    .discussion__avatar--wrapper {
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
    .discussion__avatar--image {
      border-radius: 50%;
      width: 48px;
    }
    .discussion__content {
      flex-grow: 1;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: space-between;
    }
    .discussion__title {
      margin-top: 0.5rem;
      a {
        font-size: 1.05rem;
        text-decoration: none;
        color: #2c3639;
        font-weight: 700;
        :visited {
          color: #8b938b;
        }
      }
    }
    .discussion__information {
      margin-top: 1rem;
      display: flex;
      justify-content: end;
      padding-bottom: 0.5rem;
    }
    .discussion__answered {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
`;

function Discussion({ data }) {
  const { avatarUrl, author, answer, createdAt, id, title, url } = data;
  return (
    <DiscussionComponent>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={avatarUrl}
            alt={author}
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={url}>{title}</a>
          </h2>
          <div className="discussion__information">
            {`${author} / ${createdAt}`}
          </div>
        </div>
        <div className="discussion__answered">
          <p>{answer ? "☑" : "☐"}</p>
        </div>
      </li>
    </DiscussionComponent>
  );
}

export default Discussion;

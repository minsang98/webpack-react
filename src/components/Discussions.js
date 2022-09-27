import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Discussion from "./Discussion";
import Pagination from "./Pagination";

const DiscussionsComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .discussions__container {
    padding: 0;
  }
`;

function Discussions({ data, filterData, selectPage }) {
  const noticeData = {
    author: "kimploo",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    title: "[notice] 좋은 질문하는 법",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/6",
    createdAt: "2022-04-22T14:08:33Z",
    answer: "done",
  };

  return (
    <DiscussionsComponent>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <Discussion data={noticeData} />
          {filterData.map((v) => (
            <Discussion key={v.id} data={v} />
          ))}
        </ul>
      </section>
      <Pagination data={data} selectPage={selectPage} />
    </DiscussionsComponent>
  );
}

export default Discussions;

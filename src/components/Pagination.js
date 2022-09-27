import React from "react";
import styled from "styled-components";
const PaginationComponent = styled.div`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    li {
      display: flex;
      margin: 0.5rem;
      cursor: pointer;
    }
  }
`;

function Pagination({ data, selectPage }) {
  const pageLength = Array(Math.ceil(data.length / 9))
    .fill()
    .map((_, i) => i + 1);
  return (
    <PaginationComponent>
      <ul>
        {pageLength.map((v) => (
          <li key={v} onClick={() => selectPage(v)}>
            {v}
          </li>
        ))}
      </ul>
    </PaginationComponent>
  );
}

export default Pagination;

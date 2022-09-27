import React from "react";
import styled from "styled-components";
const HeaderComponent = styled.div`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <header>
        <h2>My Agoar States</h2>
      </header>
    </HeaderComponent>
  );
}

export default Header;

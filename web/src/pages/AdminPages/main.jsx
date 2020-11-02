import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
background: var(--color-primary);
color: var(--color-secundary);
`;

const PageMain = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  );
}

export default PageMain;
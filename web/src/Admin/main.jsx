import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './styles.css'

const Main = styled.main`
background: var(--color-primary);
color: var(--color-secundary);
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: space-evenly;
`;

const PageMain = ({ children }) => {
  return (
    <Main>
      <header>
        <Link to="/admin/andamento">Andamento</Link>
        <Link to="/login">Produtos (construindo)</Link>
        <Link to="/login">Categorias (construindo)</Link>
      </header>
      {children}
    </Main>
  );
}

export default PageMain;
import React from 'react';
import styled from 'styled-components';

import PageHeader from '../PageHeader';
import Footer from '../Footer';

const Main = styled.div`
    width: 100%;

    position: absolute;
    top: 20.4rem;
    
    @media(min-width: 1100px){
        top: 18.4rem;

    }
`;

function PageRoot({children}){
    return(
        <>
            <PageHeader />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
};


export default PageRoot;
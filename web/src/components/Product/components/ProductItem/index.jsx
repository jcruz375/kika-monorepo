import React from 'react';
import styled from 'styled-components';

import './styles.css';

const Card = styled.div`
width: 30rem;
height: 38rem;
margin-right: 3.6rem;
padding:0 10px;


display: flex;
flex-direction: column;
align-items: center;

border-radius: 1.9rem;

background: var(--color-box-base);

font: 400 1.8rem Nunito;
color: var(--color-text-title);

@media(min-width: 1100px){
    width: 30rem;
    height: 40rem;

    margin-right: 15rem;

    padding:0 20px;
}

`


function ProductItem({ sandwich, AddSandwichInBasket }) {


    return (
        <Card>
            <span className="img-container">
                <img src={sandwich.src}
                    alt={`Foto do ${sandwich.name}`}
                />
            </span>
            <h2>{sandwich.name}</h2>

            <p id="description">{sandwich.description}</p>

            <p id="price">{`R$ ${sandwich.price},00 `}</p>

            <form onSubmit={(e) => {
                e.preventDefault();
                AddSandwichInBasket(sandwich);
            }} >
                <button type="submit">ADCIONAR</button>
            </form>
        </Card>
    );
};


export default ProductItem;

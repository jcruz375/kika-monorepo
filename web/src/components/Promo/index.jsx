import React from 'react';
import styled from 'styled-components';

import './styles.css'

const PromoCard = styled.div`
width: 45rem;
height: 40rem;
padding: 10px;

margin-left: 15%;
margin-top:20%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

border-radius: 1.9rem;

background: var(--color-box-base);

font: 400 2rem Nunito;
color: var(--color-text-title);

@media(min-width: 1100px){
    width: 80rem;
    height: 50rem;

    font: 400 3rem Nunito;
    
    margin-left: 22%;
    margin-top:5%;

    padding:0 20px;
}

`

function PromoItem({ promo, AddPromoInBasket }) {
    return (
        <PromoCard id="card">
            <h1 className="Promo-title"> {promo.name} </h1>
            <span>
                <img src={promo.src} alt="Imagem da promo" />
            </span>
            <p>{promo.description}</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                AddPromoInBasket(promo)
            }} >

                <button type="submit" className="btn btn-warning">Pedir Essa!</button>
            </form>
        </PromoCard>
    )
};

export default PromoItem;
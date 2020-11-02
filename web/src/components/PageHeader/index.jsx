import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'

import './styles.css';

function PageHeader() {
    return (
        <div className="page-header">
            <div className="header-content">
                <span>
                    <img src={logoImg} alt="Kika's logo" />
                </span>
                <div className="button-block">
                    <Link to="/"><p>HOME</p></Link>
                    <Link to="/cardápio"><p>CARDÁPIO</p></Link>
                    <Link to="/delivery"><p>DELIVERY</p></Link>
                    <Link to="/promo"><p>PROMO</p></Link>
                    <Link to="/pedidos"><p>PEDIDOS</p></Link>
                    <Link to="/contato"><p>CONTATO</p></Link>
                </div>
            </div>
        </div>
    )
};


export default PageHeader;
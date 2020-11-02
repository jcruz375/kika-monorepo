import React, { useState, useEffect } from 'react';

import PageRoot from '../../components/PageRoot';
import PromoItem from '../../components/Promo';
import Bag from '../../components/Product/components/Basket';
import api from '../../services/api';

/*const promos = [
    {
        id: '001',
        price: '30',
        src: 'https://www.selecoes.com.br/wp-content/uploads/2019/05/hamburguer-760x450.jpg',
        name: 'Para toda a familia',
        description: 'Peça agora 3 x-bacons 1.0 por apenas R$30'
    },
    {
        id: '002',
        price: '15',
        src: 'https://www.selecoes.com.br/wp-content/uploads/2019/05/hamburguer-760x450.jpg',
        name: '2 por 15',
        description: 'Peça agora 2 x-bacon por 15$'
    },
]*/

function PromoPage() {
    const [basket, setBasket] = useState([]);
    const [pricesGroup, setPricesGroup] = useState([]);
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        api.get('/promo').then(response => {
            setPromos(response.data);
        })
    }, [])

    const handleAddPromoInBasket = (promo) => {
        setBasket([
            ...basket,
            promo
        ]);
        const price = parseInt(promo.price);
        setPricesGroup([
            ...pricesGroup,
            price
        ])
    }
    var totalPrice = 0;
    if (basket) {
        for (var i = 0; i < pricesGroup.length; i++) {
            totalPrice += pricesGroup[i];
        };
    } else {
        totalPrice = 0;
    }

    function handleCleanBasket() {
        setBasket([]);
        setPricesGroup([]);
    };
    return (
        <PageRoot>
            <Bag
                basket={basket}
                cleanBasket={handleCleanBasket}
                totalPrice={totalPrice}
                basketType="promos"
            />
            {promos.map((promo) => {
                return <PromoItem
                    key={promo.id}
                    promo={promo}
                    AddPromoInBasket={handleAddPromoInBasket}
                />
            })}
        </PageRoot>
    );
};


export default PromoPage;
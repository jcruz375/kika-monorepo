import React, { useState, useEffect } from 'react';

import ProductItem from './components/ProductItem';
import api from '../../services/api';
import './styles.css'

function ProductsContainer({ categories, AddBasket }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/product').then(response => {
            setProducts(response.data);
        })
    }, [])
    return (
        <>
            {categories.map(category => {
                const categoriesProducts = products.filter(product => product.CategoryId === category.id );
                return (
                    <section key={categories.indexOf(category)} id="products-container">
                        <h1>
                            {category.name}
                        </h1>
                        <div className="products-group">
                            {categoriesProducts.map((sandwich) => {
                                return <ProductItem
                                    key={sandwich.id}
                                    sandwich={sandwich}
                                    AddSandwichInBasket={AddBasket}
                                />
                            })}

                        </div>
                    </section>
                )
            })}
        </>
    );
};


export default ProductsContainer;
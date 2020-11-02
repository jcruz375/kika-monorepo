import React, { useState, useEffect } from 'react';

import PageRoot from '../../components/PageRoot';
import ProductsContainer from '../../components/Product';
import Bag from '../../components/Product/components/Basket';
import api from '../../services/api';



function MenuPage() {
	const [basket, setBasket] = useState([]);
	const [pricesGroup, setPricesGroup] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		api.get('categories').then(response => {
			const total = response.data
			setCategories(total);
		});
	}, []);


	const handleAddSandwichInBasket = (sandwich) => {
		setBasket([
			...basket,
			sandwich
		]);
		const price = parseInt(sandwich.price);
		setPricesGroup([
			...pricesGroup,
			price
		]);
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
		<>
			<PageRoot>
				<Bag
					basket={basket}
					cleanBasket={handleCleanBasket}
					totalPrice={totalPrice}
					basketType="products"
				/>

				<ProductsContainer
					AddBasket={handleAddSandwichInBasket}
					categories={categories}
				/>

			</PageRoot>
		</>
	);
};


export default MenuPage;
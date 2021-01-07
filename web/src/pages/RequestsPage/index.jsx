import React, { useState, useEffect} from 'react';
import PageRoot from '../../components/PageRoot';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';
import './styles.css';
import api from '../../services/api';


function RequestsPage() {
  const [client, setClient] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [observations, setObservations] = useState('');
  const [requestsNames, setRequetsNames] = useState([]);

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const promos = JSON.parse(localStorage.getItem("promos")) || [];
  const productsPrice = JSON.parse(localStorage.getItem("productsPrice")) || [];
  const promosPrice = JSON.parse(localStorage.getItem("promosPrice")) || [];
  const pricesGroup = [productsPrice, promosPrice];

  useEffect(() => {
    const orderAndPromos = products.concat(promos);
    const names = orderAndPromos.map(request => {
      return request.name
    });
    setRequetsNames(names)
  }, []);
  //console.log(requestsNames)
  
  var totalPrice = 0;
  for (var i = 0; i < pricesGroup.length; i++) {
    totalPrice += pricesGroup[i];
  };

  function handleCleanOrderItems() {
    localStorage.setItem("products", JSON.stringify([]));
    localStorage.setItem("promos", JSON.stringify([]));
    localStorage.setItem("productsPrice", JSON.stringify([]));
    localStorage.setItem("promosPrice", JSON.stringify([]));

  }
  
  function handleCreateOrder() {
    api.post('orders', {
      client,
      contact,
      adress: address,
      payment: payment,
      observations,
      products: JSON.stringify(requestsNames),
      price: totalPrice
    }).then(() => {
      alert(`pedido realizado! Preço: R$${totalPrice} + Taxa de entrega!`)
    }).catch((err) => {
      console.log(err)
      alert('Erro no cadastro do pedido, por favor conclua seu pedido pelo nosso whatsapp!');
    });
  }
  return (
    <PageRoot>
      <div className="container" id="order-data">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleCreateOrder();
          handleCleanOrderItems()
        }}>
          <Input
            name="client"
            label="Nome completo: "
            onChange={(e) => { setClient(e.target.value) }}
          />
          <Input
            name="contact"
            label="WhatsApp: "
            onChange={(e) => { setContact(e.target.value) }}
          />
          <Input
            name="addres"
            label="Endereço: "
            onChange={(e) => { setAddress(e.target.value) }}
          />
          <Select
            name="payment"
            label="Forma de pagemento:"
            value={payment}
            onChange={(e) => { setPayment(e.target.value) }}
          />
          <Textarea
            name="observations"
            label="Observações: "
            value={observations}
            onChange={(e) => { setObservations(e.target.value) }}
          />
          <button type="submit" className="btn btn-warning btn-block button">CONCLUIR PEDIDO</button>
        </form>
        <br />
        <hr />
        <div className="card basket">
          <div className="card-header basket-header">
            <p>SEUS PEDIDOS</p>
            <p>Preço: R${totalPrice}</p>
          </div>
          <div className="card-body basket-body">
            <Link to="/cardápio" onClick={handleCleanOrderItems} className="btn btn-danger button">Excluir </Link>
            <div className="basket-body-content">
              <p>Itens</p>
              {products.map(productItem => {
                return (
                  <p key={products.indexOf(productItem)}>
                    {`${productItem.name}  -  R$${productItem.price}`}
                  </p>
                )
              })}
              <Link to="/cardápio" className="btn btn-warning button">Adicionar mais produtos!</Link>
            </div>
            <hr />
            <div className="basket-body-content">
              <p>Combos</p>
              {promos.map(promoItem => {
                return (
                  <p key={promos.indexOf(promoItem)}>
                    {`${promoItem.name} - R$${promoItem.price}`}
                  </p>
                )
              })}
              <Link to="/promo" className="btn btn-warning button">Adicionar mais Combos!</Link>
            </div>
          </div>
        </div>
      </div>
    </PageRoot>
  );
};


export default RequestsPage;
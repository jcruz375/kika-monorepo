import React, { useState, useEffect } from 'react';
import PageMain from '../../Admin/main';
import api from '../../services/api';

import './styles.css'

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders-await').then(response => {
      setOrders(response.data)
    })
  }, []);

  function handleConfirmOrder(orderId) {
    api.patch(`/ordersUpdate/${orderId}`, {
      Status: true,
    })
      .then(response => {
        console.log(response);
        alert('Pedido confirmado para entrega');
      })
      .catch((err) => {
        console.log(err);
        return alert('erro ao fazer esta operação');
      });
  };

  function handleCancelOrder(orderId) {
    api.patch(`/ordersUpdate/${orderId}`, {
      Status: 3,
    })
      .then(response => {
        console.log(response);
        alert('Pedido cancelado!');
      })
      .catch((err) => {
        console.log(err);
        return alert('erro ao fazer esta operação');
      });
  };

  return (
    <PageMain>
      <div className="orders-container">
        {orders.map((order, index) => {
          const orderRequests = JSON.parse(order.products);
          return (
            <div key={index} className="card order-card">
              <div className="card-header">
                {`${order.client} ------> R$${order.price},00`}
              </div>
              <div className="card-body">
                {orderRequests}
                <hr />
                {`
              ${order.contact} ---
              ${order.adress}
              `}
                <hr />
                <div className="order-actions">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleConfirmOrder(order.id)
                  }}>
                    <button type="submit" className="btn btn-success">Confirmar</button>
                  </form>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleCancelOrder(order.id)
                  }}>
                    <button type="submit" className="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </div>
            </div>)
        })}

      </div>
    </PageMain>
  );
};

export default AdminOrders;
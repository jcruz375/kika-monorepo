import React, { useState, useEffect } from 'react';
import PageMain from '../../Admin/main';
import api from '../../services/api';

import './styles.css'

const AdminCanceledOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders-canceled').then(response => {
      setOrders(response.data)
    })
  }, []);

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
                <div className="order-status">
                  {
                    order.Status == 3 
                    ? <h1>cancelado</h1>
                    : <h1>ERRO</h1>
                  }
                </div>
              </div>
            </div>)
        })}

      </div>
    </PageMain>
  );
};

export default AdminCanceledOrders;
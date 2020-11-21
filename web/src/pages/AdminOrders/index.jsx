import React from 'react';
import PageMain from '../../Admin/main';

import './styles.css'

const AdminOrders = () => {
  return (
    <PageMain>
      <div className="orders-container">
        <div className="card order-card">
          <div className="card-header">
            Cruz  -------->  preço:R$25
        </div>
          <div className="card-body">
            x-salada; x-salada;
          <hr />
          11988406431
          Avenida orfeo paravente, 182
          <hr />
            <div className="order-actions">
              <button className="btn btn-success">Confirmar</button>
              <button className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </PageMain>
  );
};

export default AdminOrders;
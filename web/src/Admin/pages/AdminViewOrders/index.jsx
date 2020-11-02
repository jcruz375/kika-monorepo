import React from 'react';
import PageMain from '../main';

const AdminViewOrders = () => {
  return (
    <PageMain>
      <div id="content">
        <table>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Pedido/Itens</th>
            <th>Preço</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </table>
      </div>
    </PageMain>
  );
}

export default AdminViewOrders;
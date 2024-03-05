import React, { useState } from 'react';
import '../Ordenes/OrdenesPanel.css';
import OrdenColumn from '../OrdenCard/OrdenColumn';
import ordersData from '../../data/ordersData';

const OrdenesPanel = () => {
  const [orders, setOrders] = useState(ordersData);
  console.log(orders);

  return (
    <section className='recent-orders-section'>
      <div className='title-orders-div'>
        <h3>Ordenes Recientes</h3>
        <button className='view-all-orders-btn'>Ver todas</button>
      </div>
      <div>
        <table className='table-orders'>
          <thead className='tb-head'>
            <tr className='tb-head-row'>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Producto</th>
              <th>Telefono</th>
              <th>Precio</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='tbody-table-orders'>
            {/* Mapeo de ordenes aqui :D */}
            {
              orders.map((order) => {
                return (
                  <OrdenColumn key={order.order_number} order={order} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default OrdenesPanel
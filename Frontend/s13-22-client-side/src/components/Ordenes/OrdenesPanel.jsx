import React, { useState } from 'react';
import '../Ordenes/OrdenesPanel.css';
import OrdenColumn from '../OrdenCard/OrdenColumn';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const OrdenesPanel = () => {
  const { pending, setPending } = useGlobalContext();
  console.log(pending);

  const ordenLista = (order) => {
    const updatedOrders = pending.map((item) => {
      if (item.id === order.id) {
        order.state = "completed";
      }
      return item;
    })
    setPending(updatedOrders);
  }

  return (
    <section className='recent-orders-section'>
      <div className='title-orders-div'>
        <h3>Ordenes Recientes</h3>
        <button className='view-all-orders-btn'><Link to={'/adminPanel/orders'} className='link-po-ad'>Ver todas</Link></button>
      </div>
      <div>
        <table className='table-orders'>
          <thead className='tb-head'>
            <tr className='tb-head-row'>
              <th className='orderId'>Order Id</th>
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
              pending.map((order) => {
                return (
                  <OrdenColumn key={order.order_number} order={order} ordenLista={ordenLista}/>
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
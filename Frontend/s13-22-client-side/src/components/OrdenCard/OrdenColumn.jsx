import React from 'react';
import '../OrdenCard/OrdenColumn.css';

const OrdenColumn = ({ order, ordenLista }) => {
  const { order_number, userId, username, phone, total, state } = order;

  return (
    <tr className='order-card'>
        <td className='order-id'>#{order_number}</td>
        <td>{username}</td>
        <td>Una lista?</td>
        <td>{phone}</td>
        <td>${total}</td>
        <td>{state}</td>
        <td className='buttons-order-data'>
            <button className='btn-listo-order' onClick={() => ordenLista(order)}>Listo</button>
            <button className='btn-listo2-order'>Enviando</button>
        </td>
    </tr>
  )
}

export default OrdenColumn
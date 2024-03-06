import React from 'react';
import OrdenColumn from '../../components/OrdenCard/OrdenColumn';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
    const { orders } = useGlobalContext();

  return (
      <section className='recent-orders-section'>
          <div className='title-orders-div'>
              <h3>Todas las Ordenes</h3>
                <button className='view-all-orders-btn'>
                    <Link to={'/adminPanel'} className='link-po-ad'>
                            Vuelve atras
                    </Link>
                </button>
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

export default OrdersPage;
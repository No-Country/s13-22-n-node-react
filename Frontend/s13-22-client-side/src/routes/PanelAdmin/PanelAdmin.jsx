import React from 'react';
import '../PanelAdmin/PanelAdmin.css';
import OrdenesPanel from '../../components/Ordenes/OrdenesPanel';

const PanelAdmin = () => {
  return (
    <section className='panel-admin-section'>
      <h1>Admin Panel</h1>
      <OrdenesPanel />
    </section>
  )
}
export default PanelAdmin;
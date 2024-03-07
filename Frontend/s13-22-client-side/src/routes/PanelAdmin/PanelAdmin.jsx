import React from 'react';
import '../PanelAdmin/PanelAdmin.css';
import OrdenesPanel from '../../components/Ordenes/OrdenesPanel';
import SummaryBoard from '../../components/SummaryBoard/SummaryBoard';

const PanelAdmin = () => {
  return (
    <section className='panel-admin-section'>
      <h1>Admin Panel</h1>
      <SummaryBoard />
      <OrdenesPanel />
    </section>
  )
}
export default PanelAdmin;
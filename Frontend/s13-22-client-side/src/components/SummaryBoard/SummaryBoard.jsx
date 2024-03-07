import React from 'react';
import '../SummaryBoard/SummaryBoard.css';

const SummaryBoard = () => {
  return (
    <section className='summary-section'>
        <div className='summary-card'>
            <div className='summary-info-div'>
                <span className='number-summary'>1250</span>
                <span className='title-color-box'>Ordenes Recibidas</span>
            </div>
            <div className='summary-img-div'>
                  <img src='/public/svg/bowlSVG.svg' />
            </div>
        </div>
        <div className='summary-card'>
            <div className='summary-info-div'>
                <span className='number-summary'>$2,300.00</span>
                <span className='title-color-box color-box-2'>Ventas Totales</span>
            </div>
            <div className='summary-img-div'>
                <img src='/public/svg/burgerSVG.svg' />
            </div>
        </div>
        <div className='summary-card'>
            <div className='summary-info-div'>
                <span className='number-summary'>1000</span>
                <span className='title-color-box color-box-3'>Clientes Totales</span>
            </div>
            <div className='summary-img-div'>
                <img src='/public/svg/pizzaSVG.svg' />
            </div>
        </div>
    </section>
  )
}

export default SummaryBoard;
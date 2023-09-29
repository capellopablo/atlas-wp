import React, { useState } from 'react';

export default function Benefits() {

  return (
    <div className="b-benefits">
      <div className="b-benefits-heading">
        <h2>Logra tus metas junto a Aprende</h2>
      </div>

      <div className="b-benefits-grid">
        <div>
            <span>78%</span>
            <p>de quienes buscaban emprender iniciaron su propio negocio.</p>
        </div>
        <div>
            <span>51%%</span>
            <p>de nuestros graduados afirma haber aumentado sus ingresos u obtenido un ascenso.</p>
        </div>
        <div>
            <span>95%</span>
            <p>de nuestros estudiantes han mejorado su calidad de vida gracias a Aprende Institute.</p>
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta';

const ListaFrutas = () => {
  const frutas = useSelector(state => state.frutaReducers.frutas);

  return (
    <>
      <h1>Cesta de Frutas</h1>
      <h2>Digite a fruta que você quer adicionar na cesta e a quantidade dela</h2>

      <AdicionaFruta />

      <span className='total'>{frutas.length > 0 ? 'Total: ' + frutas.length : null }</span>

      <div className='listaFrutas'>
        {frutas.map(fruta => (
          <Fruta key={fruta.id} fruta={fruta} />
        ))}
      </div>
    </>
  );
};

export default ListaFrutas;

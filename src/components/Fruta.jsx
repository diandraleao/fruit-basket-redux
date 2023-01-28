import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../actions/frutas.action';

const Fruta = ({ fruta }) => {
  const dispatch = useDispatch();

  return (
    <div className="fruta">
      <span className='frutaNome'>{fruta.nome}</span>
      <span className='frutaQuantidade'>{fruta.quantidade}</span>
      <button className='frutaBotao' onClick={() => dispatch(actions.remover(fruta))}>&times;</button>
    </div>
  );
};

export default Fruta;

import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../actions/fruits.action';

const Fruit = ({ fruit }) => {
  const dispatch = useDispatch();

  return (
    <div className="fruta">
      <span className='frutaNome'>{fruit.name}</span>
      <span className='frutaQuantidade'>{fruit.quantity}</span>
      <button className='frutaBotao' onClick={() => dispatch(actions.remover(fruit))}>&times;</button>
    </div>
  );
};

export default Fruit;

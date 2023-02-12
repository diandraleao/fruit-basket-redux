import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../actions/fruits.action';
import { ADD_FRUIT as STRINGS } from '../utils/strings/pt-br'

const AddFruit = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const addFruit = event => {
    event.preventDefault();

    const fruit = {
      id: new Date(),
      name,
      quantity,
    };

    dispatch(actions.add(fruit));
  };

  return (
    <form onSubmit={addFruit}>
      <input
        type="text"
        name={name}
        placeholder={STRINGS.placeholder.fruit}
        className='frutaValue'
        required
        onChange={event => setName(event.target.value)}
      />

      <input
        type="number"
        name={quantity}
        placeholder={STRINGS.placeholder.qtd}
        className='quantidadeValue'
        required
        onChange={event => setQuantity(event.target.value)}
      />

      <button type="submit">{STRINGS.button}</button>
    </form>
  );
};

export default AddFruit;

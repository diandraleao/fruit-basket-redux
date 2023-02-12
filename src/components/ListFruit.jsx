import React from 'react';
import { useSelector } from 'react-redux';
import AddFruit from './AddFruit';
import Fruit from './Fruit';
import { LIST_FRUIT as STRINGS } from '../utils/strings/pt-br'

const ListFruit = () => {
  const fruits = useSelector(state => state.fruitReducers.fruits);

  return (
    <>
      <h1>{STRINGS.title}</h1>
      <h2>{STRINGS.subtitle}</h2>

      <AddFruit />

      <span className='total'>{fruits.length > 0 ? 'Total: ' + fruits.length : null }</span>

      <div className='listaFrutas'>
        {fruits.map(fruit => (
          <Fruit key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </>
  );
};

export default ListFruit;

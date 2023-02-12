import { combineReducers } from 'redux';
import { reducers as fruitReducers } from './fruits.reducer';

const reducers = combineReducers({
  fruitReducers,
});

export { reducers };

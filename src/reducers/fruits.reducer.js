import { actionsTypes } from '../constants/fruits';

const INITIAL_STATE = {
  fruits: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_FRUIT:
      return { fruits: [...state.fruits, { ...action.payload }] };
    case actionsTypes.REMOVE_FRUIT:
      return { fruits: state.fruits.filter(x => x.id !== action.payload.id) };
    default:
      return state;
  }
};

export { reducers };

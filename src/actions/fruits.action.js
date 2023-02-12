import { actionsTypes } from '../constants/fruits';

const actions = {
  add: fruit => ({
    type: actionsTypes.ADD_FRUIT,
    payload: fruit,
  }),
  remove: fruit => ({
    type: actionsTypes.REMOVE_FRUIT,
    payload: fruit,
  }),
};

export { actions };

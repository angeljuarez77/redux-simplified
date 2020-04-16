import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  MULTIPLY_NUMBER,
  DIVIDE_NUMBER,
} from '../actions/index.js';

const initState = {
  number: 0,
  timesCalled: 0,
};

export default function mathReducers(state = initState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, {
        number: state.number + action.number
      })
    case SUBTRACT_NUMBER:
      return Object.assign({}, state, {
        number: state.number - action.number
      })
    case MULTIPLY_NUMBER:
      return Object.assign({}, state, {
        number: state.number * action.number
      })
    case DIVIDE_NUMBER:
      return Object.assign({}, state, {
        number: state.number / action.number
      })
    default:
      return state
  }
}

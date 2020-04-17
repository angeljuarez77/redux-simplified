import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  MULTIPLY_NUMBER,
  DIVIDE_NUMBER,
  HARDCODED_ADD_12,
} from '../actions/index.js';

const initState = {
  number: 0,
  timesCalled: "fucking balls",
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
    case HARDCODED_ADD_12:
      return {...state, number: state.number + 12}
    default:
      return state
  }
}

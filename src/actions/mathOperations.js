// Our Action Types.
export const ADD_NUMBER = "ADD_NUMBER";
export const SUBTRACT_NUMBER = "SUBTRACT_NUMBER";
export const MULTIPLY_NUMBER = "MULTIPLY_NUMBER";
export const DIVIDE_NUMBER = "DIVIDE_NUMBER";

// Now we have our Action Creators.
export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number
  }
}

export function subtractNumber(number) {
  return {
    type: SUBTRACT_NUMBER,
    number
  }
}

export function multiplyNumber(number) {
  return {
    type: MULTIPLY_NUMBER,
    number
  }
}

export function divideNumber(number) {
  return {
    type: DIVIDE_NUMBER,
    number
  }
}

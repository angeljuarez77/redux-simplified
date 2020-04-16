import React from 'react';
import { connect } from 'react-redux';
import { addNumber } from '../actions/mathOperations.js';

function MathAddition(props) {
  let input;

  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      if(!input.value.trim()) {
        return
      }
      if(typeof parseInt(input.value) === 'number') {
        const num = parseInt(input.value);
        props.addNumber(num);
      }
    }}>
      <input ref={ node => input = node }/>
      <button type="submit">
        Add Number
      </button>
    </form>
  )
}
/*
 * mapDispatchToProps
 * 
*/
const mapDispatchToProps = {
  addNumber
}

export default connect(null, mapDispatchToProps)(MathAddition)

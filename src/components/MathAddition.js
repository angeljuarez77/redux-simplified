import React from 'react';
import { connect } from 'react-redux';
import { addNumber, hardcodedAdd12 } from '../actions/mathOperations.js';

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
        console.log(addNumber(num));
        props.dispatch(addNumber(num));
      }
    }}>
      <input ref={ node => input = node }/>
      <button type="submit">
        Add Number
      </button>
      <button onClick={ hardcodedAdd12 }>Add 12</button>
      <h2>Testing defaultState: { props.timesCalled }</h2>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    number: state.number,
    timesCalled: state.timesCalled
  }
}

/*
 * mapDispatchToProps
 * You have to import the actionCreators that you'll use
 * and stick them inside of an object
*/
const mapDispatchToProps = {
  addNumber,
  hardcodedAdd12
}

export default connect(mapStateToProps, mapDispatchToProps)(MathAddition)


import React from 'react';
import { connect } from 'react-redux';
import { addNumber, hardcodedAdd12 } from '../actions/mathOperations.js';

function MathAddition({ dispatch, number, timesCalled }) {
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
        dispatch(addNumber(input.value));
      }
    }}>

      <input ref={ node => input = node }/>
      <button type="submit">
        Add Number
      </button>
      <h3>Number: { number }</h3>
      <h2>timesCalled: { timesCalled }</h2>
    </form>
  )
}

// works fine
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
// const mapDispatchToProps = dispatch => ({
//   dispatch
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MathAddition)
export default connect(mapStateToProps)(MathAddition)


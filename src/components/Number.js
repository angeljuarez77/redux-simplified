import React from 'react';
import { connect } from 'react-redux';

function Number(props) {
  return (
    <div>
      <h1>Number in store: { typeof props.number === "undefined" ? "undefined" : props.number }</h1>
      <h1>Number of timesCalled: { typeof props.timesCalled === "undefined" ? "undefined" : props.timesCalled }</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    number: state.number,
    // timesCalled: state.timesCalled
  };
}

export default connect(mapStateToProps)(Number);

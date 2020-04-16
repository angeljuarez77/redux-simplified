import React from 'react';
import { connect } from 'react-redux';

function Number(props) {
  console.log(props, "from numbers component");
  return (
    <div>
      <h1>Number in store: { props.number }</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Number);
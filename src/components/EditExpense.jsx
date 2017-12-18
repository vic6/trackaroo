import React from 'react';

const EditExpense = (props) => {
  return (
    <h1>Edit expense page {props.match.params.id}</h1>
  )
}

export default EditExpense;

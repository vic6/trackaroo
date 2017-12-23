import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = props => {
  const searchTermHandler = event => {
    props.dispatch(setTextFilter(event.target.value));
  };

  const searchFilterHandler = event =>
    event.target.value === 'date'
      ? props.dispatch(sortByDate())
      : props.dispatch(sortByAmount());

  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={searchTermHandler}
      />
      <select value={props.filters.sortBy} onChange={searchFilterHandler}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);

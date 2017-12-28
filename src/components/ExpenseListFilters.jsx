import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  searchTermHandler = event => {
    this.props.dispatch(setTextFilter(event.target.value));
  };

  searchFilterHandler = event =>
    event.target.value === 'date'
      ? this.props.dispatch(sortByDate())
      : this.props.dispatch(sortByAmount());
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.searchTermHandler}
        />
        <select value={this.props.filters.sortBy} onChange={this.searchFilterHandler}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    );
  }
}

// const ExpenseListFilters = props => {
//   const searchTermHandler = event => {
//     props.dispatch(setTextFilter(event.target.value));
//   };
//
//   const searchFilterHandler = event =>
//     event.target.value === 'date'
//       ? props.dispatch(sortByDate())
//       : props.dispatch(sortByAmount());
//
//   return (
//     <div>
//       <input
//         type="text"
//         value={props.filters.text}
//         onChange={searchTermHandler}
//       />
//       <select value={props.filters.sortBy} onChange={searchFilterHandler}>
//         <option value="date">Date</option>
//         <option value="amount">Amount</option>
//       </select>
//     </div>
//   );
// };

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);

import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: false
    };
  }

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: false }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };

  handleAmountChange = event => {
    const amount = event.target.value;
    const currencyCheck = /^\d{1,}(\.\d{0,2})?$/;
    // allows user to clear amount
    if (!amount || amount.match(currencyCheck)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            // autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            type="text"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            focused={this.state.calendarFocused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.handleNoteChange}
            value={this.state.note}
            placeholder="Add an optional note for your expense"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

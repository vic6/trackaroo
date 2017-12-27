import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const date = moment();
console.log(date.format('MMM Do, YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createAt: moment()
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleNoteChange = event => {
    this.setState({
      note: event.target.value
    });
  };

  handleAmountChange = event => {
    const amount = event.target.value;
    const currencyCheck = /^\d*(\.\d{0,2})?$/;
    if (amount.match(currencyCheck)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState({
      createdAt
    })
  }

  render() {
    return (
      <div>
        <form>
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
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused
            onFocusChage
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

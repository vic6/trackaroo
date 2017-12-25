import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
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

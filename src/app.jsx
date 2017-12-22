import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisableExpenses from './selectors/expenses';


const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visableExpenses = getVisableExpenses(state.expenses, state.filters);
  console.log(visableExpenses);
});

store.dispatch(addExpense({ description: 'Ice cream bill', amount: 50000 }));
store.dispatch(addExpense({ description: 'Gummy Bear bill', amount: 860000 }));

store.dispatch(setTextFilter('ice'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));

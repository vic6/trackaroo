import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import getVisableExpenses from './selectors/expenses';


const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visableExpenses = getVisableExpenses(state.expenses, state.filters);
  console.log(visableExpenses);
});

store.dispatch(addExpense({ description: 'Ice cream bill', amount: 50000 }));
store.dispatch(addExpense({ description: 'Gummy Bear bill', amount: 860000, createdAt: 20 }));
store.dispatch(addExpense({ description: 'Sauce Packet', amount: 86000 }));
store.dispatch(addExpense({ description: 'Trapoholic mix tape', amount: 2244, createdAt: 150 }));
store.dispatch(addExpense({ description: 'Lucky Charms', amount: 500, createdAt: 300 }));



// store.dispatch(setTextFilter('bear'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('ice'));
// }, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });

    default:
      return state;
  }
};

// Filter reducer
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const getVisableExpenses = (expenses, { text, sortBy, startDate, endDate}) => (
  expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
      return a.createdAt < b.createdAt ? 1 : -1
  })
)

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visableExpenses = getVisableExpenses(state.expenses, state.filters);
  console.log(visableExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 100, createdAt: -5000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'cake', amount: 45, createdAt: -9000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: 'cake', amount: 200, createdAt: 300 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 68 }));
//
// store.dispatch(setTextFilter('Sauce Life'));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('cake'))
//
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(12935));


const demoState = {
  expenses: [
    {
      id: 'saucekjjkds',
      description: "Lunch at Denny's",
      note: 'Lunch was crazy!',
      amount: 200000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const bob = {
  name: 'bob',
  age: '45',
  trapoholic: false
};

// console.log({
//   ...bob,
//   iceCream: 'coconut'
// });
// console.log(bob);

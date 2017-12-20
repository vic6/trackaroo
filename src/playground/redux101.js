import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET',
  reset: 0
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

// Reducers are pure functions and they never change state or actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + action.incrementBy };
    }
    case 'DECREMENT': {
      return { count: state.count - action.decrementBy };
    }
    case 'RESET': {
      return { count: action.reset };
    }
    case 'SET': {
      return { count: action.count };
    }
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 50 }));

store.dispatch(decrementCount({ decrementBy: 500 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 88 }));

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 50
// });

// store.dispatch({
//   type: 'RESET'
// });
//
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
//
// store.dispatch({
//   type: 'SET',
//   count: 600
// });

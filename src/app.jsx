import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ExpenseDashboard = () => <h1>This is the dashboard yo</h1>;

const AddExpense = () => <h1>This is the expense page yo</h1>;

const EditExpense = () => <h1>Edit expense page</h1>;

const HelpPage = () => <h1>Help page</h1>;

const NotFound = () => <h1>Page not found</h1>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboard} />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active">
      <h1>Trackaroo</h1>
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      New Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      I need help
    </NavLink>
  </header>
);

export default Header;

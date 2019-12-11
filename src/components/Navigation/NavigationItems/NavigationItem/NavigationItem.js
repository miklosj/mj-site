import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <b>
      <NavLink
        activeClassName={classes.active}
        exact={props.exact}
        to={props.link}>{props.children}</NavLink>
    </b>
  </li>
);

export default navigationItem;

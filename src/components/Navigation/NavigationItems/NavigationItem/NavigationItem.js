import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const navigationItem = (props) => (
  <li className={styles.NavigationItem}>
      <NavLink
        activeClassName={styles.active}
        exact={props.exact}
        to={props.link}><b>{props.children}</b></NavLink>
  </li>
);

export default navigationItem;

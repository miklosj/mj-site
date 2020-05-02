import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import routes from './../../../utils/routes'

const navigationItems = (props) => {

  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link={routes.BASE} exact>home</NavigationItem>
      <NavigationItem link={routes.BLOG}>blog</NavigationItem>
      <NavigationItem link={routes.ABOUT}>about</NavigationItem>
    </ul>
  );
};

export default navigationItems;

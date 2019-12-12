import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import routes from './../../../utils/routes'

const navigationItems = (props) => {

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link={routes.BASE} exact>home</NavigationItem>
      <NavigationItem link={routes.BLOG}>blog</NavigationItem>
      <NavigationItem link={routes.ABOUT}>about me</NavigationItem>
      <NavigationItem link={routes.CONTACT}>contact</NavigationItem>
    </ul>
  );
};

export default navigationItems;

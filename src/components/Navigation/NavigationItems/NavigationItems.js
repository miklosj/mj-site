import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>home</NavigationItem>
      <NavigationItem link="/blog" exact>blog</NavigationItem>
      <NavigationItem link="/about">about me</NavigationItem>
      <NavigationItem link="/contact">contact</NavigationItem>
    </ul>
  );
};

export default navigationItems;

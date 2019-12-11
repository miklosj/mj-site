import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Title}>
          <b>MENU</b>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
  </Aux>
  );
};

export default sideDrawer;

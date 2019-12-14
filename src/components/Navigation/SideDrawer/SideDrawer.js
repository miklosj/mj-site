import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={styles.Title}>
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

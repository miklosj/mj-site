import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  const history = useHistory();
  const closeHandler = props.closed;

  useEffect(() => {
    closeHandler();
  }, [history.location.pathname, closeHandler]);

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

export default SideDrawer;

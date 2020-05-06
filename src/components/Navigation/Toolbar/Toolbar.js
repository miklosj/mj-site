import React from 'react';

import styles from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => (
  <header className={styles.Toolbar}>  
    <div className={styles.Logo}>
      <Logo clicked={props.drawerClose}/>
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems/>
    </nav>
    <DrawerToggle clicked={props.drawerToggle} className={styles.MobileOnly}/>
  </header>
);

export default toolbar;

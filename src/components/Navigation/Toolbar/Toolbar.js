import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
  <header className={classes.Toolbar}>  
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
  </header>
);

export default toolbar;

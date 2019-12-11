import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
      <b>MIKLÓS JÁSDI</b>
  </div>
);

export default logo;

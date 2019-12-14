import React from 'react';

import { Link } from 'react-router-dom';
import classes from './Logo.module.css';
import routes from './../../utils/routes';

const logo = (props) => (
  <Link to={routes.BASE} className={classes.Link}>
    <div className={classes.Logo} style={{height: props.height}}>
      <b>MIKLÓS JÁSDI</b>
    </div>
  </Link>
);

export default logo;

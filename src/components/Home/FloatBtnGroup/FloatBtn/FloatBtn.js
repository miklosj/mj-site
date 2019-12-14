import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FloatBtn.module.css';

const floatBtn = (props) => (
  <Link to={props.to} className={classes.Link}>
    <div className={classes.FloatBtn}>{props.children}</div>
  </Link>
);

export default floatBtn;
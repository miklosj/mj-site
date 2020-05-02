import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FloatBtn.module.css';

const floatBtn = (props) => (
  <Link to={props.to} className={styles.Link} draggable="false">
    <div className={styles.FloatBtn}>{props.children}</div>
  </Link>
);

export default floatBtn;
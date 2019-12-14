import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import routes from './../../utils/routes';

const logo = (props) => (
  <Link to={routes.BASE} className={styles.Link}>
    <div className={styles.Logo} style={{height: props.height}}>
      <b>MIKLÓS JÁSDI</b>
    </div>
  </Link>
);

export default logo;

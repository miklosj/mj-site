import React from 'react';
import styles from './Loading.module.css';

const loading = (props) => {

  let styles_to_use = styles.Loading;

  if (!props.color)
    styles_to_use += (' ' + styles.Black);
  else
    styles_to_use += (' ' + styles[props.color]);

  return (
    <div className={styles_to_use}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default loading;
import React from 'react';
import styles from './NotFound.module.css';
import routes from '../../utils/routes';

import FloatBtn from '../Home/FloatBtn/FloatBtn';

const notFound = (props) => (
  <div className={styles.Container}>
    <div className={styles.BigText}> 404</div>    
    <div className={styles.SmallText}> Content not found.</div>
    <div className={styles.BtnGroup}>
      <FloatBtn to={routes.BASE}>return</FloatBtn>
    </div>
  </div>
)

export default notFound;
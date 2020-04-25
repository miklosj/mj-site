import React from 'react';
import Aux from './../../hoc/Aux/Aux';
import styles from './NotFound.module.css';
import FloatBtn from '../Home/FloatBtnGroup/FloatBtn/FloatBtn';
import routes from '../../utils/routes';

const notFound = (props) => (
  <Aux>
    <div className={styles.BigText}> 404</div>    
    <div className={styles.SmallText}> Content not found.</div>
    <div className={styles.OuterContainer}>
      <div className={styles.BtnGroup}>
        <FloatBtn to={routes.BASE}>return</FloatBtn>
      </div>
    </div>
  </Aux>
)

export default notFound;
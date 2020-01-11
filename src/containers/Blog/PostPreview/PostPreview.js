import React from 'react';
import styles from './PostPreview.module.css';

const postPreview = (props) => {
  
  const date = new Date(props.date);
  
  return (
    <div className={styles.PostContainer}>
      <div className={styles.BoxImg}>
        <img src={props.imgurl}></img>
      </div>
      <div className={styles.BoxContent}>
        <div className={styles.Title}>{props.title}</div>
        <div>{date.toLocaleDateString()}</div>
        <div className={styles.Content}>{props.content}</div>
      </div>
    </div>
  );
}

export default postPreview;
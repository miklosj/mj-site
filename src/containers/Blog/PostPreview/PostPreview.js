import React from 'react';
import styles from './PostPreview.module.css';

const postPreview = (props) => {
  
  const date = new Date(props.date);
  
  return (
    <div>
      <div className={styles.Title}>{props.title}</div>
      <div>{date.toLocaleDateString()}</div>
      <div className={styles.Content}>{props.content}</div>
    </div>
  );
}

export default postPreview;
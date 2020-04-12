import React, {Fragment}  from 'react';
import styles from './PostPreview.module.css';

const PostPreview = (props) => {

  return (
    <Fragment>
      <img src={props.imgsrc} alt={props.imgalt} className={styles.PostPreviewImg}/>
      <div className={styles.PostPreviewBg}></div>
      <div className={styles.PostPreviewContent}>
        <p className={styles.PostPreviewDate}>{props.date}</p>
        <h2 className={styles.PostPreviewTitle}>{props.title}</h2>
        <p className={styles.PostPreviewText}>{props.content}</p>
      </div>
    </Fragment>
  );
}

export default PostPreview;


import React from 'react';
import styles from './PostImage.module.css';

const PostImage = (props) => (
  <div className={styles.PostImageContainer}>
    <a href={props.src}>
      <img src={props.src} alt={props.alt} className={styles.PostImage}/>
    </a>
    <p className={styles.PostImageDescription}>{props.alt}</p>
  </div>
);

export default PostImage;

import React, { useState } from 'react';
import styles from './PostImage.module.css';

import Loading from '../../UI/Loading/Loading';

const PostImage = (props) => {

  const [loaded, setLoaded] = useState(false);

  let placeholder = null;

  if (!loaded)
    placeholder = (
      <div className={styles.Placeholder}>
        <Loading/>
      </div>
    );

  return (
    <div className={styles.PostImageContainer}>
      <a href={props.src}>
        <img          
          src={props.src}
          alt={props.alt}
          className={loaded ? styles.PostImage : styles.Disabled}
          onLoad={() => setLoaded(true)}/>
        {placeholder}
      </a>
      <p className={styles.PostImageDescription}>{props.alt}</p>
    </div>
  );
};

export default PostImage;

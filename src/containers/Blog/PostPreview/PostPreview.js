import React, { Fragment, useState }  from 'react';
import styles from './PostPreview.module.scss';

import Loading from '../../../components/UI/Loading/Loading';

const PostPreview = (props) => {

  const [loaded, setLoaded] = useState(false);
  let content = null;

  if (!loaded) {
    content = (
      <div className={styles.Placeholder}>
        <Loading/>
      </div>
    );
  } else {
    const taglessContent = props.content.replace(/!\[(.*?)\]\((.*?)\)/g, ' ');

    content = (
      <Fragment>
        <div className={styles.PostPreviewBg}></div>
        <div className={styles.PostPreviewContent}>
          <p className={styles.PostPreviewDate}>{props.date}</p>
          <h2 className={styles.PostPreviewTitle}>{props.title}</h2>
          <p className={styles.PostPreviewText}>{taglessContent}</p>
        </div>
      </Fragment>
    );
  }

  return (
    <div className={styles.PostPreviewContainer}>
      <img
        src={props.imgsrc}
        alt={props.imgalt}
        className={loaded ? styles.PostPreviewImg : styles.Disabled}
        onLoad={() => setLoaded(true)}/>
      {content}
    </div>
  );
}

export default PostPreview;


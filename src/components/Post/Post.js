import React from 'react';
import styles from './Post.module.css';

const post = (props) => {

  const post = {
    "content" : "Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue. Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue.",
    "titleImg" : "https://live.staticflickr.com/4422/36064548864_bbf0fd44a8_o.jpg",
    "titleImgAlt" : "A random photo #3",
    "dateStr" : "2020-02-01",
    "slug" : "first-blog-post",
    "title" : "First Blog Post"
  };

  return (
    <div className={styles.Post}>
      <div className={styles.PostHeader}>
        <img src={post.titleImg} alt={post.titleImgAlt} className={styles.PostImg}></img>
        <div className={styles.PostDim}>
          <h1 className={styles.PostTitle}>
              <b>{post.title}</b>
          </h1>
        </div>
      </div>
      <p className={styles.PostContent}>{post.content}</p>
    </div>
  );
}

export default post;
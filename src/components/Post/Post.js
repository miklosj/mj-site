import React from 'react';
import styles from './Post.module.css';

import PostImage from './PostImage/PostImage';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';

const post = (props) => {

  const post = {
    "content": "Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue. Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue. ![](https://live.staticflickr.com/4426/35661811474_7b5fa6b318_o.jpg) Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue. Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. ![Image description here. It is a very very very very looooong description.](https://live.staticflickr.com/4412/36099793680_32077c8a80_h.jpg) Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue.",
    "titleImg": "https://live.staticflickr.com/4422/36064548864_bbf0fd44a8_o.jpg",
    "dateStr": "2020-02-01",
    "slug": "first-blog-post",
    "title": "First Blog Post"
  };

  let paragraphs = post.content.split("\n").map((paragraph, idx) => {

    let re = /!\[(.*?)\]\((.*?)\)/g;

    let elems = [];
    let idxPrev = 0;

    let match;

    // Once generated, these elements won't change, therefore using
    // indices as keys should be fine...
    while ((match = re.exec(paragraph)) != null) {
      const imgUrlStart = match.index;
      const imgUrlEnd = match.index + match[0].length;
      const textPart = paragraph.substring(idxPrev, imgUrlStart);
      idxPrev = imgUrlEnd;
      elems.push(<span key={elems.length + 1}>{textPart}</span>);
      elems.push(<PostImage key={elems.length + 1} src={match[2]} alt={match[1]} />)
    }

    if (elems.length) {
      elems.push(<span key={elems.length + 1}>{paragraph.substr(idxPrev)}</span>);
      return (
        <div key={idx}>{elems}</div>
      );
    }

    return (
      <p key={idx}>{paragraph}</p>
    );
  });

  return (
    <ScrollToTop>
      <div className={styles.Post}>
        <div className={styles.PostHeader}>
          <img src={post.titleImg} alt={post.title} className={styles.PostHeaderImg}></img>
          <div className={styles.PostDim}>
            <h1 className={styles.PostTitle}>
              <b>{post.title}</b>
            </h1>
          </div>
        </div>
        <div className={styles.PostContent}>
          {paragraphs}
        </div>
      </div>
    </ScrollToTop>
  );
}

export default post;
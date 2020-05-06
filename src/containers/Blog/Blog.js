import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.scss';
import { getFirebase } from '../../firebase';

import PostPreview from './PostPreview/PostPreview';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';

const Blog = (props) => {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  if (loading && !posts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }
  
        const newestFirst = posts.reverse();
        setPosts(newestFirst);
        setLoading(false);
      });
  }

  return (
    <ScrollToTop>
      <div className={styles.Blog}>
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.slug} style={{color: 'inherit', textDecoration: 'inherit'}}>
            <PostPreview
              imgsrc={post.titleImg} 
              imgalt={post.title}
              date={post.dateStr}
              title={post.title}
              content={post.content}
              />
          </Link>
        ))}
      </div>
    </ScrollToTop>
  );
}

export default Blog;
import React, { useEffect, useState, useRef} from 'react';
import PostPreview from './PostPreview/PostPreview';
import styles from './Blog.module.css';
import axios from './../../utils/axios-blog';

const Blog = (props) => {

  const [posts, setPosts] = useState({posts: []});
  const isCancelled = useRef(false);

  useEffect(() => {
    axios.get('/posts.json?orderBy="date"')
    // /posts.json?orderBy="date"&limitToFirst=2 for pagination
      .then(response => {
        if (!isCancelled.current) {
          setPosts(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });

    return () => {
      isCancelled.current = true;
    };
  }, []);

  let postElements = [];

  if (posts.length > 0) {
    postElements = posts
      .filter((post) => {
        return post == null ? false : true;
      })
      .map((post, idx) => {
      return (
        <PostPreview
          title={post.title}
          content={post.content}
          date={post.date}
          imgurl={post.imgurl}
          key={post.date}/>
      )
    });
  }

  return (
    <div>
      <div className={styles.Blog}>{postElements}</div>
    </div>
  )
}

export default Blog;
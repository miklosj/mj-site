import React, { useEffect, useState} from 'react';
import styles from './Blog.module.css';
import axios from './../../utils/axios-blog';

const Blog = (props) => {

  const [posts, setPosts] = useState({posts: []});

  useEffect(() => {
    axios.get('/posts.json')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  let postElements = [];

  if (posts.length > 0) {
    postElements = posts.map((post, idx) => {
      return <p key={idx}>{post.title}</p>
    });
  }

  return (
    <div>
      <div className={styles.Test}>{postElements}</div>
    </div>
  )
}

export default Blog;
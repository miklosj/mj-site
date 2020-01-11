import React, { useEffect, useState} from 'react';
import PostPreview from './PostPreview/PostPreview';
import styles from './Blog.module.css';
import axios from './../../utils/axios-blog';

const Blog = (props) => {

  const [posts, setPosts] = useState({posts: []});

  useEffect(() => {
    axios.get('/posts.json?orderBy="date"')
    // /posts.json?orderBy="date"&limitToFirst=2 for pagination
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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
      <div className={styles.Test}>{postElements}</div>
    </div>
  )
}

export default Blog;
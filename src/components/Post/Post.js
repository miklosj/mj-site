import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom'
import { getFirebase } from "../../firebase";
import styles from './Post.module.css';

import Loading from './../UI/Loading/Loading';
import PostImage from './PostImage/PostImage';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';
import routes from '../../utils/routes';

const Post = ({ match }) => {

  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();

  if (loading && !post) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/`)
      .orderByChild('slug')
      .limitToLast(1)
      .equalTo(slug)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          for (let key in snapshot.val()) {
            setPost(snapshot.val()[key]);
            break;
          }
        }
        setLoading(false);
      });
  }

  if (loading)
    return (
      <div className={styles.PostLoading}>
        <Loading color="White"/>
      </div>);

  // If post doesn't exist
  if (!post) { 
    return <Redirect to={routes.NOTFOUND} />;
  }


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

export default Post;
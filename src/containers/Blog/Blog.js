import React  from 'react';
import { Link } from "react-router-dom";
import styles from './Blog.module.css';

const Blog = (props) => {

  const posts = [
    {
      "content" : "Suspendisse eu dui pellentesque, pretium velit sed, elementum quam. Nulla facilisi. Integer in condimentum ex. Nam sapien arcu, tincidunt at finibus nec, porttitor a nibh. Nunc maximus porttitor ante bibendum condimentum. Nunc sollicitudin mollis diam, nec fermentum massa volutpat sit amet. Maecenas lorem sapien, tempus id luctus ut, gravida eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tellus a urna volutpat tristique vel nec dui. Maecenas vitae tellus scelerisque, tempor metus sit amet, pharetra augue.</p>",
      "titleImg" : "https://live.staticflickr.com/4429/36727328592_b9692281d9_o.jpg",
      "titleImgAlt" : "A random photo #1",
      "dateStr" : "2020-02-03",
      "slug" : "third-blog-post",
      "title" : "Third blog post"
    },
    {
      "content" : "Nam commodo justo vel elit vestibulum, vel hendrerit mi tristique. Nullam vulputate, magna sit amet tincidunt vestibulum, nisl augue rhoncus augue, eu rutrum sem lectus at dui. Praesent nec lorem ornare risus finibus condimentum. Donec ultrices risus nec massa dignissim pretium. Duis ante urna, ornare in venenatis quis, auctor ac ex. Vivamus ut turpis eget turpis mollis commodo sit amet eget turpis. Suspendisse rhoncus at felis vel fringilla. Morbi gravida nulla lorem, non condimentum lectus bibendum eu. Mauris blandit leo quis rhoncus pellentesque. Suspendisse tellus nulla, dignissim sit amet urna id, viverra auctor libero. Nam et urna accumsan, congue erat in, facilisis nisl. Ut mollis eros fringilla nulla tincidunt volutpat. Aenean laoreet egestas tortor eget laoreet.</p>",
      "titleImg" : "https://live.staticflickr.com/4422/36064548864_bbf0fd44a8_o.jpg",
      "titleImgAlt" : "A random photo #2",
      "dateStr" : "2020-02-02",
      "slug" : "second-blog-post",
      "title" : "Second Blog Post"
    },
    {
      "content" : "Etiam sed sodales diam. Mauris non laoreet erat. Ut ex est, laoreet sed sapien vel, auctor posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies massa id diam pretium condimentum. Curabitur sem nibh, suscipit euismod quam vel, feugiat eleifend sem. Integer id pellentesque odio, a finibus massa. Sed maximus ac tortor sit amet molestie. Praesent ornare tristique pulvinar. Curabitur non justo porttitor, cursus mauris ut, pulvinar massa. Pellentesque fringilla at orci vitae congue.</p>",
      "titleImg" : "https://live.staticflickr.com/4284/35456723590_4d8f4c3f00_o.jpg",
      "titleImgAlt" : "A random photo #3",
      "dateStr" : "2020-02-01",
      "slug" : "first-blog-post",
      "title" : "First Blog Post"
    }
  ]

  return (
    <div className={styles.Blog}>
      {posts.map(post => (
        <div key={post.slug} className={styles.PostPreviewContainer}>
          <img src={post.titleImg} alt={post.titleImgAlt} className={styles.PostPreviewImg}/>
          <div key={post.slug} className={styles.PostPreviewContent}>
            <h2 style={{clear: "both"}}>
              <span className={styles.PostPreviewTitle}>{post.title}</span>
              <span className={styles.PostPreviewDate}>{post.dateStr}</span>
            </h2>
            <p className={styles.PostPreviewText}>{post.content.substring(0, 150)}</p>
            <Link to={`/${post.slug}`}>... Continue reading</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
import React, { useState }  from 'react';
import { getFirebase } from "../../firebase";
import styles from './About.module.scss';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';
import Loading from './../UI/Loading/Loading';

const About = ({ match }) => {

  const [intro, setIntro] = useState();
  const [introImgUrl, setIntroImgUrl] = useState();
  const [coverImgUrl, setCoverImgUrl] = useState();

  const firebase = getFirebase();

  if (!intro) {
    firebase
      .database()
      .ref()
      .child(`/intro`)
      .once('value')
      .then(snapshot => {
        let introObj = {};
        for (let key in snapshot.val()) {
          introObj[key] = snapshot.val()[key];
        }
        setIntro(introObj);
      });
  }

  const introDir = firebase
    .storage()
    .ref()
    .child('/intro')

  if (!introImgUrl) {
    introDir
      .child('intro_picture.jpg')
      .getDownloadURL()
      .then((url) => {
        setIntroImgUrl(url);
      });
  }

  if (!coverImgUrl) {
    introDir
      .child('cover_picture.png')
      .getDownloadURL()
      .then((url) => {
        setCoverImgUrl(url);
      });
  }

  if (!intro || !introImgUrl || !coverImgUrl) {
    return (
      <div className={styles.AboutLoading}>
        <Loading color="White"/>
      </div>);
  }

  return (
    <ScrollToTop>
      <div className={styles.AboutHeader}>
        <img src={coverImgUrl} alt={"Header"} className={styles.AboutHeaderImg}></img>
        <div className={styles.AboutImageWrapper}>
          <img src={introImgUrl} alt="Profile" className={styles.AboutImage}/>
        </div>
      </div>
      <div className={styles.About}>
        <div className={styles.AboutContent}>
          {intro.content}
        </div>
      </div>
    </ScrollToTop>
  );
}

export default About;
import React, { useState }  from 'react';
import { getFirebase } from "../../firebase";
import styles from './About.module.scss';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';
import Loading from './../UI/Loading/Loading';

const About = ({ match }) => {

  const [intro, setIntro] = useState();
  const [imgData, setImgData] = useState({
    introImgUrl: null,
    coverImgUrl: null
  });

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

  if (!imgData.introImgUrl) {
    introDir
      .child('intro_picture.jpg')
      .getDownloadURL()
      .then((url) => {
        setImgData({
          ...imgData,
          introImgUrl: url
        });
      });
  }

  if (!imgData.coverImgUrl) {
    introDir
      .child('cover_picture.png')
      .getDownloadURL()
      .then((url) => {
        setImgData({
          ...imgData,
          coverImgUrl: url
        });
      });
  }

  const loading = !intro || !imgData.introImgUrl || !imgData.coverImgUrl;

  if (loading) {
    return (
      <div className={styles.AboutLoading}>
        <Loading color="White"/>
      </div>);
  }

  return (
    <ScrollToTop>
      <div className={styles.About}>
        <div className={styles.AboutHeader}>
          <img src={imgData.coverImgUrl} alt={"Header"} className={styles.AboutHeaderImg}></img>
          <div className={styles.AboutImageWrapper}>
            <img src={imgData.introImgUrl} alt="Profile" className={styles.AboutImage}/>
          </div>
        </div>
        <div className={styles.AboutContentWrapper}>
          <div className={styles.AboutContent}>
            {intro.content}
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default About;
import React, { useState }  from 'react';
import { getFirebase } from "../../firebase";
import styles from './About.module.scss';
import ScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';
import Loading from './../UI/Loading/Loading';

const About = ({ match }) => {

  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState();
  const [introImgUrl, setIntroImgUrl] = useState();

  const firebase = getFirebase();


  if (loading && !intro) {
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
        if (introImgUrl)
          setLoading(false);
      });

    firebase
      .storage()
      .ref()
      .child('/intro')
      .child('intro_picture.jpg')
      .getDownloadURL()
      .then((url) => {
        setIntroImgUrl(url);
        if (intro)
          setLoading(false);
      });
  }

  if (loading)
    return (
      <div className={styles.AboutLoading}>
        <Loading color="White"/>
      </div>);

  return (
    <ScrollToTop>
      <div className={styles.About}>
        <div className={styles.AboutImageWrapper}>
          <img src={introImgUrl} alt="Profile" className={styles.AboutImage}/>
        </div>
        <div className={styles.AboutContent}>
          {intro.content}
        </div>
      </div>
    </ScrollToTop>
  );
}

export default About;
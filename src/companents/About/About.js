import React from 'react';
import styles from "./About.module.scss";

const About = () => {
  return (
    <div>
      <h3 className={styles.title}>
        Hi! My name is
        <span className={styles.title__name}> Serhii Hats.</span>
      </h3>
      <p>This is a fake app "Clothes shop"
        that I created to teach and demonstrate my skills.
      </p>
    </div>
  );
};

export default About;
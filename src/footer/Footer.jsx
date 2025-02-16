import React from 'react';
import react from '../assets/react.svg'
import styles from './Footer.module.css'

const Footer = ({ width, companyName }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.header}>
          <img src={react} alt="" width={width} />
          <h2>{companyName}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2>Socials</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2>Product</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2>Courses</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; Copyright 2025 {companyName}
        </div>
      </footer>
    </>
  );
};

export default Footer;
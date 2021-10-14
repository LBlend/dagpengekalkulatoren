import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.container}>
    <p>
      En oppgave for <a href="https://www.detsombetyrnoe.no/">NAV IT</a>
    </p>
    <p>
      av <a href="https://github.com/LBlend">Leander West Furumo</a>
    </p>
  </footer>
);

export default Footer;

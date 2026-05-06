import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Frame() {
  return (
    <div className={styles.frame_container}>
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${styles.hero_text_container}`}>
          <div>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>7387</h1>
              <p className={styles.hero_letter}>Total Businesses</p>
            </div>
          </div>
          <div>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>486</h1>
              <p className={styles.hero_letter}>Total Exchanges</p>
            </div>
          </div>
          <div>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>8605</h1>
              <p className={styles.hero_letter}>Total Coins/Tokens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

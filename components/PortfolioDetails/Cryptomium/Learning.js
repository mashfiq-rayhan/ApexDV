import Link from "next/link";
import React from "react";
import styles from "./Learning.module.css";

export default function Learning() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Learning Platform</h1>
      <p className={styles.paragraph}>
        Our Learning Platform is here to help you learn Cryptocurrency
        Blockchain technology and how you can earn from it.
      </p>
      <button className={styles.button86} href="https://cryptominium.com/">
                            <Link className="" href="https://cryptominium.com/">
                                <a role="button">Explore Site</a>
                            </Link>
                        </button>
      <img src="/images/PortfolioDetailsCrytominium/big.svg"/>
    </div>
  );
}

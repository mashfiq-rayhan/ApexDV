import Link from "next/link";
import React from "react";

export default function CryptomiumHero() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${styles.hero_container}`}>
      <div>
        <div className={styles.hero_content_container}>
          <div className={styles.hero_image}>
            <img src="/images/PortfolioDetailsCrytominium/hero.svg" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.hero_desc}>
          <img src="/images/PortfolioDetailsCrytominium/logo.svg" />
          <h1 className={styles.hero_title}>WELCOME TO CRYPTOMINIUM</h1>
          <p className={styles.hero_footer}>
            We Educate, We Promote, We Empower.
          </p>
          <button className={styles.button86} href="https://cryptominium.com/">
            <Link className="" href="https://cryptominium.com/">
              <a role="button">Explore Site</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

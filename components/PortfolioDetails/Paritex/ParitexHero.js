import Link from "next/link";
import React from "react";

export default function ParitexHero() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-5 ${styles.hero_container}`}>
      <div className="md:col-span-7">
        <div className={styles.hero_image}>
          <img src="/images/PortfolioDetailsParitex/hero.svg" />
        </div>
      </div>
      <div className="md:col-span-5">
        <div className={styles.hero_desc}>
          <h1 className={styles.hero_head}>
            Are You Ready to Trade With Bitcoin 24/7 on All Platforms?
          </h1>
          <p className={styles.hero_footer}>
            Download App Now, Buy/Sell Bitcoin Safely and Quickly
          </p>
          <button className={styles.button86} href="https://www.paritex.com/en">
            <Link className="" href="https://www.paritex.com/en">
              <a role="button">Explore site</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

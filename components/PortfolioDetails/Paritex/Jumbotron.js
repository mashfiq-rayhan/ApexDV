import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Jumbotron() {
  return (
    <div className={styles.paritex_container}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div>
          <div className={styles.paritex_content}>
            <div className={styles.paritex_logo}>
              <img src="/images/PortfolioDetailsParitex/logo.svg" />
            </div>
            <div className={styles.paritex_quote}>
              Start Trading <span className={styles.paritex_span}>Safe and Fast</span> with Bitcoin
              and Altcoins
            </div>
            <p className={styles.paritex_foot}>
              The digital world is now in your pocket with Paritex! Download the application now,
              Start trading with confidence.
            </p>
            <button className={styles.button86} href="https://www.paritex.com/en">
              <Link className="" href="https://www.paritex.com/en">
                <a role="button">Explore site</a>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <div className={styles.jumbo_image}>
            <img src="/images/PortfolioDetailsParitex/jumbo.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

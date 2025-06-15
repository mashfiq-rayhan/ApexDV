import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Jumbotron.module.css";

export default function Jumbotron() {
  return (
    <div className={styles.paritex_container}>
      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={12}>
          <div className={styles.paritex_content}>
            <div className={styles.paritex_logo}>
              <img src="/images/PortfolioDetailsParitex/logo.svg" />
            </div>
            <div className={styles.paritex_quote}>
              Start Trading{" "}
              <span className={styles.paritex_span}>Safe and Fast</span> with
              Bitcoin and Altcoins
            </div>
            <p className={styles.paritex_foot}>
              The digital world is now in your pocket with Paritex! Download the
              application now, Start trading with confidence.
            </p>
           <button className={styles.button86} href="https://www.paritex.com/en">
                            <Link className="" href="https://www.paritex.com/en">
                                <a role="button">Explore site</a>
                            </Link>
                        </button>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <div className={styles.jumbo_image}>
            <img src="/images/PortfolioDetailsParitex/jumbo.svg" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

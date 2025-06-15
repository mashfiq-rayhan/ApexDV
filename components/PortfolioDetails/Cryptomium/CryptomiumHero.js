import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./CryptomiumHero.module.css";

export default function CryptomiumHero() {
  return (
    <Grid container spacing={2} className={styles.hero_container}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <div className={styles.hero_content_container}>
          <div className={styles.hero_image}>
            <img src="/images/PortfolioDetailsCrytominium/hero.svg" />
          </div>
        </div>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
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
      </Grid>
    </Grid>
  );
}

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.portfolioHero}>
        <div className={styles.green_abstract_right}></div>
                
      <div className="container p-5">
      <Grid container spacing={1} className={styles.hero_container}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <div className={styles.hero_item}>
          <img
            className={styles.hero_image}
            src="/images/Portfolio/HeroSection/blockchain.svg"
          />
        </div>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <div className={styles.hero_item}>
          <Box>
            <div className={styles.hero_ad_container}>
              <p className={styles.hero_ad_header}>
                Custom Blockchain and smart contract development
              </p>
              <p className={styles.hero_ad_footer}>
                Building decentralized services that will change tomorrows
                reality
              </p>
              <button className={styles.button86} href="#contactUs">
            <Link className="" href="#contactUs">
              <a role="button" href="#contactUs">Contact Us</a>
            </Link>
          </button>
            </div>
          </Box>
        </div>
      </Grid>
    </Grid>
    </div>
    </div>
  );
}

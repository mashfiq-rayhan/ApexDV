import { Grid } from "@mui/material";
import React from "react";
import styles from "./OurExperience.module.css";

export default function OurExperience() {
  return (
    <div className={styles.ourExperience}>
      <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
      <div className="container p-5">
       
      <div className={styles.exp_container}>
      <div className={styles.exp_item}>
        <p className={styles.exp_item_header}>We are experienced in...</p>
      </div>
      <Grid container spacing={14} className={styles.exp_content_container}>
        <Grid item md={6} sm={12}>
          <img src="/images/Portfolio/HeroSection/smilingguy.svg" />
        </Grid>
        <Grid item md={6} sm={12} className={styles.exp_item_list_container_main}>
          <ol className={styles.exp_item_list_container}>
            <li className={styles.exp_item_list_item}>1.  NFT platforms</li>
            <li className={styles.exp_item_list_item}>2.  DeFi applications</li>
            <li className={styles.exp_item_list_item}>3.  Cloud storages based on blockchain</li>
            <li className={styles.exp_item_list_item}>4.  Data analytics services</li>
            <li className={styles.exp_item_list_item}>5.  Blockchain solutions for GameDev</li>
          </ol>
        </Grid>
        <Grid item md={12} className={styles.exp_footer_container}>
          <div className={styles.exp_footer}>
            <p>
              We are sure that blockchain is an essential part of our world now.
              Making blockchain solutions we contribute to a secure and easy WEB
              3.0 access.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
    </div>
  );
}

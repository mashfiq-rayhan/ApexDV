import React from "react";
import styles from "./Frame.module.css";
import { Grid, Container } from "@mui/material";
export default function Frame() {
  return (
    <div className={styles.frame_container}>
      <Container>
        <Grid container spacing={10} className={styles.hero_text_container}>
          <Grid item={4}>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>7387</h1>
              <p className={styles.hero_letter}>Total Businesses</p>
            </div>
          </Grid>
          <Grid item={4}>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>486</h1>
              <p className={styles.hero_letter}>Total Exchanges</p>
            </div>
          </Grid>
          <Grid item={4}>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_number}>8605</h1>
              <p className={styles.hero_letter}>Total Coins/Tokens</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

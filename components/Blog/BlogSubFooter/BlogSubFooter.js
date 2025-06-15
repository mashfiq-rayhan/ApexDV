import React from "react";
import styles from "./BlogSubFooter.module.css";
import { Grid } from "@mui/material";

const BlogSubFooter = () => {
  return (
    <div className={styles.blogSubFooterSection}>
      <div className="container mx-auto px-5">
        <Grid container className={styles.blogSubFooter}>
          <Grid item xs={12} md={3} className={styles.SubFooterServices}>
            <h3>Services</h3>
            <a href="">
              <p>Full-stack Engineering</p>
            </a>
            <a href="">
              <p> UI/UX Design</p>
            </a>
            <a href="">
              <p>Decision Support</p>{" "}
            </a>
          </Grid>
          <Grid item xs={12} md={3} className={styles.SubFooterServices}>
            <h3>Company</h3>
            <a href="">
              <p> Portfolio</p>
            </a>
            <a href="">
              <p>Projects & Partners</p>
            </a>
          </Grid>
          <Grid item xs={12} md={3} className={styles.SubFooterServices}>
            <h3>Press</h3>
            <a href="">
              <p>Press Kit</p>{" "}
            </a>
          </Grid>
          <Grid item xs={12} md={3} className={styles.SubFooterServices}>
            <h3>Tools</h3>
            <a href="">
              <p>App Cost Estimator</p>{" "}
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogSubFooter;

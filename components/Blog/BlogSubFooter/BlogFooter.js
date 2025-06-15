import React from "react";
import styles from "./BlogSubFooter.module.css";
import { Grid } from "@mui/material";
import Link from "next/link";

const BlogFooter = () => {
  const nextDetailsHeader = {
    Logo: "/images/Blog/Group 3256.svg",
  };

  return (
    <div className={styles.blogFooterSection}>
      <div className="container mx-auto px-5">
        <Grid container className={styles.blogFooter}>
          <Grid item xs={12} md={6} className={styles.blogFooterText}>
            <p>
              ApexDv is a web & mobile app design and development company that
              is reinventing collaborative development with virtual teams.
              Working with passion and clarity, we partner with disruptive
              companies, providing support for decision making and developing
              systems that are true to the core ideas.
            </p>
            <h3>Let’s work together!</h3>

            <button className={styles.FooterBtn} href="/contact">
              <Link className="" href="/contact">
                <a role="button">Get an estimate</a>
              </Link>
            </button>
          </Grid>
          <Grid item xs={12} md={6} className={styles.blogFooterRight}>
            <h3>We're hiring</h3>
            <h5>Join the team that is reinventing how software is developed</h5>
            {/* <a href="">Check out our open positions!</a> */}
            <img src={nextDetailsHeader.Logo} alt="" />
            <p>237 Kearny Street #9055</p>
            <p>San Francisco, CA 94108 • +1 415 691 6007</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogFooter;

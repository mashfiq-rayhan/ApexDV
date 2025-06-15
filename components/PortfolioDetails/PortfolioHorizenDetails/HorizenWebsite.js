import { Grid } from "@mui/material";
import Link from 'next/link';
import React from 'react';
import styles from "./PortfolioHorizenDetails.module.css";

const HorizenWebsite = () => {
    const horizenData = {
        title: "Horizen labs Responsive website Design",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero odio egestas id id arcu, hac augue.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "/images/Portfolio Details Enjin/Group 3238.svg",
      };

    return (
        <div className={styles.EnjinDetailsHero}>
          
<div className={styles.TopShadow}>
            </div>
            <div className={styles.BottomShadow}>
            </div>
      <div className="container mx-auto px-5">
        <Grid container spacing={4}>
         
          <Grid
            item
            xs={12}
            md={6}
            className={styles.HorizenDetailsText}
            id={styles.HorizenDetails}
          >
            <h1>{horizenData.title}</h1>
            <p>{horizenData.text}</p>
            <button className={styles.button} href="https://horizenlabs.io/">
                <Link className="" href="https://horizenlabs.io/">
                <a role="button">{horizenData.btnText}</a>
                </Link>
                </button>
          </Grid>


          <Grid item xs={12} md={6} className={styles.HorizenDetailsImage}>
            <img src={horizenData.heroImage} alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
    );
};

export default HorizenWebsite;
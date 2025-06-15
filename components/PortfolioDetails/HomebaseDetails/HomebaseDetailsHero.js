import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from "./Homebase.module.css";

const HomebaseDetailsHero = () => {
     const heroData = {
        title: "Real Estate Reimagined.",     
        text:
          "Homebase is redefining how communities buy, sell, and own real estate.",        
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details homebase/Group 3301 22.svg",
        logo: "images/Portfolio Details homebase/image 505.svg"
      };
    return (
      <div className={styles.homebaseDetailsHero}>
         <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className="container p-5">
                
                <Grid container className={styles.homebaseDetailsHeroContainer}>
                    <Grid item xs={12} md={6} className={styles.homebaseDetailsHeroImg}>
                <img src={heroData.heroImage} alt="" />
            </Grid>
            <Grid item xs={12} md={6} className={styles.homebaseDetailsHeroText}>
                <img src={heroData.logo} alt="" />
                <h1>{heroData.title}</h1>
                <p>{heroData.text}</p>
                <button className={styles.button86} href="https://homebasedao.io/">
                <Link className="" href="https://homebasedao.io/">
                <a role="button">{heroData.btnText}</a>
                </Link>
                </button>
            </Grid>
            
            </Grid>
</div>
        </div>
    );
};

export default HomebaseDetailsHero;
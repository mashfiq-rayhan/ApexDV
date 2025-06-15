import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from "./Homebase.module.css";

const HomebaseDetailsSecondHero = () => {
    const heroData = {
        title: "Bring Real Estate On-Chain and Fractionalize Ownership via NFT's",
        text:
            "Imagine owning an NFT that represents a fractional share of a home which airdrops you rent each month. This is the future of real estate ownership.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details homebase/image 507.svg",
       
    };
    return (
        <div className={styles.homebaseDetailsHero}>
             <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className="container p-5">

                <Grid container className={styles.homebaseDetailsHeroContainer}>
                    <Grid item xs={12} md={6} className={styles.homebaseDetailsHeroText}>
                        <h1>{heroData.title}</h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://homebasedao.io/">
                            <Link className="" href="https://homebasedao.io/">
                                <a role="button">{heroData.btnText}</a>
                            </Link>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.homebaseDetailsSecondHeroImg}>
                        <img src={heroData.heroImage} alt="" />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default HomebaseDetailsSecondHero;
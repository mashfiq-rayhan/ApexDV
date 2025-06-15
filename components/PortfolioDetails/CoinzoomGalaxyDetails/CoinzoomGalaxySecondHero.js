import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from "./CoinzoomGalaxy.module.css";

const CoinzoomGalaxySecondHero = () => {
    const heroData = {
        title: "Explore rewards based on your credentials on ",
        title2: "multiple blockchains",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci porttitor amet, dui convallis purus tincidunt bibendum.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Coinzoom Project Galaxy/Group 3305.svg",
    };
    return (
        <div className={styles.coinzoomGalaxySecondHero}>
            <div className="container">
                <Grid container spacing={10} className={styles.coinzoomGalaxySecondHeroContainer}>
                    <Grid item xs={12} md={6} className={styles.coinzoomGalaxyImg}>
                        <img src={heroData.heroImage} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.coinzoomGalaxySecondHeroText}>
                        <h1>{heroData.title} <span>{heroData.title2}</span> </h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://galaxy.eco/">
                            <Link className="" href="https://galaxy.eco/">
                                <a role="button">{heroData.btnText}</a>
                            </Link>
                        </button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CoinzoomGalaxySecondHero;
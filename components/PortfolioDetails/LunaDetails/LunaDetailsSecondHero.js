import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from "./LunaDetails.module.css";

const LunaDetailsSecondHero = () => {
    const heroData = {
        title: "Luna Responsive website Design",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero odio egestas id id arcu, hac augue.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Luna/Group 3238.svg",
    };
    return (
        <div className={styles.lunaDetailsHero}>
            <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className="container">
                <Grid container className={styles.lunaDetailsSecondHeroContainer}>
                    <Grid item xs={12} md={6} className={styles.lunaDetailsHeroText}>
                        <h1>{heroData.title}</h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://lunamarket.io/">
                            <Link className="" href="https://lunamarket.io/">
                                <a role="button">{heroData.btnText}</a>
                            </Link>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.coinzoomGalaxyImg}>
                        <img src={heroData.heroImage} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default LunaDetailsSecondHero;
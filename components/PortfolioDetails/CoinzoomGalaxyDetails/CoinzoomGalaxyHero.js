import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from "./CoinzoomGalaxy.module.css";

const CoinzoomGalaxyHero = () => {
    const heroData = {
        title: "CREATE NEW EXPERIENCES WITH WEB3 Credentials",
        text:
            "A collaborative credential infrastructure that empowers brands to build better communities and products in Web3",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Coinzoom Project Galaxy/Group 3249 1 1.svg",
        logo: "images/Portfolio Details Coinzoom Project Galaxy/image 480.svg"
    };
    return (
        <div className={styles.coinzoomGalaxyHero}>
            <div className="container">
                <Grid container>
                    <Grid item xs={12} md={6} className={styles.coinzoomGalaxyText}>
                        <img src={heroData.logo} alt="" />
                        <h1>{heroData.title}</h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://galaxy.eco/">
                            <Link className="" href="https://galaxy.eco/">
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

export default CoinzoomGalaxyHero;
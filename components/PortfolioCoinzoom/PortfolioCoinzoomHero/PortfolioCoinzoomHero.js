import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';
import styles from './PortfolioCoinzoomHero.module.css';

function PortfolioCoinzoomHero() {
    const heroData = {
        title: "The Complete Bitcoin & Crypto Experience",
        text:
            "Buy, sell, and trade over 40 cryptocurrencies including Bitcoin, Ether, and Litecoin on a regulated, secure exchange with some of the lowest fees in the industry.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Coinzoom/Group 3246 1.svg",
        logo: "images/Portfolio Details Coinzoom/image 339.svg"
    };
    return (
        <div className={styles.PortfolioCoinzoomHero}>
            <div className="container">
                <Grid container>
                    <Grid item xs={12} md={6} className={styles.PortfolioCoinzoomHeroText}>
                        <img src={heroData.logo} alt="" />
                        <h1>{heroData.title}</h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://www.coinzoom.com/">
                            <Link className="" href="https://www.coinzoom.com/">
                                <a role="button">{heroData.btnText}</a>
                            </Link>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.PortfolioCoinzoomHeroImg}>
                        <img src={heroData.heroImage} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PortfolioCoinzoomHero
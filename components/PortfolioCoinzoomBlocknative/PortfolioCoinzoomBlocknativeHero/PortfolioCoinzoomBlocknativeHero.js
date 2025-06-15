import styles from './PortfolioCoinzoomBlocknativeHero.module.css';
import { Grid } from "@mui/material";
import Link from "next/link";
import React from 'react';

function PortfolioCoinzoomBlocknativeHero() {
    const heroData = {
        title: "See the future Transact with confidence.",
        text:
            "Blocknative Transaction Orchestration is the best way to work with pre-chain data. We power transparency and profit for web3 users, developers, and traders alike.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Coinzoom blocknative/Hero Imgage.svg",
        logo: "images/Portfolio Details Coinzoom blocknative/logo.svg"
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

export default PortfolioCoinzoomBlocknativeHero
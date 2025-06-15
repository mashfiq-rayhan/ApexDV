import { Grid } from "@mui/material";
import Link from "next/link";
import styles from './PortfolioCoinzoomSecoundSec.module.css';

function PortfolioCoinzoomSecoundSec() {
    const heroData = {
        title: "The Complete Bitcoin & Crypto Experience",
        title2: "multiple blockchains",
        text:
            "Buy, sell, and trade over 40 cryptocurrencies including Bitcoin, Ether, and Litecoin on a regulated, secure exchange with some of the lowest fees in the industry.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "images/Portfolio Details Coinzoom/Frame 13465.svg",
    };
    return (
        <div className={styles.PortfolioCoinzoomSecoundSec}>
              <div className={styles.green_abstract_right}></div>
                        <div className={styles.green_abstract_left}></div>
            <div className="container p-5">
                <Grid container spacing={10} className={styles.PortfolioCoinzoomSecoundSecContainer}>
                    <Grid item xs={12} md={6} className={styles.PortfolioCoinzoomSecoundSecImg}>
                        <img src={heroData.heroImage} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.PortfolioCoinzoomSecoundSecText}>
                        <h1>{heroData.title} <span>{heroData.title2}</span> </h1>
                        <p>{heroData.text}</p>
                        <button className={styles.button86} href="https://www.coinzoom.com/">
                            <Link className="" href="https://www.coinzoom.com/">
                                <a role="button">{heroData.btnText}</a>
                            </Link>
                        </button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PortfolioCoinzoomSecoundSec
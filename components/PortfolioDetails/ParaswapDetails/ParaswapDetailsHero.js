import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./ParaswapDetailsHero.module.css";

const ParaswapDetailsHero = () => {
  const heroData = {
    title1: "Best Prices in DeFi",
    title2: "ParaSwap on Mobile",
    title3: "Everything in ParaSwap & More",
    subtitle: "for Traders & dApps",
    text2: "Cutting-edge NFT P2P Trading & Crypto Management Application",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "/images/Portfolio Details Paraswap/image 423.svg",
    heroPhoto: "/images/Portfolio Details Paraswap/image 424.svg",
    bodyText1:
      "ParaSwap Mobile app brings together ParaSwap’s entire ecosystem with its full features, opening users up to a treasury of crypto management tools.",
    bodyText2:
      "Beyond trading at the best rates with the highest efficiency, users can buy crypto with fiat, store & manage tokens, and trade NFTs like nowhere else.",
    bodyText3:
      "Backed by the highest level of security, users manage their crypto assets carefree by having complete control of their private keys and data sharing.",
  };

  return (
    <div className={styles.heroSection}>
      <div className="container mx-auto px-5">
        <div className={styles.paraSwapApps}>
          <h1>
            {heroData.title1} <span>{heroData.subtitle}</span>
          </h1>
          <p>
            We are the leading DeFi aggregator that unites the liquidity of
            decentralized <br />
            exchanges and lending protocols into one comprehensive and secure
            interface and APIs.{" "}
          </p>
          <button className={styles.button} href="https://www.paraswap.io/">
            <Link className="" href="https://www.paraswap.io/">
              <a role="button">{heroData.btnText}</a>
            </Link>
          </button>
          <Grid item xs={12} md={12} className={styles.heroImage}>
            <img src={heroData.heroImage} />
          </Grid>
        </div>
        <div className={styles.paraSwapMobile}>
          <h1>{heroData.title2}</h1>
          <p>{heroData.text2}</p>
          <Grid container className="paraSwapMobileMobile">
            <Grid item xs={12} md={6} className={styles.paraSwapMobileText}>
              <h3>{heroData.title3}</h3>
              <p>{heroData.bodyText1}</p>
              <p>{heroData.bodyText2}</p>
              <p>{heroData.bodyText3}</p>
            </Grid>
            <Grid item xs={12} md={6} className={styles.paraSwapMobileImage}>
              <img src={heroData.heroPhoto} alt="" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ParaswapDetailsHero;

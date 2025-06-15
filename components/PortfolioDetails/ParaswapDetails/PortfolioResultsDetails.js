import React from 'react';
import styles from "./ParaswapDetailsHero.module.css";


const PortfolioResultsDetails = () => {
    const resultsData = {
        title1: "We've worked for 4 years with CoinZoom",
        title2: "More than 18k Users on the platform.",
        title3: "Used by big publishers of good for NFT.",       
        title: "Results",       
        img1:"/images/Portfolio Details Horizen/Mask group-2.svg",
        img2:"/images/Portfolio Details Horizen/Mask group-1.svg",
        img3:"/images/Portfolio Details Horizen/Mask group.svg",
        background: "/images/Portfolio Details Horizen/Logo.svg"
        }
    return (
        <div className={styles.PortfolioResults}>
        <div className={styles.TopShadow}>
            </div>
            <div className={styles.BottomShadow}>
            </div>
          <div className={styles.PortfolioResultsBanner}>
            <img src={resultsData.background} alt="" />
          </div>  
        <div className={`  ${styles.PortfolioResultsDetails}`}>
               
                <div className='container'>
                    <h1>{resultsData.title}</h1>
                </div>
        <div className={`container p-5 ${styles.PortfolioResultsDetailsCards}`}>
                    <div className={styles.PortfolioResultsCardContainer}>
                        <div className={styles.PortfolioResultsCard1}>
                <img src={resultsData.img1} alt="" />
                <h3>{resultsData.title1}</h3>
            </div>
            <div className={styles.PortfolioResultsCard2}>
                <img src={resultsData.img2} alt="" />
                <h3>{resultsData.title2}</h3>
            </div>
            <div className={styles.PortfolioResultsCard3}>
                <img src={resultsData.img3} alt="" />
                <h3>{resultsData.title3}</h3>
            </div>
           </div>
            </div>
        </div>

        </div>
    );
};

export default PortfolioResultsDetails;
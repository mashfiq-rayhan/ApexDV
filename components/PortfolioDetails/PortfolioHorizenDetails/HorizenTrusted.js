import React from 'react';
import styles from "./PortfolioHorizenDetails.module.css";

const HorizenTrusted = () => {
    const trustedData = {
        title1: "Projects Partnering with Horizen Labs",        
        trustedIcon1: "/images/Portfolio Details Horizen/image 521.svg",
        trustedIcon2: "/images/Portfolio Details Horizen/image 522.svg",
        trustedIcon3: "/images/Portfolio Details Horizen/image 523.svg",
        trustedIcon4: "/images/Portfolio Details Horizen/image 524.svg",
        trustedIcon5: "/images/Portfolio Details Horizen/image 525.svg",        
        trustedIcon6: "/images/Portfolio Details Horizen/image 526.svg",        
      };
    return (
        <div className={styles.HorizenTrusted}>
        <div className="container mx-auto px-5">
           <h3>{trustedData.title1}</h3>
           <div className={styles.HorizenTrustedImage}>
               <img src={trustedData.trustedIcon1} alt="" />
               <img src={trustedData.trustedIcon2} alt="" />
               <img src={trustedData.trustedIcon3} alt="" />
               <img src={trustedData.trustedIcon4} alt="" />
               <img src={trustedData.trustedIcon5} alt="" />
               <img src={trustedData.trustedIcon6} alt="" />
           </div>
        </div>
   </div>
    );
};

export default HorizenTrusted;
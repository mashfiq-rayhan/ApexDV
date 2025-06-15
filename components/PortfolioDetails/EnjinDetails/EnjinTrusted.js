import React from 'react';
import styles from "./EnjinDetailsHero.module.css";

const EnjinTrusted = () => {
    const trustedData = {
        title1: "Trusted by",        
        trustedIcon1: "/images/Portfolio Details Enjin/image 484.svg",
        trustedIcon2: "/images/Portfolio Details Enjin/image 485.svg",
        trustedIcon3: "/images/Portfolio Details Enjin/image 486.svg",
        trustedIcon4: "/images/Portfolio Details Enjin/image 487.svg",
        trustedIcon5: "/images/Portfolio Details Enjin/image 488.svg",        
      };
    return (
        <div className={styles.EnjinTrusted}>
             <div className="container mx-auto px-5">
                <h3>{trustedData.title1}</h3>
                <div className={styles.EnjinTrustedImage}>
                    <img src={trustedData.trustedIcon1} alt="" />
                    <img src={trustedData.trustedIcon2} alt="" />
                    <img src={trustedData.trustedIcon3} alt="" />
                    <img src={trustedData.trustedIcon4} alt="" />
                    <img src={trustedData.trustedIcon5} alt="" />
                </div>
             </div>
        </div>
    );
};

export default EnjinTrusted;
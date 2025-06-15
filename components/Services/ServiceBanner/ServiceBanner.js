import React from "react";
import styles from "./ServiceBanner.module.css";

const ServiceBanner = () => {
  const data = {
    title: "NFT Marketplace Development Company",
    text1: "NFT is everywhere! Undeniably, the popularity of non-fungible tokens is soaring day by day. Yes, it has gained new heights during the past few years, even though it has been around us for more than five to six years. This has significantly impacted many sectors in a positive way.",
    text2: "Mapping the NFT revolution, contemplating this, it would be great to develop & launch an NFT marketplace. Would you wish to be part of the NFT journey? Are you up with the thought of launching the NFT trading platform instantly?",
    text3:"ApexDv provides top-tier NFT marketplace development services. The solution we offer is customizable for Individual expectations. So the choice of the blockchain network is yours, and the features to be infused could be based on how you want the platform to function.",
    text4:"Connect with us, get the NFT marketplace development solution, and join the NFT revolution within the shortest possible time. Thereby providing a stage for traders to buy and sell digital assets and collectibles in a safe and secure way.",
    btnText: "Contact Us",
    img: "/images/Service Page/image 484.svg"
  };

  return (
    <>
    <div className="container p-5">
      <div className={styles.banner_container}>

        <div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.text}>{data.text1}</p>
          <p className={styles.text}>{data.text2}</p>
          <p className={styles.text}>{data.text3}</p>
          <p className={styles.text}>{data.text4}</p>
          <button className={styles.button86} href="#contactUs">
            {/* <Link className="" href="#contact_us"> */}
              <a role="button" href="#contactUs">{data.btnText}</a>
            {/* </Link> */}
          </button>
        </div>
        <div>
          <div className={styles.green_abstract_right}></div>
          
          <img src={data.img} alt="" className={ styles.banner_image} />
        </div>
      </div>
      </div>
      </>
  );
};

export default ServiceBanner;


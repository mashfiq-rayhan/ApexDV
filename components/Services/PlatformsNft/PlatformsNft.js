import React from 'react';
import styles from "./PlatformsNft.module.css";

const PlatformsNft = () => {
    const headerData = {
        title: "Platforms we develop NFTs on",
    };
    const cardData = [
        {
            icon: "/images/Service Page/image 492.svg",
            title: "Ethereum-based NFT development",
            text: "We will leverage our expertise for your NFT development to create outstanding products as per the leading NFT blockchain platform Ethereum.",
        },
        {
            icon: "/images/Service Page/image 493.svg",
            title: "Development on Binance Smart Chain",
            text: "We will  build you NFT solutions based on Binance Smart Chain to forge the product keeping up with the high industry standards.",
        },
        {
            icon: "/images/Service Page/image 494.svg",
            title: "Utilizing Tezos for NFT development",
            text: "We always develop securely, with energy efficiency, and easily scalable NFT products based on Tezos blockchain technology.",
        },
        {
            icon: "/images/Service Page/image 495.svg",
            title: "Cardano-based NFT development",
            text: "Our team of specialists will create securely, transparently, and with sustainable products based on Cardano blockchain.",
        },
        {
            icon: "/images/Service Page/image 496.svg",
            title: "NFT development on Solana",
            text: "Our blockchain & NFT specialists utilize Solana blockchain to tailor products showing swift transactions and low gas fees.",
        },
        {
            icon: "/images/Service Page/image 497.svg",
            title: "Polkadot-based NFT development",
            text: "Our specialists utilize Polkadot blockchain to develop highly secure and easily scalable cross-blockchain solutions.",
        },
    ];
    return (
        <>
        <div className={styles.platformsNft}>
             <div className="container p-5">
            <div className={styles.platformNFtContainer}>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <h1 className={styles.title}>{headerData.title}</h1>

                <div className={styles.platformNFtCardContainer}>
                    {cardData.map((item, i) => (
                        <div className={styles.singleCard}>
                            <div className={styles.imageDiv}>
                                <img className="" src={item.icon} alt="" />
                            </div>
                            <div className="">
                                <h1 className={styles.cardTitle}>{item.title}</h1>
                                <p className={styles.cardText}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
       </>
    );
};

export default PlatformsNft;
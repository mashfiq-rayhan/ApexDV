import React from "react";
import styles from "./NftDevelopmentService.module.css";

const NftDevelopmentService = () => {
    const headerData = {
        title: "Our NFT development services",
        text: "We adopt the power of our world-class talents and profound knowledge of blockchain and NFTs to deliver tailored solutions of any type, from designing an asset for the token to developing a unique NFT marketplace. NFTs can be filled with anything, from digital art and music to virtual real estate and real-life experiences. This feature makes NFTs a unique and versatile tool for brand promotion.",
    };
    const cardData = [
        {
            icon: "/images/Service Page/image 487.svg",
            title: "NFT asset design",
            text: "Our designers will create assets into 2 or 4 dimensions and will mint into tokens bringing life to its digital form. Then that asset can be listed into any NFT Marketplace of your desired choice.",
        },
        {
            icon: "/images/Service Page/image 486.svg",
            title: "Intellectual property tokenization",
            text: "Our team of specialists will assist you in creating your own intellectual property of NFT. It can be anything such as an image, video, painting etc. ",
        },
        {
            icon: "/images/Service Page/image 488.svg",
            title: "NFT minting",
            text: "Minting an NFT is, uniquely publishing your token on the blockchain to make it purchasable. A simple step-by-step for starting this involves creating a digital wallet, specifically one that securely stores Cryptocurrency. ",
        },
        {
            icon: "/images/Service Page/image 490.svg",
            title: "Smart contract development",
            text: "Revolutionize your business with our smart contract development services for private, public and hybrid blockchains. With deep expertise in various smart contract programming languages, we help enterprises automate their operations, streamline workflow, and reduce the cost of key processes.",
        },
        {
            icon: "/images/Service Page/image 491.svg",
            title: "Migrating NFTs",
            text: "For seamless migration between blockchains, our blockchain specialists will create cross chain bridges to transfer tokens from one block chain to another.",
        },
        {
            icon: "/images/Service Page/image 489.svg",
            title: "Cross-chain NFT platform development",
            text: "At ApexDv, we build NFT platforms and marketplaces equipped with cross-chain capabilities such as blockchain networks interoperability, cross-chain transactions, and multi-token wallet systems. They ensure efficient, secure, and seamless NFT exchange in different networks.",
        },
    ];
    return (
        <>
        <div className={styles.nftServiceContainer}>
        <div className="container p-5">
            
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <h1 className={styles.title}>{headerData.title}</h1>
                <p className={styles.text}>{headerData.text}</p>

                <div className={styles.nftServiceCardContainer}>
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
        </>
    );
};

export default NftDevelopmentService;

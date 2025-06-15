import React from 'react';
import styles from "./BenefitsOfNft.module.css";

const BenefitsOfNft = () => {
    const headerData = {
        title: "Benefits of NFTs",
        text: "Apart from being one of the most booming technologies at the moment, non-fungible tokens offer an array of opportunities for individuals and businesses that were not available earlier. Innowise Group’s broad expertise in the field gives a chance to secure a formidable position in this market."
    };
    const cardData = [
        {
            icon: "/images/Service Page/image 498.svg",
            title: "Security",
            text: "Non-fungible tokens are a blockchain-based technology. Each token is a unique record in a blockchain of your choice, which functions as an immutable digital signature and guarantees uniqueness and ownership. It leads to impenetrable security of the asset put into the token since any blockchain is virtually unhackable nowadays.",
        },
        {
            icon: "/images/Service Page/image 499.svg",
            title: "Versatility",
            text: "NFTs have a wide range of use cases. You can put digital art, music, GIFs, collectibles, etc. into a token and spread it to any relevant audience. Moreover, they can be used not only as a proof of authenticity, but also as a certificate of ownership of any physical or digital item. Potentially, we can utilize this technology to create digital IDs that will be impossible to forge.",
        },
        {
            icon: "/images/Service Page/image 500.svg",
            title: "Market efficiency",
            text: "Combining all the features above, we get a significant increase in market efficiency established by NFTs. Utilizing NFTs doesn’t just bring the creators and consumers closer to each other, while simultaneously solidly impacting the market. NFTs can streamline and secure buy/sell operations and enable easier monetization.",
        },
        
    ];
    return (
        <>
        <div className={styles.benefitsOfNft}>
            <div className="container p-5">
            <div className={styles.benefitNFtContainer}>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <h1 className={styles.title}>{headerData.title}</h1>
               <p className={styles.text}>{headerData.text}</p>

                <div className={styles.benefitNFtCardContainer}>
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

export default BenefitsOfNft;
import React from 'react';
import styles from "./HowNftBeUtilized.module.css";

const HowNftBeUtilized = () => {
    const headerData = {
        title: "How can NFTs be utilized?",
        text: "Non-fungible tokens are a versatile tool that can be precisely tailored to particular needs."
    }
    const cardData = [
        {
            id: 1,
            icon: "images/Service Page/image 48777 (1).svg",
            title: "Managing assets",
            text: "When the asset is converted into an NFT, it can be stored or transferred to another user easily and securely. Users can manage their NFTs via one application and the blockchain will exclude the possibility of fraud"
        },
        {
              id: 2,
            icon: "images/Service Page/image 48777 (2).svg",
            title: "Collectibles",
            text: "Whether it’s a piece of art, an in-game item or a physical asset, an NFT can act as a certificate of ownership or authenticity that can’t be forged."
        },
        {
               id: 3,
            icon: "images/Service Page/image 48777 (3).svg",
            title: "Software licensing",
            text: "Non-fungible tokens can replace license keys. By putting the license information into an NFT and sending the token to an end-user, developers can automate the process of software distribution and licensing."
        },
        {
                id: 4,
            icon: "images/Service Page/image 48777 (4).svg",
            title: "Subscription management",
            text: "Just like software licensing, NFTs enable end customers to subscribe to the services or content from the creators."
        }
    ]
    return (
        <>
          <div className={styles.howNftBeUtilized}>
            <div className={`container p-5 ${styles.nftBeUtilized}`}>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <div>
                    <h1 className={styles.title}>{headerData.title}</h1>
                    <p className={styles.text}>{ headerData.text}</p>
      
                   <div className={styles.nftBeUtilizedCard}>
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

export default HowNftBeUtilized;
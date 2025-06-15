import React from 'react';
import styles from "./Networks.module.css";


const Networks = () => {
    const data = [
        {
            id: 1,
            logo: "images/Service Page/image 477.svg",
            title: "Ethereum",
            text: "Most well known network for digital asset transactions and smart contract validation"
        },
        {
            id: 2,
            logo: "images/Service Page/image 478.svg",
            title: "Polygon",
            text: "Easy interoperable network reducing network fees"
        },
        {
            id: 3,
            logo: "images/Service Page/image 503.svg",
            title: "Binance",
            text: "Most well-known and easy-to-use network named Binance Smart Chain"
        },
        {
            id: 4,
            logo: "images/Service Page/image 480.svg",
            title: "Solana",
            text: "Efficient in handling thousands of transactions with a proof-of-history (POH) system"
        },
        {
            id: 5,
            logo: "images/Service Page/image 481.svg",
            title: "Cardano",
            text: "A highly secure and scalable with proof-of-stake (POS) timestamping"
        },
        {
            id: 6,
            logo: "images/Service Page/image 482.svg",
            title: "EOS",
            text: "Helps in a high-speed transaction with zero transaction fees"
        },
        {
           id: 7,
            logo: "images/Service Page/image 480.svg",
            title: "Solana",
            text: "Efficient in handling thousands of transactions with a proof-of-history (POH) system"
        },
        {
            id: 8,
            logo: "images/Service Page/image 477.svg",
            title: "Ethereum",
            text: "Most well known network for digital asset transactions and smart contract validation"
        },

    ]
    return (
        <>
        <div className={styles.networksMain}>
            <div className={styles.green_abstract_right}></div>
            <div className={styles.green_abstract_left}></div>
            <div className='container p-5'>
                <div className={styles.networks}>
                    <div className={styles.networksImgDiv}>
                        <h1 className={styles.title}  >Networks</h1>
                        <img className={styles.networksImg} src="images/Service Page/image 483.svg" alt="" />
                    </div>
                    <div className={styles.networksInfo}>
                        <div className={styles.scrollbar} id={styles.scrollbar_style}>
                            <div className={styles.force_overflow}>
                                <div className={styles.scrollInfo} >
                                    {
                                        data.map((item,i) => (
                                            <div className={styles.scrollInfoCard}>
                                                <div className={styles.scrollInfoCardImg}>
                                                    <img src={item.logo} alt="" />
                                                </div>
                                                <div className={styles.scrollInfoCardInfo}>
                                                    <h1 className={styles.scrollInfoCardTitle}>{item.title}</h1>
                                                    <p className={styles.scrollInfoCardText}>{ item.text}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
        </>
    );
};

export default Networks;
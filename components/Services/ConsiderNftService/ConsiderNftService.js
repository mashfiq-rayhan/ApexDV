import React from 'react';
import styles from "./ConsiderNftService.module.css";

const ConsiderNftService = () => {
    const data = {
        title: "Who should consider NFT development services?",
        text: "Diving into the world of NFTs unveils a lot of opportunities being most beneficial for"
    }
    const cardData = [
        {
            text: "Exchange and DeFi platform owners;"
        },
        {
            text: "Museums, art galleries, and auction houses;"
        },
        {
            text: "Independent artists and photographers;"
        },
        {
            text: " Custom brand owners;"
        },
        {
            text: "Musicians, record labels and filmmakers;"
        },
        {
            text: "Content creators and influencers."
        }
    ]
    return (
        <>
        <div className={styles.considerNftService}>
            <div className="container p-5">
            <div className={styles.considerNftServiceContainer}>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <div className={styles.considerNftServiceHeader}>

                <h1 className={styles.title} >{ data.title}</h1>
                <p className={styles.text}>{ data.text}</p>
            </div>
            <div className={styles.considerNftServiceCardContainer}>
                 {cardData.map((item, i) => (
                        <div className={styles.singleCard}>
                                <li className={styles.cardText}>{item.text}</li>
                        </div>
                    ))}
            </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default ConsiderNftService;
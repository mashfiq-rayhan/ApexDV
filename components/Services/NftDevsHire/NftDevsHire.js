import Link from 'next/link';
import React from 'react';
import styles from "./NftDevsHire.module.css";

const NftDevsHire = () => {
     const data = {
        title: "NFT developers for hire",
        text: "ApexDv offers dedicated teams of highly skilled IT professionals and individual software engineers to work on your NFT development projects. Relying on our experience in blockchain, we build top-notch NFT solutions sticking to all the recent market and technology trends.",
    }
    return (
        <>
        <div className={styles.nftDevsHire}>
            <div className={`container p-5 ${styles.nftDevsHireContainer}`}>
                <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.text}>{data.text}</p>
                     <button className={styles.button86} href="#contactUs">
                        <Link className="" href="#contactUs">
                            <a role="button" href="#contactUs">Contact Us</a>
                        </Link>
                    </button>
            </div>
            
    </div>
        </>
    );
};

export default NftDevsHire;
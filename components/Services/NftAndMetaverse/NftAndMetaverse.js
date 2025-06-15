import Link from 'next/link';
import React from 'react';
import styles from "./NftAndMetaverse.module.css";

const NftAndMetaverse = () => {
    const data = {
        title: "NFTs and Metaverse",
        text1: "As a term, Metaverse describes a digital world bringing its visitors an experience similar or even better than the one they can get in the offline world. We already can see immersive online experiences such as digital museums, art exhibitions, shops, and games.",
        text2: "NFTs will become an integral part of the Metaverse allowing users to transfer owned assets from one virtual world to another and use them anywhere in the digital universe. In this case, non-fungible tokens will serve as proof of possession or authenticity of an asset. This feature will make NFTs rapidly spread their popularity across the globe and become greatly valuable."
    }
    return (
        <>
        <div className={styles.nftAndMetaverse}>
            <div className={`container p-5 ${styles.nftAndMetaverseContainer}`}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.text1}>{data.text1}</p>
                    <p className={styles.text2}>{data.text2}</p>
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

export default NftAndMetaverse;
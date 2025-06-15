import Link from "next/link";
import React from 'react';
import styles from "./YourOptForNftDev.module.css";

const YourOptForNftDev = () => {
    return (
        <>
        <div className={styles.yourOptForNftDev}>
            <div className={`container p-5 ${styles.optForNftDev}`}>
                <div className={styles.green_abstract_right}></div>
                <div>
                     <img src="images/Service Page/call-to-action-3.gif" alt="" className={ styles.image} />
                </div>
                <div>
                    <h1 className={styles.title}>Not sure whether to opt in for NFT development?</h1>
                    <p className={styles.text}>Share your project idea with Innowise Group’s professionals</p>
                     <button className={styles.button86} href="#contactUs">
                        <Link className="" href="#contactUs">
                            <a role="button" href="#contactUs">Contact Us</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default YourOptForNftDev;
import Link from "next/link";
import React from 'react';
import styles from "./YourNftProject.module.css";

const YourNftProject = () => {
    return (
        <>
        <div className={styles.yourNftProject}>
            <div className={`container p-5 ${styles.nftProjectContainer}`}>
                <div className={styles.green_abstract_right}></div>
                <div>
                     <img src="images/Service Page/Get-consultation-gif.gif" alt="" className={ styles.image} />
                </div>
                <div>
                    <h1 className={styles.title}>Have your NFT project done by Innowise Group</h1>
                    <p className={styles.text}>Our world-class NFT developers will swiftly bring your project from the idea to a functional product</p>
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

export default YourNftProject;


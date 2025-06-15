import Link from 'next/link';
import React from 'react';
import styles from "./NextDetailsItam.module.css";

const NextDetailsItam = ({ title, subtitle, img, href }) => {
    return (
       <Link href={href} passHref={true}>
        <div className={styles.card}>
         < h2>{title}</h2>
            <p>{subtitle}</p>
           <img src={img} alt="" />
        </div>
        </Link>
        
    );
};

export default NextDetailsItam;
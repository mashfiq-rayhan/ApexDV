import React from 'react';
import styles from "./LunaDetails.module.css";

const Partners = () => {
    const data = {
        title: "Our partners",
        text: "Without our partners, none of our products would work. Our partners provide state-of-the-art gaming engines and economies to provide value for the NFTs we create."
    }
    const logos = [
        {
            id: 1,
            logo: "images/Portfolio Details Luna/image 491.svg",
        },
        {
            id: 2,
            logo: "images/Portfolio Details Luna/image 492.svg",
        },
        {
            id: 3,
            logo: "images/Portfolio Details Luna/image 493.svg",
        },
        {
            id: 4,
            logo: "images/Portfolio Details Luna/image 494.svg",
        },
        {
            id: 5,
            logo: "images/Portfolio Details Luna/image 495.svg",
        },
        {
            id: 6,
            logo: "images/Portfolio Details Luna/image 496.svg",
        },
        {
            id: 7,
            logo: "images/Portfolio Details Luna/image 497.svg",
        },
    ]
    return (
        <div className={styles.partners}  >
            <div className='container' >
                <div >
                    <h1 className={styles.partnersTitle} >{data.title}</h1>
                    <p className={styles.partnersText}>{data.text}</p>
                </div>
                <div className={styles.logoContainer}>
                    {
                        logos.map((item) => (
                            <div >
                                <img src={item.logo} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Partners;
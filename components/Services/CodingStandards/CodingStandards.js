import React from 'react';
import styles from "./CodingStandards.module.css";

const CodingStandards = () => {
    const data = [
        {
            id: 1,
            title: "Smart",
            text: "Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code."
        },
        {
            id: 2,
             title: "Stable",
            text: "We take utter care of code stability before releasing any of the products. We use various testing tools to check the stability of code as well as products."
        },
        {
            id: 3,
           title: "Reusable",
            text: "The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code."
        },
        {
            id: 4,
            title: "Beautiful",
            text: "Beautiful Code is the code that seems professional and understandable. It is written as per the widely accepted coding standard."
        }
        
    ]
    return (
        <>
        <div className={ styles.codingStandardsMain}> 
            <div className='container p-5'>
            <div className={styles.green_abstract_left}></div> 
            <div className={styles.codingStandards}>
                <div>
                <h1 className={styles.title}>CODING STANDARDS</h1>
                <div className={styles.cardContainer}>
                    {
                        data.map((item) => (
                            <div>
                                <h1 className={styles.cardTitle} >{item.title}</h1>
                                <p className={styles.cardText} >{ item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div >
                <img className={styles.codingStandardsImg} src="images/Service Page/Frame 13814 1.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default CodingStandards;
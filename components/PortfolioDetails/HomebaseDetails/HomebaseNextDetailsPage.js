import Link from 'next/link';
import React from 'react';
import styles from "./Homebase.module.css";

const HomebaseNextDetailsPage = () => {
     const nextDetailsHeader = {
        header: "We're also proud of",        
    }
    const nextDetailsData = [
        {
            id: 1,
            title: "Horizon ",
            subtitle: "Web",
            img: "/images/Portfolio Details homebase/Group 32466.svg",
            href: "https://horizenlabs.io/",
        },
        {
            id: 2,
            title: "Paritex",
            subtitle: "Web",
            img: "/images/Portfolio Details homebase/Group 324666.svg",
            href: "https://www.paritex.com/en",
        },
        {
            id: 3,
            title: "AOTA ",
            subtitle: "Web",
            img: "/images/Portfolio Details homebase/Group 3246666.svg",
            href: "/",
        }
    ]
    return (
       <div className="NextDetailsPage">
             <div className="green_abstract_right"></div>
                <div className="green_abstract_left"></div>
            <div className='container'>
                <div className='NextDetails'>
                    <h2>            
            {nextDetailsHeader.header}
          </h2> 
                    <div className="nextDetailsData">
                {
                    nextDetailsData.map((details, i) => {
                        return (
                            <Link href={details.href} passHref={true} >
                            <div className={styles.card}>
                                <h2>{details.title}</h2>
                                <p>{details.subtitle}</p>
                                <img src={details.img} alt="" />
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
            </div>
        </div>
        </div>
    );
};

export default HomebaseNextDetailsPage;
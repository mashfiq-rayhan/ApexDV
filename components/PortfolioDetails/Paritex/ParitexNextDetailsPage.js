import Link from 'next/link';
import React from 'react';
import styles from "./ParitexNextDetailsPage.module.css";

const ParitexNextDetailsPage = () => {
     const nextDetailsHeader = {
        header: "We're also proud of",        
    }
    const nextDetailsData = [
        {
            id: 1,
            title: "Homebase ",
            subtitle: "Web",
            img: "images/PortfolioDetailsParitex/Group 3301 2.svg",
            href: "https://homebasedao.io/",
        },
        {
            id: 2,
            title: "Impostors",
            subtitle: "Web responsive",
            img: "images/PortfolioDetailsParitex/Group 3303 1.svg",
            href: "https://impostors.gg/",
        },
        {
            id: 3,
            title: "Cryptominum ",
            subtitle: "Web",
            img: "images/PortfolioDetailsParitex/Group 3302 1.svg",
            href: "https://cryptominium.com/",
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
                            <Link href={details.href} passHref={true}>
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

export default ParitexNextDetailsPage;
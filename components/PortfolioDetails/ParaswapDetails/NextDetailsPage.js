import { Grid } from '@mui/material';
import React from 'react';
import NextDetailsItam from '../../Card/NextDetailsItam/NextDetailsItam';
import styles from "./ParaswapDetailsHero.module.css";

const NextDetailsPage = () => {
    const nextDetailsHeader = {
        header: "We're also proud of",        
    }

 const nextDetailsData = [
    {
        id: 1,
        title: "Paritex",
        subtitle: "Web",
        img: "/images/Portfolio Details Paraswap/image 481.svg",
        href: "https://www.paritex.com/en",
    },
    {
        id: 2,
        title: "AOTA",
        subtitle: "Web",
        img: "/images/Portfolio Details Paraswap/Group 3246 2.svg",
        href: "/",
    },
    {
        id: 3,
        title: "CoinZoom",
        subtitle: "Web",
        img: "/images/Portfolio Details Paraswap/Group 3246 1.svg",
        href: "https://www.coinzoom.com/",    
    }
]

    return (
        <div className="NextDetailsPage">

<div className={styles.TopShadow}>
            </div>
            <div className={styles.BottomShadow}>
            </div>


      <div className="container mx-auto px-5">
        <div className="NextDetails">
          <h2>            
            {nextDetailsHeader.header}
          </h2>         
         
          <div className="nextDetailsData">
          {
                        nextDetailsData.map((details, i) => {
                            return (
                                <NextDetailsItam
                                    key={details.id}
                                    title={details.title}
                                    subtitle={details.subtitle}
                                    img={details.img}
                                    href={details.href}
                                />
                            )
                        })
                    }
         
         </div>
        </div>
        </div>
        </div>
    );
};

export default NextDetailsPage;
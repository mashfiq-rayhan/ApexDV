import Link from 'next/link';
import React from 'react';
import styles from "./CoinzoomGalaxy.module.css";

const GalaxyNextDetailsPage = () => {
    const nextDetailsHeader = {
        header: "We're also proud of",
    }
    const nextDetailsData = [
        {
            id: 1,
            title: "Horizon",
            subtitle: "Web",
            img: "images/Portfolio Details Coinzoom Project Galaxy/Group 32466.svg",
            href: "https://horizenlabs.io/",
        },
        {
            id: 2,
            title: "Enjin",
            subtitle: "Web responsive",
            img: "images/Portfolio Details Coinzoom Project Galaxy/Group 3246 1-3 2.svg",
            href: "https://enjin.io/",
        },
        {
            id: 3,
            title: "Luna ",
            subtitle: "Web",
            img: "images/Portfolio Details Coinzoom Project Galaxy/Group 32467.svg",
            href: "https://lunamarket.io/",
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

export default GalaxyNextDetailsPage;
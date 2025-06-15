import React from 'react';
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NftSolutions.module.css";

const NftSolutions = () => {
    const data = [
        {
            id: 1,
            img: "/images/Service Page/Frame 13849.svg",
            title: "NFT marketplace development",
            text: "ApexDv provides top-tier NFT marketplace development services. The solution we offer is customizable for Individual expectations. So the choice of the blockchain network is yours, and the features to be infused could be based on how you want the platform to function. "

        },
        {
            id: 2,
            img: "/images/Service Page/Frame 13849-1.svg",
            title: "NFT minting platform development",
            text: "We build and deploy platforms for creating non-fungible tokens and releasing them to the blockchain. We then set up the smart contract with all the required data, including fees, and create a user-friendly interface regardless of the platform being a part of a blockchain ecosystem or a standalone solution."

        },
        {
            id: 3,
            img: "/images/Service Page/Frame 13849-2.svg",
            title: "NFT staking platform development",
            text: "We will maintain the whole process of developing a platform utilizing non-fungible tokens for staking, from creating an engaging interface to fine-tuning each feature and integrating the platform into your ecosystem if needed."

        },
        {
            id: 4,
            img: "/images/Service Page/Frame 13849-3.svg",
            title: "NFT auction portal development",
            text: "Our NFT experts and world-class developers will bring you a bidding platform ready to hold secure and transparent NFT auctions having all the required functionality for admins, sellers and buyers. Besides must-have features, we can enrich bidding platforms with AI-powered feed for buyers, real-time statistics and automated workflows to streamline the NFT auction process."

        },
        {
            id: 5,
            img: "/images/Service Page/Frame 13849-4.svg",
            title: "NFT loan platform development",
            text: "As an expert in software development and Fintech, ApexDv can create a platform for managing loans with non fungible tokens acting as collateral. Our specialists cover everything from outstanding design and user experience to swift response and impeccable security."

        },
        {
            id: 6,
            img: "/images/Service Page/Frame 13849-5.svg",
            title: "NFT games development",
            text: "ApexDv can handle the process of a full fledged NFT game development. We create gaming platforms and implement the ability for the players to earn NFT that can further be traded. NFT pay-to-earn is believed to be the future of the gaming industry due to the high involvement of players in the gaming and asset trading processes."

        },
        {
            id: 7,
            img: "/images/Service Page/Frame 13849-6.svg",
            title: "NFT art gallery development",
            text: "With our profound expertise in design and software development, we can curate an art gallery with a design matching your collection of tokenized art and help it catch people’s attention. ApexDv dispatches various kinds of NFT art galleries from one page websites to immersive interactive worlds for the Metaverse."

        },
        {
            id: 8,
            img: "/images/Service Page/Frame 13849-7.svg",
            title: "NFT wallet app development",
            text: "By utilizing vast expertise, ApexDv’s software development specialists deliver web, desktop, mobile or cross platform NFT wallet applications showing high reliability, swiftness and flawless security while being as user friendly as possible. We connect applications to any blockchain platform that supports NFT rules."

        },
    ]
    return (
<>
        <div className={styles.nftSolutions}>
            <div className='container p-5'>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <div>
                    <h1 className={styles.title}>NFT solutions development</h1>
                </div>
                <div>
                    <Swiper

                        spaceBetween={30}
                        modules={[Scrollbar]}
                        slidesPerView={3}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        scrollbar={{ draggable: true }}

                        breakpoints={{
                            320: {
                               slidesPerView: "auto",
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >

                        {data.map((item) => (
                            <SwiperSlide className={styles.swiperSlide}>
                                <div className={styles.swiperSlideDiv}>
                                    <div className={styles.swiperSlideImgDiv}>
                                        <img className={styles.img} src={item.img} />
                                    </div>
                                    <h1 className={styles.swiperTitle} >{item.title}</h1>
                                    <p className={styles.swiperText}>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
            </div>
            </>
    );
};

export default NftSolutions;
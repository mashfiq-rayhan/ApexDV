import React from 'react';
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NftForIndustry.module.css";

const NftForIndustry = () => {
    const data = [
        {
            id: 1,
            img: "/images/Service Page/Frame 13941.svg",
            title: "Art",
            text: "Digital artists and digital art agencies can expand their audience and customer pool by minting digital art into non-fungible tokens and selling it at NFT marketplaces."

        },
        {
            id: 2,
            img: "/images/Service Page/Frame 13942.svg",
            title: "Digital content",
            text: "Digital content creators  can mint any tweet, post on Reddit or any other piece of content and spread it both as a meme or useful information, gaining recognition and expanding loyal audience."

        },
        {
            id: 3,
            img: "/images/Service Page/Frame 13943.svg",
            title: "Music",
            text: "Music labels and independent musicians can utilize non-fungible tokens to increase revenue from distributing their tracks by creating special edition NFT music, selling NFT subscriptions to future releases, etc."

        },
        {
            id: 4,
            img: "/images/Service Page/Frame 13944.svg",
            title: "Video",
            text: "Video creation teams, film and television production companies, and independent video bloggers can fully or partially mint their movies into NFTs and distribute them increasing revenue and popularity."

        },
        {
            id: 5,
            img: "/images/Service Page/Frame 13945.svg",
            title: "Games",
            text: "In gaming, NFTs can act as proof of possession over in-game items making them more valuable, the games more popular, and increasing game creators’ revenue regardless of the team size and game genre."

        },
        {
            id: 6,
            img: "/images/Service Page/Frame 13946.svg",
            title: "Sports",
            text: "Professional athletes, sports teams, and community leaders can utilize NFTs to create and distribute unique assets both totally virtual and having real-life twins increasing community engagement and brand awareness."

        },
        {
            id: 7,
            img: "/images/Service Page/Frame 13947.svg",
            title: "Fashion",
            text: "Fashion houses and independent fashion designers can unleash the power of NFTs to create digital twins of existing physical assets or completely digital fashion items for avatars or AR filters."

        },
        {
            id: 8,
            img: "/images/Service Page/Frame 13948.svg",
            title: "Collectibles",
            text: "Collectible items with a certain level of rarity can be released and distributed in the form of an NFT by any brand or individual expanding the brand awareness, increasing customer loyalty, and boosting revenue."

        },
        {
            id: 9,
            img: "/images/Service Page/Frame 13949.svg",
            title: "Real estate",
            text: "In real estate, non-fungible tokens can be utilized as a certificate of ownership over any physical property like land or building as well as digital lands like those in The Sandbox or Decentraland."

        },
        {
            id: 10,
            img: "/images/Service Page/Frame 13950.svg",
            title: "Domain names",
            text: "Rights over domain names can be securely and swiftly passed through blockchain with the help of non-fungible tokens containing all the necessary data like the domain name itself, previous owner, and the new owner."

        },
    ]
    return (
        <>
        <div className={styles.nftForIndustry}>
            <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className='container p-5'>
            <div>
                <h1 className={styles.title}>NFT for any industry</h1>
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
                            <h1 className={ styles.swiperTitle} >{item.title}</h1>
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

export default NftForIndustry;
import Image from 'next/image';
import React from 'react';
import styles from './HeroSec.module.css';

function HeroSec() {
    return (
        <>
            <div className='container mx-auto p-5'>
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                <div className="md:columns-2 sm:columns-1">
                    <div className={styles.heroSecText}>
                        <h1>Specialists that deliver.</h1>
                        <p>We know the process, and empower a multidisciplinary team to collaborate with you and deliver delightful solutions.</p>
                        <button className={styles.button2} >
                            <a href="/services">Discover More</a>
                        </button>
                    </div>
                    <div className={styles.heroSecImage}>
                        <Image
                            src={'/images/AboutUs/image 456.svg'}
                            width={450}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.howItAllBeganMain}>
                <div className={styles.green_abstract_left2}></div>
                <div className={styles.green_abstract_right2}></div>
                <div className='container mx-auto p-5'>
                
                <div className="columns-1">
                    <div className={styles.howItAllBegan}>
                        
                        <h1>How it all began
                                and what drives us today</h1>
                        <h2>2016</h2>
                            <p>We started this company as a web development company initially and the motive was to help small scale industry companies voluntarily to tap into the market and come into the eyes of the world for our devotion to make a difference in the world of the digital era. </p>
                            <h2>2017</h2>
                            <p>Our ultimate dream was to be the best blockchain development company out there in the market. We expanded our team and hired highly skilled developers from different parts of the world who have special fields of expertises. We gathered as a team and started to strive towards being the best blockchain development company. </p>
                            <h2>2018</h2>
                            <p>We have worked with different clients across the world such as Garudaswap, University of Dubai, Enjin etc and have gained their trust. We provided 360 degree technological support for them. This is where our global journey began and more people came to know about us. </p>
                            <h2>2019</h2>
                            <p>We expanded our company to the USA and hired highly skilled developers to grow our team and to tap into the market of the US. Blockchain was on the verge of getting to its peak and it was the right move to expand to the states during that time. </p>
                            <h2>2020</h2>
                            <p>It’s the cryptocurrency hype world now, everyone’s crazy about cryptocurrency. This is when our ultimate goal has come to reality, our patience has been answered fruitfully and we slowly became the most reliable blockchain development company in the market because of our efficiency, trust and reliability. </p>
                            <h2>2021</h2>
                            <p>NFT Time! People have gone crazy with non fungible tokens and the whole world has been making gazillions of NFTs. This is where we helped entities with their NFTs to be sellable and helped them mint in the NFT Market Places. We then became the 360 degree solution for the NFT Business. </p>
                            <h2>2022</h2>
                            <p>We expanded our team to Bangladesh, the most creative people our clients have met were the Bangladesh Team and they are really satisfied with the inputs. We hired marketing people to help companies to grow their business financially to its peak. </p>
                            <p>Many more wonders to achieve ahead.</p>
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HeroSec
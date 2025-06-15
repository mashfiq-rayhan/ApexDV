import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styles from './Awards.module.css';

function Awards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };
    return (
        <div className={styles.Awards}>
            <Slider className="awardSlider" {...settings}>
                <div>
                    <img
                        src={'/images/AboutUs/image 343.svg'}
                        className={styles.sliderImg}
                    />
                </div>
                <div>
                    <img
                        src={'/images/AboutUs/image 343.svg'}
                        className={styles.sliderImg}
                    />
                </div>
                <div>
                    <img
                        src={'/images/AboutUs/image 343.svg'}
                        className={styles.sliderImg}
                    />
                </div>
                <div>
                    <img
                        src={'/images/AboutUs/image 343.svg'}
                        className={styles.sliderImg}
                    />
                </div>
            </Slider>
            <div className="md:text-end sm:text-center p-10 sm:text-xl ">
                <h1 className='font-teko text-6xl'>Awards</h1>
            </div>
            <div className="container p-5">
                <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
                {/* one year award */}
                <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
                    <h1 className={styles.awardYear}>2021</h1>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    {/* award year */}
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>Deloitte Fast 500</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.rightBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>CODiE Awards</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.leftBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                    </div>
                </div>
                {/* One year award end */}
                {/* one year award */}
                <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
                    <h1 className={styles.awardYear}>2020</h1>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    {/* award year */}
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>FSF Free Software Awards</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.rightBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>Microsoft Most Valuable Professional</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.leftBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                    </div>
                </div>
                {/* One year award end */}
                {/* one year award */}
                <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
                    <h1 className={styles.awardYear}>2019</h1>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    {/* award year */}
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>Nasscom Emerge 50</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.rightBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                        <div className={styles.awardWrapper}>
                            <div className="flex flex-col">
                                <div>
                                    <Image
                                        src={'/images/AboutUs/image 344.svg'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h6 className={styles.awardTitle}>Webby Awards</h6>
                                <p className={styles.awardP}>Worldwide</p>
                            </div>
                            <div className={`p-3 absolute top-0 ${ styles.leftBox }  ${ styles.awardDetails }`}>
                                <h2 className="mb-3">Clutch</h2>
                                <p>Cheesecake Labs: Top 7 mobile app development company worldwide</p>
                            </div>
                        </div>
                        {/* another one */}
                    </div>
                </div>
                {/* One year award end */}

            </div>
        </div>
    )
}

export default Awards
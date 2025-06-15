import React from 'react';
import styles from "./EnjinDetailsHero.module.css";

const ReviewSeason = () => {
    const reviewData = {
        title: "-	Steven Gavy",  
        subTitle: "CEO of ApexDv",      
        reviewProfile: "/images/Portfolio Details Paraswap/image 336.svg",        
        text: "Super speedy and very helpful response. Friendly, service of the highest standard. Everything made very clear and transfer done quickly and efficiently. Having a personal trader is such a good idea. After encountering so much (private sector) incompetence over months it was so reassuring to be in the hands of someone totally professional. Highly recommended.",

                
      };


    return (
        <div className={styles.ReviewSeason}>
            <div className={styles.ReviewSeasonShadow}></div>

             <div className="container mx-auto px-5">
             <div className={styles.ReviewSeasonMain}>
             <div className={styles.ReviewMainText}>
                    <p><span>"</span> {reviewData.text}</p>
                </div>
                <div className={styles.ReviewProfile}>
                <div className={styles.ReviewImage}>
                    <img src={reviewData.reviewProfile} alt="" />
                    </div>
                <div className={styles.ReviewText}>
                    <h2>{reviewData.title}</h2>
                    {/* <h4>{reviewData.subTitle}</h4> */}
                   </div> 

                </div>
             </div>
             </div>
        </div>
    );
};

export default ReviewSeason;
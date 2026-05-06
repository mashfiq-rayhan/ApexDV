import Link from 'next/link';
import React from 'react';

const HorizenWebsite = () => {
    const horizenData = {
        title: "Horizen labs Responsive website Design",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero odio egestas id id arcu, hac augue.",
        btnText: "Explore site",
        btnHref: "/",
        heroImage: "/images/Portfolio Details Enjin/Group 3238.svg",
      };

    return (
        <div className={styles.EnjinDetailsHero}>
          
<div className={styles.TopShadow}>
            </div>
            <div className={styles.BottomShadow}>
            </div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
          <div
            className={styles.HorizenDetailsText}
            id={styles.HorizenDetails}
          >
            <h1>{horizenData.title}</h1>
            <p>{horizenData.text}</p>
            <button className={styles.button} href="https://horizenlabs.io/">
                <Link className="" href="https://horizenlabs.io/">
                <a role="button">{horizenData.btnText}</a>
                </Link>
                </button>
          </div>


          <div className={styles.HorizenDetailsImage}>
            <img src={horizenData.heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default HorizenWebsite;
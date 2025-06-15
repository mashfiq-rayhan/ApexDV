import React from 'react';
import styles from "./NftDevProcess.module.css";

const NftDevProcess = () => {
    const data = [
        {
            id: 1,
            icon: "images/Service Page/Icons.svg",
            title: "Prepare",
            text: "Non-fungible tokens are a blockchain-based technology. Each token is a unique record in a blockchain of your choice, which functions as an immutable digital signature and guarantees uniqueness and ownership. It leads to impenetrable security of the asset put into the token since any blockchain is virtually unhackable nowadays."
        },
        {
            id: 2,
            icon: "images/Service Page/Icons-1.svg",
            title: "Assess",
            text: "Our specialists determine the precise development specs, estimate the cost and time requirements, arrange the launch plan and assign Innowise Group’s NFT experts to the project."
        },
        {
            id: 3,
            icon: "images/Service Page/Icons-2.svg",
            title: "Design",
            text: "We forge a mock-up of the NFT product representing its presumed look, UI/UX, features, implemented technologies, and discuss the release plan."
        },
        {
            id: 4,
            icon: "images/Service Page/Icons-3.svg",
            title: "Develop",
            text: "ApexDv’s NFT specialists tailor the project and conduct all the needed quality assurance operations proving its impeccability. During this stage, all the progress and metrics can be tracked via a preferable project management tool."
        },
        {
            id: 5,
            icon: "images/Service Page/Icons-4.svg",
            title: "Support",
            text: "After a successful project launch, our talents continue working on the project by providing support, rolling out updates containing new features, and scaling it up as the business grows."
        },
    ]
    return (
        <>
        <div className={styles.nftDevProcess}> 
             <div className={styles.green_abstract_right}></div>
                        <div className={styles.green_abstract_left}></div>
            <div className='container p-5'>
                <h1 className={styles.title}>Our NFT development process</h1>
                <div className={styles.cardContainer}>
                    {
                        data.slice(0,4).map((item) => (
                            <div className={styles.singleCard}>
                                <div className={styles.imageDiv}>
                                <img className="" src={item.icon} alt="" />
                            </div>
                                <h2 className={styles.cardTitle} >{ item.title}</h2>
                                <p className={styles.cardText} >{ item.text}</p>
                            </div>
                        ))
                    }
                    </div>
                    <div className={styles.cardContainer2}>
                        {
                        data.slice(4).map((item) => (
                            <div className={styles.singleCard}>
                                <div className={styles.imageDiv}>
                                <img className="" src={item.icon} alt="" />
                            </div>
                                <h2 className={styles.cardTitle} >{ item.title}</h2>
                                <p className={styles.cardText} >{ item.text}</p>
                            </div>
                        ))
                    }
                    </div>
            </div>
            </div>
            </>
    );
};

export default NftDevProcess;
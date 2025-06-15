import React from 'react';
import styles from "./Proceed.module.css";

const Proceed = () => {
    const data = [
        {
            id: 1,
            title: "Gather the requirements",
            days: "1–2 days",
            description: [
                {
                    id:1,
                    text: "Define the task, objectives and a desired outcome. If we have enough data, we will assemble a project team and start the estimation process.",
            
                },
                {
                    id: 2,
                    text: "If you are not sure that your requirements are comprehensive enough, we will help to generate all the necessary data during the Discovery phase."
                }
            ]
        },
        {
            id: 2,
            title: "Conduct Discovery, draft Technical specification",
            days: "3 days to 1–2 weeks depending on the project",
            description: [
                {
                    id: 1,
                    text: "The Business Analyst will work through the key issues with you: “Who are the potential users?”, “What capabilities does each user need?”, etc.",
                    
                   
                },
                {
                    id: 2,
                    text: "Based on the obtained data, we will form functional requirements that are necessary to start the development.",
                },
                {
                    id: 3,
                     text: "Our designer will make service prototypes as requested. This will help to work through the non-obvious issues, make sure that we understood the task correctly and did not miss a single thing. You will review the content and modify it if necessary. Based on the prototypes the developers will estimate the outstanding scope of work and prioritize the functions of the future service more precisely."
                    
                }
            ]
        },
        {
            id: 3,
            title: "Estimate the terms and cost of work",
            days: "1–3 days",
            description: [
                {
                    id: 1,
                    text: "If you need to stick to budget or terms, we will offer a Fixed-Price model. If you are ready to adjust to the changing requirements — Time & Material model will be the optimal choice"
                },
                {
                    id: 2,
                    text: "Based on the available data, our development team will estimate the duration of work. Finally, you will receive a detailed table of tasks with an estimation of each task in hours."
                }
            ]
        },
        {
            id: 4,
            title: "Coordinate the cost and work format",
            days: "1–3 days",
            description: [
                {
                    id: 1,
                    text: "Define the most comfortable way of communication and payment."
                },
                {
                    id: 2,
                    text: "We will introduce you to the Project Manager and developers. The rates of each developer depend on the grade according to our Developer Roadmap. The manager will introduce every particular engineer to you."
                },
                {
                    id: 3,
                    text: "We will define the terms and results you will get."
                }
            ]
        },
        {
            id: 5,
            title: "Sum up and start the development",
            days: "1–2 days",
            description: [
                {
                    id: 1,
                    text: "The Project Manager will be in touch with you end to end."
                },
                {
                    id: 2,
                    text: "While we're taking stock, our developers will have everything set up and start making things happen."
                }
            ]
        }

    ]
    return (
        <div className={styles.proceed}>
             <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className='container p-5'>
            <div className={styles.proceedContainer}>
                <div className={ styles.proceedContainerTitle}>
                    <h1 className={styles.title} >How we will proceed</h1>
                </div>
                    <div className={styles.networksInfo}>
                        <div className={styles.scrollbar} id={styles.scrollbar_style2}>
                            <div className={styles.force_overflow}>
                                <div className={styles.scrollInfo} >
                                    {
                                        data.map((item,i) => (
                                            <div className={styles.scrollInfoCard}>
                                                <div className={styles.scrollInfoCardImg}>
                                                    <p className={styles.scrollInfoCardP} >{ item.id}</p>
                                                </div>
                                                <div className={styles.scrollInfoCardInfo}>
                                                    <h1 className={styles.scrollInfoCardTitle}>{item.title}</h1>
                                                    <p className={styles.scrollInfoCardDays}> { item.days}</p>
                                                    
                                                    {
                                                        item.description.map((item, i) => (
                                                            <div>
                                                                <p className={styles.scrollInfoCardText}>{item.text}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                               </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        </div>
    );
};

export default Proceed;
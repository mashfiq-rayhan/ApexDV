// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import React from 'react';
import styles from "./NoStress.module.css";

const NoStress = () => {
    const data = [
        {
            id: 1,
            title: "Select specialists based on their skills rather than titles",
            text: "Not all projects require a senior engineer. For your project we will select developers with relevant skills based on our Developer Roadmap. Your can involve your specialists to participate in technical interviews."
        },
        {
            id: 2,
            title: "Experience in web projects since 2016",
            text: "Working together with us, you involve a highly experienced team in project development. Our projects vary from simple marketplaces to high-load fintech startups"
        },
        {
            id: 3,
            title: "We act predictably",
            text: "We understand the importance of transparency. Sometimes you have to know: what functionality you are expecting in the output; timelines when the result will be delivered; what is the next step when the project is over. We help to cover all these issues at the very beginning."
        },
    ]
    return (
        <div className={styles.noStress}>
              <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
            <div className='container p-5'>
                <div>
                    <h1 className={styles.title} >No Stress From Us</h1>
                </div>
                <div>
                    {
                        data.map((item, i) => (
                            <div className={styles.cardContent}>
                                <div>
                                    <div className={styles.greenPoint} ></div>
                                </div>
                                <div>
                                    <h1 className={styles.cardTitle} >{item.title}</h1>
                                    <p className={styles.cardText}>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.cardTextP} >
                    <p >We help you figure it out at every milestone
                    </p>
                    

                </div>
                <div className={styles.cardAccordion} >
                    <li>We draft a work plan for a week or two, so that our expectations could meet.</li>
                    <li>At the end of each iteration we send a report, so you can see the actual status of work process.</li>
                    <li>We demonstrate the completed parts of the project, discuss, plan and make adjustments.</li>
                    <li>After project finish we deliver the code to you and it becomes your intellectual property. Now the project is ready to run on the server.</li>
                    {/* <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}

                </div>
            </div>

        </div>
    );
};

export default NoStress;
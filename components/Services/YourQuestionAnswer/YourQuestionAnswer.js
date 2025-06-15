import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';
import styles from "./YourQuestionAnswer.module.css";

const YourQuestionAnswer = () => {
        return (
                <>
                <div className={styles.yourQuestionAnswer}>
                        <div className={styles.green_abstract_right}></div>
                        <div className={styles.green_abstract_left}></div>
                        <div className='container p-5'>
                                <div>
                                        <h1 className={styles.title} >NFT development solutions: all your questions answered</h1>
                                </div>
                                <div className={styles.technologyStack}>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                        >
                                                                <Typography className={styles.accordion_header} >How much time does it take to build an NFT Solution?</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                It takes at most 48-hours for the process to be complete. On the bright side, the fee is a one-time payment. Additionally, you can take your smart contract to any other NFT management platform as long as they allow you to import it. Remember that it is impossible to create a smart contract for free.
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel2a-content"
                                                                id="panel2a-header"
                                                        >
                                                                <Typography className={styles.accordion_header}>What affects the cost of NFT product development?</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography >
                                                                There are several factors that can drive the price of an NFT. From market conditions to buyer demand, these aspects range across a wide spectrum.
                                                                <br /> Some of these components include but are not limited to:
                                                                <div className="pl-5">
                                                                        <ul className="list-disc">
                                                                                <li>Market demand.</li>
                                                                                <li>Buyer emotion.</li>
                                                                                <li>Investment potential.</li>
                                                                                <li>Creator’s popularity.</li>
                                                                                <li>Asset’s uniqueness.</li>
                                                                        </ul>
                                                                </div>
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel3a-content"
                                                                id="panel3a-header"
                                                        >
                                                                <Typography className={styles.accordion_header}>Why choose ApexDv for NFT Development?</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                It enables you to operate several platforms that need many tokens quickly. Not just that, you smoothly handle the collectibles alongside the blockchain network.
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel4a-content"
                                                                id="panel4a-header"
                                                        >
                                                                <Typography className={styles.accordion_header}>Does Innowise Group develop whitelabel NFT marketplace solutions?</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                ApexDv’s software development specialists build whitelabel NFT marketplaces allowing our clients to provide their contractors with highly customizable solutions that can be easily and rapidly deployed.
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>

                                </div>
                        </div>
                        </div>
                        </>
        );
};

export default YourQuestionAnswer;
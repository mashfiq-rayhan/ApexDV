import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import styles from "./TechnologyStack.module.css";
const TechnologyStack = () => {

        return (
                <>
                <div className={styles.technologyStackMain}>
                        <div className='container p-5'>
                                <div className={styles.green_abstract_right}></div>
                                <div className={styles.green_abstract_left}></div>
                                <div>
                                        <h1 className={styles.title} >Our technology stack</h1>
                                </div>
                                <div className={styles.technologyStack}>

                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary

                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                        >
                                                                <Typography className={styles.accordion_header} >Blockchain platforms</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>AWS</li>
                                                                <li>Google Cloud Platform</li>
                                                                <li>Heroku</li>
                                                                <li>Microsoft Azure</li>

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
                                                                <Typography className={styles.accordion_header}>NFT standards</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>AWS</li>
                                                                <li>Google Cloud Platform</li>
                                                                <li>Heroku</li>
                                                                <li>Microsoft Azure</li>
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
                                                                <Typography className={styles.accordion_header}>Storage platforms</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>AWS</li>
                                                                <li>Google Cloud Platform</li>
                                                                <li>Heroku</li>
                                                                <li>Microsoft Azure</li>
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
                                                                <Typography className={styles.accordion_header}>Programming languages</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>Javascript</li>
                                                                <li>Python</li>
                                                                <li>Kotlin</li>
                                                                <li>C and C++</li>
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel5a-content"
                                                                id="panel5a-header"
                                                        >
                                                                <Typography className={styles.accordion_header}>Front-end technologies</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>HTML</li>
                                                                <li>React</li>
                                                                <li>Angular</li>
                                                                <li>TypeScript</li>
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                                <div className="accordion_icon">
                                                        <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel6a-content"
                                                                id="panel6a-header"
                                                        >
                                                                <Typography className={styles.accordion_header}>Cloud platforms</Typography>
                                                        </AccordionSummary>
                                                </div>
                                                <AccordionDetails>
                                                        <Typography>
                                                                <li>IBM Cloud</li>
                                                                <li>Oracle Cloud</li>
                                                                <li>Alibaba Cloud</li>
                                                        </Typography>
                                                </AccordionDetails>
                                        </Accordion>

                                </div>
                        </div>
                        </div>
                        </>
        );
};

export default TechnologyStack;
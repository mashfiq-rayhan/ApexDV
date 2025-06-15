import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Hidden, Modal } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./FullCycleDevTeam.module.css";
import { sendMessage } from './../../../api/message';

const FullCycleDevTeam = () => {
  const jobData = {
    heading: "Get In Touch",
    subTitle: "Looking for Job",
    applyText: "Apply Here",
    text: "If we can help in any way, please don’t hesitate to set a time to meet or talk, or leave your details and we’ll get back to you",
    subText: "We are here for you. How can we help you?",
    btnText: "Book A Call",
    btnHref: "/",
    jobImage: "/images/Service Page/image 476.svg",
    closeImage: "/images/Service Page/x.svg",
  };

  const contactSection = {
    inputs: [
      {
        name: "first_name",
        type: "text",
        placeholder: "Full Name",
        required: true,
        label: "First Name*",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email Address",
        required: true,
        label: "Email*",
      },
      {
        name: "phone_number",
        placeholder: "Phone Number",
        type: "number",
        required: true,
        label: "Phone Number*",
      },
      {
        name: "message",
        placeholder: "Message",
        required: true,
        label: "Your Message*",
      },
    ]
  }
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = {};
      contactSection.inputs.forEach(({ name }) => (data[name] = formData.get(name)));
      console.log(data);
      await sendMessage(data);
      router.push("/thank-you");
      handleClose();
      console.log(e.target.value, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.fullCycleDevTeamMain}>
        <div className={styles.green_abstract_right}></div>
        <div className={styles.green_abstract_left}></div>
        <div className="container p-5">
          <div className={styles.fullCycleDevTeam}>
            <div className={styles.fullCycleDevTeamImgDiv}>
              <img
                className={styles.fullCycleDevTeamImg}
                src="images/Service Page/full-cycle development team.svg"
                alt=""
              />
            </div>
            <div className={styles.fullCycleDevTeamInfo}>
              <h1 className={styles.title}>
                Your ideal choice, whether you need just any one talent or a
                full-cycle development team
              </h1>
              <div className={styles.accordionContainer}>
                <Accordion>
                  <div className="accordion_icon">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={styles.accordion_header}>
                        Project Manager
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      In the broadest sense, project managers (PMs) are
                      responsible for planning, organizing, and directing the
                      completion of specific projects for an organization while
                      ensuring these projects are on time, on budget, and within
                      scope.
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
                      <Typography className={styles.accordion_header}>
                        Business Analysts
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      Business analysts evaluate past and current business data
                      with the primary goal of improving decision-making
                      processes within organizations.
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
                      <Typography className={styles.accordion_header}>
                        UI Designers
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      UI designers design all the screens that make up a digital
                      user interface, as well as the individual elements
                      featured on those screens. As such, they consider both the
                      overall layout of each individual screen and how all the
                      separate screens fit together.
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
                      <Typography className={styles.accordion_header}>
                        Frontend Developers
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      A front-end developer builds the front-end portion of
                      websites and web applications—that is, the part that users
                      actually see and interact with. A front-end developer
                      creates websites and applications using web languages such
                      as HTML, CSS, and JavaScript allow users to access and
                      interact with the site or app.
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
                      <Typography className={styles.accordion_header}>
                        Testing and QA Teams
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      Quality assurance (QA) analysts are responsible for the
                      final step in the development of a game, website or any
                      software product before it is released to the public. QA
                      analysts look for flaws and weaknesses in the program.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={styles.LookingFor}>
                {!open ? (<Hidden logDown>
                  <div className={styles.buttonDiv}>
                    <button onClick={handleOpen} className={styles.button86}>
                      Book A Call
                    </button>
                  </div>
                </Hidden>) : (
                  ""
                )}


                <Modal open={open} onClose={handleClose}>
                  <div className={styles.LookingForSection}>
                    <Grid container>
                      <Grid item xs={12} md={5} className={styles.JobSection}>
                        <div className={styles.JobSectionImage}>
                          <img src={jobData.jobImage} alt="" />
                        </div>
                        <div className={styles.JobSectionTitle}>
                          <h3>
                            Book a <span>15 Minute</span> <br /> Consultation
                          </h3>
                        </div>
                        <div className={styles.JobSectionText}>
                          {jobData.text}
                        </div>
                        {/* <h2>{jobData.subTitle}</h2>
                        <a href="/" className={styles.applyText}>
                          {jobData.applyText}
                        </a> */}
                      </Grid>
                      <Grid item xs={12} md={7} className={styles.FromSection}>
                        <div className={styles.JobSectionClose}>
                          {open ? (
                            <img
                              onClick={handleClose}
                              src={jobData.closeImage}
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <h2 className={styles.formTitle}>{jobData.heading}</h2>
                        <p>{jobData.subText}</p>
                        <form onSubmit={handleSubmit} id="contact-form">
                          {contactSection.inputs.map(
                            ({
                              name,
                              type,
                              placeholder,
                              required,
                              label,
                              pattern,
                            }) => (
                              <Col
                                key={name}
                                lg={type ? 12 : 12}
                                md={type ? 12 : 12}
                                sm={12}
                                className="form-group"
                              >
                                <div className="field-inner">
                                  {type ? (
                                    <div className={styles.form_group}>
                                      {/* <label className={styles.form_label}>
                                        {label}
                                      </label> */}
                                      {name === "phone_number" ? (
                                        <input
                                          className={styles.form_input}
                                          type={type}
                                          min={1000000000}
                                          name={name}
                                          placeholder={placeholder}
                                          required={required}
                                          onInput={(e) => {
                                            e.target.setCustomValidity("");
                                          }}
                                          onInvalid={(e) =>
                                            e.target.setCustomValidity(
                                              "Phone number at least 10 digits"
                                            )
                                          }
                                        />
                                      ) : (
                                        <input
                                          className={styles.form_input}
                                          type={type}
                                          name={name}
                                          placeholder={placeholder}
                                          required={required}
                                        />
                                      )}
                                    </div>
                                  ) : (
                                    <div className={styles.form_group}>
                                      {/* <label className={styles.form_label}>
                                        {label}
                                      </label> */}
                                      <input
                                        className={styles.form_input}
                                        as="textarea"
                                        rows={2}
                                        name={name}
                                        placeholder={placeholder}
                                        required={required}
                                      />
                                    </div>
                                  )}
                                </div>
                              </Col>
                            )
                          )}
                          <div className={styles.buttonContainer}>
                            {
                              loading
                                ? (<button disabled className={styles.button}>
                                  <span className="btn-title">Submitting..!</span>
                                </button>)
                                : (<button className={styles.button}>
                                  <span className="btn-title">Submit</span>
                                </button>)
                            }
                          </div>
                        </form>
                      </Grid>
                    </Grid>


                  </div>
                </Modal>
              </div>

              {/* <div className={styles.buttonDiv}>
=======
                  </div>
                </Modal>
              </div>
              <div className={styles.buttonDiv}>
>>>>>>> 817462373d03999061f7b6ab62570b11a641e979
                <Link href="/contact">
                  <a href="/contact" className={styles.formText}>
                    Or, Use this form to tell us about your needs.
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCycleDevTeam;

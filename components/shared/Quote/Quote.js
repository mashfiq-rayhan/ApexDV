import { Grid, Hidden, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./Quote.module.css";
import { sendMessage } from './../../../api/message';

const Quote = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className={styles.LookingFor}>
      {!open ? (<Hidden logDown>
        <div className={styles.quote} onClick={handleOpen}>
          Get a free quote
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
              <div className={styles.JobSectionText}>{jobData.text}</div>

              {/* <h2>{jobData.subTitle}</h2>
              <a href="/" className={styles.applyText}>
                {jobData.applyText}
              </a> */}
            </Grid>
            <Grid item xs={12} md={7} className={styles.FromSection}>
              <div className={styles.JobSectionClose}>
                {open ? (
                  <img onClick={handleClose} src={jobData.closeImage} alt="" />
                ) : (
                  ""
                )}
              </div>
              <h2 className={styles.formTitle}>{jobData.heading}</h2>
              <p>{jobData.subText}</p>
              <form onSubmit={handleSubmit} id="contact-form">
                {contactSection.inputs.map(
                  ({ name, type, placeholder, required, label, pattern }) => (
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
                            {/* <label className={styles.form_label}>{label}</label> */}
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
                            {/* <label className={styles.form_label}>{label}</label> */}
                            <textarea
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
                <div>
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
  );
};

export default Quote;

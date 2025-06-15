import { Grid, Hidden, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./WhyHireBlockDev.module.css";
import { sendMessage } from "./../../../api/message";

const WhyHireBlockDev = () => {
  const data = [
    {
      id: 1,
      img: "/images/Service Page/image 462.svg",
      title: "Why hire a blockchain development team from ApexDv?",
      text: "By partnering with ApexDv, you'll get access to our 100+ in-house developers and will be able to fill any role immediately.",
    },
    {
      id: 2,
      img: "/images/Service Page/image 465.svg",
      title: "World-class Coding Standards",
      text: `We adhere to: 
            1. Security best practices 2. Test-driven development\n and Test automation\n 3. API documentation with Swagger\n 4. In-line code comments as a default standard`,
    },
    {
      id: 3,
      img: "/images/Service Page/image 464.svg",
      title: "You’re in control",
      text: "You get a dedicated blockchain development team entirely under your control but without the administrative issues and hassles. You control your team’s work, and all processes are fully transparent, so you know exactly who’s doing what, when, and why.",
    },
    {
      id: 4,
      img: "/images/Service Page/image 466.svg",
      title: "Work with Experts",
      text: "Hire product developers across 20+ skill sets: Access varied tech stacks and build your product in React, Node, Python, Angular, Java, Rails, PHP, Vue, .Net/C#, and many other languages and frameworks.",
    },
    {
      id: 5,
      img: "/images/Service Page/image 463.svg",
      title: "Hassle-free production",
      text: "Our HR specialists, office managers, and system administrators make sure your development team’s working conditions are perfect.",
    },
    {
      id: 6,
      img: "/images/Service Page/image 467.svg",
      title: "Low Attrition",
      text: "Corporate outings, regular training, engagement activities, career counseling, grievance handling – our HR veterans will sure every developer you hire with us stays motivated to try hard to make you successful.",
    },
    {
      id: 7,
      img: "/images/Service Page/image 468.svg",
      title: "Zero Overheads",
      text: "Payroll, taxes, benefits, sick days, and vacations for your team – we’ve got you covered.",
    },
    {
      id: 8,
      img: "/images/Service Page/image 469.svg",
      title: "50% Cost reduction",
      text: "Our clients have been able to save up to 50% in labor costs.",
    },
    {
      id: 9,
      img: "/images/Service Page/image 470.svg",
      title: "4.8/5 Rating on Clutch",
      text: "Our clients highlight our ability to build great personal relationships with them, except for the excellent code quality.",
    },
    {
      id: 10,
      img: "/images/Service Page/image 471.svg",
      title: "75% of the company – senior and middle developers",
      text: "We invest in attracting the best talent from the market. We hire only strong middle and senior blockchain developers and no juniors.",
    },
    {
      id: 11,
      img: "/images/Service Page/image 472.svg",
      title: "ISO 27001 Information Security",
      text: "Capital Numbers adheres to ISO 27001 certified information security standards to ensure that your IP and investment are protected.",
    },
  ];

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
    ],
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = {};
      contactSection.inputs.forEach(
        ({ name }) => (data[name] = formData.get(name))
      );
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
      <div className={styles.whyHireBlockDev}>
        <div className="container p-5">
          <div className={styles.green_abstract_right}></div>
          <div className={styles.green_abstract_left}></div>
          <h1 className={styles.title}>
            Why Hire Blockchain Development Team from Capital Numbers
          </h1>
          <div className={styles.cardContainer}>
            {data.slice(0, 10).map((item) => (
              <div className={styles.cardDiv}>
                <div className={styles.cardImgDiv}>
                  <div className={styles.cardImg}>
                    <img src={item.img} alt="" />
                  </div>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                </div>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.cardContainer2}>
            {data.slice(10).map((item) => (
              <div className={styles.cardDiv}>
                <div className={styles.cardImgDiv}>
                  <div className={styles.cardImg}>
                    <img src={item.img} alt="" />
                  </div>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                </div>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.buttonDiv}>
            {!open ? (
              <Hidden logDown>
                <button
                  onClick={handleOpen}
                  className={styles.button86}
                  href="/contact"
                >
                  Book A Call
                </button>
              </Hidden>
            ) : (
              ""
            )}
          </div>

          {/* <div className={styles.buttonDiv}>
            <Link href="/contact">
              <a href="/contact" className={styles.formText}>
                Or, Use this form to tell us about your needs.
              </a>
            </Link>
          </div> */}

          <div className={styles.LookingFor}>
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
        </div>
      </div>
    </>
  );
};

export default WhyHireBlockDev;

import { useRouter } from "next/router";
import React, { useState } from "react";
import { sendMessage } from "./../../../api/message";

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
    ],
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (panel) => {
    setExpandedAccordion(expandedAccordion === panel ? null : panel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = {};
      contactSection.inputs.forEach(
        ({ name }) => (data[name] = formData.get(name)),
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
      <div className="fullCycleDevTeamMain">
        <div className="green_abstract_right"></div>
        <div className="green_abstract_left"></div>
        <div className="container p-5">
          <div className="fullCycleDevTeam">
            <div className="fullCycleDevTeamImgDiv">
              <img
                className="fullCycleDevTeamImg"
                src="images/Service Page/full-cycle development team.svg"
                alt=""
              />
            </div>
            <div className="fullCycleDevTeamInfo">
              <h1 className="title">
                Your ideal choice, whether you need just any one talent or a
                full-cycle development team
              </h1>
              <div className="accordionContainer">
                <div className="border border-gray-300 rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion("panel1")}>
                    <span className="accordion_header">
                      Project Manager
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedAccordion === "panel1" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedAccordion === "panel1" && (
                    <div className="p-4 bg-white border-t">
                      <p>
                        In the broadest sense, project managers (PMs) are
                        responsible for planning, organizing, and directing the
                        completion of specific projects for an organization
                        while ensuring these projects are on time, on budget,
                        and within scope.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-300 rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion("panel2")}>
                    <span className="accordion_header">
                      Business Analysts
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedAccordion === "panel2" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedAccordion === "panel2" && (
                    <div className="p-4 bg-white border-t">
                      <p>
                        Business analysts evaluate past and current business
                        data with the primary goal of improving decision-making
                        processes within organizations.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-300 rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion("panel3")}>
                    <span className="accordion_header">
                      UI Designers
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedAccordion === "panel3" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedAccordion === "panel3" && (
                    <div className="p-4 bg-white border-t">
                      <p>
                        UI designers design all the screens that make up a
                        digital user interface, as well as the individual
                        elements featured on those screens. As such, they
                        consider both the overall layout of each individual
                        screen and how all the separate screens fit together.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-300 rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion("panel4")}>
                    <span className="accordion_header">
                      Frontend Developers
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedAccordion === "panel4" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedAccordion === "panel4" && (
                    <div className="p-4 bg-white border-t">
                      <p>
                        A front-end developer builds the front-end portion of
                        websites and web applications—that is, the part that
                        users actually see and interact with. A front-end
                        developer creates websites and applications using web
                        languages such as HTML, CSS, and JavaScript allow users
                        to access and interact with the site or app.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-300 rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion("panel5")}>
                    <span className="accordion_header">
                      Testing and QA Teams
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedAccordion === "panel5" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedAccordion === "panel5" && (
                    <div className="p-4 bg-white border-t">
                      <p>
                        Quality assurance (QA) analysts are responsible for the
                        final step in the development of a game, website or any
                        software product before it is released to the public. QA
                        analysts look for flaws and weaknesses in the program.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="LookingFor">
                {!open ? (
                  <div className="hidden lg:block">
                    <div className="buttonDiv">
                      <button onClick={handleOpen} className="button86">
                        Book A Call
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {open && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleClose}>
                    <div
                      className="LookingForSection"
                      onClick={(e) => e.stopPropagation()}>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className={`md:col-span-5 JobSection`}>
                          <div className="JobSectionImage">
                            <img src={jobData.jobImage} alt="" />
                          </div>
                          <div className="JobSectionTitle">
                            <h3>
                              Book a <span>15 Minute</span> <br /> Consultation
                            </h3>
                          </div>
                          <div className="JobSectionText">
                            {jobData.text}
                          </div>
                          {/* <h2>{jobData.subTitle}</h2>
                        <a href="/" className="applyText">
                          {jobData.applyText}
                        </a> */}
                        </div>
                        <div className={`md:col-span-7 FromSection`}>
                          <div className="JobSectionClose">
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
                          <h2 className="formTitle">
                            {jobData.heading}
                          </h2>
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
                                <div key={name} className="form-group w-full">
                                  <div className="field-inner">
                                    {type ? (
                                      <div className="form_group">
                                        {/* <label className="form_label">
                                        {label}
                                      </label> */}
                                        {name === "phone_number" ? (
                                          <input
                                            className="form_input"
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
                                                "Phone number at least 10 digits",
                                              )
                                            }
                                          />
                                        ) : (
                                          <input
                                            className="form_input"
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            required={required}
                                          />
                                        )}
                                      </div>
                                    ) : (
                                      <div className="form_group">
                                        {/* <label className="form_label">
                                        {label}
                                      </label> */}
                                        <input
                                          className="form_input"
                                          as="textarea"
                                          rows={2}
                                          name={name}
                                          placeholder={placeholder}
                                          required={required}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ),
                            )}
                            <div className="buttonContainer">
                              {loading ? (
                                <button disabled className="button">
                                  <span className="btn-title">
                                    Submitting..!
                                  </span>
                                </button>
                              ) : (
                                <button className="button">
                                  <span className="btn-title">Submit</span>
                                </button>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="buttonDiv">
=======
                  </div>
                </Modal>
              </div>
              <div className="buttonDiv">
>>>>>>> 817462373d03999061f7b6ab62570b11a641e979
                <Link href="/contact">
                  <a href="/contact" className="formText">
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
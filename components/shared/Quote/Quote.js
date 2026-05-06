import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Quote = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const jobData = {
    jobImage: "/images/quote/job.png",
    heading: "Get In Touch",
    subText:
      "Get in touch with our experts to discuss your Web3 and Blockchain development needs.",
    text: "Have questions or inquiries about blockchain development, NFTs, smart contracts, or other Web3 solutions?  Reach out, and let's explore how we can help bring your vision to life.",
    closeImage: "/images/quote/x.png",
  };

  const contactSection = {
    inputs: [
      {
        type: "text",
        name: "first_name",
        placeholder: "Name*",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email*",
        required: true,
      },
      {
        type: "number",
        name: "phone_number",
        placeholder: "Phone Number*",
      },
      {
        name: "message",
        placeholder: "Message*",
        required: true,
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "f8cd7a4a-c92d-4e39-9a21-c87b5e47a4bf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await axios.post("https://api.web3forms.com/submit", json, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.data;

      if (result.success) {
        router.push("/thank-you");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!open && (
        <div className="hidden lg:block">
          <div 
            className="fixed w-[162px] h-[55px] right-[-50px] top-[calc(50%-56px/2+19px)] bg-[#1caf83] transform -rotate-90 flex flex-row justify-center items-center gap-[10px] p-4 text-white text-lg z-[99999999] cursor-pointer hover:scale-105 transition-all"
            onClick={handleOpen}
          >
            Get a free quote
          </div>
        </div>
      )}
      
      {/* Modal Overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full my-8 h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full">
              {/* Left Section - Job Info */}
              <div className="md:col-span-5 p-6 md:p-8 bg-[#222429] text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mt-[-60px] mb-6">
                  <img src={jobData.jobImage} alt="" className="w-40 h-40"/>
                </div>
                <div className="bg-gradient-to-r from-[rgba(40,53,65,0.2)] to-[rgba(40,53,65,0.2)] backdrop-blur-[13px] rounded-t-[10px] w-[300px] px-5 py-5 mb-4">
                  <h3 className="text-[32px] font-teko font-normal text-white leading-10 text-center">
                    Book a <span className="text-[#1caf83]">15 Minute</span> <br /> Consultation
                  </h3>
                </div>
                <div className="bg-[#1caf83] p-2.5 text-left text-base font-rubik text-white rounded-t-[10px] w-[300px]">
                  {jobData.text}
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="md:col-span-7 p-6 md:p-8 relative bg-white h-[530px] overflow-y-auto">
                <div className="absolute top-[30px] right-[50px] cursor-pointer">
                  <img 
                    onClick={handleClose} 
                    src={jobData.closeImage} 
                    alt="Close" 
                  />
                </div>
                
                <h2 className="font-teko text-[32px] font-normal leading-10 text-center text-[#222429] mb-4">{jobData.heading}</h2>
                <p className="text-base font-rubik text-[#222429] text-center leading-7 mb-5">{jobData.subText}</p>
                
                <form onSubmit={handleSubmit} id="contact-form">
                  {contactSection.inputs.map(
                    ({ name, type, placeholder, required }) => (
                      <div key={name} className="form-group w-full mb-4">
                        <div className="field-inner">
                          {type ? (
                            <div className="mb-1.75">
                              {name === "phone_number" ? (
                                <input
                                  className="w-full p-3 my-2 border border-gray-ccc rounded focus:border-[#1caf83] outline-0"
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
                                  className="w-full p-3 my-2 border border-gray-ccc rounded focus:border-[#1caf83] outline-0"
                                  type={type}
                                  name={name}
                                  placeholder={placeholder}
                                  required={required}
                                />
                              )}
                            </div>
                          ) : (
                            <div className="mb-1.75">
                              <textarea
                                className="w-full p-3 my-2 border border-gray-ccc rounded focus:border-[#1caf83] outline-0"
                                rows={2}
                                name={name}
                                placeholder={placeholder}
                                required={required}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                  <div className="flex justify-center">
                    {loading ? (
                      <button disabled className="quote-btn">
                        <span className="btn-title">Submitting..!</span>
                      </button>
                    ) : (
                      <button className="quote-btn">
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
  );
};

export default Quote;

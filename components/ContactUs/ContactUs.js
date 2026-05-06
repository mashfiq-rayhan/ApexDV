import { useRouter } from "next/router";
import React from 'react';
import { sendMessage } from './../../api/message';
import { useState } from 'react';

const ContactUs = () => {
    const contactSection = {
        inputs: [
            {
                name: "first_name",
                type: "text",
                placeholder: "First Name",
                required: true,
                label: "First Name*",
            },
            {
                name: "last_name",
                type: "text",
                placeholder: "Last Name",
                required: true,
                label: "Last Name*",
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
    const [loading, setLoading] = useState(false);
    const router = useRouter();
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
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container p-5 pb-0">
            <h1 className="font-teko font-normal text-[64px] leading-10 text-center text-[#222429] bg-white py-2 mt-[100px] mb-[50px] max-sm:text-5xl max-sm:mt-2.5 max-sm:mb-[30px] md:text-5xl md:mt-0">WRITE US A MESSAGE .</h1>
            <div className="py-[50px] px-[100px] flex flex-col justify-center items-center max-sm:p-0 md:py-[30px] md:px-0 lg:py-[30px] lg:px-0">
                <form onSubmit={(e) => handleSubmit(e)} id="contact-form">
                    {/* <Row className="clearfix"> */}
                    {contactSection.inputs.map(
                        ({ name, type, placeholder, required, label, pattern }) => (
                            <div
                                key={name}
                                className="w-[45%] inline-block ml-[50px] mb-[30px] max-sm:w-full max-sm:block max-sm:ml-0 md:w-[45%] md:inline-block md:ml-5"
                            >
                                <div className="field-inner">
                                    {type ? (
                                        <div>
                                            {/* <label className="font-rubik font-light text-lg leading-6 block text-[#222429]" >{label}</label> */}
                                            {name === "phone_number" ? (

                                                <input
                                                    className="h-[70px] w-full text-[#686a6f] leading-10 font-normal py-[14px] px-[30px] bg-[#f4f5f8] border border-[#f4f5f8] rounded-[7px] transition-all duration-300 outline-0 text-lg focus-visible:border-[#1caf83]"
                                                    type={type}
                                                    // min={1000000000}
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
                                                    className="h-[70px] w-full text-[#686a6f] leading-10 font-normal py-[14px] px-[30px] bg-[#f4f5f8] border border-[#f4f5f8] rounded-[7px] transition-all duration-300 outline-0 text-lg focus-visible:border-[#1caf83]"
                                                    type={type}
                                                    name={name}
                                                    placeholder={placeholder}
                                                    required={required}
                                                />
                                            )}

                                        </div>
                                    ) : (
                                        <div>
                                            {/* <label className="font-rubik font-light text-lg leading-6 block text-[#222429]" >{label}</label> */}
                                            <textarea
                                                className="py-3 px-5 my-2 inline-block border border-[#ccc] bg-[#f4f5f8] rounded-[7px] transition-all duration-300 outline-0 box-border w-[208.5%] text-lg font-normal focus-visible:border-[#1caf83] max-sm:w-full md:w-[208.5%] lg:w-[215%]"
                                                rows={5}
                                                name={name}
                                                placeholder={placeholder}
                                                required={required}

                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}



                    <div className="flex justify-center items-center flex-col">
                        <p className="ml-10 mb-5 pr-5 max-sm:text-center max-sm:m-0 max-sm:p-0 max-sm:mb-[30px] md:text-center md:m-0 md:p-0 md:mb-[30px] lg:text-center">Please be informed that when you click the submit button, ApexDv will process your personal data in accordance with our privacy policy for the purpose of providing you with the appropriate information.</p>
                        {
                            loading
                                ? (<button disabled className="w-[200px] block py-4 px-2.5 gap-2.5 bg-[#1caf83] border border-[#1caf83] text-white rounded-[10px] transition-all duration-[0.4s] linear hover:border-[#1caf83] hover:bg-transparent hover:text-[#1caf83]">
                                    <span className="btn-title">Submitting..!</span>
                                </button>)
                                : (<button className="w-[200px] block py-4 px-2.5 gap-2.5 bg-[#1caf83] border border-[#1caf83] text-white rounded-[10px] transition-all duration-[0.4s] linear hover:border-[#1caf83] hover:bg-transparent hover:text-[#1caf83]">
                                    <span className="btn-title">Submit</span>
                                </button>)
                        }
                    </div>
                    {/* </Row> */}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
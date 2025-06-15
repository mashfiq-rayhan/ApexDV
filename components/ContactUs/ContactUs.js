import { useRouter } from "next/router";
import React from 'react';
import { sendMessage } from './../../api/message';
import styles from "./ContactUs.module.css";
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
            <h1 className={styles.message}>WRITE US A MESSAGE .</h1>
            <div className={styles.form_contact_main}>
                <form onSubmit={(e) => handleSubmit(e)} id="contact-form">
                    {/* <Row className="clearfix"> */}
                    {contactSection.inputs.map(
                        ({ name, type, placeholder, required, label, pattern }) => (
                            <div
                                key={name}
                                className={styles.form_contact}
                            >
                                <div className="field-inner">
                                    {type ? (
                                        <div className={`${ styles.form_group }`} >
                                            {/* <label className={styles.form_label} >{label}</label> */}
                                            {name === "phone_number" ? (

                                                <input
                                                    className={styles.form_input}
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
                                            {/* <label className={styles.form_label} >{label}</label> */}
                                            <textarea
                                                className={styles.form_textarea}
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



                    <div className={styles.form_Submit}>
                        <p>Please be informed that when you click the submit button, ApexDv will process your personal data in accordance with our privacy policy for the purpose of providing you with the appropriate information.</p>
                        {
                            loading
                                ? (<button disabled className={styles.form_btn}>
                                    <span className="btn-title">Submitting..!</span>
                                </button>)
                                : (<button className={styles.form_btn}>
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
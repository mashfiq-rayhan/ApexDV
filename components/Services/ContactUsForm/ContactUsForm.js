// import { default as React, default as React } from 'react';
// import { sendMessage } from "src/api/message";
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { useRouter } from "next/router";
import {
    Col
} from "react-bootstrap";
import styles from "./ContactUsForm.module.css";
import { sendMessage } from './../../../api/message';
import { useState } from 'react';


const ContactUsForm = () => {


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
            console.log(e.target.value, formData);
        } catch (error) {
            console.log(error);
        }
    };

    const addressData = [
        {
            id: 1,
            name: "UK OFFICE",
            address: "71-75 Shelton Street, ",
            addr: "Covent Garden, London, United Kingdom,",
            code: "WC2H 9JQ",
            email: "info@apexdv.com",
            number: "+447361608597"
        },
        {
            id: 2,
            name: "USA OFFICE",
            address: "27 Colonial Village Shelton, ",
            addr: "Connecticut,",
            code: "06484",
            email: "info@apexdv.com",
            number: "+1203-892-6285"
        },
        {
            id: 3,
            name: "BD OFFICE",
            address: "2 Lalbag Road, Suite 6  ",
            addr: "East Kamrangirchar,",
            code: "Dhaka-1211",
            email: "info@apexdv.com",
            number: "+8801964288131"
        }
    ]
    return (
        <>
            <div className={styles.form_section} id="contactUs" >
                <div className="container">
                    <div className={styles.contactUsFormGrid}>


                        <div className={styles.contact_form}>
                            <h2 className={styles.formTitle} >Need a technological solution?</h2>
                            <h2 className={styles.formTitle} >Contact us!</h2>
                            <form onSubmit={(e) => handleSubmit(e)} id="contact-form">
                                {/* <Row className="clearfix"> */}
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
                                                    <div className={styles.form_group} >
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
                                                            className={styles.form_input}
                                                            rows={5}
                                                            name={name}
                                                            placeholder={placeholder}
                                                            required={required}

                                                        ></textarea>
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                    )
                                )}
                                <div >
                                    <p className={styles.form_group} >Please be informed that when you click the submit button, ApexDv will process your personal data in accordance with our privacy policy for the purpose of providing you with the appropriate information.</p>
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
                        <div className={styles.contact_form_info}>
                            <h2 className={styles.formTitle} >What happens next?</h2>
                            <div>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                1
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Having received and processed your request, we will get back to you shortly to detail your project needs and sign an NDA to ensure the confidentiality of information.</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                2
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>After examining requirements, our analysts and developers devise a project proposal with the scope of works, team size, time, and cost estimates.</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                3
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>We arrange a meeting with you to discuss the offer and come to an agreement.</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                4
                                            </TimelineDot>
                                        </TimelineSeparator>
                                        <TimelineContent>We sign a contract and start working on your project as quickly as possible.</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                            <div >
                                <h1 className={styles.quickContact} >Quick Contact</h1>
                                <div className={styles.addressDiv}>
                                    {
                                        addressData.map((item, i) => (
                                            <div className={styles.addressContainer}>
                                                <h1>{item.name}</h1>
                                                <p>{item.address}</p>
                                                <p>{item.addr}</p>
                                                <p>{item.code}</p>
                                                <p>{item.email}</p>
                                                <p>{item.number}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsForm;
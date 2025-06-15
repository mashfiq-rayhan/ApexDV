import React from 'react';
import styles from "./Offices.module.css";

const Offices = () => {
    const addressData = [
        {
            id: 1,
            name: "UK OFFICE",
            address: "71-75 Shelton Street, Covent Garden,",
            addr: " London, United Kingdom,",
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
        <div className='container p-5 pt-0'>
            <div >
                <h1 className={styles.quickContact} >OFFICES NEAR YOU .</h1>
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
    );
};

export default Offices;
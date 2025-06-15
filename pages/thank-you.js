import Image from 'next/image';
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from '../components/shared/Navbar/Navbar';
import Foot from './../components/Home/Foot/Foot';

function ThankYou() {
    return (
        <div>
            <Head>
                <title>Thank You </title>
                <meta name="description" content="ApexDv" />
                <link rel="icon" href="/images/Navigation/iconLogo.svg" />
            </Head>
            <Navbar />
            <div className="container pt-5 pb-5">
                <div className="columns-1">
                    <div className="text-center">
                        <Image
                            src={'/images/thank-you.svg'}
                            width={300}
                            height={300}
                            alt="Thank You"
                        />
                        <h2 className="mt-5 text-5xl font-bold">Thank You</h2>
                        <p className="lead">
                            We will get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    )
}

export default ThankYou;
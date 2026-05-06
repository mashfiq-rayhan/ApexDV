import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import CryptomiumHero from "../components/PortfolioDetails/Cryptomium/CryptomiumHero";
import Frame from "../components/PortfolioDetails/Cryptomium/Frame";
import Learning from "../components/PortfolioDetails/Cryptomium/Learning";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import NextDetailsPage from './../components/PortfolioDetails/ParaswapDetails/NextDetailsPage';

const PortfolioCryptomium = () => {
  return (
    <>
      <Head>
        <title>portfolio-paraswap-details </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4">
        <CryptomiumHero />
      </div>
      <Frame />
      <div className="container mx-auto px-4">
        <Learning />
      </div>
      <ReviewSection />
      {/* <ReviewSectionLuna /> */}
      <PortfolioResultsDetails />
      <NextDetailsPage />
      <ContactUsForm />
      <Foot />
    </>
  );
};

export default PortfolioCryptomium;

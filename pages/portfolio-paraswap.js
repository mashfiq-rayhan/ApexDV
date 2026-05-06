import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import ParaswapDetailsHero from "../components/PortfolioDetails/ParaswapDetails/ParaswapDetailsHero";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import NextDetailsPage from "../components/PortfolioDetails/ParaswapDetails/NextDetailsPage";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";

const portfolioParaswap = () => {
  return (
    <div>
      <Head>
        <title>portfolio-paraswap-details </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <ParaswapDetailsHero />
      <ReviewSection />
      <PortfolioResultsDetails />
      <NextDetailsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default portfolioParaswap;

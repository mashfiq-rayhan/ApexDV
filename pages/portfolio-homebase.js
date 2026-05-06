import dynamic from "next/dynamic";
import Head from 'next/head';
import React from 'react';
import Foot from "../components/Home/Foot/Foot";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import HomebaseDetailsHero from "../components/PortfolioDetails/HomebaseDetails/HomebaseDetailsHero";
import HomebaseDetailsSecondHero from "../components/PortfolioDetails/HomebaseDetails/HomebaseDetailsSecondHero";
import HomebaseNextDetailsPage from "../components/PortfolioDetails/HomebaseDetails/HomebaseNextDetailsPage";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Navbar from "../components/shared/Navbar/Navbar";


const portfolioHomebase = () => {
  return (
    <div>
      <Head>
        <title>portfolio-homebase </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <HomebaseDetailsHero />
      <HomebaseDetailsSecondHero />
      <ReviewSection />
      {/* <ReviewSectionLuna /> */}
      <PortfolioResultsDetails />
      <HomebaseNextDetailsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default portfolioHomebase;
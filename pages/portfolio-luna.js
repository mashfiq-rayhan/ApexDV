import dynamic from "next/dynamic";
import Head from 'next/head';
import React from 'react';
import Foot from "../components/Home/Foot/Foot";
// import Foot from "../components/Home/Foot/Foot";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import LunaDetailsHero from "../components/PortfolioDetails/LunaDetails/LunaDetailsHero";
import LunaDetailsSecondHero from "../components/PortfolioDetails/LunaDetails/LunaDetailsSecondHero";
import LunaNexDetaulsPage from "../components/PortfolioDetails/LunaDetails/LunaNexDetaulsPage";
import Partners from "../components/PortfolioDetails/LunaDetails/Partners";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Navbar from "../components/shared/Navbar/Navbar";

const portfolioLuna = () => {
  return (
    <div>
      <Head>
        <title>Luna</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <LunaDetailsHero />
      <Partners />
      <LunaDetailsSecondHero />
      <ReviewSection />
      <PortfolioResultsDetails />
      <LunaNexDetaulsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default portfolioLuna;
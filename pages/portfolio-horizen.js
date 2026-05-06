import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import HorizenTrusted from "../components/PortfolioDetails/PortfolioHorizenDetails/HorizenTrusted";
import HorizenWebsite from "../components/PortfolioDetails/PortfolioHorizenDetails/HorizenWebsite";
import PortfolioHorizenDetails from "../components/PortfolioDetails/PortfolioHorizenDetails/PortfolioHorizenDetails";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import LunaNexDetaulsPage from "../components/PortfolioDetails/LunaDetails/LunaNexDetaulsPage";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";

const PortfolioHorizen = () => {
  return (
    <div>
      <Head>
        <title>portfolio-horizen-details </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <PortfolioHorizenDetails />
      <HorizenTrusted />
      <HorizenWebsite />
      <ReviewSection />
      <PortfolioResultsDetails />
      <LunaNexDetaulsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default PortfolioHorizen;

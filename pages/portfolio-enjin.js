import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import EnjinDetailsHero from "../components/PortfolioDetails/EnjinDetails/EnjinDetailsHero"
import EnjinTrusted from "../components/PortfolioDetails/EnjinDetails/EnjinTrusted"
import EnjinWebsite from "../components/PortfolioDetails/EnjinDetails/EnjinWebsite"
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection"
import NextDetailsPage from "../components/PortfolioDetails/ParaswapDetails/NextDetailsPage"
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails"
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm"

const enjinDetails = () => {
  return (
    <div>
      <Head>
        <title>portfolio-enjin-details </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <EnjinDetailsHero />
      <EnjinTrusted />
      <EnjinWebsite />
      <ReviewSection />
      <PortfolioResultsDetails />
      <NextDetailsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default enjinDetails;

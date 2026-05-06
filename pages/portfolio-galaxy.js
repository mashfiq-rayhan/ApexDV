import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Foot from "../components/Home/Foot/Foot";
import CoinzoomGalaxyHero from "../components/PortfolioDetails/CoinzoomGalaxyDetails/CoinzoomGalaxyHero";
import CoinzoomGalaxySecondHero from "../components/PortfolioDetails/CoinzoomGalaxyDetails/CoinzoomGalaxySecondHero";
import GalaxyNextDetailsPage from "../components/PortfolioDetails/CoinzoomGalaxyDetails/GalaxyNextDetailsPage";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Navbar from "../components/shared/Navbar/Navbar";



const coinzoomProjectGalaxy = () => {
  return (
    <div>
      <Head>
        <title>portfolio-coinzoom-project-galaxy</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <CoinzoomGalaxyHero />
      <CoinzoomGalaxySecondHero />
      {/* <ReviewSeason /> */}
      <ReviewSection />
      <PortfolioResultsDetails />
      <GalaxyNextDetailsPage />
      <ContactUsForm />
      <Foot />
    </div>
  );
};

export default coinzoomProjectGalaxy;

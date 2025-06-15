import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import PortfolioResultsDetails from "./../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ReviewSection from "./../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import PortfolioCoinzoomBlocknativeHero from "./../components/PortfolioCoinzoomBlocknative/PortfolioCoinzoomBlocknativeHero/PortfolioCoinzoomBlocknativeHero";
import PortfolioCoinzoomBlocknativeSecoundSec from "./../components/PortfolioCoinzoomBlocknative/PortfolioCoinzoomBlocknativeSecoundSec/PortfolioCoinzoomBlocknativeSecoundSec";
import PortfolioCoinzoomBlocknativeNext from "./../components/PortfolioCoinzoomBlocknative/PortfolioCoinzoomBlocknativeNext/PortfolioCoinzoomBlocknativeNext";
import ContactUsForm from "./../components/Services/ContactUsForm/ContactUsForm";

function PortfolioCoinzoomBlocknative() {
  return (
    <div>
      <Head>
        <title>Portfolio Coinzoom Blocknative</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <PortfolioCoinzoomBlocknativeHero />
      <PortfolioCoinzoomBlocknativeSecoundSec />
      <ReviewSection />
      <PortfolioResultsDetails />
      <PortfolioCoinzoomBlocknativeNext />
      <ContactUsForm />
      <Foot />
    </div>
  );
}

export default PortfolioCoinzoomBlocknative;

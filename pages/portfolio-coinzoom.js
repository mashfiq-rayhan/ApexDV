import Head from 'next/head';
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "./../components/Home/Foot/Foot";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ReviewSection from "./../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import PortfolioCoinzoomHero from "./../components/PortfolioCoinzoom/PortfolioCoinzoomHero/PortfolioCoinzoomHero";
import PortfolioCoinzoomSecoundSec from "./../components/PortfolioCoinzoom/PortfolioCoinzoomSecoundSec/PortfolioCoinzoomSecoundSec";
import CoinzoomExchange from "./../components/PortfolioCoinzoom/CoinzoomExchange/CoinzoomExchange";
import PortfolioCoinzoomNext from "./../components/PortfolioCoinzoom/PortfolioCoinzoomNext/PortfolioCoinzoomNext";

function PortfolioCoinzoom() {
  return (
    <div>
      <Head>
        <title>portfolio-coinzoom</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <PortfolioCoinzoomHero />
      <PortfolioCoinzoomSecoundSec />
      <CoinzoomExchange />
      <ReviewSection />
      <PortfolioResultsDetails />
      <PortfolioCoinzoomNext />
      <Foot />
    </div>
  )
}

export default PortfolioCoinzoom
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Navbar from "../components/shared/Navbar/Navbar";
import HeroSec from "../components/PortfolioDetails/Impostors/HeroSec/HeroSec";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import ViewDesign from "../components/PortfolioDetails/Impostors/ViewDesign/ViewDesign";
import WorkedOn from "../components/PortfolioDetails/Impostors/WorkedOn/WorkedOn";
import NextDetailsPage from "../components/PortfolioDetails/ParaswapDetails/NextDetailsPage";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Foot from "../components/Home/Foot/Foot";
import Footer from "../components/shared/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Impostors</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>

      <Navbar />
      <HeroSec />
      <WorkedOn />
      <ViewDesign />
      <ReviewSection />
      <PortfolioResultsDetails />
      <NextDetailsPage />
      <ContactUsForm />
      <Foot />
      <Footer />
    </div>
  );
}

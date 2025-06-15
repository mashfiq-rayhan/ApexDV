import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/shared/Navbar/Navbar";
import HeroSec from "../components/PortfolioDetails/AOTA/HeroSec/HeroSec";
import Partners from "../components/PortfolioDetails/AOTA/Partners/Partners";
import ViewDesign from "../components/PortfolioDetails/AOTA/ViewDesign/ViewDesign";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import NextDetailsPage from "../components/PortfolioDetails/ParaswapDetails/NextDetailsPage";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails";
import Footer from "../components/shared/Footer/Footer";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Foot from "../components/Home/Foot/Foot";


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Portfolio AOTA</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <HeroSec />
      <Partners />
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

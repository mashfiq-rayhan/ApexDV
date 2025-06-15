import { Container } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./../components/shared/Navbar/Navbar";
import Foot from "../components/Home/Foot/Foot";
import ReviewSection from "../components/PortfolioDetails/CoinzoomGalaxyDetails/ReviewSection";
import PortfolioResultsDetails from "../components/PortfolioDetails/ParaswapDetails/PortfolioResultsDetails"
import Jumbotron from "../components/PortfolioDetails/Paritex/Jumbotron"
import ParitexHero from "../components/PortfolioDetails/Paritex/ParitexHero"
import ParitexNextDetailsPage from "../components/PortfolioDetails/Paritex/ParitexNextDetailsPage"
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm"

const PortfolioParitex = () => {
  return (
    <>
      <Head>
        <title>portfolio-paraswap-details </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <Jumbotron />
      <Container>
        <ParitexHero />
      </Container>
      <ReviewSection />
      <PortfolioResultsDetails />
      <ParitexNextDetailsPage />
      <ContactUsForm />
      <Foot />
    </>
  );
};

export default PortfolioParitex;

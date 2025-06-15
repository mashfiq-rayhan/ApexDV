import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/shared/Navbar/Navbar";
import Hero from "../components/Portfolio/Hero/Hero";
import OurExperience from "../components/Portfolio/OurExperience/OurExperience";
import OurExpertise from "../components/Portfolio/OurExpertise/OurExpertise";
import Technology from "../components/Portfolio/Technologies/Technologies";
import RecentWorks from "../components/Portfolio/RecentWorks/RecentWorks";
import Proceed from "../components/Portfolio/Proceed/Proceed";
import NoStress from "../components/Portfolio/NoStress/NoStress";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";
import Foot from "../components/Home/Foot/Foot";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ApexDv</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      {/* <Container className={styles.portfolio_container} maxWidth="lg"> */}
      <Hero />
      <OurExperience />
      <OurExpertise />
      <Technology />
      <RecentWorks />
      <Proceed />
      <NoStress />
      <ContactUsForm />
      <Foot />
      {/* </Container> */}
    </div>
  );
}

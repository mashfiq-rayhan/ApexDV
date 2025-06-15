import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContactUs from "../components/ContactUs/ContactUs";
import Offices from "../components/ContactUs/Offices";
import Foot from "../components/Home/Foot/Foot";
import Navbar from "../components/shared/Navbar/Navbar";

const contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <ContactUs />
      <Offices />
      <Foot />
    </div>
  );
};

export default contact;

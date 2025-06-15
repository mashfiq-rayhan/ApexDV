import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/shared/Navbar/Navbar";
import HeroSec from "../components/Home/HeroSec/HeroSec";
import ProjectView from "../components/Home/ProjectView/ProjectView";
import WhoWeAre from "./../components/Home/WhoWeAre/WhoWeAre";
import Technologies from "./../components/Home/Technologies/Technologies";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
import RecentWorks from "../components/Home/RecentWorks/RecentWorks";
import FeaturedOn from "../components/Home/FeaturedOn/FeaturedOn";
import ClientReviews from "../components/Home/ClientReviews/ClientReviews";
import Foot from "../components/Home/Foot/Foot";
import Footer from "../components/shared/Footer/Footer";
import ContactUsForm from "../components/Services/ContactUsForm/ContactUsForm";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ApexDv</title>
                <meta name="description" content="ApexDv" />
                <link rel="icon" href="/images/Navigation/iconLogo.svg" />
            </Head>

            <Navbar />

            <HeroSec />
            <ProjectView />
            <WhoWeAre />
            <Technologies />
            <WhyChooseUs />
            <RecentWorks />
            <FeaturedOn />
            <ClientReviews />
            {/* <Blog /> */}
            {/* <GetInTouch /> */}
            <ContactUsForm />
            <Foot />
            <Footer />
        </div>
    );
}

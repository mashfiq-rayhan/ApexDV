import Head from 'next/head';
import Navbar from "../components/shared/Navbar/Navbar";;
import HeroSec from "../components/About/HeroSec/HeroSec";;
import ProjectView from './../components/Home/ProjectView/ProjectView';;
import Awards from '../components/About/Awards/Awards';;
import Testimonial from '../components/About/Testimonial/Testimonial';
import MeetTeam from '../components/About/MeetTeam/MeetTeam';
import LeastestWork from '../components/About/LeastestWork/LeastestWork';
import ContactUsForm from '../components/Services/ContactUsForm/ContactUsForm';
import Foot from '../components/Home/Foot/Foot';
import Footer from './../components/shared/Footer/Footer';

function about() {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="ApexDv" />
                <link rel="icon" href="/images/Navigation/iconLogo.svg" />
            </Head>
            <Navbar />           
            <HeroSec />
            <ProjectView />
            <Awards />
            <Testimonial />
            <MeetTeam />
            <LeastestWork />
            <ContactUsForm />
            <Foot/>
            <Footer />
        </div>
    )
}

export default about
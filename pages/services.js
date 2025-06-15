import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from '../components/shared/Navbar/Navbar';
import ServiceBanner from './../components/Services/ServiceBanner/ServiceBanner';
import NftDevelopmentService from './../components/Services/NftDevelopmentService/NftDevelopmentService';
import NftSolutions from './../components/Services/NftSolutions/NftSolutions';
import PlatformsNft from './../components/Services/PlatformsNft/PlatformsNft';
import YourNftProject from './../components/Services/YourNftProject/YourNftProject';
import BenefitsOfNft from './../components/Services/BenefitsOfNft/BenefitsOfNft';
import HowNftBeUtilized from './../components/Services/HowNftBeUtilized/HowNftBeUtilized';
import NftAndMetaverse from './../components/Services/NftAndMetaverse/NftAndMetaverse';
import NftForIndustry from './../components/Services/NftForIndustry/NftForIndustry';
import ConsiderNftService from './../components/Services/ConsiderNftService/ConsiderNftService';
import NftDevsHire from './../components/Services/NftDevsHire/NftDevsHire';
import YourOptForNftDev from './../components/Services/YourOptForNftDev/YourOptForNftDev';
import TechnologyStack from './../components/Services/TechnologyStack/TechnologyStack';
import NftDevProcess from './../components/Services/NftDevProcess/NftDevProcess';
import WhyHireBlockDev from './../components/Services/WhyHireBlockDev/WhyHireBlockDev';
import FullCycleDevTeam from './../components/Services/FullCycleDevTeam/FullCycleDevTeam';
import Networks from './../components/Services/Networks/Networks';
import CodingStandards from './../components/Services/CodingStandards/CodingStandards';
import ClientReviews from './../components/Home/ClientReviews/ClientReviews';
import OptForNft from './../components/Services/OptForNft/OptForNft';
import RecentWorks from './../components/Home/RecentWorks/RecentWorks';
import YourQuestionAnswer from './../components/Services/YourQuestionAnswer/YourQuestionAnswer';
import ContactUsForm from './../components/Services/ContactUsForm/ContactUsForm';
import Foot from './../components/Home/Foot/Foot';

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Service </title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>

      <Navbar />
      <ServiceBanner />
      <NftDevelopmentService />
      <NftSolutions />
      <PlatformsNft />
      <YourNftProject />
      <BenefitsOfNft />
      <HowNftBeUtilized />
      <NftAndMetaverse />
      <NftForIndustry />
      <ConsiderNftService />
      <NftDevsHire />
      <YourOptForNftDev />
      <TechnologyStack />
      <NftDevProcess />
      <WhyHireBlockDev />
      <FullCycleDevTeam />
      <Networks />
      <CodingStandards />
      <ClientReviews />
      <OptForNft />
      <RecentWorks />
      <YourQuestionAnswer />
      <ContactUsForm />
      <Foot />
    </div>
  );
}
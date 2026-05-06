import Head from "next/head";
import BlogHero from "../components/Blog/BlogHero/BlogHero";
import BlogFooter from "../components/Blog/BlogSubFooter/BlogFooter";
import BlogSubFooter from "../components/Blog/BlogSubFooter/BlogSubFooter";
import BlogInfo from "../components/Blog/BlogHero/BlogInfo";
import Navbar from "./../components/shared/Navbar/Navbar";

const blog = () => {
  return (
    <div>
      <Head>
        <title>blog</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />     
      <BlogHero />
      <BlogInfo />
      <BlogSubFooter />
      <BlogFooter />
    </div>
  );
};

export default blog;

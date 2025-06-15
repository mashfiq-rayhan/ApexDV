import React from "react";
import Head from "next/head";
import BlogHero from "../components/Blog/BlogHero/BlogHero";
import Navbar from "./../components/shared/Navbar/Navbar";
import BlogFooter from "../components/Blog/BlogSubFooter/BlogFooter";
import BlogSubFooter from "../components/Blog/BlogSubFooter/BlogSubFooter";
import BlogAuthorInfo from "../components/Blog/BlogHero/BlogAuthorInfo";

const BlogAuthor = () => {
  return (
    <div>
      <Head>
        <title>blog-author</title>
        <meta name="description" content="ApexDv" />
        <link rel="icon" href="/images/Navigation/iconLogo.svg" />
      </Head>
      <Navbar />
      <BlogHero />
      <BlogAuthorInfo />
      <BlogSubFooter />
      <BlogFooter />
    </div>
  );
};

export default BlogAuthor;

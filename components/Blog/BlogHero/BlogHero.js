import React from "react";
import { Grid } from "@mui/material";
import styles from "./BlogHero.module.css";
import Link from "next/link";

const BlogHero = () => {
  const blogheroData = {
    title: "Read Our Blog",
    text: "Discover all the latest about our products, technology, and Google culture on our official blog.",
    btnText: "See our Openings",
    btnHref: "/",
    heroImage: "/images/Blog/image 456.svg",
  };

  const { title, text, btnText, heroImage, btnHref } = blogheroData;

  return (
    <div className={styles.blogHeroSection}>
      <div className={styles.blogSectionShadow}>        
      </div>
      <div className="container mx-auto px-5">
        <Grid container className={styles.blogHero}>
          <Grid item xs={12} md={6} className={styles.blogHeroImage}>
            <img src={heroImage} alt="" />
          </Grid>

          <Grid item xs={12} md={6} className={styles.blogHeroText}>
            <h1>{title}</h1>
            <p>{text}</p>
            <button className={styles.button} href={btnHref}>
              <Link className="" href="/contact">
                <a role="button">{btnText}</a>
              </Link>
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogHero;

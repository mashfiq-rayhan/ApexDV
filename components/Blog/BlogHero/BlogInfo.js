import React from "react";
import { Grid } from "@mui/material";
import styles from "./BlogHero.module.css";
import BlogInfoDetails from "../../Card/BlogInfoDetails/BlogInfoDetails";

const BlogInfo = () => {
  const blogInfoData = {
    title: "Popular Tags",
    title2: "Connect with us",
    title3: "Newsletter",
    tag1: "Business",
    tag2: "Development",
    tag3: "Opinion",
    tag4: "About Us",
    tag5: "Design",
    tag6: "Process",

    btnText: "See our Openings",
    btnHref: "/",
    mediaF: "/images/Blog/image 377.svg",
    mediaI: "/images/Blog/image 378.svg",
    mediaT: "/images/Blog/image 379.svg",
    mediaL: "/images/Blog/image 380.svg",
  };

  const blogInfoDetailsData = [
    {
      id: 1,
      href: "/",
      hoverHref: "/",
      butText: "Design",
      title: "A Beginner’s Guide on NFT and NFT Marketplace",
      subtitle: "Guilherme Hayashi  July 10, 2022",
      img: "/images/Blog/image 480.svg",
      profileImg: "/images/Blog/Frame 13964.svg",
      hoverButText: "Continue Reading",
      subtext:"What Is An NFT?",
      text1:
        "An NFT, or non-fungible token, is a type of digital certificate that helps authenticate and establish the ownership of any given virtual asset. This is made possible with the help of blockchain technology.",
      text2:
        "Each NFT comes with a unique identifier and metadata about the item they are attached to. The real kicker? All of this information cannot be faked, replaced, replicated or hacked in any way.",
      text3:
        "For this reason, NFTs hold great potential and the NFT market has been booming for the last year or so. Some non-fungible tokens have sold for millions.",
      text4:
        "But this technology doesn't have to be expensive or fancy. Maybe you've come across it and have no idea. NFTs are increasingly being used in games.The success and popularity of these digital tokens has presented a new opportunity for NFT creators to experiment with their art - and monetize their creations more fairly.",
    },
    {
      id: 2,
      href: "/",
      hoverHref: "/",
      butText: "Design",
      hoverButText: "Continue Reading",
      subtitle: "Guilherme Hayashi  July 10, 2022",
      title: "Edge cases: when users stray from the happy path",
      img: "/images/Blog/image 480.svg",
      profileImg: "/images/Blog/Frame 13577.svg",
      subtext:"What Is An NFT?",
      text1:
        "An NFT, or non-fungible token, is a type of digital certificate that helps authenticate and establish the ownership of any given virtual asset. This is made possible with the help of blockchain technology.",
      text2:
        "Each NFT comes with a unique identifier and metadata about the item they are attached to. The real kicker? All of this information cannot be faked, replaced, replicated or hacked in any way.",
      text3:
        "For this reason, NFTs hold great potential and the NFT market has been booming for the last year or so. Some non-fungible tokens have sold for millions.",
      text4:
        "But this technology doesn't have to be expensive or fancy. Maybe you've come across it and have no idea. NFTs are increasingly being used in games.The success and popularity of these digital tokens has presented a new opportunity for NFT creators to experiment with their art - and monetize their creations more fairly.",
    },
  ];

  const {
    tag1,
    tag2,
    tag3,
    tag4,
    tag5,
    tag6,
    title,
    title2,
    mediaL,
    mediaF,
    mediaT,
    mediaI,
    title3,
  } = blogInfoData;
  return (
    <div className={styles.blogInfoSection}>
      <div className="container mx-auto px-5">
        <Grid container className={styles.blogInfo}>
          <Grid item xs={12} md={6} className={styles.blogSocialMedia}>
            <div className={styles.SocialMediaSearch}>
              <input
                placeholder="e.g design"
                type="email"
                name="email"
                required="true"
              />
              <button className={styles.SearchButton}>Search</button>
            </div>

            <h3>{title}</h3>
            <div className={styles.SocialMediaTag}>
              <div className={styles.MediaTag}>
                <h2>
                  {tag1} <span className={styles.MediaTagBackground}>85</span>
                </h2>
              </div>

              <div className={styles.MediaTag}>
                <h2>
                  {tag2} <span className={styles.MediaTagBackground}>50</span>
                </h2>
              </div>

              <div className={styles.MediaTag}>
                <h2>
                  {tag3} <span className={styles.MediaTagBackground}>55</span>
                </h2>
              </div>

              <div className={styles.MediaTag}>
                <h2>
                  {tag4} <span className={styles.MediaTagBackground}>25</span>
                </h2>
              </div>
              <div className={styles.MediaTag}>
                <h2>
                  {tag5} <span className={styles.MediaTagBackground}>45</span>
                </h2>
              </div>
              <div className={styles.MediaTag}>
                <h2>
                  {tag6} <span className={styles.MediaTagBackground}>75</span>
                </h2>
              </div>
            </div>

            <h3>{title2}</h3>

            <div className={styles.SocialMediaImage}>
              <a href="/">
                <img src={mediaF} alt="" />
              </a>
              <a href="/">
                <img src={mediaI} alt="" />
              </a>
              <a href="/">
                <img src={mediaT} alt="" />
              </a>
              <a href="/">
                <img src={mediaL} alt="" />
              </a>
            </div>

            <h3>{title3}</h3>
            <div className={styles.blogSearch}>
              <input
                placeholder="e.g design"
                type="email"
                name="email"
                required="true"
              />
              <button className={styles.blogSearchButton}>Search</button>
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={styles.blogInfoDetails}>
            {blogInfoDetailsData.map((details, i) => {
              return (
                <BlogInfoDetails
                  key={details.id}
                  title={details.title}
                  subtitle={details.subtitle}
                  img={details.img}
                  href={details.href}
                  hoverHref={details.hoverHref}
                  butText={details.butText}
                  hoverButText={details.hoverButText}
                  text1={details.text1}
                  text2={details.text2}
                  text3={details.text3}
                  profileImg={details.profileImg}
                />
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogInfo;

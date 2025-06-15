import React from "react";
import styles from "./BlogInfoDetails.module.css";
import Link from "next/link";

const BlogInfoDetails = ({
  title,
  subtitle,
  img,
  href,
  hoverHref,
  butText,
  hoverButText,
  text1,
  text2,
  text3,
  profileImg,
}) => {
  // console.log(title, subtitle, img, href , hoverHref, butText, hoverButText, text1, text2, text3, profileImg);
  return (
    <div className={styles.blogInfoDetails}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <div className={styles.blogProfileDetails}>
        <img src={profileImg} alt="" />
        <h3>{subtitle}</h3>
      </div>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <button className={styles.button} href={hoverHref}>
        <Link className="" href="/contact">
          <a role="button">{hoverButText}</a>
        </Link>
      </button>
      <div className={styles.desginButton}>
        <button className={styles.desginBtn} href={href}>
          <Link className="" href="/contact">
            <a role="button">{butText}</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogInfoDetails;

import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { RecentWorkStatic } from "../StaticFiles/StaticFile";
import styles from "./RecentWorks.module.css";
import Image from 'next/image';
export default function RecentWorks() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [render, setRender] = useState(false);
  const handleHover = (event) => {
    setCount(event.currentTarget.id);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRender(true);
    }
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className={`${ styles.scrollbox_container } ${ styles.mobile }`}>
        <h1 className={styles.header}>Recent Works</h1>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item lg={6} md={6}>
            <div className={styles.scrollbox_desc} id={styles.scrollbar_style}>
              {RecentWorkStatic.map((rw) => (
                <div key={rw.id} id={rw.id} onMouseOver={handleHover} className={styles.link_container}>
                  <a href={`portfolio-${ rw.page }`}>
                    <div ref={elementRef} className={styles.scrollbox_content}>
                      <p className={styles.scrollbox_content_header}>
                        {rw.title}
                      </p>
                      <p className={styles.scrollbox_content_text}>{rw.text}</p>
                      <p className={styles.scrollbox_content_footer}>
                        {rw.date}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item lg={6} md={6}>
            <div className={styles.scrollbox_image_container}>
              <Image
                className={styles.scrollbox_image}
                src={`${ RecentWorkStatic[count].link }`}
                width={500}
                height={500}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`${ styles.scrollbox_container } ${ styles.desktop }`}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item sm={12} xs={12}>
            <div className={styles.scrollbox_desc_small}>
              {RecentWorkStatic.map((rw) => (
                <a href={`portfolio-${ rw.page }`}>
                  <div className={styles.scrollbox_content_small}>
                    <div className={styles.scrollbox_image_container_small}>
                      <Image
                        className={styles.scrollbox_image_small}
                        src={rw.link}
                        width={500}
                        height={500}
                      />
                    </div>
                    <p className={styles.scrollbox_content_header_small}>
                      {rw.title}
                    </p>
                    <p className={styles.scrollbox_content_text_small}>
                      {rw.text}
                    </p>
                    <p className={styles.scrollbox_content_footer_small}>
                      {rw.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

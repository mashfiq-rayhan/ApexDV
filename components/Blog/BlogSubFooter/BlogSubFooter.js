import React from "react";

const BlogSubFooter = () => {
  return (
    <div className="bg-[#E9E9EA] py-[60px]">
      <div className="container mx-auto px-5">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 max-md:text-center">
          <div>
            <h3>Services</h3>
            <a href="">
              <p>Full-stack Engineering</p>
            </a>
            <a href="">
              <p> UI/UX Design</p>
            </a>
            <a href="">
              <p>Decision Support</p>{" "}
            </a>
          </div>
          <div className={styles.SubFooterServices}>
            <h3>Company</h3>
            <a href="">
              <p> Portfolio</p>
            </a>
            <a href="">
              <p>Projects & Partners</p>
            </a>
          </div>
          <div className={styles.SubFooterServices}>
            <h3>Press</h3>
            <a href="">
              <p>Press Kit</p>{" "}
            </a>
          </div>
          <div className={styles.SubFooterServices}>
            <h3>Tools</h3>
            <a href="">
              <p>App Cost Estimator</p>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSubFooter;

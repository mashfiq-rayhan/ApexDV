import Link from "next/link";
import React from "react";

const OptForNft = () => {
  return (
    <>
      <div className="yourOptForNftDev">
        <div className={`container p-5 optForNftDev`}>
          <div className="green_abstract_right"></div>
          <div>
            <img
              src="images/Service Page/call-to-action-2-1.gif"
              alt=""
              className="image"
            />
          </div>
          <div>
            <h1 className="title">
              Not sure whether to opt in for NFT development?
            </h1>
            <p className="text">
              Share your project idea with Innowise Group’s professionals
            </p>
            <button className="button86" href="#contactUs">
              <Link className="" href="#contactUs">
                <a role="button" href="#contactUs">
                  Contact Us
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptForNft;
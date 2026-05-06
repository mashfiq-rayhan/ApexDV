import React from "react";
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
      subtext: "What Is An NFT?",
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
      subtext: "What Is An NFT?",
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
    <div className="py-[60px] bg-[#FAFAFA]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-col-reverse">
          <div className="text-center md:text-center">
            <div className="flex items-center justify-center md:justify-center max-md:hidden">
              <input
                placeholder="e.g design"
                type="email"
                name="email"
                required="true"
                className="font-rubik text-base font-normal text-[#A7A7A9] leading-7 border-2 border-[#E9E9EA] rounded-[25px] px-5 py-2.5 bg-inherit outline-0"
              />
              <button className="w-[123px] block py-3 px-2.5 gap-2.5 bg-[#1caf83] border border-[#1caf83] text-white transition-all duration-[0.4s] linear rounded-[35px] -ml-[50px] hover:bg-[#FAFAFA] hover:text-[#1caf83]">
                Search
              </button>
            </div>

            <h3 className="text-[32px] font-teko leading-10 font-normal text-[#383A3E] mt-[30px]">
              {title}
            </h3>
            <div className="grid grid-cols-2 gap-2.5 w-[280px] mt-5 mx-auto max-[320px]:grid-cols-1">
              <div className="w-[140px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag1}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    85
                  </span>
                </h2>
              </div>

              <div className="w-[164px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag2}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    50
                  </span>
                </h2>
              </div>

              <div className="w-[120px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag3}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    55
                  </span>
                </h2>
              </div>

              <div className="w-[132px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag4}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    25
                  </span>
                </h2>
              </div>
              <div className="w-[120px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag5}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    45
                  </span>
                </h2>
              </div>
              <div className="w-[124px] p-2.5 bg-[#222429] rounded-[30px] mx-auto">
                <h2 className="font-rubik text-base font-normal text-left text-white">
                  {tag6}{" "}
                  <span className="inline-block w-[26px] h-[26px] rounded-[40px] px-2.5 py-2.5 bg-[#2D2F34] text-center">
                    75
                  </span>
                </h2>
              </div>
            </div>

            <h3 className="text-[32px] font-teko leading-10 font-normal text-[#383A3E] mt-[30px]">
              {title2}
            </h3>

            <div className="flex gap-4 mt-5 justify-center">
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

            <h3 className="text-[32px] font-teko leading-10 font-normal text-[#383A3E] mt-[30px]">
              {title3}
            </h3>
            <div>
              <input
                placeholder="e.g design"
                type="email"
                name="email"
                required="true"
                className="w-full font-rubik text-base font-normal text-[#A7A7A9] leading-7 border-2 border-[#E9E9EA] rounded-[25px] px-5 py-2.5 bg-inherit outline-0 mt-5 md:w-full"
              />
              <button className="w-[222px] block py-3 px-2.5 gap-2.5 bg-[#1caf83] border border-[#1caf83] text-white font-rubik text-base font-normal leading-7 transition-all duration-[0.4s] linear rounded-[35px] mt-5 mx-auto mb-[30px] md:w-full hover:bg-[#FAFAFA] hover:text-[#1caf83]">
                Search
              </button>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;

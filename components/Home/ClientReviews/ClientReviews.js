import React, { useState } from "react";

const ClientReviews = () => {
  const data = [
    {
      id: 1,
      clientName: "ARIEL RABEL",
      designation: "DIRECTOR",
      review:
        "Was looking for expert team to develop Apexdv Clone for my real estate business . After going through the demo i was very happy to select Web Development India. They delivered the complex solution in 1 month time and i am very happy with there services .",
    },
    {
      id: 2,
      clientName: "JACOB FLORES",
      designation: "DIRECTOR",
      review:
        "I am blessed to work with web development UK team and very excited with the launch of my new software product . All the best to the team for the wounderfull job they have accomplished.",
    },
    {
      id: 3,
      clientName: "MICHAEL",
      designation: "DIRECTOR",
      review:
        "We have been working with Blockchain Development UK for last 2 years and found there services impeccable. They delivered what was promised and on time. We can recommend them.",
    },
    {
      id: 4,
      clientName: "NORMIN NAK",
      designation: "DIRECTOR",
      review:
        "I was worried reading some of the reviews here, but I trusted the company to help me develop a real estate website. My contact Mark was very accessible on the phone and they produced some good work. I will keep working with them on enhancements and I hope everything goes well.",
    },
    {
      id: 5,
      clientName: "PETER",
      designation: "DIRECTOR",
      review:
        "It has been a pleasure working with web development agency. I really appreciate your dedication and creativity in your work.thanks guys !!",
    },
  ];

  const [rating, setRating] = useState(5);
  const stars = [1, 2, 3, 4, 5];

  const StarIcon = () => (
    <svg
      className="w-6 h-6"
      fill="white"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="py-12 px-5 my-16">
      <h2
        className="text-center my-12 text-4xl md:text-5xl lg:text-6xl font-normal"
        style={{ fontFamily: "Teko" }}>
        What our clients say about our work
      </h2>
      <div className="container-fluid">
        <div className="clientSlider overflow-hidden">
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-5">
            {data.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAFA] p-8 md:p-10 rounded shadow-sm hover:shadow-lg transition-shadow my-[30px] mx-2.5 md:m-0">
                <div className="flex gap-2 mb-4">
                  {stars.map((star) => (
                    <button
                      key={star}
                      className="bg-[#1CAF83] p-2 rounded hover:bg-[#1CAF83] w-10 h-10">
                      <StarIcon />
                    </button>
                  ))}
                </div>
                <div className="py-0.5 px-4 mb-4">
                  <h4 className="text-gray-600 text-lg">{item.review}</h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <h6 className="font-semibold">{item.clientName}</h6>
                    <p className="text-sm text-gray-500">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div
            className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {data.map((item) => (
              <div
                key={item.id}
                className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all duration-300 my-[30px] mx-2.5 p-2.5 px-5 bg-[#FAFAFA] min-w-[260px] snap-start flex-shrink-0 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] h-[400px] sm:h-[410px] sm:w-[285px] md:h-[400px] md:w-[315px] lg:h-[300px] lg:w-[420px] xl:h-[270px]">
                <div className="flex gap-2 mb-4">
                  {stars.map((star) => (
                    <button
                      key={star}
                      className="bg-[#1CAF83] p-2 rounded hover:bg-[#1CAF83] w-10 h-10">
                      <StarIcon />
                    </button>
                  ))}
                </div>
                <div className="py-0.5 px-4 mb-4 pt-[15px]">
                  <h4 className="text-gray-600 text-base">{item.review}</h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <h6 className="font-semibold text-sm">{item.clientName}</h6>
                    <p className="text-xs text-gray-500">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;

import { useState } from "react";

const TechnologyStack = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };

  const accordionData = [
    {
      id: "panel1",
      header: "Blockchain platforms",
      items: ["AWS", "Google Cloud Platform", "Heroku", "Microsoft Azure"],
    },
    {
      id: "panel2",
      header: "NFT standards",
      items: ["AWS", "Google Cloud Platform", "Heroku", "Microsoft Azure"],
    },
    {
      id: "panel3",
      header: "Storage platforms",
      items: ["AWS", "Google Cloud Platform", "Heroku", "Microsoft Azure"],
    },
    {
      id: "panel4",
      header: "Programming languages",
      items: ["Javascript", "Python", "Kotlin", "C and C++"],
    },
    {
      id: "panel5",
      header: "Front-end technologies",
      items: ["HTML", "React", "Angular", "TypeScript"],
    },
    {
      id: "panel6",
      header: "Cloud platforms",
      items: ["IBM Cloud", "Oracle Cloud", "Alibaba Cloud"],
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="container p-5">
          {/* Green abstract decorations */}
          <div className="absolute right-0 top-[600px] w-[182px] h-[133.35px] bg-[#1caf83] opacity-40 lg:opacity-20 blur-[100px] z-[1]"></div>
          <div className="absolute left-0 top-[150px] w-[182px] h-[133.35px] bg-[#1caf83] opacity-40 lg:opacity-20 blur-[100px] z-[1]"></div>

          <div>
            <h1 className="font-teko font-normal text-[32px] leading-10 sm:text-[40px] md:text-[64px] md:leading-[63px] text-center text-[#1a1a1a] mb-5 sm:mb-5 md:mb-[60px]">
              Our technology stack
            </h1>
          </div>
          <div className="py-0">
            {accordionData.map((accordion) => (
              <div key={accordion.id} className="border-b border-gray-200">
                <div className="text-green-500">
                  <button
                    onClick={() => handleAccordionChange(accordion.id)}
                    className="w-full flex justify-between items-center py-4 px-2 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={expandedPanel === accordion.id}
                    aria-controls={`${accordion.id}-content`}>
                    <span className="font-teko font-normal text-[24px] sm:text-[32px] leading-10 text-[#1a1a1a]">
                      {accordion.header}
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${expandedPanel === accordion.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id={`${accordion.id}-content`}
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedPanel === accordion.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-4 pb-4">
                    <ul className="list-none">
                      {accordion.items.map((item, index) => (
                        <li key={index} className="py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyStack;

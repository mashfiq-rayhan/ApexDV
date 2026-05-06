import React, { useState } from 'react';

const YourQuestionAnswer = () => {
        const [expandedAccordion, setExpandedAccordion] = useState(null);
        
        const toggleAccordion = (panel) => {
                setExpandedAccordion(expandedAccordion === panel ? null : panel);
        };
        
        return (
                <>
                <div className="yourQuestionAnswer">
                        <div className="green_abstract_right"></div>
                        <div className="green_abstract_left"></div>
                        <div className='container p-5'>
                                <div>
                                        <h1 className="title" >NFT development solutions: all your questions answered</h1>
                                </div>
                                <div className="technologyStack">
                                        <div className="border border-gray-300 rounded mb-2">
                                                <button
                                                        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                                                        onClick={() => toggleAccordion('panel1')}
                                                >
                                                        <span className="accordion_header" >How much time does it take to build an NFT Solution?</span>
                                                        <svg className={`w-6 h-6 transition-transform ${expandedAccordion === 'panel1' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                </button>
                                                {expandedAccordion === 'panel1' && (
                                                        <div className="p-4 bg-white border-t">
                                                                <p>
                                                                        It takes at most 48-hours for the process to be complete. On the bright side, the fee is a one-time payment. Additionally, you can take your smart contract to any other NFT management platform as long as they allow you to import it. Remember that it is impossible to create a smart contract for free.
                                                                </p>
                                                        </div>
                                                )}
                                        </div>
                                        <div className="border border-gray-300 rounded mb-2">
                                                <button
                                                        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                                                        onClick={() => toggleAccordion('panel2')}
                                                >
                                                        <span className="accordion_header">What affects the cost of NFT product development?</span>
                                                        <svg className={`w-6 h-6 transition-transform ${expandedAccordion === 'panel2' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                </button>
                                                {expandedAccordion === 'panel2' && (
                                                        <div className="p-4 bg-white border-t">
                                                                <p>
                                                                        There are several factors that can drive the price of an NFT. From market conditions to buyer demand, these aspects range across a wide spectrum.
                                                                        <br /> Some of these components include but are not limited to:
                                                                        <div className="pl-5">
                                                                                <ul className="list-disc">
                                                                                        <li>Market demand.</li>
                                                                                        <li>Buyer emotion.</li>
                                                                                        <li>Investment potential.</li>
                                                                                        <li>Creator's popularity.</li>
                                                                                        <li>Asset's uniqueness.</li>
                                                                                </ul>
                                                                        </div>
                                                                </p>
                                                        </div>
                                                )}
                                        </div>
                                        <div className="border border-gray-300 rounded mb-2">
                                                <button
                                                        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                                                        onClick={() => toggleAccordion('panel3')}
                                                >
                                                        <span className="accordion_header">Why choose ApexDv for NFT Development?</span>
                                                        <svg className={`w-6 h-6 transition-transform ${expandedAccordion === 'panel3' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                </button>
                                                {expandedAccordion === 'panel3' && (
                                                        <div className="p-4 bg-white border-t">
                                                                <p>
                                                                        It enables you to operate several platforms that need many tokens quickly. Not just that, you smoothly handle the collectibles alongside the blockchain network.
                                                                </p>
                                                        </div>
                                                )}
                                        </div>
                                        <div className="border border-gray-300 rounded mb-2">
                                                <button
                                                        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                                                        onClick={() => toggleAccordion('panel4')}
                                                >
                                                        <span className="accordion_header">Does Innowise Group develop whitelabel NFT marketplace solutions?</span>
                                                        <svg className={`w-6 h-6 transition-transform ${expandedAccordion === 'panel4' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                </button>
                                                {expandedAccordion === 'panel4' && (
                                                        <div className="p-4 bg-white border-t">
                                                                <p>
                                                                        ApexDv's software development specialists build whitelabel NFT marketplaces allowing our clients to provide their contractors with highly customizable solutions that can be easily and rapidly deployed.
                                                                </p>
                                                        </div>
                                                )}
                                        </div>

                                </div>
                        </div>
                        </div>
                        </>
        );
};

export default YourQuestionAnswer;
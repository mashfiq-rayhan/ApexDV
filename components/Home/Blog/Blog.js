import React from 'react'
import Link from 'next/link';

const Blog = () => {
  return (
    <div className="m-1.5 w-[98%]">
        <p className="text-center mt-15 text-[#1CAF83] text-2xl">___BLOG___</p>
        <h2 className="text-center mt-9 font-teko text-4xl">Read stories, tips, and our opinions on everything</h2>
        <h3 className="text-center mt-4 text-xl">Get updated with the latest trends in technology and know how your business can benefit from these technologies.</h3>
        <div className="p-2.5 lg:p-20 flex justify-center flex-col lg:flex-row">
            <div className="h-2/5 w-full lg:w-[35%] bg-gray-100 rounded-lg shadow overflow-hidden">
                <img className="m-3 h-[70%] w-[95%] mx-auto" src="/images/LandingPage/Blog/big.svg" alt="Blog" />
                <div className="p-4">
                    <h4 className="m-2.5 font-teko text-3xl">A Beginner's Guide on NFT and NFT Marketplace</h4>
                    <p className="m-2.5 font-rubik">
                    What Is An NFT?
An NFT, or non-fungible token, is a type of digital certificate that helps authenticate and establish the ownership of any given virtual asset. This is made possible with the help of blockchain technology. 
 <Link href="/"><a className="text-[#1CAF83] cursor-pointer">Read More</a></Link>
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col justify-evenly mt-2.5 lg:mt-0 ml-0 lg:ml-5">
                <div className="h-[45%] lg:h-[264px] w-full sm:w-1/2 lg:w-[610px] bg-gray-100 rounded-lg shadow overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <img className="m-4 h-[40%] w-[90%]" src="/images/LandingPage/Blog/sm1.svg" alt="Blog" />
                        <div className="p-4">
                            <h5 className="font-teko text-2xl"> Simple Guide to the Top 10 NFT Marketplaces</h5>
                            <p className="m-2.5 font-rubik">
                            While the majority of NFT marketplaces available in the industry are built on the Ethereum blockchain, the platforms mentioned below are built across other Layer-1 blockchains. <Link href="/"><a className="text-[#1CAF83] cursor-pointer">Read More</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[45%] lg:h-[264px] w-full sm:w-1/2 lg:w-[610px] bg-gray-100 rounded-lg shadow overflow-hidden mt-1.25 sm:mt-0">
                    <div className="flex flex-col lg:flex-row">
                        <img className="m-4 h-[40%] w-[90%]" src="/images/LandingPage/Blog/sm1.svg" alt="Blog" />
                        <div className="p-4">
                            <h5 className="font-teko text-2xl">How to Make Money with NFTs</h5>
                            <p className="m-2.5 font-rubik">Because an NFT's value isn't static, you can earn by buying an NFT and selling it for profit when it appreciates. Flipping NFTs is a common earning method: Buy low, sell high. A close eye on the market. <Link href="/"><a className="text-[#1CAF83] cursor-pointer">Read More</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog

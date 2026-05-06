import Link from "next/link";
import WhoWeAreCard from "../../Card/WhoWeAreCard/WhoWeAreCard";

function WhoWeAre() {
    const data = [
        {
            title: "NFT Marketplace Development",
            p: "We plan, design, develop and market your NFT Marketplace with profound strategy.",
            img: "/images/LandingPage/Who we are/1.svg",
            activeImg: "/images/LandingPage/Who we are/inactive.svg",
        },
        {
            title: "Web Design and Development:",
            p: " We don’t just build websites; we build websites that sell.",
            img: "/images/LandingPage/Who we are/2.svg",
            activeImg: "/images/LandingPage/Who we are/inactive-3.svg",
        },
        {
            title: "Exchange Wallet Development: ",
            p: "A leap of faith for your cryptocurrency. ",
            img: "/images/LandingPage/Who we are/3.svg",
            activeImg: "/images/LandingPage/Who we are/inactive-2.svg",
        },
        {
            title: "Blockchain Development:",
            p: "We craft the architecture of Blockchain Systems.",
            img: "/images/LandingPage/Who we are/4.svg",
            activeImg: "/images/LandingPage/Who we are/inactive-1.svg",
        }
    ]
    return (
        <div className="container pt-3 pb-5">
            <div className="row">
            <div className="green_abstract_right"></div>
            <div className="green_abstract_left"></div>
                <h1 className="text-center text-teko font-normal text-[32px] sm:text-[64px] leading-10 sm:leading-[63px] text-[#222429] mt-[60px]">Who we are</h1>
                <p className='text-center'>An outdated website means you”re not engaging your customers and driving sales. It’s time to get unstuck.</p>
                <div className="flex flex-wrap justify-evenly mt-16">
                    {
                        data.map((item, i) => {
                            return (
                                <WhoWeAreCard
                                    key={item.title}
                                    title={item.title}
                                    p={item.p}
                                    img={item.img}
                                    activeImg={item.activeImg}
                                />
                            )
                        })
                    }
                </div>
                <div className="text-center">
                    <Link href="/services">
                        <a className="btn-hero-secondary">Discover More</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;

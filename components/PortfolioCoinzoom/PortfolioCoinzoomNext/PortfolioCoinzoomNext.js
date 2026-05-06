import Link from 'next/link';

function PortfolioCoinzoomNext() {
    const nextDetailsHeader = {
        header: "We're also proud of",
    }
    const nextDetailsData = [
        {
            id: 1,
            title: "Project Galaxy ",
            subtitle: "Web",
            img: "images/Portfolio Details Coinzoom/Group 3249 1 1.svg",
            href: "https://galaxy.eco/",
            bg: "bg-[#292C3A]",
            radius: "rounded-br-[20px]"
        },
        {
            id: 2,
            title: "Paraswap",
            subtitle: "Web responsive",
            img: "images/Portfolio Details Coinzoom/image 424.svg",
            href: "https://www.paraswap.io/",
            bg: "bg-[#1933B8]",
            radius: "rounded-bl-[20px]"
        },
        {
            id: 3,
            title: "Horizon",
            subtitle: "Web",
            img: "images/Portfolio Details Coinzoom/Group 3246 2.svg",
            href: "https://horizenlabs.io/",
            bg: "bg-[#e36a36]",
            radius: "rounded-bl-[20px]"
        }
    ]
    return (
        <div className="NextDetailsPage">
            <div className="green_abstract_right"></div>
            <div className="green_abstract_left"></div>
            <div className='container'>
                <div className='NextDetails'>
                    <h2>
                        {nextDetailsHeader.header}
                    </h2>
                    <div className="nextDetailsData">
                        {
                            nextDetailsData.map((details, i) => {
                                return (
                                    <Link key={details.id} href={details.href} passHref={true}>
                                    <div className={`text-center p-[35px_20px] ${details.bg} ${details.radius} ${i === 1 ? 'pt-[35px] px-0 pb-0' : ''}`}>
                                        <h2 className="text-[56px] font-normal font-teko leading-[60px] text-center text-white cursor-pointer">{details.title}</h2>
                                        <p className="text-lg font-normal font-rubik leading-7 text-center text-[#e9e9ea] mb-[30px]">{details.subtitle}</p>
                                        <img src={details.img} alt="" className={`w-full cursor-pointer ${i === 1 ? 'rounded-bl-[20px]' : ''}`} />
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCoinzoomNext
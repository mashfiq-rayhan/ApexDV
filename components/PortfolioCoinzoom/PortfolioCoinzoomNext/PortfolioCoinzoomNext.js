import Link from 'next/link';
import styles from './PortfolioCoinzoomNext.module.css';

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
        },
        {
            id: 2,
            title: "Paraswap",
            subtitle: "Web responsive",
            img: "images/Portfolio Details Coinzoom/image 424.svg",
            href: "https://www.paraswap.io/",
        },
        {
            id: 3,
            title: "Horizon",
            subtitle: "Web",
            img: "images/Portfolio Details Coinzoom/Group 3246 2.svg",
            href: "https://horizenlabs.io/",
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
                                    <Link href={details.href} passHref={true}>
                                    <div className={styles.card}>
                                        <h2>{details.title}</h2>
                                        <p>{details.subtitle}</p>
                                        <img src={details.img} alt="" />
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
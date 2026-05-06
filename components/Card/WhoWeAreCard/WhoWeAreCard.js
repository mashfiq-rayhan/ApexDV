import Image from 'next/image';
import { useState } from 'react';

function WhoWeAreCard({ title, p, img, activeImg }) {
    const [active, setActive] = useState(false);
    return (
        <div
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            className="group flex flex-col items-start p-5 gap-5 isolate transition-all duration-500 w-[680px] h-[188px] mb-[45px] bg-[#fafafa] rounded-[10px] relative hover:bg-[#1caf83] hover:text-[#fafafa] hover:border hover:border-[#1caf83] max-sm:mx-5 max-sm:my-[30px] xl:w-[600px]"
        >
            <div className="absolute w-16 h-16 left-5 -top-[33px] bg-white rounded-[22px] flex-none order-2 flex-grow-0 z-[2] text-center pt-1
                after:content-[''] after:absolute after:w-16 after:h-16 after:left-0 after:bottom-[-12px] after:bg-center after:bg-no-repeat after:bg-[length:100%_100%] after:opacity-0 after:transition-opacity after:duration-500
                group-hover:after:opacity-100 group-hover:after:bg-[url('/images/LandingPage/Who_we_are/Vector_4.svg')]">
                <Image
                    src={active ? activeImg : img}
                    width={48}
                    height={48}
                    alt={title}
                />
            </div>
            <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] mt-[15px] group-hover:text-[#fafafa]">{title}</h6>
            <p>{p}</p>
        </div>
    )
}

export default WhoWeAreCard
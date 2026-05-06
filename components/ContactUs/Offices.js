import React from 'react';

const Offices = () => {
    const addressData = [
        {
            id: 1,
            name: "UK OFFICE",
            address: "71-75 Shelton Street, Covent Garden,",
            addr: " London, United Kingdom,",
            code: "WC2H 9JQ",
            email: "info@apexdv.com",
            number: "+447361608597"
        },
        {
            id: 2,
            name: "USA OFFICE",
            address: "27 Colonial Village Shelton, ",
            addr: "Connecticut,",
            code: "06484",
            email: "info@apexdv.com",
            number: "+1203-892-6285"
        },
        {
            id: 3,
            name: "BD OFFICE",
            address: "2 Lalbag Road, Suite 6  ",
            addr: "East Kamrangirchar,",
            code: "Dhaka-1211",
            email: "info@apexdv.com",
            number: "+8801964288131"
        }
    ]

    return (
        <div className='container p-5 pt-0'>
            <div >
                <h1 className="font-teko font-normal text-[64px] leading-10 text-center text-[#222429] bg-white py-2 mt-[100px] mb-[50px] max-sm:text-5xl" >OFFICES NEAR YOU .</h1>
                <div className="grid grid-cols-3 mt-[30px] gap-10 px-[300px] max-sm:grid-cols-1 max-sm:gap-[30px] max-sm:px-0 md:grid-cols-3 md:gap-5 md:px-0 lg:grid-cols-3 lg:gap-10 lg:px-0 xl:px-[100px]">
                    {
                        addressData.map((item, i) => (
                            <div key={item.id} className="p-10 transition-all duration-[0.4s] linear rounded-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] hover:bg-[#1caf83] hover:rounded-[10px] [&:hover_h1]:text-white [&:hover_p]:text-white">
                                <h1 className="font-teko text-2xl mb-[15px]">{item.name}</h1>
                                <p className="font-rubik font-normal text-base leading-7 text-[#222429]">{item.address}</p>
                                <p className="font-rubik font-normal text-base leading-7 text-[#222429]">{item.addr}</p>
                                <p className="font-rubik font-normal text-base leading-7 text-[#222429]">{item.code}</p>
                                <p className="font-rubik font-normal text-base leading-7 text-[#222429]">{item.email}</p>
                                <p className="font-rubik font-normal text-base leading-7 text-[#222429]">{item.number}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Offices;
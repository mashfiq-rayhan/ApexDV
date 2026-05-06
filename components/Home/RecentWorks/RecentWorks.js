import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const RecentWorks = (props) => {
  const router = useRouter();

  const tabData = [
    { 
      icon: '/images/LandingPage/RecentWorks/apexdv.svg',
      activeIcon: '/images/LandingPage/RecentWorks/apexdvactv.svg',
      label: 'All Works'
    },
    { 
      icon: '/images/LandingPage/RecentWorks/website.svg',
      activeIcon: '/images/LandingPage/RecentWorks/websiteactv.svg',
      label: 'Website'
    },
    { 
      icon: '/images/LandingPage/RecentWorks/app.svg',
      activeIcon: '/images/LandingPage/RecentWorks/appactv.svg',
      label: 'Mobile App'
    },
    { 
      icon: '/images/LandingPage/RecentWorks/software.svg',
      activeIcon: '/images/LandingPage/RecentWorks/softwareactv.svg',
      label: 'Software Development'
    }
  ];

  const [active, setActive] = useState('All Works');

  const allWorks = ['aota','coinzoom','cryptominium','enjin','galaxy','homebase','horizen','impostors','luna','paraswap','paritex'];
  const website = ['galaxy','homebase','horizen','impostors','luna','paraswap','paritex','aota','coinzoom','cryptominium','enjin'];
  const apps = ['enjin','galaxy','homebase','aota','coinzoom','cryptominium','horizen','impostors','luna','paraswap','paritex'];
  const softwares = ['homebase','horizen','impostors','aota','coinzoom','cryptominium','enjin','galaxy','luna','paraswap','paritex'];

  const handleChange = (label) => {
    setActive(label);
  }

  useEffect(() => {
    const element = document.getElementById("imgWrappper");
    if (element) {
      element.scrollBy(5700, 0);
    }
  }, []);

  const handleNavigation = (work) => {
    const routes = {
      'aota': '/portfolio-aota',
      'coinzoom': '/portfolio-coinzoom',
      'cryptominium': '/portfolio-cryptominium',
      'enjin': '/portfolio-enjin',
      'galaxy': '/portfolio-galaxy',
      'homebase': '/portfolio-homebase',
      'horizen': '/portfolio-horizen',
      'impostors': '/portfolio-impostors',
      'luna': '/portfolio-luna',
      'paraswap': '/portfolio-paraswap',
      'paritex': '/portfolio-paritex'
    };
    router.push(routes[work] || '/');
  };

  const getActiveItems = () => {
    switch(active) {
      case 'Website': return website;
      case 'Mobile App': return apps;
      case 'Software Development': return softwares;
      default: return allWorks;
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-around items-center py-12 px-6 md:px-24">
        <div className="mb-8">
          <h2 className="py-7 text-center text-3xl md:text-5xl lg:text-6xl font-normal leading-10 md:leading-[64px]" style={{ fontFamily: 'Teko' }}>
            Recent Works
          </h2>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-row overflow-x-auto max-w-full md:max-w-none">
          <div className="flex gap-2 border-b-2 border-gray-200 min-w-max">
            {tabData.map(({ icon, activeIcon, label }) => (
              <button
                key={label}
                onClick={() => handleChange(label)}
                className={`text-[#7A7C7F] flex items-center gap-2 px-4 py-3 border-b-2 transition-all ${
                  active === label 
                    ? 'border-[#1CAF83] text-[#1CAF83]' 
                    : 'border-transparent hover:text-[#1CAF83]'
                }`}
              >
                <img 
                  src={active === label ? activeIcon : icon} 
                  alt={label} 
                  className="w-6 h-6" 
                />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Images */}
      <div className="container-fluid">
        <div className="row">
          <div id='imgWrappper' className="overflow-auto whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:block [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-[150px] [&::-webkit-scrollbar]:bg-white [&::-webkit-scrollbar-track]:rounded-[5px] [&::-webkit-scrollbar-thumb]:rounded-[5px] [&::-webkit-scrollbar-thumb]:bg-[#1caf83] [&::-webkit-scrollbar-thumb:hover]:bg-[#1caf83]">
            {getActiveItems().map(item => (
              <div 
                key={item} 
                className="p-8 inline-block cursor-pointer" 
                onClick={() => handleNavigation(item)}
              >
                <Image
                  src={`/images/LandingPage/RecentWorks/portfolios/${item}.png`}
                  alt={item}
                  width={500}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Portfolio Button */}
      <div className="flex justify-around items-center py-12 px-6 md:px-24">
        <div className="mt-16">
          <button className="group relative w-[175px] h-[30px] text-base bg-transparent border-none text-[#1caf83] cursor-pointer z-[1] px-5 py-2.5 flex items-center justify-center whitespace-nowrap select-none touch-manipulation rounded-[25px]
            before:content-[''] before:absolute before:bottom-0 before:right-0 before:-z-[99999] before:transition-all before:duration-400 before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:border before:border-[#1caf83] before:rounded-[25px]
            after:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-[99999] after:transition-all after:duration-400 after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.4)_100%)] after:backdrop-blur-[5px] after:rounded-[50px]
            hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83] hover:before:rounded-[25px]
            hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-[102%] hover:after:h-full hover:after:rounded-[25px]
            active:after:transition-none active:after:translate-y-[5%] active:after:rounded-[25px]">
            <a href="/portfolio" className="text-[#1caf83] group-hover:text-white">View Our Portfolio</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentWorks;

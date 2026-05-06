import Image from 'next/image';

function LeastestWork() {
  return (
    <div className="relative">
      <div className="absolute right-[0.62%] top-[16%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="absolute left-[0.14%] top-[44.33%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className='container p-5'>
        <div className="md:columns-2 sm:columns-1">
          <div className="h-[500px] flex flex-col justify-center py-[50px]">
            <h1 className="font-teko font-normal text-[56px] leading-[60px] text-black">Check out our latest work</h1>
            <p className="font-rubik font-normal text-lg leading-7 text-[#383a3e] py-[15px]">We always deliver projects on time and never disappoint our customers. We envision their ideas and bring them to reality. </p>
            <button className="w-[120px] h-[30px] text-base bg-transparent border-none relative text-[#1caf83] cursor-pointer z-[1] px-5 py-2.5 flex items-center justify-center whitespace-nowrap select-none touch-manipulation before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-400 before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px] hover:before:translate-x-[5%] hover:before:translate-y-[5%] after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-400 after:translate-x-0 after:translate-y-0 after:w-full after:h-full after:rounded-[50px] hover:after:-translate-x-[5%] hover:after:-translate-y-[5%] hover:after:bg-[#1caf83] hover:text-white">
              <a href="/portfolio">View Our Portfolio</a>
            </button>
          </div>
          <div className="text-center">
            <Image
              src={'/images/AboutUs/Group 3276.svg'}
              width={450}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeastestWork
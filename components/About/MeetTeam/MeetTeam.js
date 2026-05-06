import Image from 'next/image';

function MeetTeam() {
  return (
    <div className="relative">
      <div className="container p-5">
     <div className="absolute right-[8%] top-[69%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
                <div className="absolute left-[8%] top-[44.33%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <h1 className="font-teko font-normal text-[32px] leading-10 sm:text-[56px] sm:leading-[60px] text-center text-[#222429] mb-5 sm:mb-0">Meet the expert team of ApexDv specializing in various fields</h1>
      <p className="font-rubik font-normal text-lg leading-7 text-center text-[#383a3e]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10'>
        <div>
          <div className="card ml-auto mb-5 p-2 shadow-[0px_4px_10px_rgba(0,0,0,0.09)] rounded-[10px] h-[446px] w-[327px]">
            <Image
              src={'/images/AboutUs/image 461.svg'}
              width={320}
              height={350}
            />
            <div className="flex flex-row p-5">
              <div>
                <h1 className="font-teko font-normal text-xl leading-[29px] text-[#222429]">KAWSAR AHMED</h1>
                <h2 className="font-teko font-normal text-base leading-[23px] text-[#383a3e]">FOUNDER & CEO</h2>
              </div>
              <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                 
                    <a href="https://www.facebook.com/kawsarahmmedr"> <i class="fa-brands fa-facebook mr-3 text-3xl"></i></a>
                    <a href="https://www.linkedin.com/in/kawsar-ahmmedr/"><i class="fa-brands fa-linkedin text-3xl"></i></a>
                
              </div>
            </div>
          </div>
          {/* another one */}
          <div className="card ml-auto col-span-2 p-2 shadow-[0px_4px_10px_rgba(0,0,0,0.09)] rounded-[10px] max-w-[433px] h-[360px]">
            <Image
              src={'/images/AboutUs/image 464.svg'}
              width={520}
              height={300}
            />
            <div className="flex flex-row p-5">
              <div>
                <h1 className="font-teko font-normal text-xl leading-[29px] text-[#222429]">JACOB FLORES</h1>
                <h2 className="font-teko font-normal text-base leading-[23px] text-[#383a3e]">CLIENTS PARTNER</h2>
              </div>
              <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                <i class="fa-brands fa-facebook mr-3 text-3xl"></i>
                <i class="fa-brands fa-linkedin text-3xl"></i>
              </div>
            </div>
          </div>
          {/* another one */}
        </div>
        <div>
          <div className="card col-span-2 p-2 shadow-[0px_4px_10px_rgba(0,0,0,0.09)] rounded-[10px] max-w-[433px] h-[360px]">
            <Image
              src={'/images/AboutUs/image 462.svg'}
              width={520}
              height={300}
            />
            <div className="flex flex-row p-5">
              <div>
                <h1 className="font-teko font-normal text-xl leading-[29px] text-[#222429]">TAUSIR KHAN</h1>
                <h2 className="font-teko font-normal text-base leading-[23px] text-[#383a3e]">CTO & PROJECT MANAGER</h2>
              </div>
                <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                  <a href="https://www.facebook.com/tausirk"><i class="fa-brands fa-facebook mr-3 text-3xl"></i></a>
                <a href="https://www.linkedin.com/in/tausir-khan-b0577114b/"><i class="fa-brands fa-linkedin text-3xl"></i></a>
                
              </div>
            </div>
          </div>
          {/* another one */}
          <div className="card p-2 mt-5 shadow-[0px_4px_10px_rgba(0,0,0,0.09)] rounded-[10px] h-[446px] w-[327px]">
            <Image
              src={'/images/AboutUs/image 463.svg'}
              width={320}
              height={350}
            />
            <div className="flex flex-row p-5">
              <div>
                <h1 className="font-teko font-normal text-xl leading-[29px] text-[#222429]">SYED MONZURUL AHSAN</h1>
                <h2 className="font-teko font-normal text-base leading-[23px] text-[#383a3e]">TEAM LEAD & DEVOPS ENGINEER</h2>
              </div>
              <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                <a href="https://www.facebook.com/ayon.ahsan/"> <i class="fa-brands fa-facebook mr-3 text-3xl"></i></a>
               <a href="https://www.linkedin.com/in/syed-monzurul-ahsan-1628ab131/"> <i class="fa-brands fa-linkedin text-3xl"></i></a>
               
              </div>
            </div>
          </div>
          {/* another one */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default MeetTeam
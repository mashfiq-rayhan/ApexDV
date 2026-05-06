import React from 'react'

export default function Tech({source, desc}) {
  return (
    <div className="bg-white border border-[#e9e9ea] shadow-[-4px_-4px_0px_#1caf83] rounded-[7px]">
        <div className="flex flex-col justify-center items-center p-5"> 
            <img src={source}/>
            <p className="pt-4 font-rubik font-normal text-lg leading-7 text-center text-[#222429]">{desc}</p>
        </div>
    </div>
  )
}

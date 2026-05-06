

import React from 'react';

const WorkedOn = () => {

    const brands1 = ['Roblox', 'Farcry2', 'Trover', 'Gears', 'Birds'];
    const brands2 = ['Squad', 'Amazon', 'Enjin', 'Pixar'];
  return (
    <div className="flex flex-col justify-around items-center px-25 py-12.5" style={{backgroundColor: '#2F4DB6'}}>
        <h2 className="p-7.5 font-rubik font-bold text-white">Have Worked On</h2>
        <div className="flex flex-col md:flex-row">
            {brands1.map(brand => <img key={brand} className="p-7.5" alt={`${brand}`} src={`/images/Portfolio Details impostors/${brand}.svg`} />)}
        </div>
        <div className="flex flex-col md:flex-row">
            {brands2.map(brand => <img key={brand} className="p-7.5" alt={`${brand}`} src={`/images/Portfolio Details impostors/${brand}.svg`} />)}
        </div>
        
    </div>
  )
}

export default WorkedOn;
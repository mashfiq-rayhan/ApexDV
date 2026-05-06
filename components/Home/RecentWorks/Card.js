import React from 'react';

const Card = ({src}) => {
  return (
    <div className="w-[500px] h-[442px] mx-2.5 flex">
        <img src={src} alt='image' className="w-[99%] h-[442px]"/>
    </div>
  )
}

export default Card;
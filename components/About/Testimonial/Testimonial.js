import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './Testimonial.module.css';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className={`${ styles.testimonialWrapper }`}>
      <div className={`container`}>
        <Slider {...settings} className="testimonialSlider">
          <div >
            <div className={styles.TestimonialCard}>
              <h3>“They care about their customers and deliver the top notch services out there in the market.</h3>
              <div className="flex flex-row mt-5">
                <Image
                  src={'/images/AboutUs/image 344.svg'}
                  width={50}
                  height={50}
                />
                <div className='pl-3'>
                  <h2>Garett Johnson</h2>
                  <h3>CEO of ApexDv</h3>
                </div>
              </div>
            </div>
          </div>
          {/* another one */}
          <div >
            <div className={styles.TestimonialCard}>
              <h3>“Their developers are the most professional developers I have ever known and they always deliver on time.</h3>
              <div className="flex flex-row mt-5">
                <Image
                  src={'/images/AboutUs/image 344.svg'}
                  width={50}
                  height={50}
                />
                <div className='pl-3'>
                  <h2>Garcia Lopez </h2>
                  <h3>CEO of ApexDv</h3>
                </div>
              </div>
            </div>
          </div>
          {/* another one */}
          <div >
            <div className={styles.TestimonialCard}>
              <h3>“Trust me these guys are really apex in their developments. They are really fast and deliver projects within the committed timeline. </h3>
              <div className="flex flex-row mt-5">
                <Image
                  src={'/images/AboutUs/image 344.svg'}
                  width={50}
                  height={50}
                />
                <div className='pl-3'>
                  <h2>Harman Aribas</h2>
                  <h3>CEO of ApexDv</h3>
                </div>
              </div>
            </div>
          </div>
          {/* another one */}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
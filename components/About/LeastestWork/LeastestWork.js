import Image from 'next/image';
import React from 'react';
import styles from './LeastestWork.module.css';

function LeastestWork() {
  return (
    <div className={styles.LeastestWork}>
      <div className={styles.green_abstract_right}></div>
      <div className={styles.green_abstract_left}></div>
      <div className='container p-5'>
        <div className="md:columns-2 sm:columns-1">
          <div className={styles.leatestWorkText}>
            <h1>Check out our latest work</h1>
            <p>We always deliver projects on time and never disappoint our customers. We envision their ideas and bring them to reality. </p>
            <button className={styles.button2} >
              <a href="/portfolio">View Our Portfolio</a>
            </button>
          </div>
          <div className={styles.leatestWorkImage}>
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
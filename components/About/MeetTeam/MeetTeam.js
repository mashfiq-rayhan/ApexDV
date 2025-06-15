import Image from 'next/image';
import React from 'react';
import styles from './MeetTeam.module.css';

function MeetTeam() {
  return (
    <div className={styles.meetTeam} >
      <div className="container p-5">
     <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
      <h1 className={styles.title}>Meet the expert team of ApexDv specializing in various fields</h1>
      <p className={styles.des}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10'>
        <div>
          <div className={`card ml-auto mb-5 p-2 ${ styles.teamMemberWrapperFirst }`}>
            <Image
              src={'/images/AboutUs/image 461.svg'}
              width={320}
              height={350}
            />
            <div className="flex flex-row p-5">
              <div className={styles.memberDetails}>
                <h1>KAWSAR AHMED</h1>
                <h2>FOUNDER & CEO</h2>
              </div>
              <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                 
                    <a href="https://www.facebook.com/kawsarahmmedr"> <i class="fa-brands fa-facebook mr-3 text-3xl"></i></a>
                    <a href="https://www.linkedin.com/in/kawsar-ahmmedr/"><i class="fa-brands fa-linkedin text-3xl"></i></a>
                
              </div>
            </div>
          </div>
          {/* another one */}
          <div className={`card ml-auto col-span-2 p-2 ${ styles.teamMemberWrapperThird } {styles.right}`}>
            <Image
              src={'/images/AboutUs/image 464.svg'}
              width={520}
              height={300}
            />
            <div className="flex flex-row p-5">
              <div className={styles.memberDetails}>
                <h1>JACOB FLORES</h1>
                <h2>CLIENTS PARTNER</h2>
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
          <div className={`card col-span-2 p-2 ${ styles.teamMemberWrapperSecound } {styles.right}`}>
            <Image
              src={'/images/AboutUs/image 462.svg'}
              width={520}
              height={300}
            />
            <div className="flex flex-row p-5">
              <div className={styles.memberDetails}>
                <h1>TAUSIR KHAN</h1>
                <h2>CTO & PROJECT MANAGER</h2>
              </div>
                <div className="flex flex-row flex-1 text-end justify-end align-middle w-100">
                  <a href="https://www.facebook.com/tausirk"><i class="fa-brands fa-facebook mr-3 text-3xl"></i></a>
                <a href="https://www.linkedin.com/in/tausir-khan-b0577114b/"><i class="fa-brands fa-linkedin text-3xl"></i></a>
                
              </div>
            </div>
          </div>
          {/* another one */}
          <div className={`card p-2 mt-5 ${ styles.teamMemberWrapperLast }`}>
            <Image
              src={'/images/AboutUs/image 463.svg'}
              width={320}
              height={350}
            />
            <div className="flex flex-row p-5">
              <div className={styles.memberDetails}>
                <h1>SYED MONZURUL AHSAN</h1>
                <h2>TEAM LEAD & DEVOPS ENGINEER</h2>
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
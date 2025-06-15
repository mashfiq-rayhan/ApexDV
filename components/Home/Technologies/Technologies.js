import Image from 'next/image';
import { useState } from 'react';
import styles from './Technologies.module.css';

function Technologies() {
  const [activeTech, setActiveTech] = useState(1);

  const techData = [
    {
      id: 1,
      img: '/images/LandingPage/Technologies we work with/image 455.svg',
      name: "NFT Development",
      icon: '/images/LandingPage/Technologies we work with/icon-1.svg',
      activeIcon: '/images/LandingPage/Technologies we work with/icon-1-active.svg',
      data: [
        {
          icon: "/images/LandingPage/Technologies we work with/im1.svg",
          title: "In-Divisible",
          description: "NFTs hold distinct characteristics. They aren't exchangeable with any other token and further can't be divided into a small partition."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/im2.svg",
          title: "Non-exchangeable",
          description: "Non-fungible tokens are non-exchangeable. They carry unique specifications of virtual assets that make them irreplaceable."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/im3.svg",
          title: "Scalability",
          description: "Non-fungible tokens are highly scalable. Almost anything, either an art form or commercial document, can be converted into NFTs."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/im4.svg",
          title: "Scarcity",
          description: "NFTs come with maximum scarcity. A restricted number of item creations are valued more and encourage people to invest more."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/im5.svg",
          title: "Automated Listing",
          description: "Once your project is formed and you receive the NFTs for your artwork, they further get automatically listed on the marketplace."
        },
      ]
    },
    {
      id: 2,
      img: '/images/LandingPage/Technologies we work with/XMLID_34_.svg',
      name: "Front End",
      icon: '/images/LandingPage/Technologies we work with/icon-2.svg',
      activeIcon: '/images/LandingPage/Technologies we work with/icon-2-active.svg',
      data: [
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/image 480.svg",
          title: "iOS",
          description: " Our iOS app developers utilize a comprehensive approach to app development taking into account analysis of the business requirements, design look and feel, user experience and app functionality."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/image 481.svg",
          title: "Android",
          description: "Our Android app developers utilize a comprehensive approach to app development taking into account analysis of the business requirements, design look and feel, user experience and app functionality."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/image 482.svg",
          title: "Flutter",
          description: "ApexDv is a professional development agency to build your app. Flutter technology provides apps with native feel for half as much effort."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/image 483.svg",
          title: "React",
          description: "Create highly–performant websites and web applications with the help of ReactJS development services."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/image 444.svg",
          title: "Python",
          description: "Powerful Python development for scalable and reliable enterprise applications."
        },
      ]
    },
    {
      id: 3,
      img: '/images/LandingPage/Technologies we work with/image 455-1.svg',
      name: "Blockchain",
      icon: '/images/LandingPage/Technologies we work with/icon-3.svg',
      activeIcon: '/images/LandingPage/Technologies we work with/icon-3-active.svg',
      text: "ApexDv is the software engineering pioneer of the blockchain space. Our full-stack Blockchain developers build next-generation networks and enable enterprises to launch more dignified financial infrastructure.",
      data: [
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Metaverse Development.svg",
          title: "Metaverse Development",
          description: "We create a metaverse platform for your target audience where everyone stays connected with 3D, virtual reality, and augmented reality technologies. We are ready to build proven designs that outshine your business from gaming to governance industries."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Core Blockchain Development.svg",
          title: "Core Blockchain Development",
          description: "You can leverage the advantage of endless business opportunities with our on demand blockchain technology. We ensure accelerating all your business transactions with secure, scalable, and interoperable decentralized solutions."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Enterprise Blockchain Consulting.svg",
          title: "Enterprise Blockchain Consulting",
          description: "We offer profound Enterprise blockchain consulting and development services at every step of the Blockchain adoption, helping you take your business to the next level. We build robust solutions that are highly secure and scalable. "
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/IoT Blockchain Development.svg",
          title: "IoT Blockchain Development",
          description: "Integrate your current IoT system with blockchain security. This feature lets you win the race of efficiency, speed, and security and protect your customers and business assets. "
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Ethereum Consulting.svg",
          title: "Ethereum Consulting",
          description: "Ethereum Blockchain builds powerful enterprise solutions and decentralized apps on an open-source platform. We will assist every step in offering scalable, robust, and feature-rich Dapps with the least possibility of downtime."
        },

        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Metaverse Store Development.svg",
          title: "Metaverse Store Development",
          description: "Move your eCommerce business into the Metaverse and provide your customers with never-been-before shopping experiences."
        },
      ]
    },
    {
      id: 4,
      img: '/images/LandingPage/Technologies we work with/image 455-2.svg',
      text: "Revolutionize your business with our smart contract development services for private, public and hybrid blockchains. With deep expertise in various smart contract programming languages, we help enterprises automate their operations, streamline workflow, and reduce the cost of key processes.",
      name: "Smart Contract Development",
      icon: '/images/LandingPage/Technologies we work with/icon-4.svg',
      activeIcon: '/images/LandingPage/Technologies we work with/icon-4-active.svg',
      data: [
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Benefits of Smart Contracts for Your Business.svg",
          title: "Benefits of Smart Contracts for Your Business",
          description: "Embrace the power of smart contracts to automate the execution of operations in your organization while benefiting from the following capabilities of the smart contracts"
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Automation.svg",
          title: "Automation",
          description: "Codes in our smart contracts are triggered automatically by an on-chain transaction, resulting in the immediate execution of the contract once the predetermined rules are met. The process eliminates the need for any escrow, paperwork and rectification of errors manually."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Trust and transparency.svg",
          title: "Trust and transparency",
          description: "With no third-party involved and the encrypted transactions recorded on a distributed ledger, our smart contracts ensure that the information is 100% authentic and no manipulation has been done for personal benefits. Only the participants can access the data and validate it for further process execution."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Savings.svg",
          title: "Savings",
          description: "We design the smart contracts to perform every operation automatically with no intervention of intermediaries, saving the cost of paying fees to these intermediaries and the time consumed for managing multiple roles in an organization."
        },
        {
          icon: "/images/LandingPage/Technologies we work with/Technologies/Security.svg",
          title: "Security",
          description: "Powered by the immutability of the blockchain, our smart contracts hold the potential to encrypt every transaction record, making it impossible for hackers to gain access. Every block is associated with the previous block, which means one has to modify the entire chain to change any block."
        },
      ]
    },
  ]
  return (
    <div className="container p-5">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 mb-10">
        <div className='flex flex-col justify-center'>
          <h1 className={styles.title}>Technologies we work with</h1>
          <p>{techData.find((item) => item.id === activeTech).text}</p>
        </div>
        <div className="text-center">
          <Image
            src={techData.find((item) => item.id === activeTech).img}
            width={602}
            height={402}
            className={styles.techImage}
          />
        </div>
      </div>
      <div className='grid md:grid-cols-12 sm:grid-cols-2 gap-10 mt-5'>
        <div className="md:col-span-3">
          {
            techData.map((item) => {
              return (
                <div
                  onClick={() => setActiveTech(item.id)}
                  key={item.id}
                  className={`${ styles.teckStack } ${ item.id === activeTech && styles.active }`}
                >
                  <Image
                    src={item.id === activeTech ? item.activeIcon : item.icon}
                    width={20}
                    height={20}
                  />
                  <h6 className='ml-2 mt-1'>{item.name}</h6>
                </div>
              )
            })
          }
          <button className={styles.button2} >
            <a href="#contactUs">Contact Us</a>
          </button>
        </div>
        <div className="md:col-span-9">
          <div className={styles.techDetails}>
            {
              techData.find((item) => item.id === activeTech).data.map((item) => {
                return (
                  <div className={`flex mb-5`}>
                    <div>
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <h1 className={styles.techName}>{item.title}</h1>
                      <p className={styles.techP}>{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
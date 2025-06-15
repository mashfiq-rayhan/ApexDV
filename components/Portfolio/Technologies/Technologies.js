import React from "react";
import Tech from "./Tech";
import styles from "./Technologies.module.css";

const tech = [
  {
    img: "/images/Portfolio/Portfolio/web3.svg",
    name: "Web3.js",
  },
  {
    img: "/images/Portfolio/Portfolio/haskell.svg",
    name: "Haskell",
  },
  {
    img: "/images/Portfolio/Portfolio/metamask.svg",
    name: "Metamask",
  },
  {
    img: "/images/Portfolio/Portfolio/nodejs.svg",
    name: "Node.js",
  },
  {
    img: "/images/Portfolio/Portfolio/python.svg",
    name: "Python",
  },
  {
    img: "/images/Portfolio/Portfolio/React.js.svg",
    name: "React.js",
  },
  {
    img: "/images/Portfolio/Portfolio/react_native.svg",
    name: "React Native",
  },
  {
    img: "/images/Portfolio/Portfolio/flutter.svg",
    name: "Flutter",
  },
  {
    img: "/images/Portfolio/Portfolio/typescript.svg",
    name: "Typescript",
  },
  {
    img: "/images/Portfolio/Portfolio/Solidity.svg",
    name: "Solidity",
  },
];

export default function Technology() {
  return (
    <div className={styles.technology}>
       <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
       <div className={`container p-5 ${styles.technologies_container}`}>
      <div className={styles.tech_item}>
        <p className={styles.tech_item_header}>
          Technologies we use for building this foundation
        </p>
      </div>
      <div className={styles.tech_container}>
        {tech.map((t) => (
          <div >
            <Tech source={t.img} desc={t.name}/>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}

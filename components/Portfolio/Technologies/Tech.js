import React from 'react'
import styles from './Tech.module.css'

export default function Tech({source, desc}) {
  return (
    <div className={styles.tech_item_container}>
        <div className={styles.tech_item}> 
            <img src={source}/>
            <p className={styles.tech_item_name}>{desc}</p>
        </div>
    </div>
  )
}

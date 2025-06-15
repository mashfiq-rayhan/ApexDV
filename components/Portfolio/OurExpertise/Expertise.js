import React from 'react';
import styles from './Expertise.module.css';

export default function Expertise({details}) {
    return (
        <div className={styles.expertise_container}>
            <p className={styles.expertise_title}>{details.title}</p>
            <p className={styles.expertise_description}>{details.description}</p>
        </div>
      );
}

import styles from './WhoWeAreCard.module.css';
import Image from 'next/image';
import { useState } from 'react';

function WhoWeAreCard({ title, p, img, activeImg }) {
    const [active, setActive] = useState(false);
    return (
        <div
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            className={styles.card}
        >
            <div className={styles.cardImg}>
                <div className={styles.border}></div>
                <Image
                    src={active ? activeImg : img}
                    width={48}
                    height={48}
                    alt={title}
                />
            </div>
            <h6>{title}</h6>
            <p>{p}</p>
        </div>
    )
}

export default WhoWeAreCard
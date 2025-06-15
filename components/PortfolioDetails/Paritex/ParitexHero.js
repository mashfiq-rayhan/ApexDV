import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from "./ParitexHero.module.css"

export default function ParitexHero() {
  return (
    <Grid container spacing={5} className={styles.hero_container}>
        <Grid item md={7} lg={7} sm={12}>
            <div className={styles.hero_image}>
                <img src="/images/PortfolioDetailsParitex/hero.svg"/>
            </div>
        </Grid>
        <Grid item md={5} lg={5} sm={12}>
        <div className={styles.hero_desc}>
            <h1 className={styles.hero_head}>Are You Ready to Trade With Bitcoin 24/7 on All Platforms?</h1>
            <p className={styles.hero_footer}>Download App Now, Buy/Sell Bitcoin Safely and Quickly</p>
            <button className={styles.button86} href="https://www.paritex.com/en">
                            <Link className="" href="https://www.paritex.com/en">
                                <a role="button">Explore site</a>
                            </Link>
                        </button>
        </div>
        </Grid>
    </Grid>
  )
}

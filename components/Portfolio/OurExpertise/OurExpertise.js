import { Grid } from "@mui/material";
import React from "react";
import Expertise from "./Expertise";
import styles from "./OurExpertise.module.css";

export default function OurExpertise() {
  return (
    <div className= {styles.ourExpertise}>
      <div className={styles.green_abstract_right}></div>
                <div className={styles.green_abstract_left}></div>
      <div className={`container p-5 ${styles.expertise_container}`}>
      
      <div className={styles.exp_item}>
        <p className={styles.exp_item_header}>Our Expertise</p>
      </div>
      <Grid container spacing={5} className={styles.expertise_details_container}>
        <Grid item lg={5.2} md={5.2} sm={12} xs ={12}>
          <Expertise
            details={{
              title: "Solidity",
              description:
                "First Cardano projects endorsed our interest in blockchain, so we fostered our expertise in a main decentralized technology - Ethereum.",
            }}
          />
        </Grid>
        <Grid item lg={5.2} md={5.2} sm={12} xs ={12}>
          <Expertise
            details={{
              title: "Plutus",
              description:
                "Our functional programming approach expressed in working with Haskell led us to Cardano infrastructure and Plutus smart contract ecosystem. Partnership with IOGS makes us one of the Plutus commercial use pioneers.",
            }}
          />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

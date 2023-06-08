"use client";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import VideoBG from "../VideoBG/VideoBG";
import HeaderSmall from "../HeaderSmall/headerSmall";
import styles from "./styles.module.css";
import { variantsHomePage } from "../../Variants/Variants";

const Header = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.headerWrapper}
        initial="hidden"
        animate="visible"
        // whileInView="visible"
      >
        <VideoBG opacity={0.1} />

        <motion.div className={styles.description} variants={variantsHomePage}>
          <p className={styles.headerTitle}>
            Cracking
            <br /> the Innovation Code<span className={styles.blank}>_</span>
          </p>
          <div className={styles.subTitle}>
            Dexola is a blockchain development
          </div>
          <div className={styles.subTitle}>
            consultancy, empowered by
            <div className={styles.logoTrinetix} />
          </div>
          <Image
            src="/line-63.svg"
            alt="Line"
            width={12}
            height={80}
            priority
          />
        </motion.div>

        <motion.p className={styles.ourAddress} variants={variantsHomePage}>
          210 Middleton st, Nashville Tennessee 37210, US
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;

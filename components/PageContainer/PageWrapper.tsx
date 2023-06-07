"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import ArrowGoBack from "../ArrowAnime/ArrowBack";

import styles from "./pageContainer.module.css";
// import { useMyContext } from '../../context/AppContext';

const PageContainer = ({
  title,
  link,
  id,
  children,
  isArrow = false,
}: {
  title: string;
  link?: string;
  id?: string;
  isArrow: boolean;
  children: JSX.Element | JSX.Element[];
}) => {
  // const { setIsHoveredLink } = useMyContext();
  const [isHovered, onHoverChange] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleMouseEnter = () => {
    onHoverChange(true);
    // setIsHoveredLink(true);
  };

  const handleMouseLeave = () => {
    onHoverChange(false);
    // setIsHoveredLink(false);
  };


  const variants = {
    hidden: {
      y: 500,
      opacity: 0,
      transition: {
        type: "tween",
      },
    },

    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: custom * 0.2,
      },
    }),
  };

  const custom2Variants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };

  return (
    // initial={false}
    <AnimatePresence >
      <motion.div
        className={styles.blockWrapper}
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        <div className={styles.sidebar}>
          <div className={styles.titleBlock}>
            {isArrow && (
              <button
                onClick={handleGoBack}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.btnGoBack}
              >
                <div className={styles.imageContainer}>
                  <AnimatePresence initial={false}>
                    <ArrowGoBack isHovered={isHovered} />
                  </AnimatePresence>
                </div>
              </button>
            )}

            <motion.p className={styles.title} variants={variants} custom={2}>
              {title}
            </motion.p>
          </div>
        </div>

        <motion.div
          custom={1}
          variants={custom2Variants}
          className={isHovered ? styles.contentBoxHover : styles.contentBox}
        >
          <motion.div variants={variants} custom={2}>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageContainer;

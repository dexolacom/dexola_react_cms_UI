"use client";

// import { useRouter } from "next/router";

import { useRouter } from "next/navigation";
import styles from "./pageContainer.module.css";
import st from "../commonStyles/commonStyles.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowGoBack from "../ArrowAnime/ArrowBack";

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
  const isLink = true;
  const [isHovered, onHoverChange] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleMouseEnter = () => {
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    onHoverChange(false);
  };

  return (
    <div className={styles.blockWrapper} id={id}>
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
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div
        className={
          isHovered ? `${styles.contentBoxHover}` : `${styles.contentBox}`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;

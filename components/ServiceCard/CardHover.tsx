"use client";

import { motion } from "framer-motion";

import { SERVICES_CONTENT_INF0 } from "../../constants/textConstants";
import { variants, variantsText } from "../../Variants/Variants";

import styles from "./serviceCard.module.css";

const CardHover = ({ title, color, hoveredId, id }: ICardHover) => {
  const cardHoverInfo = SERVICES_CONTENT_INF0[title];

  return (
    <motion.div
      key="card"
      initial="visible"
      animate={hoveredId === id ? "hidden" : "visible"}
      exit="visible"
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.list}>
        <div className={styles.descriptionBlock}>
          <div
            className={styles.colorMarker}
            style={{ backgroundColor: color ? color : "white" }}
          />
          <div className={styles.serviceDescription}>{title}</div>
        </div>
        <motion.ul
          variants={variantsText}
          initial="visible"
          animate={hoveredId === id ? "visible " : "hidden"}
          exit="visible"
        >
          <ul>
            {cardHoverInfo &&
              cardHoverInfo?.length > 0 &&
              cardHoverInfo.map((el) => (
                <li key={el.title} className={styles.listTitle}>
                  {el.title}
                </li>
              ))}
          </ul>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default CardHover;

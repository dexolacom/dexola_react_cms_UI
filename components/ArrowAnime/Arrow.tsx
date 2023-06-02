import { motion, AnimatePresence } from "framer-motion";
import { svgVariant, svgWrapper } from "../../Variants/Variants";

interface IProps {
  hoveredId: number | null | undefined;
  elenId: number;
}

const Arrow = ({ hoveredId, elenId }: IProps) => {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="3 0 27 26"
      fill="none"
      variants={svgWrapper}
      initial="initial"
      animate={{
        rotate: hoveredId === elenId ? -45 : 1,
        transition: {
          duration: 0.4,
          type: "tween",
          ease: "easeOut",
        },
      }}
    >
      <mask id="path-1-inside-1_293_33456" fill="white">
        <path d="M10.272 11.042L26.2718 10.958L26.3557 26.9578L10.356 27.0418L10.272 11.042Z" />
      </mask>
      <path
        d="M26.3557 26.9578L26.3636 28.4578L27.8636 28.4499L27.8557 26.9499L26.3557 26.9578ZM24.7718 10.9659L24.8558 26.9657L27.8557 26.9499L27.7717 10.9501L24.7718 10.9659ZM26.3479 25.4578L10.3481 25.5418L10.3638 28.5418L26.3636 28.4578L26.3479 25.4578Z"
        fill="white"
        mask="url(#path-1-inside-1_293_33456)"
      />

      {hoveredId === elenId && (
        <motion.path
          d="M25.3505 25.963L0.543457 1.41504"
          stroke="white"
          variants={svgVariant}
          initial="initial"
          animate="hover"
          exit="hoverEnd"
          key="not-hovered"
        />
      )}
      {hoveredId !== elenId && (
        <motion.path
          d="M25.3505 25.963L0.543457 1.41504"
          stroke="white"
          variants={svgVariant}
          initial="initial"
          animate="hoverEnd"
          exit="hoverEnd"
          key="not-hovered"
        />
      )}
    </motion.svg>
  );
};

export default Arrow;

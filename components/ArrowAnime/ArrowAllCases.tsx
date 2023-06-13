import { motion } from 'framer-motion';
import { svgVariantAllCases } from '../../Variants/Variants';

const ArrowAllCases = ({ hoveredCard, platformId }: IArrowAllCases) => {
  return (
    <motion.svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      variants={svgVariantAllCases}
      initial="initial"
      animate={hoveredCard === platformId ? 'separateVariant' : 'initial'}
    >
      <mask id="path-1-inside-1_325_12531" fill="white">
        <path d="M7.02051 7.70728H17.0205V17.7073H7.02051V7.70728Z" />
      </mask>
      <path
        d="M17.0205 7.70728H18.5205V6.20728H17.0205V7.70728ZM7.02051 9.20728H17.0205V6.20728H7.02051V9.20728ZM15.5205 7.70728V17.7073H18.5205V7.70728H15.5205Z"
        fill="white"
        mask="url(#path-1-inside-1_325_12531)"
      />
      <motion.path
        d="M16.0206 8.70728L1.36377 23.3641"
        stroke="white"
        strokeWidth="1.5"
      />

      {hoveredCard === platformId && (
        <motion.path
          strokeWidth="1.5"
          d="M16.0206 8.70728L1.36377 23.3641"
          stroke="white"
          variants={svgVariantAllCases}
          initial="initial"
          animate="hover"
          exit="hoverEnd"
          key="hovered"
        />
      )}
      {hoveredCard !== platformId && (
        <motion.path
          strokeWidth="1.5"
          d="M16.0206 8.70728L1.36377 23.3641"
          stroke="white"
          variants={svgVariantAllCases}
          initial="initial"
          animate="hoverEnd"
          exit="hoverEnd"
          key="hovered"
        />
      )}
    </motion.svg>
  );
};

export default ArrowAllCases;

//   animate={{
//     rotate: hoveredCard === platformId ? 45 : 1,
//     transition: {
//       duration: 0.2,
//       type: 'tween',
//       ease: 'easeOut',
//     },
//   }}

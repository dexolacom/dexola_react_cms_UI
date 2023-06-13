import { motion } from "framer-motion";
import { svgWrapperBack, svgVariantBack } from "../../Variants/Variants";

const ArrowGoBack = ({ isHovered }: { isHovered: boolean }) => {

  return (
    <motion.svg
      width="40"
      height="30"
      viewBox="0 -5 15 24"
      fill="none"
      variants={svgWrapperBack}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
    >
      <mask id="path-1-inside-1_275_6300" fill="white">
        <path d="M13.0554 12.9448L1.05592 13.0543L0.946416 1.05483L12.9459 0.945325L13.0554 12.9448Z" />
      </mask>
      <path
        d="M0.946416 1.05483L0.932728 -0.445107L-0.56721 -0.431419L-0.553522 1.06852L0.946416 1.05483ZM2.55586 13.0406L2.44635 1.04114L-0.553522 1.06852L-0.444017 13.068L2.55586 13.0406ZM0.960104 2.55477L12.9596 2.44526L12.9322 -0.554612L0.932728 -0.445107L0.960104 2.55477Z"
        fill="white"
        mask="url(#path-1-inside-1_275_6300)"
      />
      {isHovered && (
        <motion.path
          d="M1.81134 1.90403C1.81134 1.90403 13.7943 13.6702 23.7584 23.4541"
          stroke="white"
          variants={svgVariantBack}
          initial="initial"
          animate="hover"
          exit="hoverEnd"
          key="not-hovered"
          strokeWidth="1.5"
        />
      )}
      {!isHovered && (
        <motion.path
          d="M1.81134 1.90403C1.81134 1.90403 13.7943 13.6702 23.7584 23.4541"
          stroke="white"
          variants={svgVariantBack}
          initial="initial"
          animate="hoverEnd"
          exit="hoverEnd"
          key="not-hovered"
          strokeWidth="1.5"
        />
      )}
    </motion.svg>
  );
};

export default ArrowGoBack;

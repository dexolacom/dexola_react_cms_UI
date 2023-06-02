export const svgWrapper = {
  initial: {
    rotate: 0,
    transformOrigin: "left bottom",
  },
  hover: {
    rotate: -45,
    transformOrigin: "left bottom",
  },
};

export const svgVariant = {
  initial: {
    strokeDasharray: "70%",
    transition: { duration: 0.4 },
  },
  hover: {
    strokeDasharray: "100%",
    transition: { duration: 0.4 },
  },
  hoverEnd: {
    strokeDasharray: "70%",
    transition: { duration: 0.4 },
  },
};

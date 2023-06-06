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

// goBack Arrow variants

export const svgWrapperBack = {
  initial: {
    rotate: 0,
    x: 0,
  },
  hover: {
    rotate: -45,
    x: "-25px",
    transition: {
      duration: 0.2,
    },
  },
};

export const svgVariantBack = {
  initial: {
    strokeDasharray: "70%",
    transition: { duration: 0.2 },
  },
  hover: {
    strokeDasharray: "120%",
    transition: { duration: 0.2 },
  },
  hoverEnd: {
    strokeDasharray: "70%",
    transition: { duration: 0.2 },
  },
};
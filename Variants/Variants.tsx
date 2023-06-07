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

// ServiceCard variants

export const variants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 27,
      stiffness: 400,
    },
  },
  hidden: {
    y: -275,
    transition: {
      type: "spring",
      damping: 27,
      stiffness: 400,
    },
  },
};

export const variantsText = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const variantsImage = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
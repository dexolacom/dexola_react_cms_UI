// goBack Arrow variants

export const svgWrapperBack = {
  initial: {
    rotate: 0,
    x: 0,
  },
  hover: {
    rotate: -45,
    x: '-25px',
    transition: {
      duration: 0.2,
    },
  },
};

export const svgVariantBack = {
  initial: {
    strokeDasharray: '70%',
    transition: { duration: 0.2 },
  },
  hover: {
    strokeDasharray: '120%',
    transition: { duration: 0.2 },
  },
  hoverEnd: {
    strokeDasharray: '70%',
    transition: { duration: 0.2 },
  },
};

// ServiceCard variants

export const variants = {
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 27,
      stiffness: 400,
    },
  },
  hidden: {
    y: -275,
    transition: {
      type: 'spring',
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

// HomePage variants

export const variantsHomePage = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 1 } },
};

export const variantsHome = {
  hidden: {
    y: 500,
    opacity: 0,
    transition: {
      type: 'tween',
    },
  },

  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: custom * 0.2,
    },
  }),
};

export const custom2Variants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};
// All Cases Svg

export const svgVariantAllCases = {
  initial: {
    strokeDasharray: '50%',
    transition: { duration: 0.2 },
  },
  hover: {
    strokeDasharray: '90%',
    transition: { duration: 0.2 },
  },
  hoverEnd: {
    strokeDasharray: '50%',
    transition: { duration: 0.2 },
  },

  separateVariant: {
    rotate: 45,
    x: 5,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

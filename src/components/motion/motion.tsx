"use client";

const variantUpslide = {
  initial: { y: "50%", opacity: 0 },
  animate: (custom: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 * custom,
      ease: [0.37, 0, 0.63, 1],
    },
  }),
};

export { variantUpslide };

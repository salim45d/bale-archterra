export const motionTitle = {
  initial: { y: "100%" },
  animate: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.5,
      delay: 0.2 * 1,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

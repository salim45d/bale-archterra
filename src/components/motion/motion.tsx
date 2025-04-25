"use client";

import { HTMLMotionProps, motion } from "motion/react";
import React from "react";

type MotionDivProps = HTMLMotionProps<"div">;
type MotionH1Props = HTMLMotionProps<"h1">;
type MotionPProps = HTMLMotionProps<"p">;
type MotionImgProps = HTMLMotionProps<"img">;

const variantUpslide = {
  initial: { y: "100%", opacity: 0.3 },
  animate: (custom: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.2 * custom,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const variantOpacity = {
  initial: { opacity: 0, y: "10%" },
  animate: (custom: number) => ({
    y: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2 * custom,
    },
  }),
};

const variantOpacityX = {
  initial: { opacity: 0, x: "10%" },
  animate: (custom: number) => ({
    x: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2 * custom,
    },
  }),
};

const MotionDiv = React.forwardRef<HTMLHeadingElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

const MotionP = React.forwardRef<HTMLHeadingElement, MotionPProps>(
  function MotionP({ children, ...props }, ref) {
    return (
      <motion.p ref={ref} {...props}>
        {children}
      </motion.p>
    );
  }
);

const MotionImg = React.forwardRef<HTMLImageElement, MotionImgProps>(
  function MotionImg({ children, ...props }, ref) {
    return (
      <motion.img ref={ref} {...props}>
        {children}
      </motion.img>
    );
  }
);

export {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionImg,
  variantUpslide,
  variantOpacityX,
  variantOpacity,
};

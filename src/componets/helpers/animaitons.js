export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 1.50, 
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  export const scrollReveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.40 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.50,
      },
    },
  };
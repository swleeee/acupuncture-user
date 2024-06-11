import { useState, useEffect } from "react";

import { DEVICE_SIZE } from "@/constants";

export const useDevice = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return {
    isMobile: windowWidth < DEVICE_SIZE.TABLET,
    isTablet:
      windowWidth >= DEVICE_SIZE.TABLET && windowWidth < DEVICE_SIZE.LAPTOP,
    isLaptop: windowWidth >= DEVICE_SIZE.LAPTOP,
  };
};

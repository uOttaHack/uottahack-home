import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false); // Default to false

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   console.log(window);
      // Define media query and check if the device is mobile
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      // Update state on viewport resize
      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      // Cleanup on unmount
      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  return isMobile;
}

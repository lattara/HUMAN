import React, { useEffect, useState } from 'react'

export const useViewport = () => {
    const [width, setWidth] = useState(0);
    React.useEffect(() => {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return { width };
  }
  
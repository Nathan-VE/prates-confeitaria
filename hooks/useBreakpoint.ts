"use client";

import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Obtém o tamanho inicial da tela
    handleResize();

    // Observa alterações no tamanho da janela
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobile: width !== null && width < 768,
    isTablet: width !== null && width >= 768 && width < 1024,
    isDesktop: width !== null && width >= 1024,
  };
}
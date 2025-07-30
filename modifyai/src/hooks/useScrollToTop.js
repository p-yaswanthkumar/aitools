import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    
    // Also try after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
}; 
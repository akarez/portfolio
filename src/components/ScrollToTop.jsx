import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/blog') {
      const saved = sessionStorage.getItem('scroll-position');
      if (saved) {
        window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
        sessionStorage.removeItem('scroll-position');
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

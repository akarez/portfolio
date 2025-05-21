import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isBlogPostPage = pathname.startsWith('/blog/');
    if (isBlogPostPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const saved = sessionStorage.getItem('scroll-position');
      if (saved) {
        const y = parseInt(saved, 10);
        window.scrollTo({ top: y, behavior: 'instant' });
        sessionStorage.removeItem('scroll-position');
      }
    }
  }, [pathname]);

  return null;
}

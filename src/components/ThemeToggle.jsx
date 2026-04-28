import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md text-black dark:text-white transition-opacity hover:opacity-70"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

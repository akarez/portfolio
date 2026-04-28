import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import BlogPage from './pages/BlogPage';
import ResearchPage from './pages/ResearchPage';
import CanvasPage from './pages/CanvasPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/canvas" element={<CanvasPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

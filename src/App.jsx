import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
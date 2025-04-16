import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'

function App() {

  return (
    <div className='App'> 
      <NavBar />
      <Home />
      <About />
      <Research />
      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
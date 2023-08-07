import { useState, useEffect } from 'react';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Main from './sections/main/Main';
import Projects from './sections/projects/Projects';
import Cursor from './components/Cursor/Cursor';

function App() {
  // Get scroll value for header component

  const [scroll, setScroll] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset);
    });
    window.addEventListener('mousemove', (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    });
  });

  return (
    <>
      <Cursor coords={coords} />
      <div className="App">
        <Header scrolled={!!scroll} />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Main from './sections/main/Main';
import Projects from './sections/projects/Projects';

function App() {
  // Get scroll value for header component

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset);
    });
  });

  return (
    <div className="App">
      <Header scrolled={!!scroll} />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

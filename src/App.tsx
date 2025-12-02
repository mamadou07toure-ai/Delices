import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="reservation">
          <Reservation />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

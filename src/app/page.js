'use client'
// Assuming Dictaphone is a correctly implemented component in your project.
import Dictaphone from '@/components/Dictaphone';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Uncomment if Dictaphone is to be used */}
      {/* <Dictaphone /> */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="background.mp4" type="video/mp4" />
      </video>

      <header>
        <a href="#">
          <img src="no bg.png" alt="logo" className="logo" />
        </a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          <a href="/" className="nav-item" style={{ '--i': 0 }}>Home</a>
          <a href="/devices" className="nav-item" style={{ '--i': 1 }}>Connect your devices</a>
          <a href="/donate" className="nav-item" style={{ '--i': 2 }}>Donate</a>
          <a href="/contact" className="nav-item" style={{ '--i': 3 }}>Contact</a>
        </nav>
      </header>

      <section className="content">
        <h1>Jarvis here...</h1>
        <a href="#" className="btn light"></a> {/* If the button is intended to be visible, consider adding text or content inside */}
      </section>
    </>
  );
}

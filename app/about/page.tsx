"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./about.css";

function BrandMark() {
  return (
    <div className="brand-mark">
      <Image
        src="/nibble_story_logo.png"
        alt="The Nibble Story"
        width={65}
        height={65}
        className="brand-logo"
      />
    </div>
  );
}

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = ["Home", "Services", "Menus", "Gallery", "About", "Contact"];

  return (
    <main className="about-page">
      {/* Header */}
      <header className="about-header">
        {/* Navbar */}
        <nav className="about-navbar">
          <div className="about-navbar-content">
            <Link href="/" className="about-logo">
              <Image
                src="/nibble_story_logo.png"
                alt="The Nibble Story"
                width={60}
                height={60}
                className="about-logo-img"
              />
            </Link>
            <div className="about-nav-links">
              {navItems.map((item) => {
                if (item === "Home") {
                  return (
                    <Link key={item} href="/" className="about-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Menus") {
                  return (
                    <Link key={item} href="/menus" className="about-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Gallery") {
                  return (
                    <Link key={item} href="/gallery" className="about-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "About") {
                  return (
                    <Link key={item} href="/about" className="about-nav-link active">
                      {item}
                    </Link>
                  );
                }
                if (item === "Contact") {
                  return (
                    <Link
                      key={item}
                      href="/contact"
                      className="about-nav-link"
                    >
                      {item}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="about-nav-link"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <a href="/contact" className="about-book-now-btn">
              Book Now
            </a>
            <button
              className="about-burger-menu"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`about-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`about-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`about-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="about-mobile-menu-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Overlay */}
        <div className={`about-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="about-mobile-menu-content">
            {navItems.map((item) => {
              if (item === "Home") {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="about-mobile-menu-link"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Menus") {
                return (
                  <Link
                    key={item}
                    href="/menus"
                    className="about-mobile-menu-link"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Gallery") {
                return (
                  <Link
                    key={item}
                    href="/gallery"
                    className="about-mobile-menu-link"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "About") {
                return (
                  <Link
                    key={item}
                    href="/about"
                    className="about-mobile-menu-link active"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Contact") {
                return (
                  <Link
                    key={item}
                    href="/contact"
                    className="about-mobile-menu-link"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="about-mobile-menu-link"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              );
            })}
            <a href="/contact" className="about-mobile-book-now-btn" onClick={closeMenu}>
              Book Now
            </a>
          </div>
        </div>

        <div className="about-header-content">
          <h1>About Us</h1>
          <div className="about-divider" />
          <p className="about-subtitle">
            You host, we'll handle the rest.
          </p>
          <p className="about-description">
            At The Nibble Story, we curate exceptional catering experiences that bring people together and turn moments into memories.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-row">
            <div className="story-quote">
              <p className="quote-text">
                "Food is the beginning of a story worth telling."
              </p>
              <div className="quote-divider" />
              <p className="quote-author">THE NIBBLE STORY</p>
              <div className="quote-ornament" />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <div className="story-text-divider" />
              <p>
                At The Nibble Story, we create thoughtfully curated grazing tables designed for intimate gatherings and meaningful celebrations.
              </p>
              <p>
                Blending Indian flavors with a modern, global aesthetic, each spread is crafted using premium ingredients, refined flavor pairings, and an eye for detail. From bite-sized elements to complete table styling, every piece is intentionally designed to feel elevated yet effortless.
              </p>
              <p>
                Whether you're hosting at home or celebrating a special moment, our goal is to bring together food, presentation, and experience — so you can focus on your guests while we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"/>
                </svg>
              </div>
              <h3>Premium Ingredients</h3>
              <div className="feature-divider" />
              <p>We use only the finest, high-quality ingredients for exceptional taste.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8C18 8 8 18 8 32s10 24 24 24 24-10 24-24S46 8 32 8zm0 4c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-2 8v14l12 7 2-3-10-6V20z"/>
                </svg>
              </div>
              <h3>Thoughtful Curation</h3>
              <div className="feature-divider" />
              <p>Every menu is carefully curated to suit your occasion and preferences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8l8 16h16L40 36l8 16-16-8-16 8 8-16L8 24h16z"/>
                </svg>
              </div>
              <h3>Beautifully Presented</h3>
              <div className="feature-divider" />
              <p>Our grazing tables are designed to impress and create lasting memories.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8c-4 0-8 2-10 6l-14 24c-2 4 0 8 4 10l24 14c4 2 8 0 10-4l14-24c2-4 0-8-4-10L32 10c-1-1-1-2 0-2zm0 8l20 12-12 20-20-12z"/>
                </svg>
              </div>
              <h3>Customized for You</h3>
              <div className="feature-divider" />
              <p>From menus to styling, we tailor everything to make it uniquely yours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8C18 8 8 18 8 32s10 24 24 24 24-10 24-24S46 8 32 8zm0 4c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-4 12v16h16v-4H32V24z"/>
                </svg>
              </div>
              <h3>Seamless Experience</h3>
              <div className="feature-divider" />
              <p>We take care of everything so you can relax and enjoy your celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <div className="cta-badge-image">
              <Image
                src="/gallery/accepting_offers.png"
                alt="Accepting Orders"
                width={200}
                height={200}
                className="accepting-offers-img"
              />
            </div>
            <div className="cta-text-section">
              <h3>
                Let's create something<br />
                unforgettable together.
              </h3>
              <p>Get in touch to start planning your special event.</p>
              <a href="/contact" className="cta-inquire-btn">
                INQUIRE NOW
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <a href="tel:929-238-5263" className="cta-phone">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
              </svg>
              929-238-5263
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <div className="footer-social">
              <a href="https://instagram.com/thenibblestory" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.75 1.7 4.9 4.9.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.15 3.2-1.64 4.75-4.9 4.9-1.25.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-3.26-.15-4.75-1.7-4.9-4.9-.06-1.26-.07-1.64-.07-4.85s0-3.6.07-4.85c.15-3.2 1.64-4.75 4.9-4.9C8.4 2.2 8.8 2.2 12 2.2ZM12 0C8.74 0 8.33 0 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0 8.33 0 8.74 0 12s0 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.2-4.36-2.63-6.78-6.98-6.98C15.67 0 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/>
                </svg>
              </a>
              <a href="https://facebook.com/thenibblestory" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
                </svg>
              </a>
              <a href="mailto:thenibblestory@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2>Quick Links</h2>
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/menus">Menus</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Serving</h2>
            <p>New Jersey &amp; Surrounding Areas</p>
          </div>
          <div>
            <h2>Let&apos;s Connect</h2>
            <p>929-238-5263</p>
            <p>thenibblestory@gmail.com</p>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">© 2026 The Nibble Story. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./menus.css";

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

type MenuCategory = "small-bites" | "large-bites" | "meals" | "curries-sides" | "desserts" | "drinks";

const menuData = {
  smallBites: [
    "Avocado Chana Chaat",
    "Palak Paneer Swirls",
    "Bhatti Paneer Kulcha Bites",
    "Mexican Chaat Cups",
    "Assorted Crostinis",
    "Crudité Hummus Cups",
    "Thai Crunch Salad Cups",
    "Avocado Mango Bhel Cups",
    "Dahi Bhalla Bombs",
    "Chaat Papdi Board",
    "Achaari Aloo Puff Pockets",
    "Szechuan Paneer Sliders",
    "Deconstructed Samosa Cups",
    "Golgappa Station"
  ],
  largeBites: [
    "Alfredo Paneer Kathi Rolls",
    "Paneer Tikka Croissant",
    "Street Style Bun Chola",
    "The OG Vada Pav",
    "Crunchy Tikki Burger",
    "Thecha Aloo Wrap",
    "Classic Style Dabeli"
  ],
  meals: [
    "Pineapple Szechuan Fried Rice",
    "Makhni Penne Pasta",
    "Vegetable Lasagna",
    "Au Gratin with Garlic Bread",
    "Pav Bhaji",
    "Paneer Makhni Biryani",
    "Thai Red Curry"
  ],
  curries: [
    "Makhni Magic Daal",
    "Koyla Daal Dhaba",
    "Chole Gali Style",
    "Pind Di Kadhi",
    "Paneer Butter Bliss",
    "Kadahi Style Paneer",
    "Korma Royale",
    "Aachar - E - Aloo",
    "Methi Matar Malai"
  ],
  sides: [
    "Naan Kulcha Collective",
    "Ghar Ka Paratha",
    "Jeera Kissed Rice",
    "Shahi Kesar Pulav",
    "Minty Desi Raita"
  ],
  desserts: [
    "Berry Blossom Kheer",
    "Motichoor Rabdi Parfait",
    "Gulab Jamun Pudding",
    "Gajar Halwa Tarts",
    "Jalebi Rabdi Bowls",
    "Very Berry Trifle",
    "Mango Rasmalai Tiramisu"
  ],
  drinks: [
    "Bubbly Peach",
    "Blackberry Kala Khatta",
    "Sweet & Sour Mango",
    "Black Grape Shikanj"
  ]
};

export default function MenusPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCategory = (category: MenuCategory) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    <main className="menus-page">
      {/* Header */}
      <header className="menus-header">
        {/* Navbar */}
        <nav className="menus-navbar">
          <div className="menus-navbar-content">
            <Link href="/" className="menus-logo">
              <Image
                src="/nibble_story_logo.png"
                alt="The Nibble Story"
                width={60}
                height={60}
                className="menus-logo-img"
              />
            </Link>
            <div className="menus-nav-links">
              {navItems.map((item) => {
                if (item === "Home") {
                  return (
                    <Link key={item} href="/" className="menus-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Menus") {
                  return (
                    <Link key={item} href="/menus" className="menus-nav-link active">
                      {item}
                    </Link>
                  );
                }
                if (item === "Gallery") {
                  return (
                    <Link key={item} href="/gallery" className="menus-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Contact") {
                  return (
                    <Link
                      key={item}
                      href="/contact"
                      className="menus-nav-link"
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
                      className="menus-nav-link"
                    >
                      {item}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="menus-nav-link"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <a href="/contact" className="menus-book-now-btn">
              Book Now
            </a>
            <button
              className="menus-burger-menu"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`menus-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menus-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menus-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="menus-mobile-menu-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Overlay */}
        <div className={`menus-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="menus-mobile-menu-content">
            {navItems.map((item) => {
              if (item === "Home") {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="menus-mobile-menu-link"
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
                    className="menus-mobile-menu-link active"
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
                    className="menus-mobile-menu-link"
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
                    className="menus-mobile-menu-link"
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
                    className="menus-mobile-menu-link"
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
                  className="menus-mobile-menu-link"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              );
            })}
            <a href="/contact" className="menus-mobile-book-now-btn" onClick={closeMenu}>
              Book Now
            </a>
          </div>
        </div>

        <div className="menus-header-content">
          <h1>Menus</h1>
          <div className="menus-divider" />
          <p className="menus-subtitle">
            Curated Indian Fusion Menus crafted for celebrations worth remembering.
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="menu-categories">
        <div className="container">
          <div className="category-buttons">
            <button
              className={`category-btn ${activeCategory === "small-bites" ? "active" : ""}`}
              onClick={() => scrollToCategory("small-bites")}
            >
              <span>Small Bites</span>
            </button>
            <button
              className={`category-btn ${activeCategory === "large-bites" ? "active" : ""}`}
              onClick={() => scrollToCategory("large-bites")}
            >
              <span>Large Bites</span>
            </button>
            <button
              className={`category-btn ${activeCategory === "meals" ? "active" : ""}`}
              onClick={() => scrollToCategory("meals")}
            >
              <span>Meals</span>
            </button>
            <button
              className={`category-btn ${activeCategory === "curries-sides" ? "active" : ""}`}
              onClick={() => scrollToCategory("curries-sides")}
            >
              <span>Curries & Sides</span>
            </button>
            <button
              className={`category-btn ${activeCategory === "desserts" ? "active" : ""}`}
              onClick={() => scrollToCategory("desserts")}
            >
              <span>Desserts</span>
            </button>
            <button
              className={`category-btn ${activeCategory === "drinks" ? "active" : ""}`}
              onClick={() => scrollToCategory("drinks")}
            >
              <span>Drinks</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="menu-content">
        {/* Small Bites */}
        <section id="small-bites" className="menu-section">
          <div className="container">
            <div className="menu-row">
              <div className="menu-image">
                <Image
                  src="/gallery/chaat_corn.png"
                  alt="Small Bites"
                  fill
                  className="menu-img"
                />
              </div>
              <div className="menu-text">
                <h2>Small Bites</h2>
                <div className="menu-items">
                  <div className="menu-column">
                    {menuData.smallBites.slice(0, 7).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                  <div className="menu-column">
                    {menuData.smallBites.slice(7).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Bites */}
        <section id="large-bites" className="menu-section">
          <div className="container">
            <div className="menu-row">
              <div className="menu-text">
                <h2>Large Bites</h2>
                <div className="menu-items">
                  <div className="menu-column">
                    {menuData.largeBites.slice(0, 4).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                  <div className="menu-column">
                    {menuData.largeBites.slice(4).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="menu-image">
                <Image
                  src="/gallery/sliders_2.png"
                  alt="Large Bites"
                  fill
                  className="menu-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meals */}
        <section id="meals" className="menu-section">
          <div className="container">
            <div className="menu-row">
              <div className="menu-image">
                <Image
                  src="/gallery/biryani.png"
                  alt="Meals"
                  fill
                  className="menu-img"
                />
              </div>
              <div className="menu-text">
                <h2>Meals</h2>
                <div className="menu-items">
                  <div className="menu-column">
                    {menuData.meals.slice(0, 4).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                  <div className="menu-column">
                    {menuData.meals.slice(4).map((item, index) => (
                      <div key={index} className="menu-item">• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curries & Sides */}
        <section id="curries-sides" className="menu-section menu-section-split">
          <div className="container">
            <div className="menu-row">
              <div className="menu-text menu-text-double">
                <div className="menu-split-column">
                  <h2>Curries</h2>
                  <div className="menu-items">
                    <div className="menu-column">
                      {menuData.curries.map((item, index) => (
                        <div key={index} className="menu-item">• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="menu-split-column">
                  <h2>Sides</h2>
                  <div className="menu-items">
                    <div className="menu-column">
                      {menuData.sides.map((item, index) => (
                        <div key={index} className="menu-item">• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-image">
                <Image
                  src="/gallery/korma_royale.png"
                  alt="Curries and Sides"
                  fill
                  className="menu-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Desserts & Drinks */}
        <section id="desserts" className="menu-section">
          <div className="container">
            <div className="menu-row">
              <div className="menu-image">
                <Image
                  src="/gallery/multi_dessert.jpeg"
                  alt="Desserts"
                  fill
                  className="menu-img"
                />
              </div>
              <div className="menu-text menu-text-double">
                <div className="menu-split-column">
                  <h2>Desserts</h2>
                  <div className="menu-items">
                    <div className="menu-column">
                      {menuData.desserts.map((item, index) => (
                        <div key={index} className="menu-item">• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="menu-split-column" id="drinks">
                  <h2>Drinks</h2>
                  <div className="menu-items">
                    <div className="menu-column">
                      {menuData.drinks.map((item, index) => (
                        <div key={index} className="menu-item">• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="menu-cta">
          <div className="container">
            <div className="cta-content">
              <svg viewBox="0 0 64 64" className="cta-icon">
                <path d="M20 12h4v8h-4zm20 0h4v8h-4zM16 24h32v4H16zm4 8h24l-4 20H24l-4-20z"/>
              </svg>
              <div className="cta-text">
                <h3>Let&apos;s create a menu as special as your celebration.</h3>
                <p>Tell us about your event and our team will curate the perfect menu just for you.</p>
              </div>
              <a href="/contact" className="cta-button">Inquire Now</a>
            </div>
          </div>
        </section>
      </div>

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

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./gallery.css";

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

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string[];
  size: "large" | "medium" | "small";
};

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/setup_2.png",
    alt: "Elegant Setup",
    title: "Good food. Good mood.",
    description: "Great company",
    category: ["all", "setups"],
    size: "large",
  },
  {
    src: "/main_setup.png",
    alt: "Holi Festival Setup",
    title: "Holi Festival Setup",
    description: "Vibrant colors celebrating the festival of joy",
    category: ["all", "setups"],
    size: "large",
  },
  {
    src: "/gallery/chaat_corn.png",
    alt: "Chaat Counter",
    title: "Chaat Counter",
    description: "Bursting with flavours",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/paneer_sliders.png",
    alt: "Savory Bites",
    title: "Savory Bites",
    description: "Perfect bite, every time",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/multi_dessert.jpeg",
    alt: "Dessert Table",
    title: "Dessert Table",
    description: "Sweet endings to beautiful moments",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/chaat_dahi_bhalla.png",
    alt: "Dahi Bhalla Chaat",
    title: "Dahi Bhalla Chaat",
    description: "Soft lentil dumplings in creamy yogurt",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/chaat_setup.png",
    alt: "Chaat Spread",
    title: "Sip. Savor. Celebrate",
    description: "An evening to remember",
    category: ["all", "setups"],
    size: "medium",
  },
  {
    src: "/gallery/dessert_mango.png",
    alt: "Grazing Table",
    title: "Grazing Table",
    description: "Abundant flavors, beautifully arranged",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/chaat_gol_gappa.png",
    alt: "Gol Gappa Station",
    title: "Gol Gappa Station",
    description: "Interactive experience everyone loves",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/paneer_wrap.png",
    alt: "Paneer Wraps",
    title: "Wraps & Rolls",
    description: "Fresh and flavorful",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/idli.png",
    alt: "Mini Idli Bites",
    title: "Mini Idli Station",
    description: "South Indian favorites reimagined",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/dessert_jalebi.png",
    alt: "Jalebi Display",
    title: "Traditional Sweets",
    description: "Authentic flavors with modern presentation",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/dessert_rasmalai.png",
    alt: "Rasmalai Cups",
    title: "Rasmalai Delights",
    description: "Classic dessert in elegant portions",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/cup_setup_1.jpeg",
    alt: "Bhelpuri Chaat Cups",
    title: "Bhelpuri Chaat Cups",
    description: "Crunchy and tangy street food in elegant portions",
    category: ["all", "savory-bites", "setups"],
    size: "medium",
  },
  {
    src: "/gallery/cup_setup_2.jpeg",
    alt: "Savory Cups",
    title: "Savory Cups",
    description: "Perfectly portioned appetizers",
    category: ["all", "savory-bites", "setups"],
    size: "medium",
  },
  {
    src: "/gallery/paneer_naan.png",
    alt: "Naan Station",
    title: "Fresh Naan Station",
    description: "Made to order, served with love",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/sliders_2.png",
    alt: "Gourmet Sliders",
    title: "Signature Sliders",
    description: "Mini bites with maximum flavor",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/biryani.png",
    alt: "Biryani",
    title: "Fragrant Biryani",
    description: "Aromatic rice with perfect spices",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/dessert_tart.png",
    alt: "Fruit Tarts",
    title: "Artisan Tarts",
    description: "Fresh fruit meets buttery crust",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/dessert_mango_moose.png",
    alt: "Mango Mousse",
    title: "Mango Mousse",
    description: "Light, creamy, and refreshing",
    category: ["all", "desserts"],
    size: "medium",
  },
  {
    src: "/gallery/patty.png",
    alt: "Savory Patties",
    title: "Golden Patties",
    description: "Crispy outside, flavorful inside",
    category: ["all", "savory-bites"],
    size: "medium",
  },
  {
    src: "/gallery/setup_aligned.png",
    alt: "Elegant Table Setup",
    title: "Elegant Table Setup",
    description: "Perfectly aligned presentation for your celebration",
    category: ["all", "setups"],
    size: "medium",
  },
  {
    src: "/gallery/setup_home.png",
    alt: "Home Party Setup",
    title: "Home Party Setup",
    description: "Bringing the celebration to your home",
    category: ["all", "setups"],
    size: "medium",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "setups", label: "Setups" },
  { id: "savory-bites", label: "Savory Bites" },
  { id: "desserts", label: "Desserts" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredItems = galleryItems.filter((item) =>
    item.category.includes(activeFilter)
  );

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
    <main className="gallery-page">
      {/* Header */}
      <header className="gallery-header">
        {/* Navbar */}
        <nav className="gallery-navbar">
          <div className="gallery-navbar-content">
            <Link href="/" className="gallery-logo">
              <Image
                src="/nibble_story_logo.png"
                alt="The Nibble Story"
                width={60}
                height={60}
                className="gallery-logo-img"
              />
            </Link>
            <div className="gallery-nav-links">
              {navItems.map((item) => {
                if (item === "Home") {
                  return (
                    <Link key={item} href="/" className="gallery-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Menus") {
                  return (
                    <Link key={item} href="/menus" className="gallery-nav-link">
                      {item}
                    </Link>
                  );
                }
                if (item === "Gallery") {
                  return (
                    <Link key={item} href="/gallery" className="gallery-nav-link active">
                      {item}
                    </Link>
                  );
                }
                if (item === "Contact") {
                  return (
                    <Link
                      key={item}
                      href="/contact"
                      className="gallery-nav-link"
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
                      className="gallery-nav-link"
                    >
                      {item}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="gallery-nav-link"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <a href="/contact" className="gallery-book-now-btn">
              Inquire Now
            </a>
            <button
              className="gallery-burger-menu"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`gallery-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`gallery-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`gallery-burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="gallery-mobile-menu-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Overlay */}
        <div className={`gallery-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="gallery-mobile-menu-content">
            {navItems.map((item) => {
              if (item === "Home") {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="gallery-mobile-menu-link"
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
                    className="gallery-mobile-menu-link"
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
                    className="gallery-mobile-menu-link active"
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
                    className="gallery-mobile-menu-link"
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
                    className="gallery-mobile-menu-link"
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
                  className="gallery-mobile-menu-link"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              );
            })}
            <a href="/contact" className="gallery-mobile-book-now-btn" onClick={closeMenu}>
              Inquire Now
            </a>
          </div>
        </div>

        <div className="gallery-header-content">
          <p className="gallery-eyebrow">Catering &amp; Events</p>
          <h1>Gallery</h1>
          <div className="gallery-divider" />
          <p className="gallery-subtitle">
            A glimpse into celebrations we&apos;ve brought to life.
          </p>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="gallery-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-masonry">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`gallery-item gallery-item-${item.size}`}
              >
                <div className="gallery-item-inner">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery-item-image"
                  />
                </div>
              </div>
            ))}
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
            <p><a href="tel:929-238-5263">929-238-5263</a></p>
            <p><a href="mailto:thenibblestory@gmail.com">thenibblestory@gmail.com</a></p>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">© 2026 The Nibble Story. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

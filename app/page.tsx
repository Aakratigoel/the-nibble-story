"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import GalleryCarousel from "./gallery-carousel";

const navItems = ["Home", "Services", "Menus", "Gallery", "About", "Contact"];

const galleryImages = [
  {
    src: "/gallery/chaat_dahi_bhalla.png",
    alt: "Dahi bhalla chaat grazing table",
    title: "Dahi bhalla chaat",
    copy: "Layered classics served in elegant portions",
    icon: "savory_bite",
  },
  {
    src: "/gallery/chaat_setup.png",
    alt: "Chaat catering setup",
    title: "Grazing Tables",
    copy: "Beautifully curated spreads for every occasion",
    icon: "grazing_table",
  },
  {
    src: "/gallery/chaat_corn.png",
    alt: "Corn chaat appetizer cups",
    title: "Corn Chaat",
    copy: "Bright, savory bites with a playful finish",
    icon: "savory_bite",
  },
  {
    src: "/gallery/cup_setup_1.jpeg",
    alt: "Dessert cup setup",
    title: "Chaat Cups",
    copy: "Indulgent layers crafted to perfection",
    icon: "grazing_table",
  },
  {
    src: "/gallery/cup_setup_2.jpeg",
    alt: "Dessert cup display",
    title: "Savory Cups",
    copy: "Indulgent layers crafted to perfection",
    icon: "grazing_table",
  },
  {
    src: "/gallery/multi_dessert.jpeg",
    alt: "Assorted dessert cups",
    title: "Assorted Desserts",
    copy: "Colorful treats for memorable celebrations",
    icon: "cupcake",
  },
  {
    src: "/gallery/chaat_gol_gappa.png",
    alt: "Gol gappa chaat cups",
    title: "Golgappa Station",
    copy: "An interactive experience that delights all ages",
    icon: "station",
  },
  {
    src: "/gallery/idli.png",
    alt: "Mini idli appetizer display",
    title: "Mini Idli Bites",
    copy: "Soft, savory bites with flavorful chutneys",
    icon: "savory_bite",
  },
  {
    src: "/gallery/paneer_sliders.png",
    alt: "Paneer slider bites",
    title: "Signature Sliders",
    copy: "Mini bites with maximum flavour",
    icon: "slider",
  },
  {
    src: "/gallery/paneer_wrap.png",
    alt: "Paneer wrap grazing display",
    title: "Wraps & Rolls",
    copy: "Fresh, flavorful and perfectly handheld",
    icon: "savory_bite",
  },
];

const reasons = [
  {
    icon: "sparkle",
    title: "Curated",
    copy: "Every menu is designed from scratch",
  },
  {
    icon: "cloche",
    title: "Beautiful",
    copy: "Presentation-first catering",
  },
  {
    icon: "fusion",
    title: "Fusion",
    copy: "Indian flavors with modern creativity",
  },
  {
    icon: "heart",
    title: "Stress-Free",
    copy: "We handle everything so you can relax",
  },
];

const testimonials = [
  {
    quote: "Few people can create delicious food, and even fewer can present it so beautifully. Sakshi is a creative chef whose food is absolutely delicious. The thoughtful presentation of her grazing tables elevates the entire experience and makes the food even more enjoyable. More power to you, Sakshi! Wishing The Nibble Story continued success and many more memorable events ahead.",
    name: "Ruchi",
    event: "CLIENT",
    rating: 5,
  },
  {
    quote: "Nibble Story completely took the stress out of hosting. From shopping and cooking to beautifully setting up the meals, everything was handled seamlessly and with such care and attention to detail. It made entertaining so easy and enjoyable for us. Beyond the delicious food and lovely presentation, Sakshi is such a pleasant person to work with — professional, warm, and incredibly accommodating. I can't recommend Nibble Story highly enough for anyone looking to host effortlessly and truly enjoy their guests.",
    name: "Krishna M",
    event: "CLIENT",
    rating: 5,
  },
  {
    quote: "I recently had the pleasure of enjoying food catered by The Nibble Story at an event, and it was truly outstanding. Every dish was beautifully presented and packed with flavor. A special highlight was the tiramisu cups — my 7-year-old absolutely loved it and couldn't stop talking about how delicious it was. It was light, perfectly balanced, and the ideal ending to a wonderful meal. I thoroughly enjoyed every bite and would gladly recommend their catering services to anyone looking for delicious food and exceptional quality.",
    name: "Kanu Garg",
    event: "CLIENT",
    rating: 5,
  },
];

function BrandMark() {
  return (
    <Link href="/" className="brand-mark">
      <Image
        src="/nibble_story_logo.png"
        alt="The Nibble Story"
        width={60}
        height={60}
        priority
        className="brand-logo"
      />
    </Link>
  );
}

function Icon({ name }: { name: string }) {
  switch (name) {
    case "gift":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 7h-2.2A2.7 2.7 0 0 0 18 6a3 3 0 0 0-5.45-1.72L12 5l-.55-.72A3 3 0 0 0 6 6c0 .35.06.68.18 1H4a1 1 0 0 0-1 1v3h18V8a1 1 0 0 0-1-1ZM9 7a1 1 0 1 1 1-1c0 .55-.45 1-1 1Zm6 0a1 1 0 1 1 1-1c0 .55-.45 1-1 1ZM4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6H4Z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 2.8 2.88 5.84 6.45.94-4.67 4.55 1.1 6.42L12 17.52l-5.76 3.03 1.1-6.42-4.67-4.55 6.45-.94L12 2.8Z" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.8a6.8 6.8 0 0 0-6.8 6.8c0 5.1 6.8 11.6 6.8 11.6s6.8-6.5 6.8-11.6A6.8 6.8 0 0 0 12 2.8Zm0 9.2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
        </svg>
      );
    case "cloche":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 4h2v2a7 7 0 0 1 6.92 6.1H4.08A7 7 0 0 1 11 6V4Zm10 10v2H3v-2h18Zm-16 4h14v2H5v-2Z" />
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 3 4-2 4 2-2.1 3.4a7 7 0 1 1-3.8 0L8 3Zm4 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      );
    case "balloons":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 2a4 4 0 0 0-1 7.87V12l2 1.5L11 12V9.87A4 4 0 0 0 8 2Zm8 1a4 4 0 0 0-1 7.87V13l2 1.5 2-1.5v-2.13A4 4 0 0 0 16 3ZM9 15c.7 1.1 1 2.25.9 3.43-.1 1.06-.5 2.1-1.2 3.07h2.15c.55-.92.9-1.9 1-2.92.13-1.64-.3-3.18-1.3-4.58L9 15Zm7.8 1c.48.9.68 1.82.6 2.74-.07.94-.4 1.86-.95 2.76h2.2c.47-.82.74-1.68.81-2.6.1-1.4-.2-2.72-.95-3.9l-1.71 1Z" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 8h10v3H7V8Zm1-5h2v4H8V3Zm6 0h2v4h-2V3ZM5 12h14v8H5v-8Zm0 3c1 0 1.5.7 2.5.7S9 15 10 15s1.5.7 2.5.7S14 15 15 15s1.5.7 2.5.7S19 15 19 15v-2H5v2Z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5h6v2h5a1 1 0 0 1 1 1v4.5A23.2 23.2 0 0 1 12 14a23.2 23.2 0 0 1-9-1.5V8a1 1 0 0 1 1-1h5V5Zm2 0v2h2V5h-2ZM3 15a25.2 25.2 0 0 0 18 0v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z" />
        </svg>
      );
    case "diya":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2s3 3.2 3 6a3 3 0 0 1-6 0c0-2.8 3-6 3-6Zm8 10a8 8 0 0 1-16 0h16Zm-2.34 2H6.34A6 6 0 0 0 12 18a6 6 0 0 0 5.66-4ZM5 20h14v2H5v-2Z" />
        </svg>
      );
    case "cutlery":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h1v8H7V2Zm-3 0h1v8H4V2Zm6 0h1v8a4 4 0 0 1-3 3.87V22H6v-8.13A4 4 0 0 1 3 10h8a4 4 0 0 1-3 3.87V22h.02L8 13.87A4 4 0 0 1 5 10h5V2Zm7 0c2.2 1.5 3.5 4.3 3.5 8.4V22h-2v-7h-3V9c0-3.2.5-5.55 1.5-7Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 2 2.2 6.2L20 11l-5.8 2.8L12 20l-2.2-6.2L4 11l5.8-2.8L12 2Z" />
        </svg>
      );
    case "chili":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.5 5.5c-.9.1-1.67.45-2.3 1.05.5 2.1-.05 4.15-1.65 6.15-1.75 2.2-4.42 3.82-8 4.85 1.55 1.65 3.45 2.25 5.7 1.8 2.6-.52 4.75-2.25 6.45-5.2 1.55-2.67 1.7-5 .45-7 .55-.42 1.18-.63 1.85-.65V4.5c-.9 0-1.73.2-2.5 1Z" />
        </svg>
      );
    case "fusion":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M15 22a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M10.5 9.5a7 7 0 0 1 3 3" opacity="0.5" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20.5S3 15.4 3 8.9C3 5.6 5.15 3.5 8.15 3.5c1.72 0 3.05.82 3.85 2.12.8-1.3 2.13-2.12 3.85-2.12 3 0 5.15 2.1 5.15 5.4 0 6.5-9 11.6-9 11.6Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentReason, setCurrentReason] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextReason = () => {
    setCurrentReason((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentReason((prev) => (prev - 1 + reasons.length) % reasons.length);
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

  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <BrandMark />
          <div className="nav-links">
            {navItems.map((item) => {
              if (item === "Gallery") {
                return (
                  <Link
                    className=""
                    href="/gallery"
                    key={item}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Menus") {
                return (
                  <Link
                    className=""
                    href="/menus"
                    key={item}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "About") {
                return (
                  <Link
                    className=""
                    href="/about"
                    key={item}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Contact") {
                return (
                  <Link
                    className=""
                    href="/contact"
                    key={item}
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <a
                  className={item === "Home" ? "active" : undefined}
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <a href="/contact" className="book-now-btn">
            Book Now
          </a>
          <button
            className="burger-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="mobile-menu-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => {
              if (item === "Gallery") {
                return (
                  <Link
                    className="mobile-menu-link"
                    href="/gallery"
                    key={item}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Menus") {
                return (
                  <Link
                    className="mobile-menu-link"
                    href="/menus"
                    key={item}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "About") {
                return (
                  <Link
                    className="mobile-menu-link"
                    href="/about"
                    key={item}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Contact") {
                return (
                  <Link
                    className="mobile-menu-link"
                    href="/contact"
                    key={item}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <a
                  className={`mobile-menu-link ${item === "Home" ? "active" : ""}`}
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              );
            })}
            <a href="/contact" className="mobile-book-now-btn" onClick={closeMenu}>
              Book Now
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-image-wrapper">
          <Image
            src="/main_setup.png"
            alt="The Nibble Story mithai and chaat catering display"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay" />
        <Image
          src="/leaf.png"
          alt=""
          width={220}
          height={360}
          className="hero-leaf"
          aria-hidden="true"
        />
        <div className="hero-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <p className="eyebrow">Premium Catering</p>
              <h1>
                Curated Catering
                <span>Experiences</span>
              </h1>
              <p className="hero-script">
                For Celebrations
                <span>Worth Remembering</span>
              </p>
              <div className="hero-divider" aria-hidden="true" />
              <p className="hero-copy">
                Premium Indian Fusion Catering &amp; Grazing Tables
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="services">
        <div className="container">
          <div className="section-heading">
            <span>We Cater To</span>
          </div>
          <div className="service-desktop-image">
            <Image
              src="/gallery/service_desktop.png"
              alt="Our Catering Services"
              width={1200}
              height={400}
              className="service-desktop-img"
            />
          </div>
          <div className="service-mobile-image">
            <Image
              src="/gallery/services_mobile.png"
              alt="Our Catering Services"
              width={800}
              height={600}
              className="service-mobile-img"
            />
          </div>
        </div>
      </section>

      <section className="section section-gallery" id="gallery">
        <div className="container gallery-container">
          <div className="section-heading">
            <span>A Peek Into Our Creations</span>
          </div>
          <GalleryCarousel images={galleryImages} />
          <a className="instagram-link" href="https://instagram.com/thenibblestory">
            @thenibblestory
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-leaf testimonials-leaf-left" aria-hidden="true" />
        <div className="testimonials-leaf testimonials-leaf-right" aria-hidden="true" />
        <div className="container">
          <div className="testimonials-header">
            <p className="testimonials-eyebrow">KIND WORDS</p>
            <div className="testimonials-ornament" />
            <h2>What Our Clients Say</h2>
            <p className="testimonials-subtitle">Creating memorable celebrations, one bite at a time. ♡</p>
          </div>

          <div className="testimonials-carousel">
            <button
              className="testimonial-arrow testimonial-arrow-left"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="testimonials-grid">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div key={index} className="testimonial-card">
                    <div className="quote-icon">
                      <svg viewBox="0 0 48 48" fill="currentColor">
                        <path d="M12 34h8l4-8V14H12v12h8zm18 0h8l4-8V14H30v12h8z" />
                      </svg>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-divider">
                      <span className="divider-heart">♡</span>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image author-initials">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="author-info">
                        <p className="author-name">{testimonial.name}</p>
                        <p className="author-event">{testimonial.event}</p>
                      </div>
                    </div>
                    <div className="testimonial-leaf-decoration" />
                  </div>
                );
              })}
            </div>

            <button
              className="testimonial-arrow testimonial-arrow-right"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="testimonials-footer">
            <svg className="footer-arrow-left" viewBox="0 0 48 24" fill="currentColor">
              <path d="M0 12l12-8v5h24v6H12v5z" />
              <path d="M18 12l12-8v5h6v6h-6v5z" opacity="0.5" />
            </svg>
            <span>TRUSTED FOR LIFE'S MOST SPECIAL MOMENTS</span>
            <svg className="footer-arrow-right" viewBox="0 0 48 24" fill="currentColor">
              <path d="M48 12l-12-8v5H12v6h24v5z" />
              <path d="M30 12l-12-8v5h-6v6h6v5z" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="why-section" id="about">
        <div className="why-leaf why-leaf-left" aria-hidden="true" />
        <div className="why-leaf why-leaf-right" aria-hidden="true" />
        <div className="container">
          <h2>Why The Nibble Story?</h2>

          {/* Desktop Grid */}
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <Icon name={reason.icon} />
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="reason-carousel">
            <button
              className="reason-arrow reason-arrow-left"
              onClick={prevReason}
              aria-label="Previous reason"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="reason-card-mobile">
              <Icon name={reasons[currentReason].icon} />
              <h3>{reasons[currentReason].title}</h3>
              <p>{reasons[currentReason].copy}</p>
            </div>

            <button
              className="reason-arrow reason-arrow-right"
              onClick={nextReason}
              aria-label="Next reason"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="reason-dots">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`reason-dot ${index === currentReason ? 'active' : ''}`}
                onClick={() => setCurrentReason(index)}
                aria-label={`Go to reason ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark />
            {/* <p>
              Premium Indian Fusion Catering &amp; Grazing Tables crafted with
              love, designed to delight.
            </p> */}
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
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <Link href="/menus">Menus</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About Us</Link>
            <a href="#contact">Contact</a>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./contact.css";

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

export default function ContactPage() {
  const navItems = ["Home", "Services", "Menus", "Gallery", "About", "Contact"];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    numberOfGuests: "",
    cateringStyle: [] as string[],
    eventLocation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCateringStyleChange = (style: string) => {
    setFormData((prev) => ({
      ...prev,
      cateringStyle: prev.cateringStyle.includes(style)
        ? prev.cateringStyle.filter((s) => s !== style)
        : [...prev.cateringStyle, style],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "",
          numberOfGuests: "",
          cateringStyle: [],
          eventLocation: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Navbar */}
      <nav className="contact-navbar">
        <div className="contact-navbar-content">
          <Link href="/" className="contact-logo">
            <Image
              src="/nibble_story_logo.png"
              alt="The Nibble Story"
              width={60}
              height={60}
              className="contact-logo-img"
            />
          </Link>
          <div className="contact-nav-links">
            {navItems.map((item) => {
              if (item === "Home") {
                return (
                  <Link key={item} href="/" className="contact-nav-link">
                    {item}
                  </Link>
                );
              }
              if (item === "Menus") {
                return (
                  <Link key={item} href="/menus" className="contact-nav-link">
                    {item}
                  </Link>
                );
              }
              if (item === "Gallery") {
                return (
                  <Link key={item} href="/gallery" className="contact-nav-link">
                    {item}
                  </Link>
                );
              }
              if (item === "About") {
                return (
                  <Link key={item} href="/about" className="contact-nav-link">
                    {item}
                  </Link>
                );
              }
              if (item === "Contact") {
                return (
                  <Link key={item} href="/contact" className="contact-nav-link active">
                    {item}
                  </Link>
                );
              }
              if (item === "About") {
                return (
                  <Link
                    key={item}
                    href="/about"
                    className="contact-nav-link"
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="contact-nav-link"
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <a href="/contact" className="contact-book-now-btn">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <p className="contact-eyebrow">LET'S CREATE</p>
              <h1>
                Something<br />Beautiful Together
              </h1>
              <div className="contact-hero-divider" />
              <p className="contact-hero-description">
                Whether you're planning an intimate gathering, baby shower, birthday, corporate event, or festive celebration, we'd love to hear about it.
              </p>
            </div>
            <div className="contact-hero-image">
              <Image
                src="/gallery/setup_2.png"
                alt="Charcuterie and grazing table"
                fill
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 10.5c0 4.42-5.2 10.88-7.3 13.2-.4.45-1 .45-1.4 0C9.2 21.38 4 14.92 4 10.5 4 5.81 7.58 2 12 2s8 3.81 8 8.5zm-8 1.5c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7s-2.5 1.12-2.5 2.5S10.62 12 12 12z"/>
                </svg>
              </div>
              <h3>CALL US</h3>
              <p>929-238-5263</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </div>
              <h3>EMAIL US</h3>
              <p>thenibblestory@gmail.com</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>SERVING</h3>
              <p>New Jersey &amp; New York</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
              </div>
              <h3>HOURS</h3>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2>Tell Us About Your Event</h2>
          <div className="form-divider" />

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              {/* Your Details */}
              <div className="form-section">
                <h3 className="form-section-title">YOUR DETAILS</h3>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(xxx) xxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="form-section">
                <h3 className="form-section-title">EVENT DETAILS</h3>
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfGuests">Number of Guests *</label>
                  <select
                    id="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                    required
                  >
                    <option value="">Select guest count</option>
                    <option value="10-25">10-25 guests</option>
                    <option value="25-50">25-50 guests</option>
                    <option value="50-100">50-100 guests</option>
                    <option value="100+">100+ guests</option>
                  </select>
                </div>
              </div>

              {/* Catering Style */}
              <div className="form-section form-section-full">
                <h3 className="form-section-title">CATERING STYLE</h3>
                <p className="form-section-subtitle">Select all that apply</p>
                <div className="checkbox-grid">
                  {["Grazing Table", "Small Bites", "Full Catering", "Live Station", "Desserts", "Drinks", "Not Sure Yet"].map((style) => (
                    <label key={style} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.cateringStyle.includes(style)}
                        onChange={() => handleCateringStyleChange(style)}
                      />
                      <span>{style}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Location */}
            <div className="form-group">
              <h3 className="form-section-title">EVENT LOCATION</h3>
              <input
                type="text"
                id="eventLocation"
                placeholder="City / Venue Name"
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
              />
            </div>

            {/* Tell Us More */}
            <div className="form-group">
              <h3 className="form-section-title">TELL US MORE</h3>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us about your vision, theme, dietary preferences, or anything else you'd like us to know."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="form-message form-message-success">
                Thank you for your inquiry! We'll get back to you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-message form-message-error">
                Sorry, there was an error sending your inquiry. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="why-section">
        <div className="container">
          <h2>Why Clients Love Us</h2>
          <div className="why-divider" />
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"/>
                </svg>
              </div>
              <h3>PREMIUM INGREDIENTS</h3>
              <p>We use only the finest, high-quality ingredients in every bite.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M20 12h4v8h-4zm20 0h4v8h-4zM16 24h32v4H16zm4 8h24l-4 20H24l-4-20z"/>
                </svg>
              </div>
              <h3>CUSTOMIZED MENUS</h3>
              <p>Menus tailored to your event, preferences, and dietary needs.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8l8 16h16L40 36l8 16-16-8-16 8 8-16L8 24h16z"/>
                </svg>
              </div>
              <h3>BEAUTIFUL PRESENTATION</h3>
              <p>Every spread is designed to impress and create lasting memories.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8C18 8 8 18 8 32s10 24 24 24 24-10 24-24S46 8 32 8zm0 4c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-4 12v16h16v-4H32V24z"/>
                </svg>
              </div>
              <h3>STRESS-FREE EXPERIENCE</h3>
              <p>We handle the details so you can relax and enjoy your celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <h2>Follow Our Journey</h2>
          <div className="instagram-divider" />
          <p className="instagram-handle">@thenibblestory</p>
          <p className="instagram-description">
            Stay inspired with our latest spreads, events, and behind-the-scenes moments.
          </p>
          <div className="instagram-grid">
            <div className="instagram-image">
              <Image src="/gallery/paneer_sliders.png" alt="Instagram post" fill />
            </div>
            <div className="instagram-image">
              <Image src="/gallery/chaat_corn.png" alt="Instagram post" fill />
            </div>
            <div className="instagram-image">
              <Image src="/gallery/multi_dessert.jpeg" alt="Instagram post" fill />
            </div>
            <div className="instagram-image">
              <Image src="/gallery/setup_2.png" alt="Instagram post" fill />
            </div>
            <div className="instagram-image">
              <Image src="/gallery/chaat_gol_gappa.png" alt="Instagram post" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <p className="final-cta-eyebrow">READY TO BEGIN?</p>
            <h3>Let's create a menu as special as your celebration.</h3>
            <div className="final-cta-divider" />
            <a href="#" className="final-cta-btn">
              BOOK YOUR EVENT
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
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
        <div className="footer-bottom">
          <p className="copyright">© 2024 The Nibble Story. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/privacy">PRIVACY POLICY</a>
            <span>|</span>
            <a href="/terms">TERMS & CONDITIONS</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";
import GalleryCarousel from "./gallery-carousel";

const navItems = ["Home", "Services", "Menus", "Gallery", "About", "Contact"];

const services = [
  {
    icon: "balloons",
    title: "Baby Showers",
    copy: "Beautiful spreads for beautiful beginnings",
  },
  {
    icon: "cake",
    title: "Birthdays",
    copy: "Delicious spreads for memorable birthdays",
  },
  {
    icon: "briefcase",
    title: "Corporate Events",
    copy: "Professional catering that leaves an impression",
  },
  {
    icon: "diya",
    title: "Festivals",
    copy: "Traditional flavors with a modern twist",
  },
  {
    icon: "cutlery",
    title: "Private Dining",
    copy: "Intimate experiences, crafted just for you",
  },
];

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
    icon: "chili",
    title: "Fusion",
    copy: "Indian flavors with modern creativity",
  },
  {
    icon: "heart",
    title: "Stress-Free",
    copy: "We handle everything so you can relax",
  },
];

function BrandMark() {
  return (
    <div className="brand-mark">
      <Image
        src="/nibble_story_logo.png"
        alt="The Nibble Story"
        width={65}
        height={65}
        priority
        className="brand-logo"
      />
    </div>
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
  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <BrandMark />
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                className={item === "Home" ? "active" : undefined}
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
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
                Premium Indian Fusion Catering &amp; Grazing Tables crafted with
                love, designed to delight.
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
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <Icon name={service.icon} />
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
              </article>
            ))}
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

      <section className="why-section" id="about">
        <div className="why-leaf why-leaf-left" aria-hidden="true" />
        <div className="why-leaf why-leaf-right" aria-hidden="true" />
        <div className="container">
          <h2>Why The Nibble Story?</h2>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <Icon name={reason.icon} />
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <BrandMark />
            <p>
              Premium Indian Fusion Catering &amp; Grazing Tables crafted with
              love, designed to delight.
            </p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About Us</a>
          </div>
          <div>
            <h2>Serving</h2>
            <p>Bay Area &amp; Surrounding Areas, California</p>
          </div>
          <div>
            <h2>Let&apos;s Connect</h2>
            <p>(510) 123-4567</p>
            <p>hello@thenibblestory.com</p>
          </div>
        </div>
        <p className="copyright">© 2024 The Nibble Story. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

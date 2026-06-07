import React, { useState, useEffect } from 'react';
import { GraduationCap, MessageSquare, Menu, X } from 'lucide-react';

function Navbar() {
  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hi! I'm interested in learning more about your courses.";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active section on scroll
      const sections = ['home', 'about', 'courses', 'results', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'results', label: 'Results' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <GraduationCap size={28} strokeWidth={2.5} />
          </span>
          <h2>Bright Future Academy</h2>
        </a>

        <div className="navbar-right">
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Mobile-only Whatsapp item in the dropdown menu */}
            {isMenuOpen && (
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn-mobile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: '#25d366',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    marginTop: '10px'
                  }}
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            )}
          </ul>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </a>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
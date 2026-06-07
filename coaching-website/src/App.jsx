import './index.css';
import heroImage from "./assets/hero.jpg";
import doctorImage from "./assets/doctor.avif";
import codingImage from "./assets/coding.jpg";

import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import {
  GraduationCap,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Star,
  Briefcase,
  Target
} from 'lucide-react';

function App() {
  const slides = [
    {
      image: heroImage,
      title: "Bright Future Academy",
      description: "Empowering students to achieve excellence and secure admissions into top-tier universities.",
      objectPosition: "center top"
    },
    {
      image: doctorImage,
      title: "Crack NEET with Experts",
      description: "In-depth biology practicals, comprehensive test series, and dedicated expert mentorship."
    },
    {
      image: codingImage,
      title: "Become a Software Leader",
      description: "Learn modern programming, AI integrations, and algorithms from top industry veterans."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" className="star-filled" />
    ));
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-slider">
          {slides.map((slide, idx) => (
            <div key={idx} className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}>
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="hero-bg"
                style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
              />
            </div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-glass-card">
            <h1>
              <span className="gradient-text">{slides[currentSlide].title}</span>
            </h1>
            <p>{slides[currentSlide].description}</p>
            <div className="hero-actions">
              <a href="#courses" className="btn btn-primary">
                Explore Programs
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                Get Counseling
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="grid-overlay"></div>
        <div className="about-container">
          <div className="about-content">
            <span className="section-badge">
              <Target size={14} />
              <span>Who We Are</span>
            </span>
            <h2 className="section-title">Empowering Academic Leaders</h2>
            <p className="about-description">
              At Bright Future Academy, we prepare the next generation of engineers, doctors, and tech professionals.
              Our student-centered curriculum bridges the gap between raw potential and competitive rank outputs.
            </p>
            <p className="about-description">
              With detailed diagnostic mock reviews, adaptive curriculum models, and custom counseling pipelines,
              we ensure that every student secures a structural path toward placement or degree excellence.
            </p>

            <div className="about-features">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <BookOpen size={20} />
                </div>
                <div className="about-feature-text">
                  <h4>Structured Curriculum</h4>
                  <p>Weekly modular reviews matched to modern exam patterns.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Users size={20} />
                </div>
                <div className="about-feature-text">
                  <h4>Individual Support</h4>
                  <p>1-on-1 doubt clearing circles and customized strategy boards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <h3>500+</h3>
                <p>Alumni Placed</p>
              </div>
              <div className="about-stat-card">
                <h3>20+</h3>
                <p>Ph.D. / Expert Mentors</p>
              </div>
              <div className="about-stat-card">
                <h3>85%</h3>
                <p>JEE/NEET Clear Rate</p>
              </div>
            </div>

            <div className="about-banner-card">
              <div className="about-banner-icon">
                <Award size={24} />
              </div>
              <div className="about-banner-text">
                <h4>Ranked #1 Coaching Hub</h4>
                <p>Awarded top premium training institute in Tech City for consecutive years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Success Section */}
      <section id="results" className="results-section">
        <div className="grid-overlay"></div>
        <div className="results-container">
          <div className="section-header">
            <span className="section-badge">
              <TrendingUp size={14} />
              <span>Milestones</span>
            </span>
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">
              Our consistent year-on-year metrics demonstrate the strength of our faculty and coaching layout.
            </p>
          </div>

          <div className="results-grid">
            <div className="result-card">
              <h3>IIT-JEE Advanced</h3>
              <div className="result-stats-list">
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Award size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">100+</span>
                    <span className="stat-lbl">Selections in top-tier IITs</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Target size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">12</span>
                    <span className="stat-lbl">All India Rank Holders</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">80%</span>
                    <span className="stat-lbl">Core qualifying cohort rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>NEET medical</h3>
              <div className="result-stats-list">
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Award size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">100+</span>
                    <span className="stat-lbl">Medical Seats secured</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Target size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">8</span>
                    <span className="stat-lbl">Selections in AIIMS top-100</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">85%</span>
                    <span className="stat-lbl">Overall MBBS qualification index</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>Placement Bootcamp</h3>
              <div className="result-stats-list">
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">450+</span>
                    <span className="stat-lbl">Placed at top product firms</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">₹9 LPA</span>
                    <span className="stat-lbl">Average package of software engineers</span>
                  </div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-icon">
                    <Award size={20} />
                  </div>
                  <div className="result-stat-text">
                    <span className="stat-num">90%</span>
                    <span className="stat-lbl">Secured placement within 6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <span className="section-badge">
              <Users size={14} />
              <span>Reviews</span>
            </span>
            <h2 className="section-title">What Our Alumni Say</h2>
            <p className="section-subtitle">Hear directly from students who unlocked their ranks with us.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">{renderStars()}</div>
              <p className="testimonial-quote">
                "Bright Future Academy transformed my JEE prep. The faculty's customized strategy reviews and 1-on-1 problem-solving sessions helped me secure AIR 256."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div className="author-details">
                  <h4>Arjun Kumar</h4>
                  <p>IIT Delhi (CSE)</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">{renderStars()}</div>
              <p className="testimonial-quote">
                "The NEET preparation courses are unmatched. Constant mentorship, weekly mock reviews, and excellent doubt clear cycles helped me score 685/720."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">PS</div>
                <div className="author-details">
                  <h4>Priya Sharma</h4>
                  <p>AIIMS New Delhi</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">{renderStars()}</div>
              <p className="testimonial-quote">
                "The bootcamp prepare me perfectly for engineering placements. I landed an offer at Amazon with a high CTC package. The projects were highly practical."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RP</div>
                <div className="author-details">
                  <h4>Rohan Patel</h4>
                  <p>Amazon, Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Contact />

      <footer>
        <p>&copy; {new Date().getFullYear()} Bright Future Academy. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

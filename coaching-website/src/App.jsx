
import './index.css';
import heroImage from "./assets/hero.jpg";
import doctorImage from "./assets/doctor.avif";
import codingImage from "./assets/coding.jpg";
import jeeImage from "./assets/jee.jpg";
import neetImage from "./assets/neet.jpg";
import eamcetImage from "./assets/eamcet.jpg";
import programmingImage from "./assets/programming.jpg";

import { useEffect, useState } from "react";
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  const slides = [
  {
    image: heroImage,
    title: "Bright Future Academy",
    description:
      "Helping students achieve excellence through quality education."
  },

  {
    image: doctorImage,
    title: "Want to Become a Doctor?",
    description:
      "Expert NEET coaching and guidance to help you secure admission into top medical colleges."
  },

  {
    image: codingImage,
    title: "Dream of Becoming a Software Engineer?",
    description:
      "Learn Programming, Web Development, AI and modern technologies from industry experts."
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        (prev + 1) % slides.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  const courses = [
    {
      name: "IIT-JEE Foundation",
      duration: "12 Months",
      fee: "₹25,000",
      image: jeeImage
    },
    {
      name: "NEET Coaching",
      duration: "12 Months",
      fee: "₹30,000",
      image: neetImage
    },
    {
      name: "EAMCET",
      duration: "8 Months",
      fee: "₹20,000",
      image: eamcetImage
    },
    {
      name: "Programming (C#, Python)",
      duration: "4 Months",
      fee: "₹8,000",
      image: programmingImage
    }
  ];
  return (
    <>
      <nav className="navbar">
        <h2>Bright Future Academy</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>

        </div>
      </nav>
      <section className="hero">
        <img
          src={slides[currentSlide].image}
          alt="slide"
          className="hero-bg"
        />
        <div className="overlay">

          <div className="hero-content">

            <h1>
        {slides[currentSlide].title}
      </h1>

      <p>
        {slides[currentSlide].description}
      </p>

            <button>Learn More</button>

          </div>

        </div>
      </section>
      <section id="about" className="about">
  <div className="about-container">

    <h2>About Bright Future Academy</h2>

    <p>
      Bright Future Academy is dedicated to helping students achieve
      academic excellence through quality education, experienced faculty,
      and personalized guidance. Our mission is to empower students with
      knowledge, confidence, and skills required to excel in competitive
      examinations and future careers.
    </p>

    <p>
      We offer comprehensive coaching programs for Engineering, Medical, Programming, Internship and Professional courses. With a student-focused approach,
      regular assessments, and expert mentorship, we strive to create
      a strong foundation for every learner.
    </p>

    <div className="stats">

      <div className="stat-card">
        <h3>500+</h3>
        <p>Students Trained</p>
      </div>

      <div className="stat-card">
        <h3>20+</h3>
        <p>Expert Faculty</p>
      </div>

      <div className="stat-card">
        <h3>80%</h3>
        <p>Success Rate</p>
      </div>

    </div>

  </div>
</section>
      <Courses />
      
      <section id="results" className="results-section">
        <div className="results-container">
          <h2>Student Success Stories</h2>
          <p className="section-subtitle">Our students have achieved remarkable results</p>
          
          <div className="results-grid">
            <div className="result-card">
              <h3>IIT-JEE Results</h3>
              <div className="result-stats">
                <div className="stat">
                  <span className="number">100</span>
                  <span className="label">Selections in Top 20 IITs</span>
                </div>
                <div className="stat">
                  <span className="number">12</span>
                  <span className="label">AIR Rank Holders</span>
                </div>
                <div className="stat">
                  <span className="number">80%</span>
                  <span className="label">Success Rate</span>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>NEET Results</h3>
              <div className="result-stats">
                <div className="stat">
                  <span className="number">100</span>
                  <span className="label">Medical Seats Secured</span>
                </div>
                <div className="stat">
                  <span className="number">8</span>
                  <span className="label">All India Top 100</span>
                </div>
                <div className="stat">
                  <span className="number">85%</span>
                  <span className="label">Success Rate</span>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>Placements</h3>
              <div className="result-stats">
                <div className="stat">
                  <span className="number">450+</span>
                  <span className="label">Students Placed</span>
                </div>
                <div className="stat">
                  <span className="number">₹9 LPA</span>
                  <span className="label">Average Package</span>
                </div>
                <div className="stat">
                  <span className="number">90%</span>
                  <span className="label">Placement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2>What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Bright Future Academy transformed my JEE preparation. The faculty's personalized approach and regular mock tests helped me secure AIR 256."</p>
              <div className="student-info">
                <h4>Arjun Kumar</h4>
                <p>IIT Delhi, CSE</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The NEET coaching here is exceptional. Expert faculty, excellent study material, and constant motivation helped me score 685/720. Highly recommended!"</p>
              <div className="student-info">
                <h4>Priya Sharma</h4>
                <p>AIIMS Delhi, Medical</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The programming course prepared me perfectly for placements. I landed a job at Amazon with great package. Best decision ever!"</p>
              <div className="student-info">
                <h4>Rohan Patel</h4>
                <p>Amazon, Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
export default App;

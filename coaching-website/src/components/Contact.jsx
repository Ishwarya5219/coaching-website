import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Headset } from 'lucide-react';

function Contact() {
  const whatsappNumber = "919876543210";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'IIT-JEE Advanced',
    'NEET Mastery',
    'EAMCET Excellence',
    'Python & Web Dev',
    'Interview Mastery',
    'Internship Ready',
    'Placement Bootcamp'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = (course) => {
    const message = `Hi! I'm interested in the ${course} course. Can you provide more details?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="grid-overlay"></div>
      
      <div className="contact-container">
        <div className="section-header">
          <span className="section-badge">
            <Headset size={14} />
            <span>Support</span>
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions about admissions, fees, or curricula? Speak with our counselors today. We're here to help you guide your success.
          </p>
        </div>

        <div className="contact-content">
          {/* Info cards */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Our Location</h4>
                <p>123 Education Hub, Tech City<br />State - 500081</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Call Support</h4>
                <p>+91 98765 43210<br />+91 40-1234 5678</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Email Address</h4>
                <p>info@brightfutureacademy.com<br />counseling@brightfutureacademy.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Clock size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                <MessageSquare size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Instant Counseling</h4>
                <p>Chat directly with our counselors.</p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                  style={{ color: '#25d366', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: '700' }}
                >
                  Start WhatsApp Chat &rarr;
                </a>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Our Community</h4>
              <div className="social-icons">
                <a href="#" className="social-icon-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-icon-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="social-icon-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9" />
                  </svg>
                </a>
                <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="contact-form-card">
            <h3>Send us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Your Full Name</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="form-email">Your Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-phone">Phone Number</label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-course">Select Interested Program</label>
                <select
                  id="form-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a course...</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Your Message or Query</label>
                <textarea
                  id="form-message"
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="contact-form-actions">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
                
                {formData.course && (
                  <button
                    type="button"
                    className="btn btn-whatsapp"
                    onClick={() => handleWhatsApp(formData.course)}
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Inquiry</span>
                  </button>
                )}
              </div>

              {submitted && (
                <div className="success-message">
                  ✓ Your query has been sent successfully. We will reach out shortly!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
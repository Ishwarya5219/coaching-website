import React, { useState } from 'react';

function Contact() {
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
    'Weekly Online Exams',
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
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have questions? Our counselors are ready to help you choose the perfect course</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Education Hub, Tech City<br/>State - 500081</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210<br/>+91 40-1234 5678</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@brightfutureacademy.com<br/>counseling@brightfutureacademy.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9AM - 6PM<br/>Sat - Sun: 10AM - 4PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select interested course</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message or Questions"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
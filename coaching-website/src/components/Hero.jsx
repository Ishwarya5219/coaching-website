function Hero() {
  const whatsappNumber = "919876543210"; // Replace with your number
  const whatsappMessage = "Hi! I want to know more about your courses and enrollment process.";

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Shape Your Future</span> With Excellence
          </h1>

          <p className="hero-subtitle">
            Expert coaching, structured courses, and proven results. Join 10,000+ successful students.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              🚀 Explore Courses
            </button>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>10K+</h3>
              <p>Students</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Trainers</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">📚 Live Classes</div>
          <div className="floating-card card-2">🏆 Expert Faculty</div>
          <div className="floating-card card-3">📊 Mock Tests</div>
          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
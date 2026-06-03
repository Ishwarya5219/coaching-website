import React from 'react';

function Courses() {
  const courses = [
    {
      id: 1,
      category: "Engineering",
      name: "IIT-JEE Advanced",
      duration: "12 Months",
      level: "Advanced",
      fee: "₹45,000",
      students: "2,500+",
      rating: 4.8,
      description: "Comprehensive preparation for IIT-JEE with focus on conceptual clarity and problem-solving.",
      highlights: [
        "Daily mock tests",
        "Personalized doubt sessions",
        "Subject-wise mentoring",
        "100+ practice papers"
      ],
      features: ["Live Classes", "Recorded Sessions", "Study Material", "Doubt Sessions"]
    },
    {
      id: 2,
      category: "Medical",
      name: "NEET Mastery",
      duration: "12 Months",
      level: "Advanced",
      fee: "₹50,000",
      students: "3,200+",
      rating: 4.9,
      description: "Expert NEET coaching from experienced doctors and educators with proven success track record.",
      highlights: [
        "3 practice exams weekly",
        "Biology practicals",
        "One-on-one mentoring",
        "Success guaranteed"
      ],
      features: ["Expert Faculty", "Lab Sessions", "Mock Tests", "Career Guidance"]
    },
    {
      id: 3,
      category: "Engineering",
      name: "EAMCET Excellence",
      duration: "8 Months",
      level: "Intermediate",
      fee: "₹30,000",
      students: "1,800+",
      rating: 4.7,
      description: "Focused EAMCET preparation covering Physics, Chemistry, and Mathematics with state-wise variations.",
      highlights: [
        "Weekly assessments",
        "State-specific modules",
        "Rank prediction",
        "College counseling"
      ],
      features: ["Expert Trainers", "Digital Library", "Assessments", "Counseling"]
    },
    {
      id: 4,
      category: "Programming",
      name: "Python & Web Dev",
      duration: "4 Months",
      level: "Beginner",
      fee: "₹12,000",
      students: "1,500+",
      rating: 4.6,
      description: "Learn Python, HTML, CSS, JavaScript with real-world projects and industry-standard practices.",
      highlights: [
        "5 live projects",
        "GitHub portfolio",
        "Code review sessions",
        "Internship assistance"
      ],
      features: ["Live Coding", "Projects", "Portfolio", "Placement Ready"]
    },
    {
      id: 5,
      category: "Interview Prep",
      name: "Interview Mastery",
      duration: "3 Months",
      level: "Professional",
      fee: "₹15,000",
      students: "800+",
      rating: 4.8,
      description: "Complete interview preparation including HR, technical, and coding interview strategies.",
      highlights: [
        "Mock interviews",
        "Resume building",
        "100+ coding problems",
        "Company-specific prep"
      ],
      features: ["Mock Sessions", "Resume Help", "Coding Drills", "HR Training"]
    },
    {
      id: 6,
      category: "Internship",
      name: "Internship Ready",
      duration: "2 Months",
      level: "Beginner",
      fee: "₹8,000",
      students: "600+",
      rating: 4.7,
      description: "Gain practical experience and professional skills required for competitive internship positions.",
      highlights: [
        "Industry mentors",
        "Hands-on projects",
        "Certificate program",
        "Job placement help"
      ],
      features: ["Mentorship", "Projects", "Certificate", "Placements"]
    },
    {
      id: 7,
      category: "Professional",
      name: "Placement Bootcamp",
      duration: "6 Months",
      level: "Professional",
      fee: "₹25,000",
      students: "1,200+",
      rating: 4.9,
      description: "End-to-end placement preparation with guaranteed interview calls from top tech and consulting companies.",
      highlights: [
        "Company recruiter sessions",
        "Salary negotiation",
        "100% placement rate",
        "Lifetime support"
      ],
      features: ["Recruiters", "Company Talks", "Placement", "Support"]
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2>Our Premium Courses</h2>
        <p>Choose from 8+ comprehensive programs designed by industry experts</p>
      </div>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-badge">{course.category}</div>
            <div className="course-header-content">
              <h3>{course.name}</h3>
              <div className="course-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">{course.rating}</span>
                <span className="students">({course.students} students)</span>
              </div>
            </div>
            
            <p className="course-description">{course.description}</p>
            
            <div className="course-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Level</span>
                <span className="meta-value">{course.level}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Fee</span>
                <span className="meta-value">{course.fee}</span>
              </div>
            </div>

            <div className="course-highlights">
              <h4>What You'll Get:</h4>
              <ul>
                {course.highlights.map((highlight, idx) => (
                  <li key={idx}>✓ {highlight}</li>
                ))}
              </ul>
            </div>

            <div className="course-features">
              {course.features.map((feature, idx) => (
                <span key={idx} className="feature-tag">{feature}</span>
              ))}
            </div>

            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
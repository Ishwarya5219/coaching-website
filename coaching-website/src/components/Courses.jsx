import React, { useState } from 'react';
import { Star, Clock, GraduationCap, DollarSign, Check, MessageSquare, Award } from 'lucide-react';

function Courses() {
  const whatsappNumber = "919876543210";
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Engineering', 'Medical', 'Programming', 'Career Prep'];

  const courses = [
    {
      id: 1,
      category: "Engineering",
      name: "IIT-JEE Advanced",
      duration: "12 Months",
      level: "Advanced",
      fee: "₹45,000",
      students: "2,500+",
      rating: 5,
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
      rating: 5,
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
      rating: 4,
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
      rating: 4,
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
      category: "Career Prep",
      name: "Interview Mastery",
      duration: "3 Months",
      level: "Professional",
      fee: "₹15,000",
      students: "800+",
      rating: 5,
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
      category: "Career Prep",
      name: "Internship Ready",
      duration: "2 Months",
      level: "Beginner",
      fee: "₹8,000",
      students: "600+",
      rating: 4,
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
      category: "Career Prep",
      name: "Placement Bootcamp",
      duration: "6 Months",
      level: "Professional",
      fee: "₹25,000",
      students: "1,200+",
      rating: 5,
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

  const handleWhatsApp = (courseName) => {
    const message = `Hi! I'm interested in the ${courseName} course. Can you provide more details?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={i <= rating ? 'star-filled' : 'star-empty'}
          fill={i <= rating ? 'currentColor' : 'none'}
          style={i <= rating ? {} : { color: '#cbd5e1' }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <div className="section-header">
          <span className="section-badge">
            <Award size={14} />
            <span>Curriculum</span>
          </span>
          <h2 className="section-title">Our Premium Programs</h2>
          <p className="section-subtitle">
            Explore industry-vetted courses designed by expert educators to help you crack competitive exams and advance your career.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="courses-filter">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card-header">
                <span className="course-card-badge">
                  {course.category}
                </span>
                <h3>{course.name}</h3>
                
                <div className="course-card-rating">
                  <div className="course-stars">
                    {renderStars(course.rating)}
                  </div>
                  <span className="course-rating-val">{course.rating}.0</span>
                  <span className="course-students-count">({course.students} students)</span>
                </div>
              </div>

              <div className="course-card-body">
                <p className="course-desc">{course.description}</p>

                {/* Details Grid */}
                <div className="course-details-grid">
                  <div className="detail-chip">
                    <span className="detail-label">Duration</span>
                    <span className="detail-val">{course.duration}</span>
                  </div>
                  <div className="detail-chip">
                    <span className="detail-label">Level</span>
                    <span className="detail-val">{course.level}</span>
                  </div>
                  <div className="detail-chip">
                    <span className="detail-label">Fee</span>
                    <span className="detail-val">{course.fee}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="course-highlights-list">
                  <h4>Key Takeaways:</h4>
                  <ul>
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <Check size={14} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="course-tags">
                  {course.features.map((feature, idx) => (
                    <span key={idx} className="course-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="course-btn-group">
                  <button
                    className="btn btn-outline"
                    onClick={() => handleWhatsApp(course.name)}
                  >
                    <MessageSquare size={14} />
                    <span>Inquire</span>
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleWhatsApp(course.name)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
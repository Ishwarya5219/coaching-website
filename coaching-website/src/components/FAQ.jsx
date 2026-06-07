import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

function FAQ() {
  const faqs = [
    {
      question: "What courses/programs do you offer?",
      answer: "We offer comprehensive prep programs for IIT-JEE (Advanced/Main), NEET (Medical exam preparation), and a highly intensive placement bootcamp for software engineering aspirants seeking jobs in top-tier tech companies."
    },
    {
      question: "Are the classes conducted online or offline?",
      answer: "We offer hybrid solutions. You can attend physical sessions at our state-of-the-art training center or join live-streamed, interactive lectures online. Both modes feature full doubt-clearing circle access."
    },
    {
      question: "Do you offer scholarship or discount programs?",
      answer: "Yes! Based on diagnostic mock evaluations and prior academic milestones (like school board ranks or national exams), students can receive up to 90% scholarships. Contact our counseling team for details."
    },
    {
      question: "How do I book a counseling session?",
      answer: "You can click any 'Get Counseling' button or directly message us on WhatsApp. Our expert academic mentors are available for a 1-on-1 diagnostic mapping session completely free of cost."
    },
    {
      question: "What is your success/selection rate in competitive exams?",
      answer: "We consistently achieve an 85% qualification index in NEET and JEE. Our software placement bootcamp boasts a 90% placement rate within 6 months, with alumni working at major firms like Amazon, Google, and Microsoft."
    },
    {
      question: "How can I request doubt-clearing assistance?",
      answer: "We have dedicated 1-on-1 doubt clearing circles operating 12 hours a day. Students can post queries in the student dashboard portal or meet physical mentors on campus daily."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="grid-overlay"></div>
      <div className="faq-container">
        <div className="section-header">
          <span className="section-badge">
            <HelpCircle size={14} />
            <span>FAQ</span>
          </span>
          <h2 className="section-title">Most Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common queries about our courses, schedule, support system, and admissions.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className="faq-content">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

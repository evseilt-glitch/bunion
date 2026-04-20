import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How exactly does it work?",
      answer: "The device applies a gentle, adjustable outward pressure to realign the big toe joint. The patented hinge allows natural movement while correcting the underlying structural issue over time."
    },
    {
      question: "Who is this for?",
      answer: "This is for anyone suffering from bunion pain, toe overlap, or experiencing shoe discomfort due to misalignment. It works for both early stages to prevent worsening, and advanced stages for pain relief."
    },
    {
      question: "How long does shipping take?",
      answer: "We offer expedited free shipping. Most orders arrive within 3-5 business days directly to your doorstep."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 90-day money-back guarantee. If you don't feel significant relief within 90 days, return it for a full, no-questions-asked refund."
    },
    {
      question: "Can I wear it at night?",
      answer: "Absolutely! Many of our customers wear it while sleeping to wake up without the typical morning stiffness and pain. The breathable materials keep it comfortable all night."
    }
  ];

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="text-center faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

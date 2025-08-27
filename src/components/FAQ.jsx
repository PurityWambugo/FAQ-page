"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlus, CircleMinus } from "lucide-react";

const FAQ = () => {
  // State to manage the list of FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a valid receipt.",
      isOpen: false,
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after shipping.",
      isOpen: false,
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees may apply.",
      isOpen: false,
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support via email at the provided email address or call our support hotline during business hours.",
      isOpen: false,
    },
  ]);

  // Function to toggle a single FAQ, closing all others
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <div className="bg-white w-full min-h-screen py-10 font-sans">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />

      {/* Container for the entire FAQ section */}
      <div className="p-6 max-w-xl mx-auto rounded-lg content-center items-center mt-10">
        
        {/* Main heading for the FAQ section */}
        <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-[3px] after:bg-orange-500 after:rounded-full">Frequently Asked Questions</h1>
        <p className="text-gray-500 text-base mb-8 text-center">Your questions, answered.</p>

        {/* Map through the FAQs array to render each question and answer */}
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`mb-4 rounded-lg border-b border-orange-300 shadow-md w-full transition-all duration-500 hover:shadow-2xl hover:shadow-gray-400 ${faq.isOpen ? 'shadow-lg shadow-orange-500/50' : 'bg-gray-50 shadow-black/20'}`}
          >
            {/* The main button that toggles the answer visibility */}
            <button
              onClick={() => toggleFAQ(index)}
              aria-expanded={faq.isOpen}
              aria-controls={`faq-answer-${index}`}
              className={`flex items-center gap-2 w-full text-left text-lg focus:outline-none p-4 font-semibold transition-colors rounded-t-lg ${faq.isOpen ? 'bg-orange-100 text-gray-900' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              {/* span contains the question text*/}
              <span className="flex-1 min-w-0 pr-2  text-wrap transition-colors">
                {faq.question}
              </span>

              <div className="flex-shrink-0">
                {faq.isOpen ? (
                  <CircleMinus className="text-orange-500" />
                ) : (
                  <CirclePlus className="text-gray-400" />
                )}
              </div>
            </button>

            {/* Rendering the AnimatePresence component */}
            <AnimatePresence>
              {faq.isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-orange-400 before:rounded-full"
                >
                  <p className="text-gray-600 pl-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

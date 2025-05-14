import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What are your operating hours?",
    answer: "We are open from 9 AM to 9 PM, Monday to Saturday.",
    category: "General",
  },
  {
    question: "Do I need to book an appointment?",
    answer: "Walk-ins are welcome, but appointments are recommended to avoid wait time.",
    category: "Services",
  },
  {
    question: "What is the price for a haircut?",
    answer: "Our standard haircut starts at $25. Additional services may vary in pricing.",
    category: "Pricing",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can reschedule or cancel up to 24 hours before your appointment.",
    category: "Support",
  },
  {
    question: "Do you offer beard grooming services?",
    answer: "Yes, we offer a range of beard grooming services.",
    category: "Services",
  },
];

const categories = ["All", "General", "Services", "Pricing", "Support"];

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqData.filter((faq) => {
    const inCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-16 bg-neutral-800">
      <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b bg-neutral-800 pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div>
          <div class="max-w-3xl mx-auto group text-center mb-12">
      <p class="text-primary text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">Common Questions</p>
      <h2 class="text-3xl md:text-4xl text-white font-bold text-foreground mb-2 relative inline-block">
        Frequently Asked Questions
        <span class="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
      </h2>
      <p class="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
        Answer to common questions about our barbershop sevices.
      </p>
    </div>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full max-w-xl px-4 py-2 text-neutral-700 border border-neutral-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-black text-white hover:bg-amber-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4 ">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-700 rounded-lg shadow-sm transition-all duration-300"
            >
              <button
                className={`w-full flex items-center justify-between p-4 text-left hover:text-amber-500 font-medium transition-colors duration-300 ${
                          openIndex === index ? "text-amber-500" : "text-white"
                        }`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-amber-500" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">No FAQs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Faq
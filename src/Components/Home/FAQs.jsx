import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQs() {
  const questionList = [
    {
      question: "What services do you offer?",
      answers:
        "We offer a wide range of services including cyber solutions, graphic design, event entertainment, construction, and metal fabrication.",
    },
    {
      question: "Why should I choose your company?",
      answers:
        "We are committed to excellence, driven by a team of skilled professionals and a strong track record of delivering high-quality results on time and within budget.",
    },
    {
      question: "Do you provide custom solutions?",
      answers:
        "Absolutely. We tailor all our services to meet your specific needs and project requirements. Let’s talk about what you have in mind.",
    },
    {
      question: "What is your pricing structure?",
      answers:
        "Our pricing is flexible and depends on the scope and nature of the project. We provide transparent quotes with no hidden charges.",
    },
  ];

  const [questionState, setQuestionState] = useState(null);

  const questionHandler = (index) => {
    setQuestionState(questionState === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-slate-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {questionList.map((q, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => questionHandler(index)}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {q.question}
                </h2>
                {questionState === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </div>

              {questionState === index && (
                <p className="text-gray-600 mt-3">{q.answers}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;

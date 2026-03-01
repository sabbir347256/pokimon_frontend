import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-50/50 transition-colors group"
      >
        <span className="text-[16px] font-medium text-[#111827]">{item.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQCard = ({ title, items }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#F8FAFC] rounded-2xl  shadow-xl border border-gray-100 overflow-hidden h-fit">
      <div className="px-6 py-5 border-b border-gray-900/80">
        <h2 className="text-lg font-semibold text-[#111827]">{title}</h2>
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function AskQuestion() {


  const faqData = [
    {
      title: "Ordering & Payment",
      items: [
        { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, AMEX, and PayPal." },
        { question: "How do I track my order?", answer: "Once shipped, you'll receive a tracking number via email." },
        { question: "Can I cancel or modify my order?", answer: "Orders can be modified within 2 hours of placement." }
      ]
    },
    {
      title: "Shipping & Delivery",
      items: [
        { question: "What are your shipping options?", answer: "Standard, Express, and Overnight shipping available." },
        { question: "Do you ship internationally?", answer: "Yes, we ship to over 50 countries worldwide." },
        { question: "How are cards packaged for shipping?", answer: "Cards are sleeved, top-loaded, and shipped in bubble mailers." }
      ]
    },
    {
      title: "Card Conditions & Grading",
      items: [
        { question: "How do you determine card conditions?", answer: "We follow industry-standard TCG grading guidelines." },
        { question: "Are your graded cards authenticated?", answer: "All graded cards are authenticated by PSA, BGS, or CGC." },
        { question: "What's your return policy on graded cards?", answer: "Graded cards are eligible for return if the slab is damaged." }
      ]
    },
    {
      title: "Account & Rewards",
      items: [
        { question: "How does the $25 sign-up bonus work?", answer: "Apply the code NEW25 at your first checkout over $100." },
        { question: "Do you have a loyalty program?", answer: "Yes! Earn points on every purchase for future discounts." },
        { question: "Do you have a loyalty program?", answer: "Yes! Earn points on every purchase for future discounts." }
      ]
    }
  ];

  return (
    <div className="sm:max-w-294 px-2 mx-auto">

        <div className='flex justify-center items-center'>
            <div className='flex flex-col gap-y-3 text-[#111827] text-center'>
                <h1 className='text-[20px] font-medium'>Frequently Asked Questions</h1>
                <h1 className='text-[16px] font-medium'>Find answers to common questions about ordering, shipping, card conditions, and more.</h1>
            </div>
        </div>
      <div className=" grid grid-cols-1 mt-7 lg:grid-cols-2 gap-8">
        {faqData.map((section, idx) => (
          <FAQCard key={idx} title={section.title} items={section.items} />
        ))}
      </div>

      <div className='flex justify-center mt-10 items-center'>

        <div className='text-center flex flex-col gap-y-1.5'>
            <h1 className='text-[20px] '>Still have questions?</h1>
            <h1 className='text-[16px]'>Our support team is here to help you with any inquiries.</h1>
            <div>
                <button className='bg-[#3B82F6] px-8 py-2.5 rounded-lg cursor-pointer text-white'>Contact Support</button>
            </div>
        </div>
      </div>
    </div>
  );
}
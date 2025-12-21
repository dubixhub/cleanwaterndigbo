import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Donations',
      question: 'How are my donations used?',
      answer: 'Your donations go directly towards water projects, including borehole construction, water purification systems, community education programs, and maintenance training. We maintain full transparency—at least 85% of every donation goes directly to project implementation, with the remaining supporting essential operations and administration.',
    },
    {
      category: 'Donations',
      question: 'Can I donate to a specific project or community?',
      answer: 'Yes! You can specify which project or community you\'d like your donation to support. Contact us directly, and we\'ll ensure your contribution reaches your chosen cause. We also provide updates on the project\'s progress.',
    },
    {
      category: 'Donations',
      question: 'Is my donation tax-deductible?',
      answer: 'Clean Water Ndigbo is a registered non-profit organization in Nigeria. While we provide receipts for all donations, tax deductibility may vary based on your country of residence. Please consult with your tax advisor for specific guidance.',
    },
    {
      category: 'Operations',
      question: 'Which areas do you currently serve?',
      answer: 'We primarily serve communities across the five Southeast Nigerian states: Abia, Anambra, Ebonyi, Enugu, and Imo. We also extend our work to Igbo communities in neighboring states like Delta and Rivers. Our goal is to reach every underserved Igbo community in need of clean water.',
    },
    {
      category: 'Operations',
      question: 'How do you select communities for water projects?',
      answer: 'We assess communities based on several criteria: current water access and quality, population size, health impact of water scarcity, community engagement and readiness, and technical feasibility. We prioritize areas with the greatest need and communities that demonstrate strong commitment to project sustainability.',
    },
    {
      category: 'Operations',
      question: 'How long does it take to complete a water project?',
      answer: 'Project timelines vary based on scope and complexity. A typical borehole project takes 4-8 weeks from assessment to completion. Larger community water systems may take 3-6 months. We always ensure thorough testing and community training before handover.',
    },
    {
      category: 'Support',
      question: 'How can I volunteer with Clean Water Ndigbo?',
      answer: 'We welcome volunteers! You can join us in various capacities: field work during project implementation, community education programs, fundraising and awareness campaigns, or administrative support. Visit our Contact page or email us at volunteer@cleanwaterndigbo.org to learn about current opportunities.',
    },
    {
      category: 'Support',
      question: 'Can my organization partner with Clean Water Ndigbo?',
      answer: 'Absolutely! We partner with corporations, foundations, faith-based organizations, schools, and other NGOs. Partnership opportunities include project sponsorship, employee giving programs, technical collaboration, and co-branded initiatives. Contact us to discuss how we can work together.',
    },
    {
      category: 'Impact',
      question: 'How do you ensure project sustainability?',
      answer: 'Sustainability is core to our approach. We involve community members from project inception, train local maintenance teams, establish water committees, create maintenance funds, and provide ongoing technical support. Our projects are designed to serve communities for 20+ years with proper maintenance.',
    },
    {
      category: 'Impact',
      question: 'How can I track the impact of my donation?',
      answer: 'We provide regular updates through our newsletter, annual impact reports, and social media. Major donors receive personalized project reports with photos and community testimonials. You can also visit our completed projects to see the impact firsthand.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our work, donations, and how you can get involved.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-4 pr-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded shrink-0 mt-0.5">
                        {faq.category}
                      </span>
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="pl-[72px]">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:info@cleanwaterndigbo.org" className="btn-secondary">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

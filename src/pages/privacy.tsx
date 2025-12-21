import { Shield, Lock, Eye, UserCheck, Zap, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  const privacyPoints = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access and misuse.',
    },
    {
      icon: Lock,
      title: 'Encrypted Information',
      description: 'All sensitive data is encrypted using SSL technology to ensure secure transmission and storage.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about what data we collect and how we use it in our operations.',
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have the right to access, update, or delete your personal information at any time.',
    },
  ];

  const sections = [
    {
      title: '1. Introduction',
      content: [
        'Clean Water Ndigbo ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
        'Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site. By accessing and using Clean Water Ndigbo, you acknowledge that you have read and understand our Privacy Policy.',
      ],
    },
    {
      title: '2. Information We Collect',
      content: [
        'We may collect information about you in a variety of ways depending on your interaction with us:',
        'Personal Identification Information: Name, email address, phone number, mailing address, donation amount, and any other information you voluntarily provide when contacting us or making a donation.',
        'Technical Information: IP address, browser type, operating system, pages visited, time spent on pages, and referring URL collected through cookies and analytics tools.',
        'Communication Information: Feedback, messages, and inquiries you send us through our contact forms or email.',
        'Payment Information: Credit card details, banking information, and transaction history (processed securely through third-party payment providers).',
      ],
    },
    {
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect for various purposes:',
        'Service Delivery: Processing donations, sending receipts, and updating you on project progress.',
        'Communication: Responding to inquiries, sending newsletters, updates about our initiatives, and event invitations.',
        'Improving Services: Analyzing user behavior to enhance our website functionality and user experience.',
        'Marketing: With your consent, sending you information about new projects, campaigns, and ways to support our mission.',
        'Legal Compliance: Meeting legal obligations, preventing fraud, and protecting the rights and safety of our organization and donors.',
        'Research: Understanding donor patterns and program effectiveness to improve our impact.',
      ],
    },
    {
      title: '4. Cookies and Tracking Technologies',
      content: [
        'Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and track your activities.',
        'Essential Cookies: Required for website functionality and security.',
        'Analytics Cookies: Help us understand how visitors use our site.',
        'Marketing Cookies: Used to deliver personalized content and track campaign effectiveness.',
        'You can control cookie settings through your browser preferences. However, disabling cookies may limit certain website features.',
      ],
    },
    {
      title: '5. Information Sharing and Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties. However, we may share information in these circumstances:',
        'Service Providers: We share information with trusted partners who help us deliver services (payment processors, email providers, hosting services).',
        'Legal Requirements: When required by law or to comply with court orders, we may disclose your information.',
        'Protect Rights: We may disclose information to protect our legal rights, privacy, safety, or that of our users.',
        'Business Transfers: If Clean Water Ndigbo is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.',
      ],
    },
    {
      title: '6. Data Security',
      content: [
        'We implement comprehensive security measures to protect your personal information:',
        'SSL Encryption: All data transmitted through our website is encrypted using Secure Sockets Layer (SSL) technology.',
        'Secure Servers: We use secure, password-protected servers to store sensitive information.',
        'Access Controls: Only authorized personnel have access to personal data, and they are bound by confidentiality agreements.',
        'Regular Audits: We conduct regular security audits and updates to prevent vulnerabilities.',
        'While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.',
      ],
    },
    {
      title: '7. Data Retention',
      content: [
        'We retain your personal information as long as necessary to fulfill the purposes for which it was collected:',
        'Donor Records: Maintained for at least 7 years for financial and tax compliance purposes.',
        'Contact Information: Retained until you request deletion or unsubscribe from communications.',
        'Website Analytics: Aggregated data is retained indefinitely; individual identifiable data is anonymized after 24 months.',
        'You can request deletion of your data at any time, except where we are legally required to retain it.',
      ],
    },
    {
      title: '8. Your Privacy Rights',
      content: [
        'Depending on your location, you may have certain rights regarding your personal information:',
        'Right to Access: You can request a copy of the personal information we hold about you.',
        'Right to Correction: You can request that we correct inaccurate information.',
        'Right to Deletion: You can request that we delete your personal information (subject to legal obligations).',
        'Right to Object: You can object to our processing of your data for certain purposes.',
        'Right to Data Portability: You can request your data in a portable format.',
        'To exercise these rights, contact us at privacy@cleanwaterndigbo.org',
      ],
    },
    {
      title: '9. Children\'s Privacy',
      content: [
        'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.',
        'For users between 13 and 18, we provide additional privacy protections and recommend parental guidance when using our website.',
      ],
    },
    {
      title: '10. Third-Party Links',
      content: [
        'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your information.',
      ],
    },
    {
      title: '11. Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with an updated "Last Modified" date.',
        'Your continued use of our website after changes constitutes your acceptance of the updated Privacy Policy.',
      ],
    },
    {
      title: '12. Contact Us',
      content: [
        'If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:',
        'Email: privacy@cleanwaterndigbo.org',
        'Phone: +234 801 234 5678',
        'Mailing Address: 123 Water Project Road, Independence Layout, Enugu State, Nigeria',
        'We will respond to your inquiries within 30 days.',
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At Clean Water Ndigbo, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This policy explains how we handle your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {privacyPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-8">
                <strong>Last Updated:</strong> December 2024
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="pb-8 border-b border-border last:border-b-0">
                    <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Questions About Your Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any concerns or requests regarding your personal information, we're here to help. Contact our privacy team anytime.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
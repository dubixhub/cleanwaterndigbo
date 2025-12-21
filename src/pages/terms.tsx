import { FileText, AlertCircle, CheckCircle, Scale, Lock, Users, Zap, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const TermsConditions = () => {
  const termsPoints = [
    {
      icon: Scale,
      title: 'Legal Agreement',
      description: 'These terms establish a legally binding agreement between you and Clean Water Ndigbo.',
    },
    {
      icon: AlertCircle,
      title: 'User Responsibilities',
      description: 'Users agree to use our services responsibly and in accordance with all applicable laws.',
    },
    {
      icon: Lock,
      title: 'Intellectual Property',
      description: 'All content on our website is protected by copyright and intellectual property laws.',
    },
    {
      icon: Users,
      title: 'User Conduct',
      description: 'We maintain standards for respectful and appropriate user behavior on our platform.',
    },
  ];

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
        'Clean Water Ndigbo reserves the right to modify these terms at any time. It is your responsibility to review these terms regularly for changes. Your continued use of this website following the posting of changes means that you accept and agree to the changes.',
      ],
    },
    {
      title: '2. Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials (information or software) on Clean Water Ndigbo\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
        'Modifying or copying the materials; Using the materials for any commercial purpose or for any public display (commercial or non-commercial); Attempting to decompile or reverse engineer any software contained on the website; Removing any copyright or other proprietary notations from the materials; Transferring the materials to another person or "mirroring" the materials on any other server.',
        'This license shall automatically terminate if you violate any of these restrictions and may be terminated by Clean Water Ndigbo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
      ],
    },
    {
      title: '3. Disclaimer',
      content: [
        'The materials on Clean Water Ndigbo\'s website are provided on an \'as is\' basis. Clean Water Ndigbo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, Clean Water Ndigbo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      ],
    },
    {
      title: '4. Limitations',
      content: [
        'In no event shall Clean Water Ndigbo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Clean Water Ndigbo or an authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
      ],
    },
    {
      title: '5. Accuracy of Materials',
      content: [
        'The materials appearing on Clean Water Ndigbo\'s website could include technical, typographical, or photographic errors. Clean Water Ndigbo does not warrant that any of the materials on the website are accurate, complete, or current. Clean Water Ndigbo may make changes to the materials contained on the website at any time without notice.',
        'Clean Water Ndigbo does not make any commitment to update the materials on the website.',
      ],
    },
    {
      title: '6. Links',
      content: [
        'Clean Water Ndigbo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Clean Water Ndigbo of the site. Use of any such linked website is at the user\'s own risk.',
        'If you believe that a link on our website violates any law or regulation, please report it to us immediately at terms@cleanwaterndigbo.org',
      ],
    },
    {
      title: '7. Modifications',
      content: [
        'Clean Water Ndigbo may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
      ],
    },
    {
      title: '8. Donations and Payments',
      content: [
        'All donations made through our website are voluntary contributions. By making a donation, you agree to provide accurate and complete information. Clean Water Ndigbo will use reasonable efforts to process donations securely using third-party payment processors.',
        'Donation receipts will be issued for tax purposes where applicable. All donations are non-refundable except as required by law. Clean Water Ndigbo reserves the right to decline donations from any source.',
        'You are responsible for any taxes or fees associated with your donation. Clean Water Ndigbo is not responsible for any charges imposed by your financial institution.',
      ],
    },
    {
      title: '9. User-Generated Content',
      content: [
        'Any content submitted by users to Clean Water Ndigbo (including comments, feedback, testimonials, and suggestions) may be used by Clean Water Ndigbo for any purpose without compensation to you. By submitting content, you grant Clean Water Ndigbo a worldwide, royalty-free license to use such content.',
        'You represent and warrant that you have all necessary rights to submit such content and that it does not infringe on any third-party intellectual property rights.',
        'Clean Water Ndigbo reserves the right to refuse or remove any user-generated content that violates these terms or is otherwise objectionable.',
      ],
    },
    {
      title: '10. User Conduct',
      content: [
        'You agree not to use the website or its services:',
        'To engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the website; To post or transmit hateful, threatening, obscene, defamatory, or otherwise objectionable material; To post or transmit any spam, unsolicited advertising, or promotional material; To engage in any form of harassment or discrimination; To access or search the website by any means other than our publicly supported interfaces; To interfere with or disrupt the website or servers or networks connected to the website.',
        'Violation of these standards may result in temporary or permanent suspension of your access to the website.',
      ],
    },
    {
      title: '11. Intellectual Property Rights',
      content: [
        'All content on this website, including text, graphics, logos, images, audio clips, and video clips, is the property of Clean Water Ndigbo or its content suppliers and is protected by international copyright and intellectual property laws.',
        'Except as expressly provided in these terms, no part of the website and no materials contained herein may be reproduced, distributed, transmitted, displayed, published, or broadcast in any media without prior written permission from Clean Water Ndigbo.',
      ],
    },
    {
      title: '12. Governing Law',
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts located in Enugu State, Nigeria.',
      ],
    },
    {
      title: '13. Severability',
      content: [
        'If any part of these terms and conditions is determined by a court of competent jurisdiction to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect to the maximum extent permitted by law.',
      ],
    },
    {
      title: '14. Contact Information',
      content: [
        'If you have any questions about these terms and conditions, please contact us:',
        'Email: terms@cleanwaterndigbo.org',
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
              <FileText className="w-4 h-4" />
              Please Read Carefully
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              These terms establish the legal agreement between you and Clean Water Ndigbo. By using our website and services, you agree to comply with these terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {termsPoints.map((point, index) => (
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

      {/* Terms Content */}
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

      {/* Acknowledgment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-primary mt-0.5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Important Acknowledgment
                </h3>
                <p className="text-muted-foreground mb-6">
                  By accessing and using Clean Water Ndigbo's website and services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions in their entirety. If you do not agree with any part of these terms, please discontinue use of our website immediately.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/" className="btn-primary inline-flex">
                    Accept & Continue
                  </a>
                  <a href="/privacy" className="btn-secondary inline-flex">
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
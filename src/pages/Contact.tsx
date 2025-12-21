import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['123 Water Project Road', 'Independence Layout', 'Enugu State, Nigeria'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 214 4050 380'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cleanwaterndigbo.org', 'support@cleanwaterndigbo.org'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8am - 5pm', 'Saturday: 9am - 1pm'],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Want to partner with us? We'd love to hear from you. Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground">
              Visit our office in Enugu State or view our operational areas across Southeast Nigeria.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63513574668!2d7.344972849999999!3d6.4420984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a463788e61e1%3A0x1a2d2d5ef5b8e8e0!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clean Water Ndigbo Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

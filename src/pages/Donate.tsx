import { useState } from 'react';
import { Heart, CreditCard, Building2, CheckCircle, ArrowRight, Droplets } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';

const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000, 100000];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    const numValue = parseInt(value.replace(/\D/g, ''));
    setCustomAmount(value);
    setAmount(numValue || '');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || amount < 100) {
      toast.error('Please enter a valid donation amount (minimum ₦100)');
      return;
    }

    if (!donorInfo.email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Thank you for your donation! A confirmation email has been sent.');
      // Reset form
      setAmount('');
      setCustomAmount('');
      setDonorInfo({ name: '', email: '', phone: '' });
    }, 2000);
  };

  const bankDetails = {
    bankName: 'First Bank of Nigeria',
    accountName: 'Clean Water Ndigbo Foundation',
    accountNumber: '2023456789',
    sortCode: '011151003',
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Make a Difference
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Your Donation Brings <span className="text-gradient">Clean Water</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every contribution helps us build wells, install water systems, and transform lives in Igbo communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Make Your Donation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleAmountSelect(preset)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          amount === preset
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-accent'
                        }`}
                      >
                        {formatCurrency(preset)}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                    <input
                      type="text"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
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
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="font-medium">Card/Transfer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('transfer')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'transfer'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                      <span className="font-medium">Bank Details</span>
                    </button>
                  </div>
                </div>

                {/* Bank Transfer Details */}
                {paymentMethod === 'transfer' && (
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <h4 className="font-medium text-foreground mb-3">Bank Transfer Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank Name:</span>
                        <span className="font-medium text-foreground">{bankDetails.bankName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Name:</span>
                        <span className="font-medium text-foreground">{bankDetails.accountName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Number:</span>
                        <span className="font-medium text-foreground">{bankDetails.accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sort Code:</span>
                        <span className="font-medium text-foreground">{bankDetails.sortCode}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      After transferring, please send proof of payment to donations@cleanwaterndigbo.org
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                {paymentMethod === 'card' && (
                  <button
                    type="submit"
                    disabled={isProcessing || !amount}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Donate {amount ? formatCurrency(Number(amount)) : 'Now'}
                        <Heart className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>

            {/* Impact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Your Impact
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every naira you donate goes directly towards providing clean water to communities in need. Here's what your donation can achieve:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { amount: '₦5,000', impact: 'Provides clean water for 1 family for 6 months' },
                  { amount: '₦25,000', impact: 'Supplies water filters for a classroom of 30 students' },
                  { amount: '₦100,000', impact: 'Contributes to borehole maintenance for a village' },
                  { amount: '₦500,000', impact: 'Helps fund a complete borehole project' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.amount}</div>
                      <div className="text-sm text-muted-foreground">{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-3">
                  Why Donate to Clean Water Ndigbo?
                </h3>
                <ul className="space-y-2">
                  {[
                    '85% of donations go directly to projects',
                    'Full transparency with regular updates',
                    'Sustainable, long-term solutions',
                    'Community-driven approach',
                    'Tax-deductible donations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  Need Help Donating?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is here to assist you with your donation or answer any questions.
                </p>
                <a
                  href="mailto:donations@cleanwaterndigbo.org"
                  className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:underline"
                >
                  donations@cleanwaterndigbo.org
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Droplets, Users, MapPin, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import cleanwater1 from '@/images/cleanwater1.jpg';
import cleanwater2 from '@/images/cleanwater2.jpg';
import cleanwater3 from '@/images/cleanwater3.jpg';
import communitywater from '@/images/communitywater.jpg';
import dirty1 from '@/images/dirty1.jpg';
import dirty2 from '@/images/dirty2.jpg';
import dirty3 from '@/images/dirty3.jpg';
import dirty4 from '@/images/dirty4.jpg';


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [cleanwater1, cleanwater2, cleanwater3, communitywater];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const impactStats = [
    { icon: Droplets, value: '20+', label: 'Water Projects' },
    { icon: Users, value: '1,000+', label: 'Lives Impacted' },
    { icon: MapPin, value: '75+', label: 'Communities Served' },
    { icon: Heart, value: '100+', label: 'Volunteers' },
  ];

  const features = [
    {
      title: 'Borehole Construction',
      description: 'Building sustainable boreholes to provide clean groundwater to rural communities.',
    },
    {
      title: 'Water Purification',
      description: 'Installing filtration systems to ensure water safety and quality standards.',
    },
    {
      title: 'Community Education',
      description: 'Teaching hygiene practices and water conservation to local communities.',
    },
    {
      title: 'Maintenance Programs',
      description: 'Training locals to maintain and repair water infrastructure independently.',
    },
  ];

  const waterCrisisImages = [
    {
      image: dirty1,
      title: 'Contaminated Sources',
      description: 'Many communities rely on contaminated water sources including stagnant ponds and polluted streams that pose serious health risks to families.',
    },
    {
      image: dirty2,
      title: 'Limited Access',
      description: 'Rural communities often travel miles daily to access water, spending countless hours on collection instead of education and work.',
    },
    {
      image: dirty3,
      title: 'Health Crisis',
      description: 'Waterborne diseases affect children and adults alike, leading to illness, missed school days, and reduced productivity.',
    },
    {
      image: dirty4,
      title: 'Infrastructure Gaps',
      description: 'Without proper water infrastructure, communities remain vulnerable to seasonal droughts and environmental contamination.',
    },
  ];

  return (
    <Layout>
      <style>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        .hero-title {
          animation: slideUpIn 0.8s ease-out;
        }

        .hero-subtitle {
          animation: slideUpIn 0.8s ease-out 0.2s both;
        }

        .hero-buttons {
          animation: slideUpIn 0.8s ease-out 0.4s both;
        }

        .hero-image {
          animation: slideInRight 0.8s ease-out 0.3s both;
        }

        .stat-item {
          animation: scaleIn 0.6s ease-out;
        }

        .stat-item:nth-child(1) { animation-delay: 0s; }
        .stat-item:nth-child(2) { animation-delay: 0.1s; }
        .stat-item:nth-child(3) { animation-delay: 0.2s; }
        .stat-item:nth-child(4) { animation-delay: 0.3s; }

        .about-image {
          animation: slideInLeft 0.8s ease-out;
        }

        .about-content {
          animation: slideInRight 0.8s ease-out;
        }

        .feature-card {
          animation: fadeIn 0.6s ease-out;
          transition: all 0.3s ease;
        }

        .feature-card:nth-child(1) { animation-delay: 0s; }
        .feature-card:nth-child(2) { animation-delay: 0.1s; }
        .feature-card:nth-child(3) { animation-delay: 0.2s; }
        .feature-card:nth-child(4) { animation-delay: 0.3s; }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .feature-card:hover .feature-icon {
          animation: float 1.5s ease-in-out infinite;
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .cta-content {
          animation: slideUpIn 0.8s ease-out;
        }

        .stat-icon {
          animation: float 3s ease-in-out infinite;
        }

        .decorator-circle {
          animation: pulse 3s ease-in-out infinite;
        }

        .card-item {
          animation: fadeIn 0.6s ease-out;
        }

        .card-item:nth-child(1) { animation-delay: 0s; }
        .card-item:nth-child(2) { animation-delay: 0.15s; }
        .card-item:nth-child(3) { animation-delay: 0.3s; }
        .card-item:nth-child(4) { animation-delay: 0.45s; }

        .crisis-card {
          animation: fadeIn 0.6s ease-out;
        }

        .crisis-card:nth-child(1) { animation-delay: 0s; }
        .crisis-card:nth-child(2) { animation-delay: 0.1s; }
        .crisis-card:nth-child(3) { animation-delay: 0.2s; }
        .crisis-card:nth-child(4) { animation-delay: 0.3s; }

        .crisis-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-section {
          min-height: 90vh;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 60vh;
            background-attachment: scroll;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 50vh;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section 
        className="hero-section relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />
        
        {/* Decorative Elements */}
        <div className="decorator-circle absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-5" />
        <div className="decorator-circle absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-5" />
        
        <div className="container-custom relative z-10 text-center max-w-3xl px-4 md:px-6">
          <span className="hero-subtitle inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-primary/90 rounded-full text-primary-foreground text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Droplets className="w-3 h-3 md:w-4 md:h-4" />
            Clean Water for All
          </span>
          <h1 className="hero-title font-serif text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Bringing <span className="text-yellow-300">Clean Water</span> to Igbo Communities
          </h1>
          <p className="hero-subtitle text-sm md:text-lg text-gray-100 mb-6 md:mb-8 px-2">
            Clean Water Ndigbo is dedicated to providing safe, sustainable, and accessible water solutions to communities across Igbo land in Nigeria.
          </p>
          <div className="hero-buttons flex flex-wrap gap-2 md:gap-4 justify-center">
            <Link to="/donate" className="btn-primary text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              Donate Now
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
            <Link to="/about" className="btn-secondary text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center text-primary-foreground"
              >
                <div className="stat-icon">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Crisis Section */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-red-600 font-medium text-sm uppercase tracking-wider">The Challenge</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              The Water Crisis
            </h2>
            <p className="text-muted-foreground">
              Millions in our communities struggle daily without access to clean water. This is the reality we're working to change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waterCrisisImages.map((item, index) => (
              <div
                key={index}
                className="crisis-card bg-white rounded-xl shadow-md overflow-hidden border border-red-100 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-image relative">
              <img
                src={communitywater}
                alt="Community water project"
                className="rounded-2xl shadow-lg w-full h-[450px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="about-content">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Making a Difference, One Drop at a Time
              </h2>
              <p className="text-muted-foreground mb-6">
                Clean Water Ndigbo was founded with a simple yet powerful vision: to ensure every Igbo community has access to clean, safe drinking water. We believe that water is a fundamental human right, and no community should be denied this basic necessity.
              </p>
              <ul className="space-y-3 mb-8">
                {['Sustainable water solutions', 'Community-driven approach', 'Transparent operations', 'Long-term impact focus'].map((item, i) => (
                  <li key={i} className="card-item flex items-center gap-3 text-foreground transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary transition-all duration-300 hover:shadow-lg hover:scale-105">
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeIn">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground">
              We implement comprehensive water projects that address the unique needs of each community we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="feature-icon w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fadeIn">
            <Link to="/what-we-do" className="btn-secondary transition-all duration-300 hover:shadow-lg hover:scale-105">
              Learn More About Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container-custom relative z-10">
          <div className="cta-content text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us in Making Clean Water Accessible
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your support can help us bring clean water to more communities. Every donation, no matter the size, makes a difference in someone's life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate" className="bg-background text-primary px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-background/90 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2">
                Make a Donation
                <Heart className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:shadow-lg hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
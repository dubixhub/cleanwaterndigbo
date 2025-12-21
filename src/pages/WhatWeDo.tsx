import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Shield, Droplets, Users, Wrench, BookOpen, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const WhatWeDo = () => {
  const objectives = [
    { icon: Droplets, title: 'Clean Water Access', description: 'Construct boreholes and wells to provide safe drinking water to underserved communities.' },
    { icon: Shield, title: 'Water Quality', description: 'Install purification and filtration systems to ensure water meets health standards.' },
    { icon: BookOpen, title: 'Health Education', description: 'Educate communities on hygiene practices and water conservation techniques.' },
    { icon: Users, title: 'Community Empowerment', description: 'Train local teams to manage and maintain water infrastructure independently.' },
    { icon: Wrench, title: 'Sustainable Systems', description: 'Build durable infrastructure designed to serve communities for decades.' },
    { icon: Heart, title: 'Partnerships', description: 'Collaborate with local governments, NGOs, and international partners for greater impact.' },
  ];

  const projects = [
    {
      title: 'Borehole Construction',
      description: 'We drill deep boreholes equipped with hand pumps or solar-powered systems to provide reliable groundwater access.',
      image: 'https://images.unsplash.com/photo-1625486972842-ddbb33c31848?w=400&h=300&fit=crop',
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Installing rainwater collection systems for schools and community centers to supplement water supply during dry seasons.',
      image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400&h=300&fit=crop',
    },
    {
      title: 'Water Treatment',
      description: 'Setting up community water treatment facilities that filter and purify water from local sources.',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=400&h=300&fit=crop',
    },
    {
      title: 'Sanitation Programs',
      description: 'Building latrines and promoting hygiene practices to reduce waterborne diseases in communities.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              What We Do
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Creating Lasting <span className="text-gradient">Water Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We implement comprehensive water projects tailored to the unique needs of each Igbo community we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary font-medium uppercase tracking-wider">Our Vision</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Future Where Water is a Right, Not a Privilege
              </h2>
              <p className="text-muted-foreground mb-6">
                We envision a future where every Igbo community—from the bustling cities of Enugu and Owerri to the most remote villages—has reliable access to clean, safe drinking water.
              </p>
              <p className="text-muted-foreground">
                In this future, children attend school instead of fetching water. Women have time for education and business. Families are free from waterborne diseases. Communities thrive because they have the foundation of life: clean water.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=450&fit=crop"
                alt="Children enjoying clean water"
                className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1541544741-fa7bf8d31082?w=600&h=450&fit=crop"
                alt="Water project installation"
                className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary font-medium uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sustainable Water Solutions for Every Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Our mission is to provide sustainable, community-driven water solutions that stand the test of time. We don't just build wells—we build capacity.
              </p>
              <ul className="space-y-3">
                {[
                  'Assess community needs and water sources',
                  'Design appropriate water solutions',
                  'Construct durable infrastructure',
                  'Train local maintenance teams',
                  'Provide ongoing support and monitoring',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm font-bold">{i + 1}</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Core Objectives</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Values & Objectives
            </h2>
            <p className="text-muted-foreground">
              These principles guide every project we undertake and every community we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl card-hover border border-border group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <obj.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {obj.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Projects</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Types of Water Projects
            </h2>
            <p className="text-muted-foreground">
              We implement various types of water solutions based on community needs and local conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-border"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Help Us Reach More Communities
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your donation directly funds water projects that transform lives. Join us in bringing clean water to Igbo communities.
          </p>
          <Link to="/donate" className="bg-background text-primary px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-all inline-flex items-center gap-2">
            Donate Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;

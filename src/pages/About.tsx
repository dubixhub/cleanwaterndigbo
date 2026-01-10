import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Award, Droplets } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import mrsngozi from '@/images/mrsngozi.jpeg';
import cleawatercharityproject from '@/images/cleawatercharityproject.jpg';

const About = () => {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'We deeply care about the wellbeing of every community we serve.' },
    { icon: Users, title: 'Community', description: 'We believe in empowering communities to sustain their water systems.' },
    { icon: Award, title: 'Integrity', description: 'We operate with complete transparency and accountability.' },
    { icon: Droplets, title: 'Sustainability', description: 'We build solutions that last for generations.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-water">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Our Story of <span className="text-gradient">Hope & Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about our journey, our mission, and the people behind Clean Water Ndigbo.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Who are We?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                 We are nonprofit organization working to bring water and sanitation to
Ndigbo in Nigeria. We help remove the barriers between people living in poverty and access to the safe water and sanitation solutions they need to survive and thrive, giving women hope, children health, and families a bright future.
                </p>
                <p>
                 The water crisis is a pressing issue that affects millions of people in the
impoverished Igboland areas in the Eastern part of Nigeria.
In some remotest part of Igboland, access to clean and safe drinking water is a daily struggle. Families are experiencing high water stress, and this situation is getting worse every day.

                </p>
                <p>
                  The consequences of this crisis are dire, leading to health problems,
economic instability, and social unrest. In these areas where water scarcity is prevalent, communities often face the harsh reality of waterborne diseases, malnutrition, and diminished quality of life. The challenges surrounding water access are multifaceted.
</p>
<p>
Providing clean water can significantly reduce the incidence of waterborne
diseases and improve overall public health
                </p>


              </div>
            </div>
            <div className="relative">
              <img
                src={cleawatercharityproject}
                alt="Community gathering around a new water source"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={mrsngozi}
                  alt="Founder of Clean Water Ndigbo"
                  className="rounded-2xl shadow-lg w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-primary/20 rounded-2xl -z-0" />
            </div>
            
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Founder</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Lady Ngozi Cordelia Nwankwo
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lady Ngozi Cordelia Nwankwo, a visionary philanthropist and passionate advocate for social change, is the Founder and driving force behind Clean Water Ndigbo. Her unwavering commitment to humanitarian work stems from a deep belief that access to clean water is not a luxury it is a fundamental human right that every person deserves.
                </p>
                <p>
                  Born from a personal mission to transform lives across Igboland, Lady Ngozi established Clean Water Ndigbo with a singular vision: to bring sustainable access to clean, safe drinking water to the remotest corners of Igboland where communities have been left behind by development. She recognized that millions of people in these regions struggle daily without access to this essential resource, and she made it her life's calling to change that reality.
                </p>
                <p>
                   The inspiration for this noble mission came when Lady Ngozi witnessed firsthand the harsh realities facing Igbo communities. She saw children, families, and entire villages forced to drink and cook with contaminated water from stagnant gutters, dirty pools, and other unsafe sources. She watched as people traveled miles each day just to collect water that would ultimately harm rather than sustain them. Most heartbreaking of all, she witnessed countless children suffering from preventable waterborne illnesses and compromised health due to lack of access to clean water and proper sanitation—illnesses that have robbed them of their childhood, education, and potential.
                </p>
                <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                  "Water is life. When we give a community clean water, we give them health, dignity, and hope for a better future. This is my life's work, and together, we will reach every Igbo community in need."
                </p>
                <p className="font-medium text-foreground">— Lady Ngozi Cordelia Nwankwo, Founder </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where every Ndigbo community has a sustainable access to clean, safe drinking water, free from waterborne diseases and the burden of water scarcity.
              </p>
            </div>
            
            <div className="bg-secondary p-8 rounded-2xl">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide sustainable water solutions through borehole construction, water purification systems, community education, and local capacity building across Igbo communities in Nigeria.
              </p>
            </div>

 <div className="bg-secondary p-8 rounded-2xl">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">We serve people living in poverty</h3>
              <p className="text-muted-foreground">
                Our solutions resonate with people living in poverty — specifically people who have enough income potential to take out a small water or sanitation loan, but who often cannot access the funds at an affordable rate or pay for solutions upfront.
Millions of people who live in some remote places in Igboland spend a full day looking for water. These are the people we work every day to help to have access to clean water..
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Guides Us
            </h2>
            <p className="text-muted-foreground">
              Our core values shape everything we do and how we serve our communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl text-center card-hover border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join us in our mission to bring clean water to every Igbo community. Your support makes a lasting difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="bg-background text-primary px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-all inline-flex items-center gap-2">
              Support Our Cause
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/10 transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
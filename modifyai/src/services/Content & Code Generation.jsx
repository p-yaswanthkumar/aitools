import React from "react";
import { motion } from "framer-motion";
import contentVideo from "../assets/content.mp4";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Content & Code Generation1.webp';
import agentImg from '../assets/Content & Code Generation2.png';
import bankingPng from '../assets/banking.jpg';
import ecomersPng from '../assets/ecomers.jpg';
import realEstatePng from '../assets/real estate.jpg';
import travelPng from '../assets/travel.jpg';
import medicalPng from '../assets/medical.jpg';
import educationPng from '../assets/education.jpg';
// Global styles for animations and effects
const styleSheet = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .benefit-glow {
    box-shadow: 0 4px 24px 0 #19e6f755, 0 1.5px 8px 0 #0002;
    transition: box-shadow 0.4s, transform 0.4s;
  }
  .feature-card {
    transition: all 0.3s ease;
  }
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(25, 230, 247, 0.2);
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('content-style')) {
  const style = document.createElement('style');
  style.id = 'content-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

// 1. HERO SECTION
const HeroSection = ({ theme }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className="relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[700px]"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={contentVideo}
    />
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10">
      <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#19e6f7] to-[#179b8e] bg-clip-text text-transparent">
        Content & Code Generation
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
        Create high-quality content and functional code instantly with AI-powered generation tools that understand context, style, and requirements.
      </motion.p>
      <motion.p variants={fadeUp} className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
        From blog posts and marketing copy to production-ready code snippets and full applications, our AI generates original, engaging content and functional code that scales with your needs.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => {
            const featuresSection = document.getElementById('features-section');
            featuresSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#179b8e] hover:to-[#19e6f7] transition-all duration-300 cursor-pointer text-lg"
        >
          Start Creating Content & Code
        </button>
      </motion.div>
    </div>
  </motion.section>
);

// 2. HOW IT WORKS SECTION
const HowItWorksSection = ({ theme }) => {
  const steps = [
    "Choose Content or Code Type",
    "Define Your Requirements",
    "Generate & Customize",
    "Review & Refine",
    "Export & Deploy"
  ];
  return (
    <section className={`py-20 px-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[#19e6f7] text-lg font-semibold mb-2">How it Works</div>
          <h2 className={`text-4xl md:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>
            Step-by-Step: Content & Code Creation
          </h2>
        </div>
        
        {/* Content and Image Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
            <ol className="space-y-6 mb-8 pb-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#19e6f7]/40 font-bold text-lg transition-all duration-300 group-hover:scale-110 ${theme === "dark" ? "bg-[#1a1a1a] text-white" : "bg-white text-black"}`}>{idx+1}</div>
                  <div className="flex flex-col">
                    <span className={`text-lg font-semibold transition-all duration-300 group-hover:text-[#19e6f7] ${theme === "dark" ? "text-white/90" : "text-black"}`}>{step}</span>
                  </div>
                </li>
              ))}
            </ol>
            <button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 px-7 py-3 rounded-lg bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white font-semibold text-lg shadow hover:from-[#179b8e] hover:to-[#19e6f7] transition-all duration-300 cursor-pointer"
            >
              Try Content & Code Generator
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-stretch justify-center">
            <div className={`relative w-full max-w-6xl rounded-2xl flex items-center justify-center ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"}`} style={{boxShadow:'0 0 0 2px #19e6f7/20'}}>
              <img src={howItWorksImg} alt="How it works" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. KEY FEATURES & BENEFITS SECTION (modern card layout)
const FeaturesBenefitsSection = ({ theme }) => {
  const features = [
    {
      title: "AI-Powered Content Creation",
      desc: "Generate blog posts, articles, marketing copy, and social media content with advanced natural language processing.",
      icon: "✍"
    },
    {
      title: "Code Generation & Snippets",
      desc: "Create functional code snippets, scripts, and full applications in multiple programming languages with AI assistance.",
      icon: "💻"
    },
    {
      title: "Multi-Language Support",
      desc: "Generate content in 25+ languages and code in Python, JavaScript, Java, C++, and more with native fluency.",
      icon: "🌍"
    },
    {
      title: "Style & Tone Customization",
      desc: "Adjust content tone (formal, casual, technical) and code style (clean, optimized, documented) to match your needs.",
      icon: "🎨"
    },
    {
      title: "SEO & Performance Optimization",
      desc: "Automatically optimize content for search engines and code for performance with intelligent suggestions.",
      icon: "🚀"
    },
    {
      title: "Real-Time Collaboration",
      desc: "Collaborate on content and code projects with team members, version control, and real-time editing capabilities.",
      icon: "👥"
    }
  ];
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === "dark" ? "text-black" : "text-white"}`}>Features & Benefits</h2>
          <div className="text-2xl font-semibold mb-4 text-white">Create Content & Code Like Never Before</div>
          <p className="text-xl mb-6 max-w-md text-white">Our AI-powered platform generates high-quality content and functional code, saving you hours of writing and development time while maintaining originality and creativity.</p>
          <ul className="list-disc pl-5 text-lg mb-8 space-y-2 text-white">
            <li>Generate content and code in seconds, not hours</li>
            <li>Maintain brand voice and coding standards</li>
            <li>24/7 content and code generation</li>
          </ul>
        </div>
        {/* Right: Feature Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-20 pb-20 justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className={`rounded-2xl shadow p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 h-88 min-w-[220px] ${theme === "dark" ? "bg-black" : "bg-white"}`}>
              <div className={`font-bold text-lg mb-3 ${theme === "dark" ? "text-white" : "text-[#179b8e]"}`}>{feature.title}</div>
              <div className={`text-sm flex-1 leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-700"}`}>{feature.desc}</div>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
};

// 4. BENEFITS SECTION (modern two-column layout)
const BenefitsSection = ({ theme }) => {
  const benefits = [
    "Reduce content creation time by up to 90% while maintaining high quality and originality across all generated materials.",
    "Generate production-ready code snippets and full applications with proper syntax, documentation, and best practices.",
    "Scale your content production and development workflow with unlimited generation capacity and team collaboration tools.",
    "24/7 availability for instant content and code creation, supporting multiple languages and programming frameworks.",
    "Built-in plagiarism detection and code validation to ensure originality and functionality of all generated output."
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>What kind of Benefit from this app</h2>
      </div>
      
      {/* Content and Image Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Image/Illustration */}
        <div className="flex-1 flex items-stretch justify-center">
          <div className="relative p-2 h-full">
            <img src={agentImg} alt="Content & Code Tools" className="w-full h-full object-contain rounded-2xl shadow-xl relative z-10" />
            {/* Glowing blue-teal border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center">
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`text-base leading-relaxed ${theme === "dark" ? "text-white" : "text-black"}`}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// 5. WHY CHOOSE THIS SECTION
const WhyChooseSection = ({ theme }) => {
  const reasons = [
    {
      title: "Advanced AI Technology",
      desc: "Built with cutting-edge natural language processing and code generation models for superior content and code quality.",
      stat: "99.8%"
    },
    {
      title: "Time & Cost Savings",
      desc: "Reduce content creation and development time by up to 90% while improving quality and consistency.",
      stat: "90%"
    },
    {
      title: "Scalable & Reliable",
      desc: "Handle unlimited content and code generation simultaneously with enterprise-grade reliability and performance.",
      stat: "99.9%"
    },
    {
      title: "Multi-Format Support",
      desc: "Generate content in any format and code in any language with seamless integration and export capabilities.",
      stat: "25+"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
          Why Choose <span className="text-[#19e6f7]">Our Content & Code Platform</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`flex items-start space-x-6 p-6 rounded-2xl border border-[#19e6f7]/20 ${theme === "dark" ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "bg-white"}`}
            >
              <div className="text-[#19e6f7] font-bold text-3xl min-w-[80px]">{reason.stat}</div>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>{reason.title}</h3>
                <p className={`leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{reason.desc}</p>
            </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// 5. REAL LIFE USE CASES & APPLICATIONS SECTION
const UseCasesSection = ({ theme }) => {
  const steps = [
    {
      icon: bankingPng,
      title: 'Banking & Finance',
      desc: 'Generate financial reports, compliance documentation, and automated trading algorithms with precision.'
    },
    {
      icon: ecomersPng,
      title: 'E-commerce',
      desc: 'Create product descriptions, marketing campaigns, and e-commerce platform code for seamless shopping experiences.'
    },
    {
      icon: realEstatePng,
      title: 'Real Estate',
      desc: 'Generate property listings, market analysis reports, and real estate management software solutions.'
    },
    {
      icon: travelPng,
      title: 'Travel & Hospitality',
      desc: 'Create travel guides, booking system code, and hospitality management content for enhanced guest experiences.'
    },
    {
      icon: medicalPng,
      title: 'Healthcare & Medical',
      desc: 'Generate medical documentation, patient education content, and healthcare management system code.'
    },
    {
      icon: educationPng,
      title: 'Education',
      desc: 'Create educational content, learning management systems, and interactive course materials with AI assistance.'
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight whitespace-nowrap text-black">
            Real-Life <span className="text-black">Use Cases</span> & Applications
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-black">
            Discover how content and code generation tools are revolutionizing businesses across industries, 
            providing intelligent content creation, accelerated development, and enhanced productivity. 
            Our solutions adapt to your specific industry needs, delivering measurable results and ROI.
          </p>
        </div>
                            {/* Timeline */}
                    <div className="relative">
                      {/* Timeline Line - behind circles, passing through their center */}
                      <div className="absolute left-0 right-0 top-12 h-0.5 bg-[#19e6f7] z-0"></div>
                      <div className="flex justify-between items-start w-full relative z-10">
                        {steps.map((step, index) => (
                          <div key={index} className="flex flex-col items-center w-1/6 min-w-[150px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer">
                            <div className="w-24 h-24 rounded-full border-2 border-[#19e6f7] bg-white flex items-center justify-center z-10">
                              <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
                            </div>
                            <div className="text-lg font-bold mt-2 mb-1 text-black"><span>{index + 1}. </span>{step.title}</div>
                            <div className="text-sm text-center max-w-[160px] text-black">{step.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
      </div>
    </section>
  );
};

// 6. PRICING SECTION
const PricingSection = ({ theme }) => {
const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      desc: "Perfect for individuals and small teams",
      features: [
        "Basic Content Generation",
        "Code Snippet Creation",
        "Up to 1,000 content pieces/month",
        "Email Support",
        "Basic Analytics",
        "Standard Integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      desc: "Ideal for growing businesses",
      features: [
        "Advanced Content & Code Generation",
        "Full Application Development",
        "Unlimited content generation",
        "Priority Support",
        "Advanced Analytics Dashboard",
        "Multi-platform Integration",
        "Custom Branding",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large organizations",
      features: [
        "Custom Content & Code Solutions",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Integrations",
        "Advanced Security",
        "SLA Guarantee",
        "On-premise Option",
        "White-label Solutions"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
          <span className="text-[#19e6f7]">Pricing</span> Plans
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
    <motion.div
              key={index}
              variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? `border-[#19e6f7] -mt-8 z-10 ${theme === "dark" ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "bg-black"}`
                  : `${theme === "dark" ? "border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "border-gray-300 bg-black"}`
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-white"}`}>{plan.name}</h3>
                <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-white/80"}`}>{plan.desc}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price}</span>
                  <span className={`ml-1 ${theme === "dark" ? "text-gray-400" : "text-white/80"}`}>{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className={`${theme === "dark" ? "text-gray-300" : "text-white/80"}`}>{feature}</span>
                  </li>
                ))}
            </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                  : `${theme === "dark" ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-800'}`
              }`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
};

// Main Component
const ContentGenerator = () => {
  const { theme } = useTheme();
  
  return (
    <main className={`${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}>
      <HeroSection theme={theme} />
      <HowItWorksSection theme={theme} />
      <FeaturesBenefitsSection theme={theme} />
      <BenefitsSection theme={theme} />
      <UseCasesSection theme={theme} />
      <PricingSection theme={theme} />
    </main>
  );
};

export default ContentGenerator;
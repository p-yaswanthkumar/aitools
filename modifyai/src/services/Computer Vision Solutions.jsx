import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/Computer Vision Solutions.mp4";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Computer Vision Solutions1.webp';
import agentImg from '../assets/Computer Vision Solutions2.jpg';
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

if (typeof document !== 'undefined' && !document.getElementById('computer-vision-style')) {
  const style = document.createElement('style');
  style.id = 'computer-vision-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// 1. HERO SECTION
const HeroSection = ({ theme }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className={`relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[700px]`}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={heroVideo}
    />
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10">
      <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#19e6f7] to-[#179b8e] bg-clip-text text-transparent">
        Computer Vision Solutions
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
        Advanced image and video analysis that sees, understands, and interprets visual data to automate processes and extract valuable insights in real-time.
      </motion.p>
      <motion.p variants={fadeUp} className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
        From object detection and facial recognition to quality inspection and document processing, our computer vision solutions transform how you analyze and interact with visual data.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => {
            const featuresSection = document.getElementById('features-section');
            featuresSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#179b8e] hover:to-[#19e6f7] transition-all duration-300 cursor-pointer text-lg"
        >
          Explore Vision Solutions
        </button>
      </motion.div>
    </div>
  </motion.section>
);

// 2. HOW IT WORKS SECTION
const HowItWorksSection = ({ theme }) => {
  const steps = [
    "Capture Visual Data",
    "Preprocess Images",
    "AI Analysis",
    "Extract Insights",
    "Generate Actions"
  ];
  return (
    <section className={`py-20 px-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[#19e6f7] text-lg font-semibold mb-2">How it Works</div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>Step-by-Step: Computer Vision Process</h2>
        </div>
        
        {/* Content and Image Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
            <ol className="space-y-6 mb-8 pb-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 bg-[#1a1a1a] border-[#19e6f7]/40 text-white font-bold text-lg transition-all duration-300 group-hover:scale-110">{idx+1}</div>
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
              className={`mt-2 px-7 py-3 rounded-lg font-semibold text-lg shadow transition-all duration-300 cursor-pointer ${theme === "dark" ? "bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white" : "bg-black text-white"}`}>Get Started with Vision</button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-stretch justify-center">
            <div className="relative w-full max-w-6xl bg-[#1a1a1a] rounded-2xl flex items-center justify-center" style={{boxShadow:'0 0 0 2px #19e6f7/20'}}>
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
      title: "Image Recognition",
      desc: "Identify objects, people, and scenes in images with high accuracy using advanced deep learning algorithms.",
      icon: "👁"
    },
    {
      title: "Video Analysis",
      desc: "Process and analyze video content for real-time insights, object tracking, and automated monitoring.",
      icon: "🎥"
    },
    {
      title: "Object Detection",
      desc: "Detect and track objects in images and videos for security, retail, and industrial applications.",
      icon: "🎯"
    },
    {
      title: "Facial Recognition",
      desc: "Identify and verify individuals for security, access control, and personalized user experiences.",
      icon: "👤"
    },
    {
      title: "Quality Inspection",
      desc: "Automate quality control processes in manufacturing with defect detection and measurement accuracy.",
      icon: "🔍"
    },
    {
      title: "Document Processing",
      desc: "Extract text and data from images and scanned documents with OCR and intelligent parsing.",
      icon: "📄"
    }
  ];
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Features & Benefits</h2>
          <div className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Create Content & Code Like Never Before</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Our AI-powered platform generates high-quality content and functional code, saving you hours of writing and development time while maintaining originality and creativity.</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>Generate content and code in seconds, not hours</li>
            <li>Maintain brand voice and coding standards</li>
            <li>24/7 content and code generation</li>
          </ul>
        </div>
        {/* Right: Feature Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-20 pb-20 justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className={`rounded-2xl shadow p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 h-88 min-w-[220px] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <div className={`font-bold text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature.title}</div>
              <div className={`text-sm flex-1 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature.desc}</div>
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
    "Automate visual processes and reduce manual work by up to 90% with intelligent computer vision algorithms.",
    "Enhance security and safety through real-time visual monitoring, detection, and alert systems.",
    "Ensure consistent quality with automated visual inspection that catches defects humans might miss.",
    "Extract valuable information from images and documents efficiently with OCR and data extraction.",
    "Lower operational costs through automated visual analysis and reduced manual inspection requirements.",
    "Get instant visual insights for faster decision-making and improved operational efficiency."
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>What kind of Benefit from this app</h2>
      </div>
      
      {/* Content and Image Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Image/Illustration */}
        <div className="flex-1 flex items-stretch justify-center">
          <div className="relative p-2 h-full">
            <img src={agentImg} alt="Computer Vision Tools" className="w-full h-full object-contain rounded-2xl shadow-xl relative z-10" />
            {/* Clean border only */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center">
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white" : "text-black"}`}>Our computer vision solutions deliver measurable business value, helping you automate visual tasks, boost efficiency, and reduce costs.</p>
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
      desc: "Built with state-of-the-art deep learning models and computer vision algorithms for superior accuracy.",
      stat: "99.5%"
    },
    {
      title: "Real-Time Processing",
      desc: "Analyze images and videos instantly with low latency and high throughput for immediate insights.",
      stat: "<50ms"
    },
    {
      title: "Multi-Format Support",
      desc: "Process images and videos in multiple formats including JPEG, PNG, MP4, and more with high compatibility.",
      stat: "20+"
    },
    {
      title: "Scalable Architecture",
      desc: "Handle unlimited visual processing requests with enterprise-grade reliability and performance.",
      stat: "99.9%"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-[#19e6f7]">Our Computer Vision Platform</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#19e6f7]/20"
            >
              <div className="text-[#19e6f7] font-bold text-3xl min-w-[80px]">{reason.stat}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
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
  const useCases = [
    {
      icon: bankingPng,
      title: 'Banking & Finance',
      desc: 'Document verification, fraud detection, and automated check processing with computer vision.'
    },
    {
      icon: ecomersPng,
      title: 'E-commerce',
      desc: 'Product recognition, visual search, and automated inventory management with image analysis.'
    },
    {
      icon: realEstatePng,
      title: 'Real Estate',
      desc: 'Property inspection, damage assessment, and automated property valuation using visual data.'
    },
    {
      icon: travelPng,
      title: 'Travel & Hospitality',
      desc: 'Guest recognition, security monitoring, and automated check-in systems with facial recognition.'
    },
    {
      icon: medicalPng,
      title: 'Healthcare & Medical',
      desc: 'Medical imaging analysis, patient monitoring, and automated diagnosis assistance.'
    },
    {
      icon: educationPng,
      title: 'Education',
      desc: 'Student attendance tracking, exam monitoring, and automated grading with visual recognition.'
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-black mb-6">Real-Life Use Cases & Applications</h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover how computer vision tools are revolutionizing businesses across industries, providing intelligent content creation, accelerated development, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
                <img src={useCase.icon} alt={useCase.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="font-bold text-base text-black mb-2">{idx + 1}. {useCase.title}</div>
              <div className="text-sm text-black leading-relaxed">{useCase.desc}</div>
            </div>
          ))}
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
      desc: "Perfect for small businesses",
      features: [
        "Basic Image Analysis",
        "Up to 1,000 images/month",
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
      desc: "Ideal for growing companies",
      features: [
        "Advanced Video Analysis",
        "Unlimited image processing",
        "Priority Support",
        "Advanced Analytics Dashboard",
        "Real-time Processing",
        "Custom Models",
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
        "Custom Vision Models",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Integrations",
        "Advanced Security",
        "SLA Guarantee",
        "On-premise Option"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          <span className="text-[#19e6f7]">Pricing</span> Plans
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
    <motion.div
              key={index}
              variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? 'border-[#19e6f7] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] -mt-8 z-10'
                  : 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]'
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name}</h3>
                <p className="mb-4 text-white/80">{plan.desc}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price}</span>
                  <span className="ml-1 text-white/80">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
            </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
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
const ComputerVisionApp = () => {
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

export default ComputerVisionApp;
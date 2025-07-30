import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRocket, FaBrain, FaEye, FaComments, FaChartLine, FaCogs, FaLightbulb, FaShieldAlt, FaUsers, FaGlobe, FaCode, FaDatabase, FaStar, FaAward, FaBolt, FaMagic, FaArrowRight, FaArrowLeft, FaPlay, FaCheck, FaIndustry, FaHospital, FaGraduationCap, FaShoppingCart, FaBuilding, FaMobile, FaLaptop, FaServer, FaCloud, FaLock, FaSync, FaChartBar, FaRobot, FaMicrochip } from 'react-icons/fa';
import serviceHero from '../assets/servicehero.jpg'; // Import hero background image
import serviceHeroVideo from '../assets/servicehero.mp4'; // Import hero background video
import aiChatbotsImg from '../assets/AI Chatbots & Assistants.png';
import computerVisionImg from '../assets/Computer Vision Solutions.jpeg';
import dataAnalysisImg from '../assets/Data Analysis & Forecasting.jpg';
import nlpImg from '../assets/NLP & Language Intelligence.jpg';
import automationImg from '../assets/Automation & Workflow Tools.jpg';
import contentCodeImg from '../assets/Content & Code Generation.jpg';
import discoveryAnalysisImg from '../assets/Discovery & Analysis.jpg';
import strategyPlanningImg from '../assets/Strategy & Planning.jpg';
import developmentTrainingImg from '../assets/Development & Training.jpg';
import deploymentSupportImg from '../assets/Deployment & Support.jpg';
import manufacturingImg from '../assets/manufacturing.jpg';
import healthcareImg from '../assets/healthcare.jpg';
import serviceCtaImg from '../assets/servicecta.jpg';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

const services = [
    {
      id: 1,
      title: "AI Chatbots & Assistants",
      description: "Our AI Chatbots & Assistants provide seamless, 24/7 customer engagement by understanding context and learning from every interaction. They automate routine queries, deliver personalized responses, and integrate effortlessly with your existing platforms. With advanced natural language processing, they ensure every conversation feels human. Empower your business to scale support and boost satisfaction effortlessly.",
      icon: FaComments,
      path: "/services/ai-chatbots",
      category: "automation",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready", "Analytics Dashboard"]
    },
    {
      id: 2,
      title: "Computer Vision Solutions",
      description: "Transform your visual data into actionable insights with our advanced Computer Vision Solutions. Our AI-powered systems excel at object detection, facial recognition, quality control, and automated visual inspections. From manufacturing quality assurance to security monitoring, our computer vision technology delivers real-time analysis with exceptional accuracy. Seamlessly integrate with your existing infrastructure and scale from small applications to enterprise-wide deployments.",
      icon: FaEye,
      path: "/services/computer-vision",
      category: "vision",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Real-time Processing", "High Accuracy Models", "Custom Training", "API Integration"]
    },
    {
      id: 3,
      title: "Data Analysis & Forecasting",
      description: "Unlock the full potential of your data with our comprehensive Data Analysis & Forecasting solutions. Our predictive analytics and machine learning models transform raw data into actionable insights and accurate future predictions. From trend analysis to demand forecasting, our AI algorithms help you make informed decisions that drive business growth. Experience real-time dashboards, automated reporting, and custom analytics tailored to your specific industry needs.",
      icon: FaChartLine,
      path: "/services/data-analysis",
      category: "analytics",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Predictive Modeling", "Real-time Analytics", "Custom Dashboards", "Automated Reports"]
    },
    {
      id: 4,
      title: "NLP & Language Intelligence",
      description: "Harness the power of language with our cutting-edge NLP & Language Intelligence solutions. Our advanced natural language processing capabilities enable sophisticated text analysis, sentiment detection, language translation, and intelligent content generation. Whether you need to analyze customer feedback, automate content creation, or build multilingual applications, our NLP technology provides the foundation for intelligent language understanding. Transform how you interact with text data across all your business applications.",
      icon: FaBrain,
      path: "/services/nlp-intelligence",
      category: "language",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Sentiment Analysis", "Text Classification", "Translation Services", "Content Generation"]
    },
    {
      id: 5,
      title: "Automation & Workflow Tools",
      description: "Streamline your business operations with our intelligent Automation & Workflow Tools designed to eliminate manual tasks and boost efficiency. Our AI-powered automation platforms seamlessly integrate with your existing systems to create intelligent workflows that adapt and learn from your business processes. From document processing to customer onboarding, our automation solutions reduce errors, accelerate delivery times, and free your team to focus on strategic initiatives. Experience the future of work with intelligent automation that scales with your business.",
      icon: FaCogs,
      path: "/services/automation-tools",
      category: "automation",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Process Automation", "Workflow Design", "Integration Hub", "Performance Monitoring"]
    },
    {
      id: 6,
      title: "Content & Code Generation",
      description: "Accelerate your development and creative processes with our AI-powered Content & Code Generation tools. Our advanced AI models help developers write cleaner, more efficient code while content creators produce engaging, high-quality material at scale. From automated code reviews to intelligent content optimization, our generation tools adapt to your style and requirements. Whether you're building applications or creating marketing content, our AI assistants work alongside your team to enhance productivity and maintain quality standards.",
      icon: FaCode,
      path: "/services/content-generation",
      category: "creation",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Code Generation", "Content Creation", "Template Library", "Quality Assurance"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: FaRocket, color: '#27bdb5' },
    { id: 'automation', name: 'Automation', icon: FaCogs, color: '#1de9b6' },
    { id: 'vision', name: 'Computer Vision', icon: FaEye, color: '#27bdb5' },
    { id: 'analytics', name: 'Analytics', icon: FaChartLine, color: '#1de9b6' },
    { id: 'language', name: 'NLP', icon: FaBrain, color: '#27bdb5' },
    { id: 'creation', name: 'Creation', icon: FaCode, color: '#1de9b6' }
  ];

  const industries = [
    { name: "Healthcare", icon: FaHospital, color: "#27bdb5", desc: "AI-powered diagnostics and patient care" },
    { name: "Education", icon: FaGraduationCap, color: "#1de9b6", desc: "Personalized learning experiences" },
    { name: "E-commerce", icon: FaShoppingCart, color: "#27bdb5", desc: "Smart recommendations and automation" },
    { name: "Finance", icon: FaBuilding, color: "#1de9b6", desc: "Risk assessment and fraud detection" },
    { name: "Manufacturing", icon: FaIndustry, color: "#27bdb5", desc: "Predictive maintenance and quality control" },
    { name: "Technology", icon: FaMicrochip, color: "#1de9b6", desc: "Software development and testing" }
  ];

  const techStack = [
    { name: "Python", icon: FaCode, color: "#27bdb5" },
    { name: "TensorFlow", icon: FaBrain, color: "#1de9b6" },
    { name: "React", icon: FaLaptop, color: "#27bdb5" },
    { name: "AWS", icon: FaCloud, color: "#1de9b6" },
    { name: "Docker", icon: FaServer, color: "#27bdb5" },
    { name: "PostgreSQL", icon: FaDatabase, color: "#1de9b6" }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-gray-50 text-black'}`}>
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-32 px-4 z-10 overflow-hidden min-h-[545px] flex flex-col items-center justify-center text-center">
      {/* Background Video */}
        <div className="absolute inset-0 z-0">
      <video
        autoPlay
            muted 
        loop
            className="w-full h-full object-cover"
            style={{ filter: theme === 'dark' ? 'brightness(0.5)' : 'brightness(0.7)' }}
      >
            <source src={serviceHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <span className="text-[#27bdb5] bg-[#27bdb514] rounded-full px-4 py-1 text-base font-medium tracking-wide">
              Discover AI Tools
            </span>
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
            Discover Our AI Services
          </h1>
          <p className="mb-8 text-center text-white text-lg max-w-2xl mx-auto">
            Explore a comprehensive suite of AI-powered solutions designed to automate, optimize, and transform your business.
          </p>
          <div className="flex justify-center w-full">
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-full px-10 py-3 text-lg shadow-lg"
            >
              View All Services
            </button>
          </div>
      </div>
    </section>
    
      {/* Our Services Section */}
      <section id="services-section" className="w-full py-24 px-4" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row${idx % 2 === 1 ? '-reverse' : ''} items-center gap-12`}
            >
              <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="w-full h-80 flex items-center justify-center bg-[#bfc1be] rounded-2xl shadow-lg">
                  {service.id === 1 ? (
                    <img src={aiChatbotsImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 2 ? (
                    <img src={computerVisionImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 3 ? (
                    <img src={dataAnalysisImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 4 ? (
                    <img src={nlpImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 5 ? (
                    <img src={automationImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 6 ? (
                    <img src={contentCodeImg} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    <service.icon className="text-[#27bdb5] text-8xl" />
                  )}
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{service.title}</h2>
                <p className="text-white text-lg mb-6 text-justify leading-relaxed">{service.description}</p>
                <button 
                  onClick={() => handleNavigation(service.path)}
                  className="bg-black hover:bg-[#111211] text-white font-bold rounded-full px-8 py-3 text-base shadow transition-colors border-none outline-none w-max"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#27bdb5] text-sm font-semibold mb-2 tracking-wider">HOW IT WORKS</div>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get Started with 4 Easy Steps</h2>
          </div>
          
          <div className="relative">
            {/* Dashed vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#27bdb5] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We begin by understanding your business needs, objectives, and challenges to create a tailored AI strategy that aligns with your goals and requirements.",
                  icon: FaLightbulb
                },
                {
                  step: "02",
                  title: "Strategy & Planning", 
                  description: "Our experts design a comprehensive AI solution architecture and roadmap, ensuring every aspect is carefully planned and optimized for your success.",
                  icon: FaBrain
                },
                {
                  step: "03",
                  title: "Development & Training",
                  description: "We build and train AI models using your data, ensuring high accuracy and performance standards that meet your specific business requirements.",
                  icon: FaCode
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "We launch and monitor AI solutions in production, providing ongoing support, optimization, and continuous improvement for your business.",
                  icon: FaRocket
                }
              ].map((method, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 relative ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text Column */}
                  <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8 md:pr-8">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{method.title}</h3>
                    <p className={`text-lg leading-relaxed text-justify ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>{method.description}</p>
                  </div>
                  
                  {/* Visual Column */}
                  <div className="md:w-1/2 w-full flex justify-center items-center relative">
                    <div className="relative">
                      {/* Icon Container - increased size */}
                                               <div className="w-64 h-40 bg-gradient-to-r from-[#0a2342] to-[#27bdb5] rounded-xl flex items-center justify-center">
                        {method.step === "01" ? (
                          <img src={discoveryAnalysisImg} alt="Discovery & Analysis" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "02" ? (
                          <img src={strategyPlanningImg} alt="Strategy & Planning" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "03" ? (
                          <img src={developmentTrainingImg} alt="Development & Training" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "04" ? (
                          <img src={deploymentSupportImg} alt="Deployment & Support" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                          <method.icon className="text-white text-4xl" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Numbered Badge positioned on the center line */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-[#27bdb5] z-10 hidden md:block" style={{ boxShadow: '0 0 20px #27bdb5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white font-bold text-xl">{method.step}</span>
                  </div>
                </div>
      ))}
    </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className={`w-full pt-12 px-0 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="w-full max-w-none">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#27bdb5] mb-6">Industries We Serve</h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>Our AI solutions empower a wide range of industries to innovate, automate, and grow. Explore the sectors we help transform with intelligent technology.</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row flex-wrap md:flex-nowrap">
              {/* Industry 1 */}
              <div className="relative w-full md:w-1/4 h-[32rem] group overflow-hidden">
                <img src={manufacturingImg} alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062731cc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
                    <p className="text-[#bfc1be] text-base">
                      <div className="text-justify">
                        AI-driven automation, predictive maintenance, and quality control for modern factories. Our intelligent solutions optimize production processes and enhance operational efficiency.
                      </div>
                    </p>
                  </div>
              </div>
              {/* Industry 2 */}
              <div className="relative w-full md:w-1/4 h-[32rem] group overflow-hidden">
                <img src={healthcareImg} alt="Healthcare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
                    <p className="text-[#bfc1be] text-base">
                      <div className="text-justify">
                        AI for diagnostics, patient care, and operational efficiency in healthcare systems. Our advanced algorithms assist in medical imaging analysis and treatment optimization.
                      </div>
                    </p>
                  </div>
              </div>
              {/* Industry 3 */}
              <div className="relative w-full md:w-1/4 h-[32rem] group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29828ecc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">Logistics</h3>
                    <p className="text-[#bfc1be] text-base">
                      <div className="text-justify">
                        Smart routing, demand forecasting, and supply chain optimization with AI. Our intelligent systems streamline transportation networks and optimize inventory management.
                      </div>
                    </p>
                  </div>
              </div>
              {/* Industry 4 with overlay */}
              <div className="relative w-full md:w-1/4 h-[32rem] group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111211cc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">Retail & eCommerce</h3>
                    <p className="text-[#bfc1be] text-base">
                      <div className="text-justify">
                        Personalized recommendations, inventory management, and customer insights powered by AI. Our solutions enhance customer experience through intelligent product suggestions and dynamic pricing strategies.
                      </div>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI & Privacy Section */}
      <section className="w-full py-24 px-4" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#1de9b6] text-sm font-semibold mb-2 tracking-wider">OUR COMMITMENT</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ethical AI & Privacy</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">We believe in responsible AI development that prioritizes transparency, fairness, and data protection. Our commitment to ethical practices ensures trust and reliability in every solution we deliver.</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Commitment Cards */}
            <div className="space-y-8">
              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Data Privacy & Security</h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  <div className="text-justify">
                    We implement enterprise-grade encryption, secure data handling practices, and strict access controls to protect your sensitive information. Our systems comply with GDPR, CCPA, and other global privacy regulations.
                  </div>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">GDPR Compliant</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">End-to-End Encryption</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">SOC 2 Type II</span>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bias-Free AI Development</h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  Our AI models are trained on diverse, representative datasets and undergo rigorous bias testing. We continuously monitor and audit our algorithms to ensure fair and equitable outcomes for all users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Diverse Training Data</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">Bias Detection</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Regular Audits</span>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Transparency & Explainability</h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  We believe in transparent AI that you can understand and trust. Our models provide clear explanations for their decisions, enabling you to validate results and build confidence in AI-powered solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Explainable AI</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">Decision Tracking</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Audit Trails</span>
                </div>
              </div>
            </div>

            {/* Right: Certifications & Compliance */}
            <div className="space-y-8">
              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>AI Ethics Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#27bdb5] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Human-Centric Design</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify">
                        Our AI solutions prioritize human well-being and dignity, ensuring AI enhances rather than replaces human capabilities.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#1de9b6] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Continuous Monitoring</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify">
                        Real-time monitoring systems track AI performance and detect potential biases throughout the AI lifecycle.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#27bdb5] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Stakeholder Engagement</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify">
                        We engage diverse stakeholders including users, communities, and experts to improve ethical AI practices.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#1de9b6] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Responsible Innovation</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify">
                        We balance innovation with responsibility, ensuring AI advancements benefit society while minimizing risks.
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our Privacy Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• We never sell, rent, or share your personal data with third parties</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• You have full control over your data with easy access and deletion options</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• All AI models are trained on anonymized data to protect individual privacy</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• Regular security audits and penetration testing ensure ongoing protection</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• Transparent privacy policies with clear explanations of data usage</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• End-to-end encryption protects your data in transit and at rest</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• Compliance with GDPR, CCPA, and other global privacy regulations</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• Regular privacy impact assessments and risk evaluations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Get Started with AI Today Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center" style={{maxHeight: '500px'}}>
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Get Started with AI Today<br />
              </h2>
              <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">
                  Ready to implement AI solutions? Our expert team will guide you through a simple 3-step process to get your AI tools up and running. From chatbots to data analysis, we'll help you choose and deploy the right solutions for your needs.
                </div>
              </p>
              <p className={`text-base mb-6 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">
                  Our comprehensive AI implementation process includes thorough assessment of your current systems, customized solution design, seamless integration with existing workflows, and ongoing support to ensure optimal performance.providing tailored recommendations that align with your business goals.
                </div>
              </p>
              <p className={`text-base mb-8 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">
                  Whether you're looking to automate customer service with intelligent chatbots or streamline operations with workflow automation, our experienced consultants will guide you every step of the way. Start your AI transformation journey today.
                </div>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    const servicesSection = document.getElementById('services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors border-none outline-none"
                >
                  Start Your AI Journey
                </button>
                <button 
                  onClick={() => handleNavigation('/contact-us')}
                  className="bg-transparent border border-[#27bdb5] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors"
                >
                  Contact Our Experts &rarr;
                </button>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center h-full">
              <div className="relative w-full max-w-md">
                <img 
                  src={serviceCtaImg} 
                  alt="AI Services CTA" 
                  className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  style={{height: '500px', filter: 'brightness(1.1)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
);
}
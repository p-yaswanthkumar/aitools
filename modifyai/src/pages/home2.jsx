import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/SecondHome/home2.mp4";
import { useTheme } from "../context/ThemeContext";
// import sofiaMuller from '../assets/SecondHome/Sofia Müller.jpg';
import drAlexCarter from '../assets/SecondHome/Dr. Alex Carter.jpg';
import ethanKim from '../assets/SecondHome/Ethan Kim .jpeg.jpg';
import lindaZhao from '../assets/SecondHome/Linda Zhao.jpg';
import miguelTorres from '../assets/SecondHome/Miguel Torres.webp';
import priyaSingh from '../assets/SecondHome/Priya Singh.webp';
import ceoImg from '../assets/SecondHome/ceo1.webp';
import { useScrollToTop } from '../hooks/useScrollToTop';
 // Add a world map SVG or PNG to your assets
function ExpertCard({ img, name, title, bio }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div 
      className={`expert-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt={name} className="expert-img" />
      <div className={`expert-info-container${hovered ? ' show' : ''}`}>
        <span className="expert-name">{name}</span>
        <span className="expert-underline"></span>
        <span className="expert-title">{title}</span>
        <span className="expert-bio">{bio}</span>
        <div className="expert-social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

const SecondHome = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const webinarCarouselRef = useRef(null);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts
  useScrollToTop();

  // Expert data
  const experts = [
    { img: drAlexCarter, name: 'Dr. Alex Carter', title: 'Lead AI Scientist', bio: 'Expert in machine learning and automation, with 10+ years in AI research and deployment.' },
    { img: priyaSingh, name: 'Priya Singh', title: 'Chief Data Officer', bio: 'Specialist in data analytics and security, helping businesses unlock actionable insights.' },
    { img: miguelTorres, name: 'Miguel Torres', title: 'AI Solutions Architect', bio: 'Architect of scalable AI systems, passionate about innovation and client success.' },
    { img: lindaZhao, name: 'Linda Zhao', title: 'Data Science Lead', bio: 'Leads data science teams to deliver actionable insights and drive business growth.' },
    { img: ethanKim, name: 'Ethan Kim', title: 'AI Product Manager', bio: 'Bridges the gap between business and technology, delivering user-focused AI products.' },
    // { img: sofiaMuller, name: 'Sofia Müller', title: 'Cloud AI Engineer', bio: 'Cloud-native AI specialist, ensuring seamless integration and deployment for clients worldwide.' }
  ];

  const nextExpert = () => {
    setCurrentExpertIndex((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpertIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const getExpertIndex = (offset) => {
    return (currentExpertIndex + offset + experts.length) % experts.length;
  };

  const scrollWebinars = (direction) => {
    const container = webinarCarouselRef.current;
    if (!container) return;
    const scrollAmount = 440; // slightly more than card min-width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Webinar data for the calendar grid
  const webinarData = [
    {
      date: "June 28, 2024",
      title: "AI in Action: Transforming Business Operations",
      description: "Join our experts for a live session on how AI is revolutionizing workflows, boosting productivity, and driving innovation across industries.",
      time: "4:00 PM GMT"
    },
    {
      date: "July 12, 2024",
      title: "NLP for Business: Unlocking Language Data",
      description: "Discover how natural language processing is transforming customer insights and automating communication.",
      time: "3:00 PM GMT"
    },
    {
      date: "July 26, 2024",
      title: "Automation & Workflow Tools in Practice",
      description: "See real-world examples of how automation is streamlining business processes and saving time.",
      time: "5:00 PM GMT"
    },
    {
      date: "August 9, 2024",
      title: "Data Analysis & Forecasting with AI",
      description: "Learn how to turn raw data into actionable insights and accurate forecasts using AI analytics.",
      time: "2:00 PM GMT"
    },
    // Add more webinars as needed
  ];

  const WebinarFeaturedList = () => {
    const [featured, ...others] = webinarData;
    return (
      <section className="py-20 px-4 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-[#19bba6] to-[#0a2342]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Upcoming <span className="text-[#19e6f7]">Webinars</span></h2>
        {/* Featured Webinar */}
        <div className={`max-w-3xl w-full rounded-2xl shadow-2xl p-8 mb-10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
          <div className="text-[#19e6f7] text-lg font-bold mb-2">{featured.date} &bull; {featured.time}</div>
          <div className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{featured.title}</div>
          <p className={`mb-6 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>{featured.description}</p>
          <a href="#" className="inline-block font-bold text-lg px-10 py-4 rounded-lg shadow transition text-white" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}>Register</a>
        </div>
        {/* List of Other Webinars */}
        <div className="max-w-6xl w-full flex flex-row gap-6 justify-center items-stretch">
          {others.map((webinar, idx) => (
            <div key={idx} className={`flex-1 max-w-xs rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
              <div className="text-[#19e6f7] text-base font-bold mb-1">{webinar.date} &bull; {webinar.time}</div>
              <div className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{webinar.title}</div>
              <a href="#" className="mt-4 inline-block font-bold text-base px-6 py-2 rounded-lg shadow transition text-white" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}>Register</a>
            </div>
          ))}
        </div>
      </section>
    );
  };



  // Sticky stack cards for upcoming webinars/events
  
  const EventCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselEvents.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselEvents.length - 1 : prevIndex - 1
      );
    };

    const getCardIndex = (offset) => {
      const index = (currentIndex + offset + carouselEvents.length) % carouselEvents.length;
      return index;
    };

    return (
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">Future <span className="text-[#19e6f7]">Events</span></h2>
          
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Cards */}
            <div className="flex items-center justify-center gap-8 relative">
                             {/* Left Card */}
               <div className="relative transform transition-all duration-500 ease-in-out">
                 <div className="w-72 h-88 bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                   <div className="w-full h-[50%] relative">
                     <img 
                       src={carouselEvents[getCardIndex(-1)].image} 
                       alt={carouselEvents[getCardIndex(-1)].title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                     <div>
                       <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(-1)].title}</h3>
                       <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(-1)].date} • {carouselEvents[getCardIndex(-1)].time}</p>
                     </div>
                     <a href="#" className="inline-block font-bold text-sm px-4 py-2 rounded-lg shadow-lg transition text-white hover:scale-105 text-center" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}>
                       Register Now
                     </a>
                   </div>
                 </div>
               </div>

              {/* Center Card (Main) */}
              <div className="relative transform transition-all duration-500 ease-in-out z-10">
                <div className="w-80 h-96 bg-[#232323] rounded-2xl shadow-2xl overflow-hidden scale-110">
                  <div className="w-full h-[50%] relative">
                    <img 
                      src={carouselEvents[currentIndex].image} 
                      alt={carouselEvents[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-[50%] p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{carouselEvents[currentIndex].title}</h3>
                      <p className="text-[#19e6f7] text-sm mb-2">{carouselEvents[currentIndex].date} • {carouselEvents[currentIndex].time}</p>
                      <p className="text-[#bfc1be] text-sm">{carouselEvents[currentIndex].description}</p>
                    </div>
                    <a href="#" className="inline-block font-bold text-sm px-6 py-2 rounded-lg shadow transition text-white text-center" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>

                             {/* Right Card */}
               <div className="relative transform transition-all duration-500 ease-in-out">
                 <div className="w-72 h-88 bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                   <div className="w-full h-[50%] relative">
                     <img 
                       src={carouselEvents[getCardIndex(1)].image} 
                       alt={carouselEvents[getCardIndex(1)].title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                     <div>
                       <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(1)].title}</h3>
                       <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(1)].date} • {carouselEvents[getCardIndex(1)].time}</p>
                     </div>
                     <a href="#" className="inline-block font-bold text-sm px-4 py-2 rounded-lg shadow-lg transition text-white hover:scale-105 text-center" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}>
                       Register Now
                     </a>
                   </div>
                 </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
  };

 

  return (
    <div className={`${theme === "dark" ? "bg-[#121212] text-white" : "bg-gray-50 text-black"}`}>
      {/* 1. Hero/Intro Section */}
      <section
        className={`${theme === "dark" ? "relative text-white py-12 shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[670px] flex items-center justify-center" : "relative text-black py-12 shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-gray-100 min-h-[750px] flex items-center justify-center"}`}
        style={{
          backgroundImage: `url(${heroVideo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.50)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-60' : ''}`}></div>
        <div className="relative z-10 max-w-3xl px-4 py-8 flex flex-col items-center justify-center text-center mx-auto" style={{textShadow: theme === 'dark' ? '0 2px 16px #000, 0 1px 2px #000' : 'none'}}>
          <span className="uppercase text-sm font-semibold tracking-widest text-[#19e6f7] mb-6">AI Solutions</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight whitespace-nowrap text-white">Revolutionize Your Workflow with <span style={{color: '#19e6f7'}}>AI</span></h1>
          <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-white">Harness the power of next-gen artificial intelligence to automate, analyze, and accelerate your business.</h2>
          <p className="text-lg md:text-xl mb-10 text-white">From task automation to advanced data analytics and intelligent decision-making, our AI tools empower teams to work smarter—not harder. Whether you're a startup or a large enterprise, our scalable AI solutions adapt to your needs and transform the way you operate.</p>
          <button 
            onClick={() => handleNavigation('/contact-us')}
            className="inline-block px-10 py-4 rounded-full font-bold text-lg text-white hover:scale-105 transition-transform duration-300"
            style={{backgroundColor: '#19e6f7', marginBottom: '0.5rem'}}>
            Get Started Free
          </button>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-0" style={{ background: '#000' }}>
        <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left: Heading and Subtitle */}
          <div className="flex-1 flex flex-col justify-start items-start px-12 py-16" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #0a2342, #1de9b6)' : '#19e6f7', minWidth: 320 }}>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Why Choose Us?</h2>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-white'}`}>Proven Results & Trusted Excellence</h3>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">
                The numbers speak for themselves. Our track record of delivering exceptional AI solutions has earned us the trust of leading businesses worldwide.
              </div>
            </p>
            <p className={`text-base mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">
                From startups to Fortune 500 companies, we've consistently delivered measurable results that drive growth, efficiency, and innovation. Our commitment to excellence is reflected in every project we undertake.
              </div>
            </p>
            <p className={`text-base mb-6 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">
                With cutting-edge AI technology, expert teams, and a customer-first approach, we transform complex challenges into elegant solutions. Our comprehensive suite of AI tools and services ensures that every business, regardless of size, can harness the power of artificial intelligence to achieve their goals.
              </div>
            </p>
            <button 
              onClick={() => handleNavigation('/about-us')}
              className="inline-block font-bold text-base px-8 py-3 rounded-lg shadow-lg transition text-white hover:scale-105"
              style={{background: '#000'}}>
              Read More
            </button>
          </div>
          {/* Right: Stats */}
          <div className="flex-1 flex flex-col justify-start gap-8 bg-white px-12 py-16 relative">
            {/* Stat 1 */}
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} className="flex items-center gap-6 relative group hover:z-10" style={{ zIndex: 2, transition: 'z-index 0.2s' }}>
                <div className={`w-20 h-20 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg border-4 absolute -left-20 group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-[#181818] text-white border-white' : 'bg-white text-black border-white'}`}>{i+1}</div>
                <div className="ml-16 group-hover:scale-105 transition-transform duration-300">
                  <div className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-[#0a2342]' : 'text-[#0a2342]'}`}>{[
                    '95% Customer Satisfaction',
                    '88% Faster Project Delivery',
                    '99.9% Data Security',
                    '92% Repeat Clients',
                    '85% Cost Savings',
                    '100% Uptime',
                  ][i]}</div>
                  <div className={`text-base ${theme === 'dark' ? 'text-[#181818]' : 'text-[#181818]'}`}>{[
                    'Our clients consistently rate us as excellent for support and results.',
                    'AI automation helps teams deliver projects ahead of schedule.',
                    'Enterprise-grade encryption keeps your data safe and compliant.',
                    'Most of our clients return for new projects and ongoing support.',
                    'Our automation tools help businesses reduce operational costs.',
                    'Our cloud-based solutions ensure your business is always online.',
                  ][i]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .expert-card {
          position: relative;
          max-width: 250px;
          height: 350px;
          border-radius: 10px;
          overflow: hidden;
          background: #181818;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s;
          box-shadow: 0 4px 24px 0 #0004;
        }
        .expert-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 #0006;
        }
        .expert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: filter 0.5s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-img {
          filter: blur(4px) brightness(0.7);
        }
        .expert-info-container {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          background: rgba(24,24,24,0.7);
          padding: 1.5rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-info-container {
          opacity: 1;
          transform: translateY(0);
        }
        .expert-name {
          color: #fff;
          font-size: 1.15rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }
        .expert-underline {
          height: 3px;
          background: #19e6f7;
          width: 0;
          margin-top: 4px;
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-underline {
          width: 100%;
        }
        .expert-title {
          color: #19e6f7;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          margin-top: 0.75rem;
        }
        .expert-bio {
          color: #bfc1be;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .expert-btn {
          background: #19e6f7;
          color: #181818;
          font-weight: bold;
          border-radius: 4px;
          padding: 0.25rem 0.75rem;
          font-size: 0.95rem;
        }
        .expert-social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-social-icons {
          opacity: 1;
          transform: translateY(0);
        }
        .social-icon {
          color: #19e6f7;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(25, 230, 247, 0.1);
        }
        .social-icon:hover {
          color: #fff;
          background: #19e6f7;
          transform: scale(1.1);
        }
      `}</style>
      <section className="py-16 px-4" style={{ background: theme === 'dark' ? '#111211' : '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Meet Our </span>
            <span className="text-[#19e6f7]">Experts</span>
          </h2>
          <p className={`text-center mb-8 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
            Connect with our AI specialists and get personalized solutions for your business needs.
          </p>
          
          {/* Expert Carousel */}
          <div className="relative w-full max-w-6xl">
            {/* Left Arrow */}
            <button 
              onClick={prevExpert}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextExpert}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Expert Cards Container */}
            <div className="flex items-center justify-center gap-8 relative">
              {/* Left Card (Blurred) */}
              <div className="transform transition-all duration-500 ease-in-out opacity-60 blur-sm scale-75 -translate-y-8">
                <ExpertCard 
                  img={experts[getExpertIndex(-1)].img} 
                  name={experts[getExpertIndex(-1)].name} 
                  title={experts[getExpertIndex(-1)].title} 
                  bio={experts[getExpertIndex(-1)].bio} 
                />
              </div>
              
              {/* Center Card (Main - Scaled) */}
              <div className="transform transition-all duration-500 ease-in-out z-10 scale-110">
                <ExpertCard 
                  img={experts[currentExpertIndex].img} 
                  name={experts[currentExpertIndex].name} 
                  title={experts[currentExpertIndex].title} 
                  bio={experts[currentExpertIndex].bio} 
                />
              </div>
              
              {/* Right Card (Blurred) */}
              <div className="transform transition-all duration-500 ease-in-out opacity-60 blur-sm scale-75 -translate-y-8">
                <ExpertCard 
                  img={experts[getExpertIndex(1)].img} 
                  name={experts[getExpertIndex(1)].name} 
                  title={experts[getExpertIndex(1)].title} 
                  bio={experts[getExpertIndex(1)].bio} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>


  
      <section className="py-20 px-4 min-h-[300px] flex items-center justify-center" style={{background: 'linear-gradient(35deg,rgb(43, 144, 112) 0%,rgb(46, 136, 199) 100%)', position: 'relative'}}>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-36 py-16 relative">
          {/* CEO Image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img src={ceoImg} alt="CEO" className="w-[440px] h-[500px] object-cover rounded-2xl shadow-xl border-4 border-white" />
          </div>
          {/* Message Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Meet Our <span className="text-[#19e6f7]">CEO</span></h2>
          <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-lg mb-4">
            <div className="text-justify">
              With over 20 years of leadership in the technology sector, our CEO has guided the company through rapid growth and innovation. Their vision for integrating artificial intelligence into everyday business processes has transformed the way we deliver value to our clients. 
              <br /><br />
              Under their direction, our team has launched groundbreaking AI solutions that empower organizations to automate workflows, gain actionable insights, and stay ahead in a competitive market. Their commitment to excellence, integrity, and customer success is at the heart of everything we do.
              <br /><br />
              Discover how our CEO's passion for technology and people is shaping the future of our company and the industry as a whole.
            </div>
          </p>
            <div className="mt-4">
              <div className="text-xl font-bold">Demish Tornado</div>
              <div className="text-[#e0dbe6] text-base">CEO & Founder</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-20" style={{ background: theme === 'dark' ? '#181818' : '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 ml-30">
          {/* Left: Heading, para, button */}
          <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Insights</h2>
            <div className="text-[#19e6f7] text-lg font-semibold ">Your source for practical AI knowledge</div>
            <p className={`text-md md:text-lg mb-2 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <div className="text-justify">
                Stay ahead with the latest trends, tips, and real-world stories about AI, automation, and digital transformation for your business. Explore our expert insights and practical guides to help you succeed in the AI era.
              </div>
            </p>
            <p className={`text-md md:text-lg mb-6 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <div className="text-justify">
                Discover how leading companies are leveraging AI to drive innovation and achieve measurable results.
              </div>
            </p>
            <ul className={`mb-8 pl-5 list-disc text-base space-y-2 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <li>Real-world case studies and success stories</li>
              <li>Actionable AI implementation tips</li>
              <li>Security, compliance, and best practices</li>
            </ul>
            <a href="/blog" className="inline-block font-bold text-lg px-8 py-3 rounded-full shadow transition text-white" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #19e6f7 100%)'}}>Read More Insights</a>
          </div>
          {/* Right: 2x2 grid of cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0 w-full">
            <div className="bg-[#232323] shadow-2xl p-8 flex flex-col mb-0" style={{background: 'linear-gradient(0deg,rgb(57, 175, 186) 10%,rgb(21, 21, 21) 80%)'}}>
              <h3 className="text-lg font-bold text-white mb-2">How AI is Changing the Future of Work</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">
                  Explore the latest trends in AI-driven automation and what it means for businesses of all sizes.
                </div>
              </p>
            </div>
            <div className="bg-[#232323]  shadow-2xl p-8 flex flex-col mb-0">
              <h3 className="text-lg font-bold text-white mb-2">5 Ways to Secure Your Data with AI</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">
                  Learn practical strategies for leveraging AI to enhance your organization's data security and compliance.
                </div>
              </p>
            </div>
            <div className="bg-[#232323]  shadow-2xl p-8 flex flex-col mb-0">
              <h3 className="text-lg font-bold text-white mb-2">AI Trends to Watch in 2024</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">
                  Stay ahead of the curve with the latest trends and predictions in artificial intelligence.
                </div>
              </p>
            </div>
            <div className="bg-[#232323] shadow-2xl p-8 flex flex-col mb-0" style={{background: 'linear-gradient(0deg, #19e6f7 0%, #232323 80%)'}}>
              <h3 className="text-lg font-bold text-white mb-2">Getting Started with AI in Your Business</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">
                  A practical guide to implementing AI solutions and driving digital transformation.
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      
      {/* Meet Our Experts */}
      
      
      <WebinarFeaturedList />

     

      {/* Insights Blog */}
      
    </div>
  );
};

export default SecondHome;
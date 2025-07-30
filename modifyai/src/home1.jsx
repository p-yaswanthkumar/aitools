import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import homeHero from './assets/homehero2.png';
import homeHeroVideo from './assets/homepagehero.mp4';
import ctaHome from './assets/ctahome.jpeg';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useTheme } from './context/ThemeContext';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Additional scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  const testimonials = [
    {
      id: 1,
      name: "Aarav",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      stars: "★★★★★",
      text: "Joining this platform was the best decision for my business. The expert AI tools and personalized support helped me automate workflows!",
      handle: "@aarav.brown"
    },
    {
      id: 2,
      name: "Hindley Ernshaw",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: "★★★★★",
      text: "The AI-powered chatbots and workflow tools are a game changer. Highly recommend for any business looking to scale with AI.",
      handle: "@hindley.es"
    },
    {
      id: 3,
      name: "Victoria Weirro",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: "★★★★★",
      text: "The AI analytics dashboard gave me insights I never had before. The support team is unmatched!",
      handle: "Femmetrain Oslo Co."
    },
    {
      id: 4,
      name: "Lina Gomez",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: "★★★★★",
      text: "The transformation programs are amazing! I gained confidence and strength with this amazing platform.",
      handle: "Member"
    },
    {
      id: 5,
      name: "Basil Nishved",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      stars: "★★★★★",
      text: "The AI tools and expert advice keep me on track. I have never felt more supported in my business journey!",
      handle: "Co-Founder Grandcoz"
    },
    {
      id: 6,
      name: "Samuel Lee",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      stars: "★★★★★",
      text: "Exceptional platform! The range of AI tools available has helped our team innovate faster and deliver better results.",
      handle: "@samuel.lee"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false);
    // Resume auto-play after 3 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const { theme } = useTheme();

  return (
    <>
      <section className={`w-full min-h-[545px] flex items-center px-4 pt-16 md:pt-20 overflow-hidden relative ${theme === 'dark' ? '' : 'bg-gray-100'}`}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
            muted 
          loop
            className="w-full h-full object-cover"
            style={{ filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(0.9)' }}
        >
            <source src={homeHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-start items-center z-10 max-w-full w-full mx-auto pl-8 md:pl-0 pt-8 mt-0">
          <div className="mb-4">
            <span className="text-[#27bdb5] bg-[#27bdb514] rounded-full px-4 py-1 text-base font-medium tracking-wide ">
              Discover AI Tools
            </span>
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight max-w-6xl">
            The Ultimate Platform for<br />
            <span className="text-[#27bdb5]">AI</span> Tools & Automation
          </h1>
          <p className="mb-8 text-center text-white text-lg max-w-lg">
            Explore, compare, and leverage the best AI tools for productivity, automation, content creation, analytics, and more all in one place.
          </p>
          <div className="flex justify-center mb-8 mt-4 w-full">
            <button 
              onClick={() => handleNavigation('/services')}
              className="bg-gradient-to-r from-[#27bdb5] to-[#12716c] text-white font-bold rounded-full px-10 py-3 text-lg shadow-lg"
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <section className={`w-full py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-4 mx-auto ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
         {/* Left: Text Content */}
         <div className="flex-1 max-w-lg pl-4 md:pl-8">
           <div className="text-[#27bdb5] text-sm font-semibold mb-2 tracking-wider">WHO WE ARE</div>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
             Your Trusted <span className="text-[#1de9b6]">AI</span> Innovation Partner
           </h2>
          <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-base md:text-lg mb-6`}>
            <div className="text-justify">
            We are a passionate team dedicated to making artificial intelligence accessible and practical for everyone. Our platform curates, reviews, and showcases the best AI tools for productivity, automation, analytics, and creativity. Whether you're a business, developer, or enthusiast, we help you discover and leverage the right AI solutions to transform your workflow and unlock new possibilities.
            </div>
          </p>
          <button 
            onClick={() => handleNavigation('/about-us')}
            className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-full px-6 py-2 text-base shadow transition-colors border-none outline-none"
          >
            Know More
          </button>
         </div>
         {/* Right: Service Cards */}
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg items-stretch h-full">
          {[0,1,2,3].map((i) => (
            <div
              key={i}
              className="wipe-card rounded-lg p-6 flex flex-col items-start shadow-lg h-full min-h-[180px] flex-1"
              style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)', animationDelay: `${0.2 + i*0.2}s` }}
            >
              <div className="text-white font-bold text-lg mb-1">{[
                'Expert Team',
                'Trusted by Industry Leaders',
                'Community Driven',
                'Innovation & Integrity',
              ][i]}</div>
              <div className="text-white text-sm">
                {[
                  'A diverse group of AI enthusiasts, engineers, and innovators committed to driving progress in artificial intelligence.',
                  'Our platform is relied upon by top companies and professionals to discover, evaluate, and implement cutting-edge AI solutions.',
                  'We foster a collaborative environment where users can share, review, and discover the best AI tools together.',
                  'We value creativity, transparency, and ethical AI development in everything we do.',
                ][i]}
           </div>
           </div>
          ))}
         </div>
       </section>

             <section className="w-full py-20 px-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }}>
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
           {/* Left Circle */}
           <div className="service-circle flex-shrink-0 flex flex-col items-center justify-center mr-0 md:mr-12 mb-8 md:mb-0">
             <div className="p-1 rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #0a2342, #1de9b6)' : 'linear-gradient(135deg, #b2dfdb, #4dd0e1)' }}>
               <div className={`rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-xl ${theme === 'dark' ? 'bg-[#27bdb5]' : 'bg-[#4dd0e1]'}`}>
                 <div className="text-white text-2xl font-bold mb-2">OUR SERVICES</div>
                 <div className="text-white text-lg font-semibold">WHAT WE DO</div>
               </div>
             </div>
           </div>
           {/* Right: Service Cards */}
           <div className="flex-1 flex flex-col gap-6 w-full">
             {[0,1,2,3,4].map((i) => (
               <div
                 key={i}
                 className={`service-card flex items-center rounded-xl shadow-lg p-4 border-l-8 transition-all duration-300 ${theme === 'dark' ? 'bg-white border-black' : 'bg-white border-[#27bdb5]'} ${theme === 'dark' ? '' : 'border'}`}
                 style={{ animationDelay: `${0.2 + i*0.2}s` }}
               >
                 <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#27bdb5] text-white'}`}>{i+1}</div>
               <div>
                   <div className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-[#111211]' : 'text-black'}`}>{[
                     'AI Chatbots & Assistants',
                     'Workflow Automation',
                     'Data Analysis & Forecasting',
                     'Creative Content Generation',
                     'Computer Vision Solutions',
                   ][i]}</div>
                   <div className={`text-sm ${theme === 'dark' ? 'text-[#204744]' : 'text-gray-700'}`}>{[
                     'Automate customer support and engagement with intelligent chatbots and virtual assistants.',
                     'Streamline repetitive tasks and processes to save time and reduce errors.',
                     'Leverage AI to analyze data, generate insights, and predict future trends for smarter decisions.',
                     'Generate high-quality content, images, and designs with the power of creative AI tools.',
                     'Leverage AI-powered image and video analysis for automation, security, and advanced visual insights.',
                   ][i]}</div>
             </div>
               </div>
             ))}
           </div>
         </div>
       </section>
      <section className={`w-full py-20 px-4 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="w-full max-w-6xl mx-auto">
                     {/* Top Row */}
           <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
             {/* Left: Big Metric */}
             <div className="flex flex-col items-center md:items-start">
               <div className={`text-6xl md:text-7xl font-extrabold mb-2 typewriter-number ${theme === 'dark' ? 'text-white' : 'text-black'}`}>50+</div>
               <div className="text-[#27bdb5] text-lg font-semibold typewriter-text">AI Solutions Delivered</div>
             </div>
                         {/* Center: Description */}
             <div className={`flex-1 text-center md:text-left text-base md:text-lg max-w-xl mx-auto md:mx-0 text-justify ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Empowering businesses and developers with cutting-edge AI tools for automation, analytics, and innovation. Trusted by industry leaders to drive digital transformation and smarter workflows.<br/>Our platform supports seamless integration, robust security, and real-time insights for every industry.<br/>Experience the future of work with scalable, reliable, and user-friendly AI solutions tailored to your needs.</div>
            {/* Right: Avatar & Name */}
            <div className="flex flex-col items-center md:items-end">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Carter" className="w-24 h-24 rounded-full mb-2 border-4 border-[#27bdb5] object-cover" />
              <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Alex Carter</div>
              <div className="text-[#bfc1be] text-sm">Founder & Chief AI Officer</div>
            </div>
          </div>
          <div className={`border-t w-full mb-10 ${theme === 'dark' ? 'border-[#204744]' : 'border-gray-300'}`} />
          {/* Bottom Row: Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Card 1 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #27bdb5 100%)' }}>
              <div className="text-[#27bdb5] text-3xl font-extrabold mb-2 relative">10K+
                <span className="block h-1 w-24 mx-auto mt-2 rounded-full bg-[#27bdb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="text-base font-medium text-white">Active Users</div>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #1de9b6 100%)' }}>
              <div className="text-[#1de9b6] text-3xl font-extrabold mb-2 relative">250+
                <span className="block h-1 w-24 mx-auto mt-2 rounded-full bg-[#1de9b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="text-base font-medium text-white">Enterprise Clients</div>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #27bdb5 100%)' }}>
              <div className="text-[#27bdb5] text-3xl font-extrabold mb-2">99.9%</div>
              <span className="block h-1 w-16 mx-auto mb-2 rounded-full bg-[#27bdb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="text-base font-medium text-white">Uptime Guarantee</div>
            </div>
            {/* Card 4 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #1de9b6 100%)' }}>
              <div className="text-[#1de9b6] text-3xl font-extrabold mb-2">50+</div>
              <span className="block h-1 w-16 mx-auto mb-2 rounded-full bg-[#1de9b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="text-base font-medium text-white">AI Integrations</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">What Our Users Say</h2>
          {/* Carousel Container with 3-card scrolling effect */}
          <div className="relative">
            <div className="flex justify-center items-center gap-8 px-16 mb-8 overflow-hidden" style={{ minHeight: '340px' }}>
              <div className="flex gap-8 transition-all duration-700 ease-in-out" style={{ transform: 'translateX(0)' }}>
                {(() => {
                  const leftIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
                  const rightIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
                  const visible = [leftIndex, currentIndex, rightIndex];
                  return visible.map((idx, i) => (
                    <div
                      key={testimonials[idx].id}
                      className={`w-96 rounded-xl shadow-lg p-8 text-center transition-all duration-500 ease-in-out flex-shrink-0 ${
                        i === 1
                          ? `${theme === 'dark' ? 'bg-[#111211] scale-110 opacity-100 z-10 shadow-2xl shadow-[#27bdb5]' : 'bg-white scale-110 opacity-100 z-10 shadow-2xl shadow-[#27bdb5]'}`
                          : `${theme === 'dark' ? 'bg-[#111211] scale-90 opacity-60 z-0 blur-sm' : 'bg-white scale-90 opacity-60 z-0 blur-sm'}`
                      }`}
                      style={{
                        transform: i === 1 ? 'translateY(0)' : 'translateY(10px)',
                        filter: i === 1 ? 'none' : 'blur(2px)'
                      }}
                    >
                      <img
                        src={testimonials[idx].image}
                        alt={testimonials[idx].name}
                        className="w-16 h-16 rounded-full border-4 border-[#27bdb5] object-cover mx-auto mb-4 transition-all duration-300"
                      />
                      <div className={`font-bold text-lg mb-2 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{testimonials[idx].name}</div>
                      <div className="flex justify-center mb-3">
                        <span className="text-[#27bdb5] text-xl transition-all duration-300">{testimonials[idx].stars}</span>
                      </div>
                      <div className={`text-sm mb-3 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>"{testimonials[idx].text}"</div>
                      <div className="text-[#27bdb5] text-xs transition-all duration-300">{testimonials[idx].handle}</div>
                    </div>
                  ));
                })()}
              </div>
                </div>
            {/* Number Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-gradient-to-r from-[#27bdb5] to-[#1de9b6] text-white shadow-lg'
                      : theme === 'dark'
                        ? 'bg-gradient-to-r from-black to-[#0a2342] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white'
                        : 'bg-gradient-to-r from-gray-200 to-[#b2dfdb] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start text-left justify-center mb-8 md:mb-0 md:pr-12 h-full">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Workflow with AI Tools<br />
             
            </h2>
            <p className={`text-lg mb-10 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">
                Explore a curated collection of powerful AI tools designed to boost productivity, automate tasks, and unlock new possibilities for your business or personal projects.an enterprise seeking digital transformation, or a developer building the next big thing, our comprehensive suite of AI tools empowers you to work smarter, not harder. Discover machine learning models that predict trends. Start your AI journey today and stay ahead in the digital era with tools that adapt, learn, and grow with your needs.
              </div>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavigation('/services')}
                className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors border-none outline-none"
              >
                Explore Tools
              </button>
              <button 
                onClick={() => handleNavigation('/about-us')}
                className="bg-transparent border border-[#27bdb5] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors"
              >
                Know More &rarr;
              </button>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="flex-1 w-full h-full">
            <img 
              src={ctaHome} 
              alt="CTA Home" 
              className="w-full h-full object-cover rounded-lg"
              style={{ filter: 'brightness(1.3)' }}
            />
          </div>
        </div>
      </section>
             <style>
         {`
           @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600");
           
           :root {
             --bar-scale-y: 0;
             --sparkle-color: rgb(253 244 215 / 40%);
           }
           
           @keyframes pop-word {
             to {
               transform: rotateX(0);
             }
           }
           
           @keyframes show {
             to {
               opacity: 1;
             }
           }
           
           @keyframes bar-scale {
             to {
               transform: scaleY(1);
             }
           }
           
           @keyframes sparkle {
             0% {
               transform: scale(0);
             }
             60% {
               transform: scale(1) translate(4px, 1px) rotate(8deg);
             }
             100% {
               transform: scale(0) translate(4px, 1px) rotate(8deg);
             }
           }
           
           @keyframes shimmer {
             to {
               text-shadow: 0 0 8px #27bdb5;
             }
           }
           
           .animated-title {
             font-family: "Playfair Display", Vidaloka, serif;
             perspective: 500px;
             line-height: 0.85;
           }
           
           .word {
             display: block;
             animation: show 0.01s forwards, pop-word 1.5s forwards;
             animation-timing-function: cubic-bezier(0.14, 1.23, 0.33, 1.16);
             opacity: 0;
             transform: rotateX(120deg);
             transform-origin: 50% 100%;
             color: white;
           }
           
           .word:nth-of-type(3) {
             padding: 0 0.5rem;
             animation-delay: 1.5s;
             color: #1de9b6;
           }
           
           .superscript {
             position: relative;
             animation-delay: 3.6s;
             animation-duration: 0.25s;
             animation-name: shimmer;
             vertical-align: text-top;
           }
           
           /* bars */
           .superscript::before {
             --bar-width: 25%;
             position: absolute;
             top: 37%;
             left: 47%;
             width: 14%;
             height: 48%;
             animation: bar-scale 0.25s linear 3s 1 forwards;
             background: linear-gradient(
               to right,
               white var(--bar-width),
               transparent var(--bar-width) calc(100% - var(--bar-width)),
               white calc(100% - var(--bar-width))
             );
             content: "";
             transform: scaleY(var(--bar-scale-y));
           }
           
           /* sparkle */
           .superscript::after {
             --size: 10rem;
             position: absolute;
             top: -5%;
             left: -85%;
             width: var(--size);
             height: var(--size);
             animation: sparkle 0.4s linear 3.5s 1 forwards;
             background: radial-gradient(
                 circle at center,
                 rgb(252 249 241 / 94%) 0% 7%,
                 transparent 7% 100%
               ),
               conic-gradient(
                 transparent 0deg 18deg,
                 var(--sparkle-color) 18deg,
                 transparent 20deg 40deg,
                 var(--sparkle-color) 40deg,
                 transparent 43deg 87deg,
                 var(--sparkle-color) 87deg,
                 transparent 95deg 175deg,
                 var(--sparkle-color) 175deg,
                 transparent 178deg 220deg,
                 var(--sparkle-color) 220deg,
                 transparent 222deg 270deg,
                 var(--sparkle-color) 270deg,
                 transparent 275deg 300deg,
                 var(--sparkle-color) 300deg,
                 transparent 303deg 360deg
               );
             border-radius: 50%;
             clip-path: polygon(
               50% 0,
               59.13% 26.64%,
               85.13% -2.35%,
               100% 50%,
               50% 100%,
               0 50%,
               31.39% 34.86%
             );
             content: "";
             filter: blur(1px);
             transform: scale(0);
           }
           
           .group:hover .flip-inner {
             transform: rotateY(180deg) !important;
           }
           
           @keyframes wipeInFromLeft {
             from {
               clip-path: inset(0 100% 0 0);
               opacity: 0;
               transform: translateX(-20px);
             }
             to {
               clip-path: inset(0 0 0 0);
               opacity: 1;
               transform: translateX(0);
             }
           }
           
           .wipe-card {
             animation: wipeInFromLeft 1.2s ease-out forwards;
             opacity: 0;
           }
           
           .wipe-card:nth-child(1) { animation-delay: 0.2s; }
           .wipe-card:nth-child(2) { animation-delay: 0.4s; }
           .wipe-card:nth-child(3) { animation-delay: 0.6s; }
           .wipe-card:nth-child(4) { animation-delay: 0.8s; }
           
           /* Service Section Animations */
           @keyframes slideInFromLeft {
             from {
               opacity: 0;
               transform: translateX(-100px) scale(0.8);
             }
             to {
               opacity: 1;
               transform: translateX(0) scale(1);
             }
           }
           
           @keyframes slideInFromRight {
             from {
               opacity: 0;
               transform: translateX(100px) scale(0.8);
             }
             to {
               opacity: 1;
               transform: translateX(0) scale(1);
             }
           }
           
           @keyframes fadeInUp {
             from {
               opacity: 0;
               transform: translateY(30px);
             }
             to {
               opacity: 1;
               transform: translateY(0);
             }
           }
           
           .service-circle {
             animation: slideInFromLeft 1s ease-out forwards;
             opacity: 0;
           }
           
           .service-card {
             animation: fadeInUp 0.8s ease-out forwards;
             opacity: 0;
             transform: translateY(0);
           }
           
           .service-card:hover {
             transform: translateY(-12px) scale(1.05) !important;
             box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
           }
           
           /* Typewriter Effect */
           @keyframes typewriter {
             from {
               width: 0;
             }
             to {
               width: 100%;
             }
           }
           
           @keyframes blink {
             0%, 50% {
               border-color: transparent;
             }
             51%, 100% {
               border-color: #27bdb5;
             }
           }
           
           .typewriter-number {
             overflow: hidden;
             white-space: nowrap;
             animation: typewriter 2s steps(3) 0.5s forwards;
             width: 0;
           }
           
           .typewriter-text {
             overflow: hidden;
             white-space: nowrap;
             animation: typewriter 3s steps(20) 2.5s forwards;
             width: 0;
           }
           
           @media screen and (max-width: 600px) {
             .animated-title {
               font-size: 2rem;
             }
             
             /* sparkle */
             .superscript::after {
               --size: 6rem;
             }
           }
         `}
       </style>
    </>
  );
} 
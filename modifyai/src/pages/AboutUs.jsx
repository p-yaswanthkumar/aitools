import React from "react";
import abouthero from '../assets/aboutbg.mp4';
import { useTheme } from "../context/ThemeContext";
import ourvalues from '../assets/our values.jpeg';
import empathyImg from '../assets/empathy.jpeg';
import defineImg from '../assets/define.jpeg';
import ideasImg from '../assets/ideas.jpeg';
import feedbackImg from '../assets/feedback.jpeg';
import prototypeImg from '../assets/prototype.jpeg';
import testImg from '../assets/test.jpeg';
import { useScrollToTop } from '../hooks/useScrollToTop';

const AboutUs = () => {
  const { theme } = useTheme();
  
  // Scroll to top when component mounts
  useScrollToTop();

  const growthYears = [
    {
      year: "2020",
      title: "PLATFORM LAUNCH",
      description: "Launched our first AI tools platform with 10 core solutions",
      icon: "🚀"
    },
    {
      year: "2021", 
      title: "AI EXPANSION",
      description: "Expanded to 25+ AI tools and reached 500+ users",
      icon: "💡"
    },
    {
      year: "2022",
      title: "GLOBAL REACH", 
      description: "Served 1000+ clients across 10+ countries",
      icon: "📈"
    },
    {
      year: "2023",
      title: "INNOVATION HUB",
      description: "Launched AI Innovation Hub with 50+ cutting-edge tools",
      icon: "🔬"
    },
    {
      year: "2024",
      title: "ENTERPRISE FOCUS",
      description: "Partnered with Fortune 500 companies",
      icon: "🌍"
    },
    {
      year: "2025",
      title: "QUANTUM AI",
      description: "Pioneering next-generation AI solutions",
      icon: "⚡"
    }
  ];

  return (
    <div className={theme === "dark" ? "bg-[#121212] text-white" : "bg-gray-50 text-black"}>
      {/* Hero Section */}
      <section className="relative h-[545px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={abouthero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-30' : ''} z-10`}></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>About</span> <span style={{ color: '#19e6f7' }}>Us</span>
          </h1>
          <p className="text-lg font-medium mb-4" style={{ color: '#19e6f7' }}>
            Empowering Innovation Through AI Excellence
          </p>
          <p className={`text-2xl md:text-3xl mb-6 font-medium max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>Learn about our journey, values, and the team driving innovation in AI and digital solutions.</p>
        </div>
      </section>

      {/* Our Growth Through Years Section - Hexagonal Layout */}
      <section className={theme === "dark" ? "py-20 px-4 bg-[#181818] relative overflow-x-hidden" : "py-20 px-4 bg-gray-100 relative overflow-x-hidden"}>
        <div className="w-full max-w-6xl mx-auto relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Information */}
            <div className="lg:w-1/2 w-full">
              <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our Growth Through Years</h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className="text-justify">
                  From launching our first AI platform to becoming a global leader in artificial intelligence solutions, our journey has been marked by continuous innovation and growth.
                </div>
              </p>
              
              <p className={`text-base mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className="text-justify">
                  We started with a simple mission: to democratize AI technology and make powerful artificial intelligence tools accessible to businesses of all sizes. Today, we're proud to serve thousands of organizations worldwide, helping them leverage the power of AI to drive innovation, efficiency, and growth.
                </div>
              </p>
              
              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#27bdb5] rounded-full"></div>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>50+ cutting-edge AI tools and solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#27bdb5] rounded-full"></div>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Serving 1000+ clients across 15+ countries</span>
                </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#27bdb5] rounded-full"></div>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Partnerships with Fortune 500 companies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#27bdb5] rounded-full"></div>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>99.9% platform uptime and reliability</span>
              </div>
                </div>
              </div>
              </div>
              
            {/* Right Side - Hexagonal Cards */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col items-center">
                {/* Top Row - 3 Hexagons */}
                <div className="flex justify-center items-center mb-8">
                  {growthYears.slice(0, 3).map((item, index) => (
                    <div key={index} className="mx-2">
                      <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
                        <div className="text-sm font-semibold mb-2 text-center">{item.title}</div>
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-6 h-px bg-white mx-2"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl font-bold">{item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Row - 3 Hexagons (offset) */}
                <div className="flex justify-center items-center">
                  {growthYears.slice(3, 6).map((item, index) => (
                    <div key={index + 3} className="mx-2">
                      <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
                        <div className="text-sm font-semibold mb-2 text-center">{item.title}</div>
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-6 h-px bg-white mx-2"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl font-bold">{item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-0 px-0 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-none overflow-hidden">
          {/* Left Side - Mission (colored background) */}
          <div className="bg-gradient-to-br from-[#0a2342] to-[#1de9b6] p-10 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-white mb-6">
              <div className="text-justify">
                To provide comprehensive, reliable, and innovative AI solutions that transform how businesses operate and compete in today's rapidly evolving technological landscape.
              </div>
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full inline-block"></span>
                <span className="text-white">Deliver cutting-edge AI tools and solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full inline-block"></span>
                <span className="text-white">Ensure accessibility and affordability for all businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full inline-block"></span>
                <span className="text-white">Maintain the highest standards of quality and reliability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full inline-block"></span>
                <span className="text-white">Foster innovation and continuous improvement</span>
              </li>
            </ul>
          </div>
          {/* Right Side - Vision (white background) */}
          <div className="bg-white p-10 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl font-bold mb-6 text-[#0a2342]">Our Vision</h2>
            <p className="text-lg text-[#0a2342] mb-6">
              <div className="text-justify">
                To democratize artificial intelligence and make cutting-edge AI tools accessible to businesses of all sizes, empowering them to innovate, grow, and succeed in the digital age.
              </div>
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-[#0a2342] rounded-full inline-block"></span>
                <span className="text-[#0a2342]">A future where every organization can harness the power of AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-[#0a2342] rounded-full inline-block"></span>
                <span className="text-[#0a2342]">Solving complex challenges and unlocking new opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-[#0a2342] rounded-full inline-block"></span>
                <span className="text-[#0a2342]">Empowering innovation, automation, and growth for all</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-20 px-4 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our Values</h2>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left Side: Only Image */}
          <div className="lg:w-2/5 w-full mb-8 lg:mb-0 flex items-center justify-center">
            <img src={ourvalues} alt="Our Values" className="w-full min-h-[500px] h-[500px] rounded-xl shadow-lg object-cover" />
          </div>
          {/* Right Side: Value Cards Grid */}
          <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Highlighted Card - homepage gradient */}
            <div className="text-white shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate" data-aos="fade-up" style={{ borderRadius: '80px 0 80px 0', background: 'linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }}>
              <div className="font-bold text-xl mb-2">Innovation</div>
              <div className="text-base opacity-90">We embrace creativity and new ideas, always seeking better ways to deliver value through technology.</div>
            </div>
            {/* Card 2 */}
            <div className={`${theme === 'dark' ? 'bg-white text-[#0a2342]' : 'bg-black text-white'} shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate`} data-aos="fade-up" style={{ borderRadius: '80px 0 80px 0', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }}>
              <div className="font-bold text-xl mb-2">Integrity</div>
              <div className="text-base opacity-90">We act with honesty, transparency, and the highest ethical standards in all our work and relationships.</div>
            </div>
            {/* Card 3 */}
            <div className={`${theme === 'dark' ? 'bg-white text-[#0a2342]' : 'bg-black text-white'} shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate`} data-aos="fade-up" style={{ borderRadius: '80px 0 80px 0', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }}>
              <div className="font-bold text-xl mb-2">Flexibility</div>
              <div className="text-base opacity-90">We adapt quickly to change, staying agile to meet evolving client needs and industry trends.</div>
            </div>
            {/* Card 4 - homepage gradient */}
            <div className="text-white shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate" data-aos="fade-up" style={{ borderRadius: '80px 0 80px 0', background: 'linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }}>
              <div className="font-bold text-xl mb-2">Excellence</div>
              <div className="text-base opacity-90">We strive for the highest quality in everything we do, delivering outstanding results for our clients.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Think Section */}
      <section className="py-20 px-4 w-full" style={{background: 'linear-gradient(90deg, #004F51 0%, #005F60 20%, #00797B 40%, #00989C 60%, #56BFC3 80%, #B2DFDF 100%)'}}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-white">What We Think</h2>
            <p className="text-lg text-white mb-8 max-w-xl">
              <div className="text-justify">
                Our process is rooted in empathy, creativity, and continuous improvement. Here's how we approach every challenge, step by step:
              </div>
            </p>
            <ol className="space-y-6 list-decimal list-inside text-white">
              <li>
                <span className="font-bold">Empathy:</span> We put ourselves in others' shoes to understand their needs and perspectives.
              </li>
              <li>
                <span className="font-bold">Define:</span> We clearly articulate problems to find the best solutions.
              </li>
              <li>
                <span className="font-bold">Ideas:</span> We generate creative ideas to drive innovation and progress.
              </li>
              <li>
                <span className="font-bold">Feedback:</span> We value feedback and use it to improve our solutions continuously.
              </li>
              <li>
                <span className="font-bold">Prototype:</span> We build and test prototypes to turn ideas into reality.
              </li>
              <li>
                <span className="font-bold">Test:</span> We rigorously test our solutions to ensure quality and effectiveness.
              </li>
            </ol>
          </div>
          {/* Right Side: Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img src={ideasImg} alt="What We Think" className="w-full max-w-2xl h-[500px] rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className={`py-20 px-4 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <h2 className={`text-4xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>What Makes Us Unique</h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/90' : 'text-black'}`}>We stand out through our commitment to innovation, transparency, and a human-centered approach. Here's what sets us apart from the rest.</p>
        <div className="overflow-x-auto flex gap-8 pb-4 scroll-smooth snap-x snap-mandatory unique-scrollbar">
          {/* Card 1 */}
          <div className="w-[320px] h-[200px] rounded-2xl shadow-lg border-4 border-[#1de9b6] flex flex-col items-center justify-center p-8 snap-center flex-shrink-0 unique-card-gradient" style={{boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)'}}>
            <div className="font-bold text-xl text-white mb-2">Human-Centered Design</div>
            <div className="text-white text-center">We put people first, ensuring our solutions are intuitive, accessible, and impactful for real users.</div>
          </div>
          {/* Card 2 */}
          <div className="w-[320px] h-[200px] rounded-2xl shadow-lg border-4 border-[#56BFC3] flex flex-col items-center justify-center p-8 snap-center flex-shrink-0 unique-card-gradient" style={{boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)'}}>
            <div className="font-bold text-xl text-white mb-2">Cutting-Edge AI</div>
            <div className="text-white text-center">We leverage the latest advancements in artificial intelligence to deliver powerful, future-ready solutions.</div>
          </div>
          {/* Card 3 */}
          <div className="w-[320px] h-[200px] rounded-2xl shadow-lg border-4 border-[#00989C] flex flex-col items-center justify-center p-8 snap-center flex-shrink-0 unique-card-gradient" style={{boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)'}}>
            <div className="font-bold text-xl text-white mb-2">Transparent Process</div>
            <div className="text-white text-center">We believe in open communication and full transparency at every stage of our projects.</div>
          </div>
          {/* Card 4 */}
          <div className="w-[320px] h-[200px] rounded-2xl shadow-lg border-4 border-[#005F60] flex flex-col items-center justify-center p-8 snap-center flex-shrink-0 unique-card-gradient" style={{boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)'}}>
            <div className="font-bold text-xl text-white mb-2">Collaborative Spirit</div>
            <div className="text-white text-center">We work closely with our clients and partners, co-creating solutions that drive real impact.</div>
          </div>
          {/* Card 5 */}
          <div className="w-[320px] h-[200px] rounded-2xl shadow-lg border-4 border-[#004F51] flex flex-col items-center justify-center p-8 snap-center flex-shrink-0 unique-card-gradient" style={{boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)'}}>
            <div className="font-bold text-xl text-white mb-2">Continuous Improvement</div>
            <div className="text-white text-center">We constantly learn, adapt, and refine our approach to deliver the best possible results.</div>
          </div>
        </div>
      </section>

      {/* Creative Hexagon CSS for What We Think */}
      <style jsx>{`
        .hexagon-creative {
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          border-radius: 32px;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .motion-card-creative {
          transition: transform 0.3s cubic-bezier(.4,2,.3,.7), box-shadow 0.3s;
        }
        .motion-card-creative:hover {
          transform: scale(1.07) translateY(-10px) rotate(-2deg);
          box-shadow: 0 16px 40px 0 rgba(0,0,0,0.18);
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
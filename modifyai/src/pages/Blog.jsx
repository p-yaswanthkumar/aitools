import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";
import aiImg from '../assets/ai.webp';
import heroVideo from "../assets/hero.mp4";
import { useTheme } from "../context/ThemeContext";

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

const HeroSection = () => {
  return (
    <section className="relative text-white min-h-[600px] h-96 md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay removed */}
      </div>
      {/* Content */}
      <div className="relative z-10 text-center w-full px-4 md:px-8 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fff] mb-4"
        >
          AI Tools That Actually Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-[#bfc1be] max-w-4xl mx-auto mb-8"
        >
          Stop wasting time on mediocre AI tools. Discover the game-changing tools that top professionals use to 10x their productivity.
        </motion.p>
        {/* <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-[#0a2342] font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get the Best AI Tools Now
        </motion.button> */}
      </div>
    </section>
  );
};

// ============================================================================
// EDITOR'S PICKS COMPONENT
// ============================================================================

const editorsPicks = [
  {
    title: "AI for Healthcare Breakthroughs",
    description: "Exploring how AI is driving innovation in diagnostics and patient care.",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    image: healthcareImg
  },
  {
    title: "The Rise of Generative Models",
    description: "Understanding GPT, DALL·E, and the creative side of AI.",
    author: "Alex Rodriguez",
    readTime: "6 min read",
    image: businessImg
  },
  {
    title: "Smarter Marketing with AI",
    description: "How brands are personalizing user experiences using machine learning.",
    author: "Maria Johnson",
    readTime: "7 min read",
    image: openSourceImg
  }
];

const EditorsPicks = ({ links }) => {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} py-16 px-4 min-h-[600px]`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#19e6f7] text-center mb-10">
          Editor's Picks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorsPicks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative h-80 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative w-full h-full transition-transform duration-700"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg)';
                }}
              >
                {/* Front of card - Only Image */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Back of card - Content */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#232323] to-[#0a2342] rounded-2xl p-6 flex flex-col justify-between"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-[#bfc1be] text-sm mb-4">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-[#19bba6] mb-4">
                      <span>By {item.author}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={links[index]} 
                    className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-[#0a2342] font-bold py-2 px-6 rounded-lg text-sm shadow-lg hover:scale-105 transition-transform duration-200 text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// AI CATEGORIES / TAGS EXPLORER COMPONENT
// ============================================================================

const aiCategories = [
  {
    name: "Machine Learning",
    description: "Supervised, unsupervised, and reinforcement learning techniques."
  },
  {
    name: "Natural Language Processing",
    description: "Text analysis, language models, and conversational AI."
  },
  {
    name: "Computer Vision",
    description: "Image recognition, object detection, and visual AI."
  },
  {
    name: "Robotics & Automation",
    description: "Industrial automation, autonomous systems, and smart robots."
  },
  {
    name: "AI Ethics & Governance",
    description: "Responsible AI, bias detection, and regulatory frameworks."
  },
  {
    name: "Edge AI & IoT",
    description: "On-device AI, smart sensors, and distributed intelligence."
  },
];

const AICategoriesExplorer = () => {
  const { theme } = useTheme();

  return (
    <section
      className="text-white py-16 px-6"
      style={{ background: 'linear-gradient(90deg, #004F51 0%, #005F60 20%, #00797B 40%, #00989C 60%, #56BFC3 80%, #B2DFDF 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#19e6f7] mb-4">AI Categories Explorer</h2>
              <p className="text-[#fff] text-lg leading-relaxed mb-6">
                <div className="text-justify">
                  Dive deep into the diverse world of artificial intelligence. Each category represents a specialized domain where AI is making groundbreaking advancements and transforming industries.
                </div>
              </p>
              <p className="text-[#fff] text-base leading-relaxed mb-8">
                <div className="text-justify">
                  From machine learning algorithms that power recommendation systems to natural language processing that enables human-like conversations, explore how different AI technologies are shaping our future.
                </div>
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">Comprehensive coverage of AI domains</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">Latest trends and breakthroughs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">Practical applications and use cases</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl p-6 cursor-pointer group transition-all duration-500 hover:scale-105 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  <motion.h3 className={`text-lg font-semibold mb-2 group-hover:-translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: -8 }} transition={{ duration: 0.5 }}>{category.name}</motion.h3>
                  <motion.p className={`text-sm group-hover:translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: 8 }} transition={{ duration: 0.5 }}>{category.description}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// AI MYTHS BUSTED COMPONENT
// ============================================================================

const aiMythFactPoints = {
  myths: [
    "AI tools are only for experts and require complex setup.",
    "AI tools always give unbiased results.",
    "AI tools are too expensive for small businesses."
  ],
  facts: [
    "Many AI tools are designed for everyone, with easy interfaces and quick cloud setup—no expertise needed.",
    "AI tools can inherit bias from their training data. Responsible use and monitoring are essential.",
    "Many AI tools are affordable, cloud-based, and designed for small businesses and individuals."
  ]
};

const AIMythsBusted = () => (
  <section className="py-16 px-4"
  style={{ background: 'linear-gradient(90deg, #B2DFDF 0%, #56BFC3 20%, #00989C 40%, #00797B 60%, #005F60 80%, #004F51 100%)' }}>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-8 text-[#fff]"
    >
      Myth vs Fact
    </motion.h2>
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-full gap-20 items-center">
      {/* Left: AI Image */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 min-h-[550px]"
      >
        <img src={aiImg} alt="AI" className="w-full max-w-xl h-auto object-contain" />
      </motion.div>
      {/* Right: Myths and Facts */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex flex-col gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#19e6f7] mb-4">MYTHS</h3>
          <ul className="text-[#fff] text-lg font-semibold list-disc list-inside space-y-2 text-left">
            {aiMythFactPoints.myths.map((myth, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              >
                {myth}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#19e6f7] mb-4">FACTS</h3>
          <ul className="text-[#fff] text-lg font-semibold list-disc list-inside space-y-2 text-left">
            {aiMythFactPoints.facts.map((fact, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              >
                {fact}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ============================================================================
// TOOL COMPARISON TABLE COMPONENT
// ============================================================================

const aiTools = [
  {
    name: "ChatGPT",
    category: "Language Model",
    pricing: "Free + Premium",
    bestFor: "Text generation, coding, analysis",
    rating: 4.8
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    pricing: "Paid",
    bestFor: "Art, design, creative content",
    rating: 4.6
  },
  {
    name: "GitHub Copilot",
    category: "Code Assistant",
    pricing: "Paid",
    bestFor: "Programming, code completion",
    rating: 4.7
  },
  {
    name: "Notion AI",
    category: "Productivity",
    pricing: "Paid",
    bestFor: "Writing, organization, planning",
    rating: 4.5
  },
  {
    name: "Jasper",
    category: "Content Creation",
    pricing: "Paid",
    bestFor: "Marketing copy, blog posts",
    rating: 4.4
  },
  {
    name: "Claude",
    category: "Language Model",
    pricing: "Free + Premium",
    bestFor: "Analysis, writing, research",
    rating: 4.9
  },
];

const ToolComparisonTable = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-6`}

    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#19e6f7] mb-2">AI Tools Comparison</h2>
        <p className={`text-lg mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Compare popular AI tools and find the right one for your needs.</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full bg-[#232323] rounded-lg overflow-hidden">
          <thead className="bg-[#181818]">
            <tr>
              <th className="text-white px-6 py-4 text-left font-semibold">Tool</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Category</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Pricing</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Best For</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {aiTools.map((tool, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-[#181818] hover:bg-[#0a2342] transition-colors"
              >
                <td className="text-white px-6 py-4 font-semibold">{tool.name}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.category}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.pricing}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.bestFor}</td>
                <td className="text-white px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#19e6f7] font-semibold">{tool.rating}</span>
                    <span className="text-[#19e6f7] ml-1">★</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// ============================================================================
// WEEKLY POLL / DISCUSSION TOPIC COMPONENT
// ============================================================================

const WeeklyPoll = () => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [hasVoted, setHasVoted] = React.useState(false);

  const pollOptions = [
    { id: 1, text: "AI will significantly improve healthcare in the next 5 years", votes: 45 },
    { id: 2, text: "AI will create more jobs than it eliminates", votes: 32 },
    { id: 3, text: "AI should be regulated more strictly", votes: 28 },
    { id: 4, text: "AI will achieve human-level intelligence by 2030", votes: 15 }
  ];

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = () => {
    if (selectedOption && !hasVoted) {
      setHasVoted(true);
    }
  };

  return (
    <section className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#19e6f7] text-center mb-10">
          Weekly Discussion: AI's Future Impact
        </h2>
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Question:</h2>
          <p className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>What's your take on AI's role in shaping our future?</p>
        </div>
        
        {!hasVoted ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleVote();
            }}
            className="space-y-4"
          >
            {pollOptions.map(option => (
              <label
                key={option.id}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedOption === option.id
                    ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                    : 'border-[#232323] hover:border-[#19e6f7]'
                }`}
              >
                <input
                  type="radio"
                  name="poll"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="mr-3 accent-[#19e6f7]"
                />
                <span className="font-medium">{option.text}</span>
              </label>
            ))}
            <button
              type="submit"
              disabled={!selectedOption}
              className="mt-4 bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-[#0a2342] font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {pollOptions.map(option => {
              const percentage = Math.round((option.votes / totalVotes) * 100);
              const isSelected = selectedOption === option.id;
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: option.id * 0.1 }}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                      : 'border-[#232323] hover:border-[#19e6f7]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{option.text}</span>
                    <span className="text-[#19e6f7] font-semibold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-[#232323] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-sm text-[#bfc1be] mt-1">
                    {option.votes} votes
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-[#bfc1be] text-sm">
            Total votes: {totalVotes} • Poll closes in 3 days
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

// Blog page default export
const Blog = () => {
  const { theme } = useTheme();
  const links = ["/editor-pick/1", "/editor-pick/2", "/editor-pick/3"];
  
  return (
    <>
      <HeroSection />
      <EditorsPicks links={links} />
      <AICategoriesExplorer />
      <WeeklyPoll />
      <AIMythsBusted />
      <ToolComparisonTable />
      
    </>
  );
};

export default Blog;
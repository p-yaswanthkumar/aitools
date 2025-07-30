import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";

const picks = [
  {
    id: "1",
    title: "AI for Healthcare Breakthroughs",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    image: healthcareImg,
    intro: "Artificial Intelligence (AI) is revolutionizing the healthcare industry by enabling faster, more accurate diagnoses, personalized treatment plans, and improved patient outcomes. From predictive analytics to robotic surgery, AI is transforming every aspect of healthcare delivery.",
    sections: [
      {
        heading: "Key Use Cases",
        content: [
          "Medical imaging analysis for early disease detection",
          "Predictive analytics for patient risk assessment",
          "AI-powered chatbots for patient engagement and support",
          "Personalized medicine and treatment recommendations",
          "Robotic-assisted surgeries for precision and safety"
        ]
      },
      {
        heading: "Benefits of AI in Healthcare",
        content: [
          "Faster and more accurate diagnoses",
          "Reduced human error and improved patient safety",
          "Enhanced efficiency for healthcare providers",
          "Cost savings for hospitals and patients",
          "Better patient engagement and satisfaction"
        ]
      },
      {
        heading: "Challenges & Considerations",
        content: [
          "Data privacy and security concerns",
          "Need for high-quality, unbiased data",
          "Integration with existing healthcare systems",
          "Regulatory and ethical considerations"
        ]
      }
    ],
    quote: {
      text: "AI is not here to replace doctors, but to empower them with better tools and insights.",
      author: "Dr. Sarah Chen"
    },
    conclusion: "As AI continues to evolve, its impact on healthcare will only grow. By embracing these technologies, healthcare providers can deliver better care, improve outcomes, and shape the future of medicine."
  },
  {
    id: "2",
    title: "The Rise of Generative Models",
    author: "Alex Rodriguez",
    readTime: "6 min read",
    image: businessImg,
    intro: "Generative AI models like GPT and DALL·E are transforming the way we create content, solve problems, and interact with technology. These models can generate human-like text, create stunning images, and even compose music, opening up new possibilities for creativity and innovation.",
    sections: [
      {
        heading: "Key Takeaways",
        content: [
          "Generative models can create new data, not just analyze existing data.",
          "They are used for text, images, audio, and more.",
          "Applications range from content creation to software development.",
          "Ethical use and bias are important considerations."
        ]
      },
      {
        heading: "In-Depth Analysis",
        content: [
          "Generative models are trained on massive datasets and learn to mimic the patterns in that data. For example, GPT-3 can write essays, answer questions, and even generate code, while DALL·E can create original images from text prompts. These models are pushing the boundaries of what AI can do.",
          "However, generative AI also raises questions about originality, copyright, and the potential for misuse. Ensuring transparency and fairness is crucial as these models become more widespread."
        ]
      },
      {
        heading: "Real-World Examples",
        content: [
          "OpenAI's GPT-3 powers chatbots, writing assistants, and more.",
          "DALL·E generates unique images for marketing and design.",
          "GitHub Copilot helps developers write code using AI suggestions."
        ]
      }
    ],
    quote: {
      text: "Generative AI is not just a tool for automation, but a partner in creativity.",
      author: "Alex Rodriguez"
    },
    conclusion: "As generative AI continues to advance, it will play an increasingly important role in shaping the future of creativity, business, and technology. Staying informed and responsible is key to harnessing its full potential."
  },
  {
    id: "3",
    title: "Smarter Marketing with AI",
    author: "Maria Johnson",
    readTime: "7 min read",
    image: openSourceImg,
    intro: "AI is revolutionizing marketing by enabling brands to deliver personalized experiences, optimize campaigns, and gain deeper insights into customer behavior. From predictive analytics to automated content creation, AI is helping marketers achieve better results with less effort.",
    sections: [
      {
        heading: "Key Takeaways",
        content: [
          "AI enables hyper-personalized marketing at scale.",
          "Predictive analytics drive smarter campaign decisions.",
          "AI-powered chatbots and assistants improve customer engagement.",
          "Automation reduces manual workload for marketing teams."
        ]
      },
      {
        heading: "In-Depth Analysis",
        content: [
          "AI tools can analyze vast amounts of customer data to uncover patterns and preferences, allowing marketers to deliver the right message to the right person at the right time. Automated content generation tools can create blog posts, social media updates, and even ad copy, freeing up creative teams for higher-level strategy.",
          "Real-time analytics and campaign optimization mean marketers can adjust their strategies on the fly, maximizing ROI and staying ahead of the competition."
        ]
      },
      {
        heading: "Real-World Examples",
        content: [
          "Netflix uses AI to recommend shows and movies to users.",
          "Amazon personalizes product recommendations using AI algorithms.",
          "H&M uses AI to optimize pricing and inventory management."
        ]
      }
    ],
    quote: {
      text: "AI is the marketer’s new best friend, enabling smarter, faster, and more creative campaigns.",
      author: "Maria Johnson"
    },
    conclusion: "As AI continues to evolve, marketers who embrace these technologies will be better positioned to connect with customers, drive growth, and stay ahead of the competition."
  }
];

const EditorPickDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const pick = picks.find((p) => p.id === id) || picks[0];

  return (
    <section className={`w-screen min-h-screen p-0 m-0 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
      {/* Header with back button */}
      <div className="w-full py-6 px-6">
        <Link to="/blog" className={`font-bold text-lg hover:underline transition px-4 py-2 rounded-lg inline-block ${theme === 'dark' ? 'text-[#19e6f7] hover:text-[#19bba6] bg-black bg-opacity-50' : 'text-[#19e6f7] hover:text-[#19bba6] bg-gray-100'}`}>
          ← Back to Blog
        </Link>
      </div>

      {/* Centered small image */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-2xl px-4">
          <img
            src={pick.image}
            alt={pick.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Title and author info */}
      <div className="w-full text-center mb-12 px-4">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{pick.title}</h1>
        <div className={`flex items-center justify-center gap-4 text-lg ${theme === 'dark' ? 'text-[#04D9FF]' : 'text-[#19e6f7]'}`}>
          <span>By {pick.author}</span>
          <span>•</span>
          <span>{pick.readTime}</span>
        </div>
      </div>

      {/* Full-width content */}
      <div className="w-screen min-h-[55vh] py-12 px-4 md:px-24">
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>Introduction</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.intro}</p>
        </section>
        {pick.sections.map((section, idx) => (
          <section className="mb-10" key={idx}>
            <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>{section.heading}</h2>
            <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>Expert Quote</h2>
          <blockquote className={`border-l-4 border-[#19e6f7] pl-4 italic ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
            "{pick.quote.text}"<br />
            <span className={`font-semibold ${theme === 'dark' ? 'text-[#19bba6]' : 'text-[#19bba6]'}`}>— {pick.quote.author}</span>
          </blockquote>
        </section>
        <section>
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>Conclusion</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.conclusion}</p>
        </section>
      </div>
    </section>
  );
};

export default EditorPickDetails;
import { Bot, Sparkles, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 px-4 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
      <div className={`container mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="inline-flex items-center bg-indigo-50 rounded-full px-4 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
          <span className="text-sm text-indigo-600">Expert AI Development Assistant</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Your Expert AI Developer Companion
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm Bolt, your AI development assistant with expertise across multiple programming languages, 
          frameworks, and best practices. Let's build something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            className="group bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center justify-center">
              <Bot className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore My Capabilities
            </span>
          </button>
          <button 
            className="group border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center justify-center">
              <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              See Features
            </span>
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80" 
            alt="Code editor preview" 
            className="rounded-xl shadow-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
            width="2000"
            height="1000"
          />
        </div>
      </div>
    </section>
  );
}
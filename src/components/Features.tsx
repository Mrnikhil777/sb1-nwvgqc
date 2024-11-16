import { Brain, Zap, GitBranch, Code2, RefreshCw, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that understand context and provide smart suggestions."
  },
  {
    icon: Zap,
    title: "Real-Time Assistance",
    description: "Instant code completion and error detection as you type, improving development speed."
  },
  {
    icon: GitBranch,
    title: "Multi-Language Support",
    description: "Seamless support for all major programming languages and frameworks."
  },
  {
    icon: Code2,
    title: "Smart Refactoring",
    description: "Automated code improvements and pattern recognition for better quality."
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Adapts to your coding style and preferences over time."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security ensuring your code stays confidential."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MyCoder can transform your development workflow with cutting-edge AI capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
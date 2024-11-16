import { useState } from 'react';
import { Terminal, Play, Copy, Check } from 'lucide-react';

const examples = [
  {
    title: "React Component",
    code: `function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 
        text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}`
  },
  {
    title: "API Endpoint",
    code: `app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch users' 
    });
  }
});`
  },
  {
    title: "Data Structure",
    code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}`
  }
];

export default function LiveDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(examples[selectedExample].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="examples" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Live Demo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience my coding capabilities firsthand with these interactive examples.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex space-x-1 p-4">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExample(index)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedExample === index
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {example.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-900 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400">Code Example</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyCode}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                    <span className="text-sm text-gray-400">
                      {copied ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors">
                    <Play className="h-4 w-4" />
                    <span className="text-sm">Run</span>
                  </button>
                </div>
              </div>
              <pre className="overflow-x-auto p-4 rounded-lg bg-gray-800">
                <code className="text-sm font-mono">{examples[selectedExample].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}</content></file>
<boltAction type="file" filePath="src/App.tsx">import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import LiveDemo from './components/LiveDemo';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Capabilities />
      <LiveDemo />
    </Layout>
  );
}

export default App;
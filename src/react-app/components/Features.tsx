import { useState, useEffect, useRef } from 'react';
import { CheckSquare, WifiOff, Users, Sparkles, LayoutPanelLeft, EyeOff } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string | string[];
  isVisible: boolean;
  delay: number;
}

function FeatureCard({ icon, title, description, isVisible, delay }: FeatureProps) {
  return (
    <div 
      className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-surface-600 mb-4 group-hover:text-primary-500 transition-colors duration-300">
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="text-surface-500 leading-relaxed space-y-2">
          {description.map((sentence, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>{sentence}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-surface-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8 text-white" />,
      title: "Manage Checklists",
      description: "Create checklists for anything—groceries, work tasks, habits."
    },
    {
      icon: <WifiOff className="w-8 h-8 text-white" />,
      title: "Offline-friendly",
      description: "Use it offline wherever you are."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Collaboration",
      description: "Share lists with others for real-time collaboration."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Perfect for",
      description: [
        "Shopping lists",
        "Daily routines",
        "Travel packing",
        "Habit tracking and more..."
      ]
    },
    {
      icon: <LayoutPanelLeft className="w-8 h-8 text-white" />,
      title: "Simple, clutter-free design",
      description: "Stay productive with a clean and minimal interface."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-white" />,
      title: "No ads",
      description: "No distractions."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-surface-600 mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Organized Living
              </span>
            </h2>
            <p className="text-lg text-surface-500 max-w-3xl mx-auto leading-relaxed">
              Everything you need to stay organized and productive. Our comprehensive suite of tools 
              is designed to help you manage tasks and achieve your goals.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

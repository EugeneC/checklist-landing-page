import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-primary-50 to-secondary-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(133,83,24,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(114,90,66,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full blur-xl opacity-60 animate-float"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-tertiary-200 rounded-full blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-secondary-200 rounded-full blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span>Simple • Beautiful • Powerful</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-surface-600 mb-6 animate-slide-up">
            Organize Your Life
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              With Smart Checklists
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-surface-500 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Stay productive and never miss a task with our powerful checklist app. Create, organize, and track your tasks
            with an intuitive interface designed for maximum efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('cta')}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Organizing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center space-x-2 text-surface-600 hover:text-primary-500 font-medium text-lg transition-colors duration-300">
              <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-surface-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-surface-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

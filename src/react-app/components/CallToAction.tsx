import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, WifiOff, EyeOff } from 'lucide-react';

export default function CallToAction() {
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

  return (
    <section id="cta" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-secondary-200 rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Main CTA Section */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              <span>Free Download</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-surface-600 mb-6 animate-slide-up">
              Get Organized
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                On the Go
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-surface-500 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Whether you're planning a trip, organizing your grocery shopping, or tracking work-related tasks, Checklist makes it easy to stay on top of everything.
            </p>

            {/* Download Button */}
            <div className={`max-w-md mx-auto mb-8 transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 space-x-3"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <p className="text-sm text-surface-500 mt-3">
                No ads
              </p>
            </div>
          </div>

          {/* App Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-800 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center p-6 bg-surface-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-surface-600 mb-2">Easy to Use</h3>
              <p className="text-surface-500 text-sm">Intuitive interface that gets out of your way</p>
            </div>

            <div className="text-center p-6 bg-surface-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <WifiOff className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-surface-600 mb-2">Offline-friendly</h3>
              <p className="text-surface-500 text-sm">Use it offline wherever you are</p>
            </div>

            <div className="text-center p-6 bg-surface-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeOff className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-surface-600 mb-2">No ads</h3>
              <p className="text-surface-500 text-sm">No distractions</p>
            </div>
          </div>

          {/* Final Message */}
          <div className={`text-center mt-12 transition-all duration-800 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-surface-500">
              Join thousands of users staying organized with Checklist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

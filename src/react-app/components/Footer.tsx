import { Sparkles, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Download', href: '#cta' },
    ],
    legal: [
      { name: 'Privacy Policy', href: 'https://eugenec.github.io/checklist-privacy-policy/privacy.html' },
      { name: 'Delete Account', href: 'https://eugenec.github.io/checklist-privacy-policy/delete-account.html' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:chetverikovevgenii@gmail.com' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-surface-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/icon.png" 
                alt="Checklist Logo" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-display font-semibold">
                Checklist
              </span>
            </div>
            <p className="text-surface-300 mb-6 leading-relaxed">
              Organize your life with a powerful and easy checklist app.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-surface-500 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-surface-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-surface-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-500 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-surface-300 text-sm">
              © {currentYear} Checklist. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-surface-300">
              <span>Made with ❤️ for productivity</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

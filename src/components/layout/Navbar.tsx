import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        {/* Mobile Header - Centered Logo */}
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="flex-1" />
          <Link to="/" className="group">
            <img src={logo} alt="Clean Water Ndigbo Logo" className="w-[180px] h-auto group-hover:scale-110 transition-transform" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex-1 flex justify-end p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <img src={logo} alt="Clean Water Ndigbo Logo" className="w-[140px] h-auto group-hover:scale-110 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/donate" className="btn-primary text-sm">
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
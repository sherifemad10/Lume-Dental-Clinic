
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-padding mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" fill="#D3E4FD"/>
              <path d="M15.2939 12.0048C14.3021 13.1971 12.7244 13.9987 10.9768 13.9987C7.79293 13.9987 5.21429 11.5404 5.21429 8.49987C5.21429 5.45934 7.79293 3.00098 10.9768 3.00098C12.7244 3.00098 14.3021 3.80253 15.2939 4.99486C16.2856 3.80253 17.8633 3.00098 19.6108 3.00098C22.7947 3.00098 25.3733 5.45934 25.3733 8.49987C25.3733 11.5404 22.7947 13.9987 19.6108 13.9987C17.8633 13.9987 16.2856 13.1971 15.2939 12.0048Z" fill="#D3E4FD"/>
              <path d="M5 16.5C5 13.4624 7.46243 11 10.5 11H13.5C16.5376 11 19 13.4624 19 16.5V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V16.5Z" fill="#D3E4FD"/>
            </svg>
            <span>Lume Dental</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-dental-blue-dark transition-colors">Services</a>
          <a href="#doctors" className="text-sm font-medium hover:text-dental-blue-dark transition-colors">Doctors</a>
          <a href="#about" className="text-sm font-medium hover:text-dental-blue-dark transition-colors">About Us</a>
          <Link to="contacts" className="text-sm font-medium hover:text-dental-blue-dark transition-colors">Contacts</Link>
        </div>
        
        <Link to="contacts">
        <Button className="btn-primary">Book an Appointment</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

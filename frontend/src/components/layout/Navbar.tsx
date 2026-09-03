import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLinkItem, Button } from '../ui';
import ideographersLogo from "../../assets/images/logos/ideographers-logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex w-full items-center justify-between p-6">
      <img src={ideographersLogo} alt="Ideographers Logo" width={176} height={40} className="h-10" />
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Desktop & Mobile Navigation Links */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 flex flex-col md:flex-row items-center gap-6 text-sm font-medium z-20`}>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/services">Services</NavLinkItem>
        <NavLinkItem to="/about">About</NavLinkItem>
        <NavLinkItem to="/contact">Contact</NavLinkItem>
        <Button variant="primary" size="md" onClick={() => navigate('/contact')}>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;

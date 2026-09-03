import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { content } from '../../content/company';
import logo from '../../assets/images/logos/ideographers-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Ideographers Logo"
                width={200}
                height={46}
                style={{
                  width: '200px',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
            <p className="text-gray-600 mb-2">Engineering • Branding • Technology</p>
            <p className="text-sm text-gray-500">
                {content.about.intro.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
                <li><Link to="/services/civil-landscaping" className="text-gray-600 hover:text-blue-600">Civil & Landscaping</Link></li>
                <li><Link to="/services/pr-branding" className="text-gray-600 hover:text-blue-600">PR & Branding</Link></li>
                <li><Link to="/services/it-services" className="text-gray-600 hover:text-blue-600">IT Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 text-sm mb-1"><a className="hover:text-blue-600" href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p>
            <p className="text-gray-600 text-sm mb-1"><a className="hover:text-blue-600" href={`tel:${content.contact.phone.replace(/[^\d+]/g, '')}`}>{content.contact.phone}</a></p>
            <p className="text-gray-600 text-sm">{content.contact.address}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ideographers. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

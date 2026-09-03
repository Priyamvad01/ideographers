import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, children }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => isActive ? 'font-bold' : ''}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;

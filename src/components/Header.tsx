import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
    </header>
  );
};

export default Header;

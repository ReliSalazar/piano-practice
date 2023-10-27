import React from "react";
import "./Header.css"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="Header p-4">
      <div className="container mx-auto">
        <p>Header</p>
      </div>
    </header>
  );
};

export default Header;

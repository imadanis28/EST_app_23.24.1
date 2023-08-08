import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">Car Rental</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
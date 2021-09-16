import React from 'react';
import logo from 'src/assets/images/logo-github.png';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Github Logo " />
    </header>
  );
}

export default Header;
import React from 'react';
import './index.css';
import Logo from '../../../public/static/icons/logo.svg';

const Header = () => (
  <header className='header'>
    <div className='logo'>
      <Logo />
    </div>
    <div>Cerebrate</div>
  </header>
)

export default Header
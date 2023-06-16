import React from 'react';
import statusBar from '../../assets/icons/status-bar.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={statusBar} />
    </header>
  );
};

export default Header;
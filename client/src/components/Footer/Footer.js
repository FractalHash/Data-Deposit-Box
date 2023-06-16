import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import account from '../../assets/icons/ACCOUNT.png'
import home from '../../assets/icons/HOME.png'
import send from '../../assets/icons/SEND.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/verification'>
        <img className='footer__icon' src={account} />
      </Link>
      <Link to='/'>
        <img className='footer__icon' src={home} />
      </Link>
      {/* <Link> */}
        <img className='footer__icon' src={send} />
      {/* </Link> */}
    </footer>
  );
};

export default Footer;
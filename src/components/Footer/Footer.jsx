import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='app__footer__wrapper'>
    <div className='cell_1'>
      <p className='footer__headlineText'>Address</p>
      <p>205 North Michigan Avenu, Suite 810 Chicago <br/> 60601, USA</p>
      <p>Call Us: (123) 456-7890 </p>
      <p> Email: contact@Evara.com</p>
    </div>
    <div className='cell_1'>
    <p className='footer__headlineText'>Contact</p>
      <p>About</p>
      <p>Terms Of Service</p>
      <p> Refund Policy</p>
    </div>
    <div className='cell_1'>
    <p className='footer__headlineText'>Pages</p>
      <p>View Cart</p>
      <p>Vender Login</p>
      <p> Contact Us</p>
    </div>
    <div className='cell_1'>
    <p className='footer__headlineText'>Categories</p>
      <p>Food & Beverage</p>
      <p>Beauty & Fragrances</p>
      <p> Office & Stationery</p>
    </div>
  </div>
);

export default Footer;

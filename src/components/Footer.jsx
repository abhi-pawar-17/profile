import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black flex justify-center items-center min-h-16 py-4 text-white text-sm'>
      <p>Copyright © {new Date().getFullYear()} All rights reserved by Abhishek Pawar</p>
    </div>
  );
}

export default Footer;

import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "30px",
    border: "2px solid red"
  };

  return (
    <footer className='bg-dark text-light text-center' style={footerStyle}>
      <p>Thanks</p>
    </footer>
  );
};

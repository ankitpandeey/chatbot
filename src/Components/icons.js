import React from 'react';
import logo from '../Components/Pictures/logo.png'; // Import your logo image

const icon = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default icon;

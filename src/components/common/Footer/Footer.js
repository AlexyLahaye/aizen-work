import React from 'react';

function Footer() {
  const currentDate = new Date().toLocaleDateString(); // Obtiens la date du jour.

  return (
    <footer style={{ textAlign: 'center' }} className="background-color">
      <p>Lahaye Alexy</p>
      <p>{currentDate}</p>
    </footer>
  );
}

export default Footer;

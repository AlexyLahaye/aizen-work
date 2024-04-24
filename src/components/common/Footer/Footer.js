import React from 'react';

function Footer() {
  const currentDate = new Date().toLocaleDateString(); // Obtenir la date actuelle au format (jj/mm/aaaa)

  return (
    <footer style={{ textAlign: 'center' }} className="background-color">
      <p>Lahaye Alexy</p>
      <p>{currentDate}</p>
    </footer>
  );
}

export default Footer;

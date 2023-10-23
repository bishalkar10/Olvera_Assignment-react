import React from 'react';
import "../styles/about.scss";

export default function About() {
  return (
    <section id="about">
      <p>About Olvera</p>
      <p>Change is the one true constant in business</p>
      <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className="brands">
        <img src="public/HOWARDS_LOGO.png" alt="Howards Logo" />
        <img src="public/COMMONWEALTH_LOGO.png" alt="Commonwealth Logo" />
        <img src="public/ELLERY_LOGO.png" alt="Ellery Logo" />
        <img src="public/GINGERANDSMART_LOGO.png" alt="Ginger and Smart Logo" />
      </div>
    </section>
  );
}

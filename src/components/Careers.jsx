import React from 'react';
import "../styles/careers.scss";

export default function Careers() {
  return (
    <section id="careers">
      <img className="former-circle" src="public/Circle.png" alt="" />
      <div className="left">
        <img className="circle" src="public/Circle.png" alt="" />
        <h4>CAREERS</h4>
        <p>Careers at Olvera</p>
        <p className="description">Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.</p>
        <div className="search-btn">Search Careers</div>
      </div>
      <div className="right">
        <img src="public/Careers_page_image4.png" alt="" />
      </div>
    </section>

  );
}

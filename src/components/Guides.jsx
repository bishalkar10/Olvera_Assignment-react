import React from 'react';
import "../styles/guides.scss";

export default function Guides() {
  return (
    <section id="guides">
      <div className="container">
        <p>Olvera Guides</p>
        <p>Careers at Olvera</p>
        <p>Ollie Restructuring Guide</p>
        <div className="view-more">
          View More
          <div className="arrow-icon">
            <svg height="2" width="46">
              <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'white', strokeWidth: 4 }} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <svg height="13" width="10">
              <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'white', strokeWidth: 2 }} />
            </svg>
          </div>
        </div>
        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
    </section>
  );
}

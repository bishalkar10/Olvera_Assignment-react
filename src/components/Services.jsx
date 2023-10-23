import '../styles/services.scss';
import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <img className="former-circle" src="Circle.png" alt="" />

      <div className="stats">
        <div>150+<span>Projects</span></div>
        <div>80+<span>Clients</span></div>
        <div>200+<span>Professionals</span></div>
        <div>97%<span>Clients</span></div>
      </div>
      <div className="boxes">
        <div className="left">
          <img className="circle" src="Circle.png" alt="" />
          <h4>Services</h4>
          <p>Our services that can help your business</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </p>
        </div>
        <div className="right">
          <ul>
            <li>
              <div className="container">
                <div className="div1">
                  <p className="title">Sustainability</p>
                  <div className="arrow-icon">
                    <svg height="2" width="46">
                      <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'black', strokeWidth: 4 }} />
                    </svg>
                    <svg height="13" width="10">
                      <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'black', strokeWidth: 2 }} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left-line"></div>
                <div className="right-line"></div>
              </div>
            </li>
            <li>
              <div className="container">
                <p className="number">02.</p>
                <div className="div1">
                  <p className="title">Small Business</p>
                  <div className="arrow-icon">
                    <svg height="2" width="46">
                      <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'black', strokeWidth: 4 }} />
                    </svg>
                    <svg height="13" width="10">
                      <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'black', strokeWidth: 2 }} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left-line"></div>
                <div className="right-line"></div>
              </div>
            </li>
            <li>
              <div className="container">
                <p className="number">03.</p>
                <div className="div1">
                  <p className="title">Forensic Services</p>
                  <div className="arrow-icon">
                    <svg height="2" width="46">
                      <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'black', strokeWidth: 4 }} />
                    </svg>
                    <svg height="13" width="10">
                      <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'black', strokeWidth: 2 }} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left-line"></div>
                <div className="right-line"></div>
              </div>
            </li>
            <li>
              <div className="container">
                <p className="number">04.</p>
                <div className="div1">
                  <p className="title">Risk Management</p>
                  <div className="arrow-icon">
                    <svg height="2" width="46">
                      <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'black', strokeWidth: 4 }} />
                    </svg>
                    <svg height="13" width="10">
                      <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'black', strokeWidth: 2 }} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left-line"></div>
                <div className="right-line"></div>
              </div>
            </li>
            <li>
              <div className="container">
                <p className="number">05.</p>
                <div className="div1">
                  <p className="title">CFO Advisory</p>
                  <div className="arrow-icon">
                    <svg height="2" width="46">
                      <line x1="0" y1="0" x2="46" y2="0" style={{ stroke: 'black', strokeWidth: 4 }} />
                    </svg>
                    <svg height="13" width="10">
                      <polygon points="1,1 1,12 8,6.5" style={{ fill: 'transparent', stroke: 'black', strokeWidth: 2 }} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left-line"></div>
                <div className="right-line"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

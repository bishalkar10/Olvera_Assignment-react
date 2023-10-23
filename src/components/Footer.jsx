import "../styles/footer.scss";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <p>We are open and accepting to all. <br /> Come work with us</p>

        <p>Experts teach you everything from the comfort of your own home. Improve your career <br />
          today by enrolling in excellent courses at affordable prices.</p>
        <div className="btn">Get Started</div>
        <div className="flex">
          <div className="image-container">
            <img className="hide-small-screen" src="Olvera-First-Logo-BGY-1 2.png" alt="" />
            <img className="hide-small-screen" src="Olvera-Capital-300x49 1.png" alt="" />
            <img className="hide-big-screen" src="image 127.png" alt="" />
            <img className="hide-big-screen" src="image 128.png" alt="" />
            <img className="hide-big-screen" src="image 129.png" alt="" />
            <img className="hide-big-screen" src="image 130.png" alt="" />
            <p>Turning Uncertainty Into Your Advantage</p>
          </div>
          <div className="links resources">
            <h6>Resources</h6>
            <p>Home</p>
            <p>Articles</p>
            <p>Videos & Guides</p>
            <p>About Us</p>
          </div>
          <div className="links careers">
            <h6>Careers</h6>
            <p>Olevera academy</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>
          <div className="address">
            <p>Liability Limited By A Scheme Approved Under Professional Services Scheme</p>
            <p>Phone: (64) 09 973 4905</p>
            <p>Email: ezibuyenquiries@olveraadvisors.com</p>
            <p>Website: olvera.co.nz/ezibuy</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2023 olevra advisors. All rights reserved</p>
        <ul className="footer-links">
          <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
          <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
          <li><a href="#"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
        </ul>
      </div>
    </footer>
  );
}

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faImage } from "@fortawesome/free-regular-svg-icons";

import "../styles/review.scss";

const cardData = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    author: "Aaron Boby",
    date: "2 November 2021",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    author: "Daren Axell",
    date: "29 August 2021",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    author: "Dion Channing",
    date: "22 August 2021",
  },
];

export default function Reviews() {
  const [activeCard, setActiveCard] = useState(0);
  const reviewsContainerRef = useRef(null);

  // when use click the left click button, scroll the reviews container to left
  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy(-400, 0);
    }
  };

  // when use click the right click button, scroll the reviews container to right
  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy(400, 0);
    }
  };

  return (
    <section id="review">
      <p className="title">What our clients say about us</p>
      <div className="reviews-container">
        <button id="scrollLeftButton" className="arrow-btn" onClick={scrollLeft}>
          <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        </button>
        <div className="reviews" ref={reviewsContainerRef}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${index === activeCard ? 'active' : ''}`} // if the index is equal to the activeCard, add the active class
              onClick={() => setActiveCard(index)} // when user click the card, set the activeCard to the index
            >
              <div className="quote">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.83529 4.74845L9.24383 3.75854C5.14911 6.75301 2.87427 10.3909 2.87427 13.3854C2.87427 16.2809 4.83063 17.642 6.49127 17.642C8.58412 17.642 10.0628 15.7117 10.0628 13.6824C10.0628 11.9748 9.06184 10.5147 7.71968 9.97021C7.33296 9.82172 6.96898 9.69799 6.96898 8.98030C6.96898 8.06464 7.58319 6.70352 9.83529 4.74845ZM18.8664 4.74845L18.275 3.75854C14.2257 6.75301 11.9054 10.3909 11.9054 13.3854C11.9054 16.2809 13.9073 17.642 15.5679 17.642C17.6835 17.642 19.1849 15.7117 19.1849 13.6824C19.1849 11.9748 18.1612 10.5147 16.7736 9.97021C16.3868 9.82172 16.0456 9.69799 16.0456 8.98030C16.0456 8.06464 16.6826 6.70352 18.8664 4.74845Z"
                    fill="#E1E8F1"
                  />
                </svg>
                <p className="quote-text">{card.quote}<span>
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5206 16.8161L13.1402 17.8061C17.4299 14.8116 19.8131 11.1737 19.8131 8.17921C19.8131 5.28373 17.7635 3.92261 16.0238 3.92261C13.8313 3.92261 12.2823 5.85293 12.2823 7.88223C12.2823 9.58982 13.3309 11.0499 14.7369 11.5944C15.1421 11.7429 15.5234 11.8666 15.5234 12.5843C15.5234 13.5 14.8799 14.8611 12.5206 16.8161ZM3.0594 16.8161L3.67902 17.8061C7.92106 14.8116 10.3519 11.1737 10.3519 8.17921C10.3519 5.28373 8.2547 3.92261 6.51499 3.92261C4.29864 3.92261 2.72575 5.85293 2.72575 7.88223C2.72575 9.58982 3.79818 11.0499 5.25191 11.5944C5.65705 11.7429 6.01453 11.8666 6.01453 12.5843C6.01453 13.5 5.34724 14.8611 3.0594 16.8161Z"
                      fill="#E1E8F1"
                    />
                  </svg>
                </span>
                </p>
              </div>
              <div className="card-info">
                <div className="avtar">
                  <FontAwesomeIcon icon={faImage} className="icon" />
                </div>
                <div className="info">
                  <p className="name">{card.author}</p>
                  <p className="date">{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button id="scrollRightButton" className="arrow-btn" onClick={scrollRight}>
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}

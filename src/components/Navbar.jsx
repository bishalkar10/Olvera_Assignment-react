import "../styles/header.scss";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const menuButton = useRef(null);
  const navBar = useRef(null);
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      navBar.current.style.display = "none";
      setOpen(false)
      return;
    }
    if (!open) {
      navBar.current.style.display = "flex";
      setOpen(true)
      return;
    }
  }


  useEffect(() => {
    function handleResize() {
      if (navBar.current && window.innerWidth > 768) {
        navBar.current.style.display = "none";
      }
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once after component mount



  return (
    <>
      <div className="top-div">Turning Uncertainity Into your advantage</div>
      <header className="header">
        <nav className="nav">
          <img className="logo-img" src="Olvera-Logo-Black 1.png" alt="logo-img" />
          <ul className="nav-link-list">
            <li className="nav-link"><a href="#home">Home</a></li>
            <li className="nav-link"><a href="#about">About us</a></li>
            <li className="nav-link"><a href="#services">our Services</a></li>
            <li className="nav-link"><a href="#">Our Experiences</a></li>
            <li className="nav-link"><a href="#photo-shoot">Resources</a></li>
          </ul>
          <ul className="side-nav-links" ref={navBar}>
            <li className="nav-link"><a href="#home">Home</a></li>
            <li className="nav-link"><a href="#about">About us</a></li>
            <li className="nav-link"><a href="#services">our Services</a></li>
            <li className="nav-link"><a href="#">Our Experiences</a></li>
            <li className="nav-link"><a href="#photo-shoot">Resources</a></li>
          </ul>
          <div className="contact-btn">Contact Us</div>
          <ul className="icon-list">
            <li><a href="#"><i className="icon fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="icon fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="icon fab fa-linkedin"></i></a></li>
          </ul>
          <i className="icon fa fa-search"></i>
          <div className="bars" ref={menuButton} onClick={handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header> </>
  )
}

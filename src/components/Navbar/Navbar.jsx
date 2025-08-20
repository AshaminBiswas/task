import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

// import css file
import "./Navbar.css";

// import logo image
import logo from "../../assets/logo/logo.png";
import Arrow from "../../assets/navbar assets/Chevron Down.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // reusable menu items
  const menuItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/experiences">Experiences</Link></li>
      <li><Link to="/guide">Guide</Link></li>
      <li className="arrow-button">
        <Link to="/itineraries">
          Itineraries <span><img src={Arrow} alt="Arrow Icon" /></span>
        </Link>
      </li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to={`/book-call`}><button className="book-call">Book a call</button></Link></li>
    </>
  );

  return (
    <div>
      <nav className="navbar">
        
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" loading="lazy" />
        </Link>

        
        <ul className="nav-items desktop-menu">
          {menuItems}
        </ul>

      
        {menu ? (
          <RiCloseLargeFill onClick={() => setMenu(false)} className="close" />
        ) : (
          <SlMenu onClick={() => setMenu(true)} className="menu" />
        )}
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <ul className="nav-items mobile-menu">
          {menuItems}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

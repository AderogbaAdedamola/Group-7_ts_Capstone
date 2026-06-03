import { useState } from "react";
import "./index.css";
import logo from "../../assets/navLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="" />
        </div>


        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("hero")}>
            Home
          </button>

          <button onClick={() => scrollToSection("planets")}>
            Explore the Data
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import "./index.css";
import heroImage from "../../assets/image.png";
export default function Hero() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Explore Our Solar System Through Data</h1>
          <p className="hero-description">
            Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.
          </p>
          <div className="hero-buttons">
            <button className="hero-button explore" onClick={scrollToSection("planets")}>Explore the Data</button>
            <button className="hero-button contact" onClick={scrollToSection("contact")}>Contact Us</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

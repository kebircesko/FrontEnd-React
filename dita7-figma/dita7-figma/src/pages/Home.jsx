import { Link } from "react-router-dom";
import nature from "../images/nature.jpeg";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <span className="home-eyebrow">Start traveling with us</span>
          <h1>
            Find your next <span>unforgettable</span> journey.
          </h1>
          <p className="home-intro">
            From quiet mountain paths to sunny coastlines, Tourice helps you
            discover places worth remembering.
          </p>

          <div className="home-actions">
            <Link className="home-primary-action" to="/destinations">
              Explore destinations <span aria-hidden="true">&#8599;</span>
            </Link>
            <Link className="home-secondary-action" to="/contact">
              Plan your trip
            </Link>
          </div>

          <div className="home-highlights" aria-label="Tourice highlights">
            <div><strong>24+</strong><span>Destinations</span></div>
            <div><strong>8 yrs</strong><span>Experience</span></div>
            <div><strong>4.9</strong><span>Traveler rating</span></div>
          </div>
        </div>

        <div className="home-visual">
          <div className="home-image-frame">
            <img src={nature} alt="Sunrise over green mountain hills" />
          </div>
          <div className="home-floating-card">
            <span className="home-floating-icon" aria-hidden="true">&#10003;</span>
            <div>
              <strong>Travel made simple</strong>
              <span>Thoughtful trips, made for you</span>
            </div>
          </div>
          <span className="home-visual-label">Explore more</span>
        </div>
      </section>
    </main>
  );
}

export default Home;

import hero from "../../icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="home-hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservation">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={hero} alt="a checf carrying bruchetta" />
      </div>
    </section>
  );
};

export default Hero;

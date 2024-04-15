import { useEffect, useState } from "react";
import slide1 from "../../icons_assets/restaurant.jpg";
import slide2 from "../../icons_assets/greek-salad.jpg";
import slide3 from "../../icons_assets/bruchetta.jpeg";
import slide4 from "../../icons_assets/lemon-dessert.jpg";
const Hero2 = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 4) {
        setCount(count + 1);
      } else {
        setCount(1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <section id="reservation-hero">
      <div className="hero-text">
        <h1>Make a Reservation</h1>
        {count === 1 ? (
          <h3>Effortless Reservation</h3>
        ) : count === 2 ? (
          <h3>Choose Your Moment</h3>
        ) : count === 3 ? (
          <h3>Anticipation Awaits</h3>
        ) : (
          <h3>Book Now</h3>
        )}
        {count === 1 ? (
          <p>
            Skip the hassle! Our streamlined reservation process ensures a
            stress-free dining experience.
          </p>
        ) : count === 2 ? (
          <p>
            Select your preferred date, time and party size. It is as easy as a
            few clicks
          </p>
        ) : count === 3 ? (
          <p>
            Secure your spot and look forward to savoring our delightful menu.
          </p>
        ) : (
          <p>Reserve your table and let us take care of the rest.</p>
        )}
        <button>Reserve Now</button>
      </div>
      {count === 1 ? (
        <img src={slide1} alt="restaurant in-view slide" />
      ) : count === 2 ? (
        <img src={slide2} alt="restaurant in-view slide" />
      ) : count === 3 ? (
        <img src={slide3} alt="restaurant in-view slide" />
      ) : (
        <img src={slide4} alt="restaurant in-view slide" />
      )}
      <div className="cover"></div>
    </section>
  );
};

export default Hero2;

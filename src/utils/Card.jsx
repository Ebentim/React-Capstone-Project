import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Card = ({ image, alt, title, price, description, cta, icon }) => {
  return (
    <div className="card-container">
      <img src={image} alt={alt} />
      <div className="card-body">
        <div className="card-title">
          <h6>{title}</h6>
          <p>{price}</p>
        </div>
        <p>{description}</p>
        <div className="cta">
          <Link to="/">{cta}</Link>
          <FontAwesomeIcon icon={icon} style={{ color: "#000000" }} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Card;

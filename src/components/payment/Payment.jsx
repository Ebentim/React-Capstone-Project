import "./Payment.css";
import { useReserveContext } from "../../contexts/ReserveContext";
const Payment = () => {
  const { setSuccessful, progress, setProgress, reservationDetails } =
    useReserveContext();
  const { personalDetails, tableDetails, additionalDetails } =
    reservationDetails;

  const handleSuccessful = () => {
    setSuccessful(Math.floor(Math.random() * 2));
  };
  const handlePayment = (e) => {
    e.preventDefault();
    setProgress(progress + 1);
    handleSuccessful();
  };
  return (
    <>
      <h5>Checkout</h5>
      <section id="payment-form">
        <div className="order-details">
          <p className="order-subheading">Personal Details</p>
          <div>
            <p>First Name: {personalDetails.firstName}</p>
            <p>Last Name: {personalDetails.lastName}</p>
            <p>Email Address: {personalDetails.email}</p>
            <p>Phone Number: {personalDetails.phoneNumber}</p>
          </div>
          <p className="order-subheading">Table Details</p>
          <div>
            <p>Number of Seats: {tableDetails.numberOfGuests}</p>
            <p>Occasion: {tableDetails.occasion}</p>
            <p>Date: {tableDetails.date}</p>
            <p>Time: {tableDetails.time}</p>
          </div>
          <p className="order-subheading">Additional Information</p>
          <div>
            <p>Seating Option: {additionalDetails.seatingOption}</p>
            <p>
              Additional comments: <br />{" "}
              <span
                className={`${additionalDetails.comments ? "comments" : null}`}
              >
                {additionalDetails.comments}
              </span>
            </p>
          </div>
          <p id="edit-order" onClick={handlePayment}>
            Edit Order
          </p>
        </div>
        <div className="payment-info">
          <h5>Payment Information</h5>
          <form className="payment-details">
            <div className="payable">
              <h3>
                {" "}
                Total: &#36;{" "}
                {tableDetails.numberOfGuests <= 2
                  ? 5
                  : 5 * tableDetails.numberOfGuests - 5}
              </h3>
            </div>
            <label htmlFor="cardno">
              {" "}
              Card Number <span className="required">*</span>
            </label>
            <input
              type="number"
              name="cardno"
              id="cardno"
              placeholder="Card number"
              required
            />
            <label htmlFor="holdername">
              Card Holder name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="holdername"
              id="holdername"
              placeholder="Card holder name"
              required
            />
            <label className="label-expire" htmlFor="expire">
              Expiry date<span className="required">*</span>
            </label>
            <input
              type="number"
              name="expire"
              id="expire"
              placeholder="dd/mm"
              required
            />
            <label className="label-cvv" htmlFor="cvv">
              CVV: <span className="required">*</span>
            </label>
            <input
              type="number"
              name="cvv"
              id="cvv"
              required
              placeholder="CVV"
            />
            <button id="paynow" onClick={handlePayment}>
              Reserve a Table
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;

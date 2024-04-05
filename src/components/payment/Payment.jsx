import React from 'react'
import './Payment.css'
import { useReserveContext } from '../../contexts/ReserveContext';
const Payment = () => {
    const { reservationDetails} = useReserveContext();
    const {personalDetails, tableDetails, additionalDetails} = reservationDetails
    console.log(reservationDetails, " from payment page");
  return (
    <section id='payment-form'>
        <div className='order-details'>
                <p>Reservation Order Details</p>
                    <p className='order-subheading'>Personal Details</p>
                <div>
                    <p>First Name: {personalDetails.firstName}</p>
                    <p>Last Name: {personalDetails.lastName}</p>
                    <p>Email Address: {personalDetails.email}</p>
                    <p>Phone Number: {personalDetails.phoneNumber}</p>
                </div>
                    <p className='order-subheading'>Table Details</p>
                <div>
                    <p>Number of Seats: {tableDetails.numberOfGuests}</p>
                    <p>Occasion: {tableDetails.occasion}</p>
                    <p>Date: {tableDetails.date}</p>
                    <p>Time: {tableDetails.time}</p>
                </div>
                    <p className='order-subheading'>Additional Information</p>
                <div>
                    <p>Seating Option: {additionalDetails.seatingOption}</p>
                    <p>Message: {additionalDetails.comments}</p>
                </div>
        </div>
        <div className='payment-info'>
                <p>Payment Information</p>
                <div className="payment-details">
                    <label htmlFor="cardno"> Card Number <span className='required'>*</span></label>
                    <input type="number" name="cardno" id="cardno" placeholder='Card number' required/>
                    <label htmlFor="holdername">Card Holder name <span className='required'>*</span></label>
                    <input type="text" name='holdername' id='holdername' placeholder='Card holder name' required/>
                    <div id="expire-cvv">
                        <div>
                            <label htmlFor="expire">Expiry date<span className='required'>*</span></label>
                            <input type="expire" name="expire" id="expire" placeholder='Expiry date' required/>
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV: <span className='required'>*</span></label>
                            <input type="tel" name="cvv" id="cvv" required placeholder='CVV'/>
                        </div>
                    </div>
                    <div className="button-container">
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Payment
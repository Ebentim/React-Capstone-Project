import React, {useState} from 'react';
import { faAngleDown, faAngleUp, faChair, faChampagneGlasses, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Payment from '../payment/Payment';
import { useReserveContext } from '../../contexts/ReserveContext';
import Modal from '../modal/Modal';

const occasionOptions = [
    {value: '', label: "Occasion"},
    {value: "Birthday", label: "Birthday"},
    {value: "Engagement", label: "Engagement"},
    {value: "Anniversary", label: "Anniversary"},
    {value: "other", label: "other"}
];

const timeOptions = [
    {value: '', label: "Time"},
    {value: '07:00 pm.', label: "07:00 pm."},
    {value: '07:30 pm.', label: "07:30 pm."},
    {value: '08:00 pm.', label: "08:00 pm."},
    {value: '08:30 pm.', label: "08:30 pm."},
    {value: '09:00 pm.', label: "09:00 pm."},
    {value: '09:30 pm.', label: "09:30 pm."},
    {value: '10:00 pm.', label: "10:00 pm."},
];

const seatingOptions = [
    {value: 'indoor', label: "Indoor"},
    {value: 'indoors', label: "Indoor"},
    {value: 'outdoor', label: "Outdoor"}
];
const Reserve = () => {
    const {successful, progress, setProgress} = useReserveContext()
    const [dropDown, setDropdown] = useState(false)
    const [dropDown2, setDropdown2] = useState(false)
    const {updateReservationDetails } = useReserveContext();

    const handleRefresh = ()=>{
        location.reload()
    }
    const handleValid = ()=>{
        const textarea = document.querySelector('textarea')
        textarea.value.length >=6? textarea.classList.add("valid"): textarea.classList.remove("valid")
    }

  const handleContinue = (e) => {
    e.preventDefault();
    if (progress === 0) {
      updateReservationDetails('personalDetails', {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phone_number').value
      });
    } else if (progress === 1) {
      updateReservationDetails('tableDetails', {
        numberOfGuests: document.getElementById('guests').value,
        occasion: document.getElementById('occasion').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
      });
    } else if (progress === 2) {
      updateReservationDetails('additionalDetails', {
        seatingOption: document.getElementById('seatingOption').value,
        comments: document.getElementById('comments').value
      });
    }
    setProgress(progress + 1);
    scrollToReservationForm();
    if (progress > 4) setProgress(4)
  };

    const handleDropdown1 = () =>{
    dropDown? setDropdown(false): setDropdown(true)
    }
    const handleDropdown2 = () =>{
    dropDown2? setDropdown2(false): setDropdown2(true)
    }

    const handleBack = (e)=>{
        e.preventDefault();
        if(progress >=1){
            setProgress(progress -1)
        }
        scrollToReservationForm()
    }

    const scrollToReservationForm = () => {
        const reservationForm = document.querySelector('.reservation-form');
        if (reservationForm) {
            reservationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };
  return (
    <section id='reservation-form'>
        <div className='reserve-title'>
            <h3>Reserve a Table</h3>
        </div>
        <div id="progress">
                {progress < 1 ? <div className={progress < 1? "in-progress":""}>1</div> :<div className='complete'><FontAwesomeIcon icon={faCheck}/></div>}

                <span className={progress>0? "complete" : ""}></span>

                {progress > 1?<div className='complete'><FontAwesomeIcon icon={faCheck}/></div> : <div className={progress >= 1? "in-progress":""}>2</div>}

                <span className={progress>1 ? "complete" : ""}></span>

                {progress> 2? <div className='complete'><FontAwesomeIcon icon={faCheck}/></div> : <div className={progress >= 2? "in-progress":""}>3</div>}

                <span className={progress>2? "complete" : ""}></span>

                {progress > 3? <div className='complete'><FontAwesomeIcon icon={faCheck}/></div>: <div className={progress >=3? "in-progress":""}>4</div>}

            </div>
        {progress <3?
        <div className="reservation-form">
        <form action="" method="post">
                {progress === 0? <>
                    <p>Personal Details</p>
            <div className="personal-details">
                <label htmlFor="firstname"> First name <span className='required'>*</span></label>
                <input type="text" name="firstname" id="firstname" placeholder='First name' required/>
                <label htmlFor="lastname">Last name <span className='required'>*</span></label>
                <input type="text" name='lastname' id='lastname' placeholder='Last name' required/>
                <label htmlFor="email">Email Address<span className='required'>*</span></label>
                <input type="email" name="email" id="email" placeholder='Email Address' required/>
                <label htmlFor="phone_number">Phone number: <span className='required'>*</span></label>
                <input type="tel" name="phone_number" id="phone_number" required placeholder='Phone number'/>
                <div className="button-container">
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div></> : progress === 1?
            <>
                <p>Table Details</p>
            <div className="table-details">
                <label htmlFor="guests">Number of guests <span className='required'>*</span></label>
                <input type="number" name="guests" id="guests" placeholder='Number of guests' required/>
                <label htmlFor="occasion">Occasion <span className='required'>*</span></label>
                <div className="selectDiv">
                    <select name="occasion" id="occasion" onClick={handleDropdown1}>
                    {occasionOptions.map((item, index)=>{
                        return(
                            <option key={item.value} value={item.value} disabled={index===0? true : false}selected={index===0? true : false} hidden={index===0? true : false}>{item.label}</option>
                        )
                    })}
                    </select>
                        <FontAwesomeIcon icon={faChampagneGlasses} size='2xl'  style={{ width: "fit-content", position:"absolute", left: "20px", top: "50%", transform: "translateY(-50%)"}}/>
                        {dropDown? <FontAwesomeIcon icon={faAngleUp} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>: <FontAwesomeIcon icon={faAngleDown} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>}
                </div>
                <label htmlFor="date">Date <span className='required'>*</span></label>
                <input type="date" name="date" id="date" />
                <label htmlFor="time">Time <span className='required'>*</span></label>
                <div className="selectDiv">
                    <select name="time" id="time" onClick={handleDropdown2}>
                    {timeOptions.map((item, index)=>{
                        return(
                            <option key={item.value} value={item.value} disabled={index===0? true : false}selected={index===0? true : false} hidden={index===0? true : false}>{item.label}</option>
                        )
                    })}
                    </select>
                        <FontAwesomeIcon icon={faClock} size='2xl'  style={{ width: "fit-content", position:"absolute", left: "20px", top: "50%", transform: "translateY(-50%)"}}/>
                        {dropDown2? <FontAwesomeIcon icon={faAngleUp} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>: <FontAwesomeIcon icon={faAngleDown} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>}
                </div>
                <div className="button-container">
                    <button className="prev-button" onClick={handleBack}>Personal Details</button>
                    <button className="next-button" onClick={handleContinue}>Continue</button>
                </div>
            </div>
            </> :
            <>
            <p>Additional Details</p>
        <div className="table-details">
            <label htmlFor="seats">seating option (indoor by default) <span className='required'>*</span></label>
            <div className="selectDiv">
                <select name="seatingOption" id="seatingOption" onClick={handleDropdown1}>
                {seatingOptions.map((item, index)=>{
                    return(
                        <option key={item.value} value={item.value} selected={index===0? true : false} hidden={index===0? true : false}>{item.label}</option>
                    )
                })}
                </select>
                    <FontAwesomeIcon icon={faChair} size='2xl'  style={{ width: "fit-content", position:"absolute", left: "20px", top: "50%", transform: "translateY(-50%)"}}/>
                    {dropDown? <FontAwesomeIcon icon={faAngleUp} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>: <FontAwesomeIcon icon={faAngleDown} size='2xl' style={{ width: "fit-content", position:"absolute", right: "20px", top: "50%", transform: "translateY(-50%)"}}/>}
            </div>
            <label htmlFor="comments">Additional Message (optional)</label>
            <textarea name="comments" id="comments" placeholder='Message...' onChange={handleValid}></textarea>
            <div className="button-container">
                <button className="prev-button" onClick={handleBack}>Table Details</button>
                <button className="next-button" onClick={handleContinue}>Checkout</button>
            </div>
        </div>
        </>
            }
        </form>
    </div> : progress === 3 ?
        <>
            <Payment/>
            <button className="prev-button" id='main-prev' onClick={handleBack}>Back to Form</button>
        </>
        :
        <Modal title={successful? "Successful": "Unsuccessful"} c1={successful? "Your Reservation is  confirmed": "Unfortunately, there aren't any tables available for your requested time at Little Lemon Restaurant."} c2= {successful? "A confirmation message has been sent to your email": "Would you like to see alternative times or be added to a waitlist?"} c3={successful? "Thanks for choosing Little Lemon Restaurant" : "We apologize for any inconvenience this may cause."} cta1={successful? "New Reservation": "See Altenative Time"} action={successful? handleRefresh : null} />
    }
    </section>
  )
}

export default Reserve
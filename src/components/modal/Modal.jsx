import React from 'react'
import './Modal.css'
import { faCircleCheck, faCircleXmark, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useReserveContext } from '../../contexts/ReserveContext'
const Modal = ({title, c1, c2, c3, cta1, action}) => {
  const handleHome = ()=>{
    location.replace("/")
  }
  const {successful} = useReserveContext()
  return (
    <section id="dialogue">
        <article>
          <div className="modal-title-container">
            <h3>{title}</h3>
            {successful? <FontAwesomeIcon icon={faCircleCheck} size='2xl'/>: <FontAwesomeIcon icon={faClose} size='2xl'/>}
          </div>
        <FontAwesomeIcon icon={faCircleXmark} size='2xl' className='absolute' onClick={handleHome}/>

        <p>{c1}</p>
        <p>{c2}</p>
        <p>{c3}</p>
        <div className="modal-buttons">
          <button onClick={action}>{cta1}</button>
          <button onClick={handleHome}>Home</button>
        </div>
        </article>
    </section>
  )
}

export default Modal
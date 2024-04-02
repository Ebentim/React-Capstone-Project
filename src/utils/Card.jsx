import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({image, alt, title, price, description, cta, icon}) => {
  return (
    <div className='card-container'>
            <img src={image} alt={alt}/>
            <div className="card-body">
                <div className='card-title'>
                    <h6>{title}</h6>
                    <p>{price}</p>
                </div>
                <p>{description}</p>
                <div className='cta'>
                    <Link to="/">{cta}</Link>
                    <p src={icon}></p>
                </div>
            </div>
    </div>
  )
}

export default Card
import React from 'react'

const Card2 = ({rating, image, alt, name, reviewTitle, reviews}) => {
  return (
    <div className='card2-container'>
        <div className='rating-div'>
            <span>{rating}</span>
            <span>{rating}</span>
            <span>{rating}</span>
            <span>{rating}</span>
            <span>{rating}</span>
        </div>
        <div className="name-div">
            <img src={image} alt={alt} />
            <h4 className='name'>{name}</h4>
        </div>
        <h4>{reviewTitle}</h4>
        <p>{reviews}</p>
    </div>
  )
}

export default Card2
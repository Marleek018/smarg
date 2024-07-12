import React from 'react'
import './Review.css'

const Review = ({review}) => {
   
  return (
    <div className='review-cont'>
      <h3>{review.comment}</h3>
      <h5>{review.user}</h5>
    </div>
  );
}

export default Review
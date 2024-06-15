// ReviewCard.js
import React from 'react';
import { motion} from 'framer-motion';
import './ReviewCard.css';
import ReviewBackground from '../../assets/ReviewBackground.png';

import { FaStar} from 'react-icons/fa'
const ReviewCard = ({ review }) => {
  return (
    <motion.div className="review-card" initial={{ opacity: 0 , marginTop: 100 , scale:-1  }} animate={{ opacity: 1, marginTop:0 , scale:1}} transition={{ delay: 0.5  }}>
      <div className="review-background" style={{ backgroundImage: `url(${ReviewBackground})` }}></div>
      <img src={review.avatar} alt={review.name} className="review-avatar" />
      <div className="review-content">
        
        <h3>{review.name}</h3>
        <p>{review.position}</p>
        <blockquote>{review.text}</blockquote>
        
      </div>
      <div className="review-rating"> {[...Array(5)].map((_, index) => (
            <FaStar key={index} color={index < review.rating ? '#ffc107' : '#e4e5e9'} />
          ))}</div>
    </motion.div>
  );
};

export default ReviewCard;

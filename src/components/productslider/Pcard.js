import React, { useRef, useEffect } from 'react';
import './Pcard.css';
import gsap from 'gsap';

const Pcard = ({ product }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
        paused: true,
        reversed: true,
        onHover: function () {
          this.reversed() ? this.play() : this.reverse();
        },
      }
    );

    cardRef.current.addEventListener('mouseenter', () => {
      gsap.to(cardRef.current, { scale: 1.05 });
    });

    cardRef.current.addEventListener('mouseleave', () => {
      gsap.to(cardRef.current, { scale: 1 });
    });
  }, []);

  return (
    <div className='pcard' ref={cardRef}>
      <div className='pcard-img'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='pcard-info'>
        <h3>{product.name}</h3>
        <p>{product.intro}</p>
        <h4><span>&#8377;</span>{product.price}</h4>
      </div>
      <div className='links'>
        <a href="#" className='buy-now'>Buy Now</a>
        <span><a href="#" className='read-more'>Read More</a></span>
      </div>
    </div>
  );
};

export default Pcard;

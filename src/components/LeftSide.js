import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LeftSide.css';

gsap.registerPlugin(ScrollTrigger);

const SwitchR4Hubl = ({ image, experience, title, description, imageStyle }) => {
  const imageRef = useRef(null);
  const expRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 90%',
        toggleActions: 'restart restart none none',
      },
      defaults: { duration: 0.8, ease: 'power3.out' }
    });

    t2.fromTo(
      imageRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    )
    .fromTo(
      expRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
    )
    .fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.4"
    )
    .fromTo(
      descRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.3"
    );
  }, []);

  return (
    <div className="switch-r4-hubl-container">
      <div className="switch-r4-hub-l">
        <div className="switch-description-l">
          <div className='exp-l' ref={expRef}>{experience}</div>
          <h1 ref={titleRef}>{title}</h1>
          <p ref={descRef}>{description}</p>
        </div>
        <img src={image} alt={title} className="switch-image-l" style={imageStyle} ref={imageRef} />
      </div>
    </div>
  );
};

export default SwitchR4Hubl;

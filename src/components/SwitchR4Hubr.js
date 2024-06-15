import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SwitchR4Hub.css';

gsap.registerPlugin(ScrollTrigger);

const SwitchR4Hub = ({ image, experience, title, description, imageStyle }) => {
  const imageRef = useRef(null);
  const expRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 90%',
        toggleActions: 'restart restart none none',
      },
      defaults: { duration: 0.8, ease: 'power3.out' }
    });

    tl.fromTo(
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
    <div className="switch-r4-hub">
      <img
        src={image}
        alt={title}
        className="switch-image"
        style={imageStyle}
        ref={imageRef}
      />
      <div className="switch-description">
        <div className='exp' ref={expRef}>{experience}</div>
        <h1 ref={titleRef}>{title}</h1>
        <p ref={descRef}>{description}</p>
      </div>
    </div>
  );
};

export default SwitchR4Hub;

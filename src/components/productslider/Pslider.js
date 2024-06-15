import React from 'react';
import Slider from 'react-slick';
import Pcard from './Pcard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Pslider.css'
import pcb from '../../assets/pcb.png'
 const product=[
    
        {
            id:1,
            name:"Product 1",
            price:4500,
            image: pcb,
            intro:"Experience seamless assistance and support through our innovative customer-to-customer service platform. Connect with fellow smart home enthusiasts to share tips, troubleshoot issues, and discover new ways ",

        },
        {
            id:1,
            name:"Product 2",
            price:4500,
            image: pcb,
            intro:"Experience seamless assistance and support through our innovative customer-to-customer service platform. Connect with fellow smart home enthusiasts to share tips, troubleshoot issues, and discover new ways ",

        },
        {
            id:1,
            name:"Product 3",
            price:4500,
            image: pcb,
            intro:"Experience seamless assistance and support through our innovative customer-to-customer service platform. Connect with fellow smart home enthusiasts to share tips, troubleshoot issues, and discover new ways ",

        },
    
]



const Pslider = () => {
    const settings = {
     
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      
      };
  return (
    <div className='product-slider'>
        <Slider {...settings}>
            {
                product.map((product,index)=>
                (
                    <Pcard key={index} product={product}/>
                ))
            }
        </Slider>
    </div>
  )
}

export default Pslider;

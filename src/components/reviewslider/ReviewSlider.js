import React from 'react';
import Slider from 'react-slick';
import ReviewCard from './ReviewCard';
import './ReviewSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h1 from '../../assets/h1.png';

const reviews = [
  {
    avatar: h1,
    name: 'Bang Upin',
    position: 'Pedagang Asongan',
    text: 'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.',
    rating: 5,
  },
  {
    avatar: h1,
    name: 'Ibuk Sukijan',
    position: 'Ibu Rumah Tangga',
    text: 'Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah.',
    rating: 4,
  },
  {
    avatar: h1,
    name: 'Mpok Ina',
    position: 'Karyawan Swasta',
    text: 'Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.',
    rating: 4,
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots:true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots:true,
        },
      },
    ],
  };

  return (
    <div>
      <header className="Review-header">
        <p>Our Client Reviews</p>
      </header>
      <div className="review-slider">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';


const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))

  }, [])

  return (
    <>
      <div className="animate__fadeInDown text-7xl mb-14 text-center">
        <Fade cascade delay={200}>
          <span className='text-green-800 font-bold'>What Our Clients Say</span>
        </Fade>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="p-20 text-center bg-gray-300 mb-24">
              <img className="rounded-full h-20 w-20 mx-auto" src={review.image} alt="" />
              <h2 className="text-3xl m-2">{review.name}</h2>
              <h2 className="text-xl text-green-700 mb-2 font-bold">{review.sport}</h2>
              <p className="font-semibold text-xl">{review.review}</p>
              <p className="text-3xl text-yellow-600 font-bold">{review.rating}</p>
            </div>

          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default Reviews;
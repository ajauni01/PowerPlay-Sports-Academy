import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../../assets/sliders/slider1.jpeg';
import slider2 from '../../../../assets/sliders/slider2.jpeg';
import slider3 from '../../../../assets/sliders/slider3.jpeg';
import slider4 from '../../../../assets/sliders/slider4.jpeg';
import slider5 from '../../../../assets/sliders/slider5.jpeg';

const Banner = () => {
  return (

    <div>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
        <div>
          <img src={slider4} />
        </div>
        <div>
          <img src={slider5} />
        </div>
      </Carousel>
    </div>

  );
};

export default Banner;

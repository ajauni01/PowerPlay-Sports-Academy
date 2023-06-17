import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([])

  const topInstructors = popularInstructors.slice(0, 6);
  // console.log('top instructors', topInstructors)

  useEffect(() => {
    fetch('https://power-play-sports-server-side.vercel.app/instructors')
      .then(res => res.json())
      .then(data => setPopularInstructors(data));
  }, []);


  return (
    <div className="w-[80%] mx-auto mt-24">
      <div className="animate__fadeInDown text-7xl mb-14 text-center">
        <Fade cascade delay={200}>
          <span className='text-red-600 font-bold'>Our Top Instructors</span>
        </Fade>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-24 ms-20 '>
        {
          topInstructors.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
        }
      </div>

    </div>
  );
};

export default PopularInstructors;
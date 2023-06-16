import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([])

  const topInstructors = popularInstructors.slice(0, 6);

  useEffect(() => {
    fetch('http://localhost:5000/instructors')
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

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mb-24 ms-20 '>
        {
          topInstructors.map(instructor => <PopularInstructors key={instructor._id} instructor={instructor}></PopularInstructors>)
        }

      </div>

    </div>
  );
};

export default PopularInstructors;
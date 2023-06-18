import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import PopularInstructorCard from './PopularInstructorCard';
import coachImg from "../../../assets/coach/coach.jpg"



const Instructors = () => {

  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch('https://sports2-orcin.vercel.app/instructors')
      .then(res => res.json())
      .then(data => setAllInstructors(data));
  }, []);

  return (
    <div>



      <div className="flex justify-center items-center  w-full h-full md:w-[1200px md:h-[600px]] ">
        <img src={coachImg} alt="" />
        <div className=" absolute w-1/4 right-20 ">
          <p className='text-sky-600  text-4xl bg-slate-300 bg-opacity-30 p-10 '>Our sports academy instructors are highly experienced and passionate about their respective sports, creating a supportive and motivating environment for students of all skill levels to excel and reach their full potential. With their expertise and dedication, they provide top-notch training and guidance, ensuring that each student receives the best possible instruction and achieves success in their chosen sport.</p>
        </div>
      </div>



      <div className="w-[80%] mx-auto mt-24">
        <div className="animate__fadeInDown text-7xl mb-14 text-center">
          <Fade cascade delay={200}>
            <span className='text-red-600 font-bold'>Our Instructors</span>
          </Fade>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-24 ms-20 '>
          {
            allInstructors.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
          }
        </div>

      </div>
    </div>
  );
};

export default Instructors;
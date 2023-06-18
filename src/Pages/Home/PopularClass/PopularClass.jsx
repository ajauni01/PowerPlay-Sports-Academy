import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import PopularClassCard from './PopularClassCard';

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([])

  const topClasses = popularClasses.slice(0, 6);

  useEffect(() => {
    fetch('https://sports2-orcin.vercel.app/popularClasses')
      .then(res => res.json())
      .then(data => setPopularClasses(data));
  }, []);

  return (
    <div className="w-[80%] mx-auto mt-24">
      <div className="animate__fadeInDown text-7xl mb-14 text-center">
        <Fade cascade delay={200}>
          <span className='text-red-600 font-bold'>Our Top Classes</span>
        </Fade>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-24 ms-20 '>
        {
          topClasses.map(cls => <PopularClassCard key={cls._id} cls={cls}></PopularClassCard>)
        }

      </div>

    </div>
  );
};

export default PopularClass;

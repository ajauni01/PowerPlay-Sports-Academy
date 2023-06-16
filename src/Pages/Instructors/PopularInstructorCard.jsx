

const PopularInstructorCard = ({ instructor }) => {

  const { email, image, name, sport, students } = instructor;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="h-100px md:h-80" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-primary">Professional</div>
        </h2>

        <p className="text-xl font-bold">Total Students: {students}</p>
        <p className="text-2xl font-bold text-center m-2">{sport}</p>
        <p className="font-semibold"> {email}</p>


      </div>
    </div>
  );
};

export default PopularInstructorCard;
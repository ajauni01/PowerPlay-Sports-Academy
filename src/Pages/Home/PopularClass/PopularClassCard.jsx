

const PopularClassCard = ({ cls }) => {
  const { image, name, students } = cls;


  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="h-100px md:h-80" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p className="text-xl font-bold">Total Students: {students}</p>
        <button className="btn btn-secondary">Select</button>

      </div>
    </div>
  );
};

export default PopularClassCard;
import { Slide, Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa"; 

const TouristsSports = () => {
  const touristsSpots = useLoaderData().sort((a, b) => b.totalVisitors - a.totalVisitors).slice(0, 6); // Sort spots by total visitors and get the top 6
  console.log(touristsSpots);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="my-14 rounded-xl py-10">
      <div className="my-5">
        <Slide direction="down">
          <h1 className="text-3xl font-bold text-center">
            Tourists Spots
          </h1>
        </Slide>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {touristsSpots.map((spot) => (
          <Zoom key={spot._id}>
            <div className="border p-5 rounded-xl shadow-2xl h-full hover:scale-105">
              <div className="space-y-2">
                <img src={spot.photo} className="rounded-xl" alt="Spot" />
                <div className="ml-1 space-y-1">
                  <h1 className="text-2xl font-bold">
                    {capitalizeFirstLetter(spot.spotName)}
                  </h1>
                  <p>
                    <strong>Cost:</strong>{" "}
                    <span className="text-green-500">$</span>
                    {spot.cost}
                  </p>
                  <h1 className="flex items-center gap-2">
                    <strong>Total Visitors:</strong>
                    <FaPeopleGroup />
                    {capitalizeFirstLetter(spot.totalVisitors)}
                  </h1>
                  <h1 className="flex items-center gap-2">
                    <strong>Travel Time:</strong>
                    <FaCalendarCheck />
                    {capitalizeFirstLetter(spot.travelTime)}
                  </h1>
                  <h1>
                    <strong>Seasonality:</strong> {spot.seasonality}
                  </h1>
                </div>
                <div className="ml-1">
                  <Link to={`/spot-details/${spot._id}`}>
                    <button className="btn btn-ghost bg-orange-500 text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Zoom>
          <Link to={`/all-tourist-spots`}>
            <button className="btn btn-ghost bg-blue-500 text-white">
              Show More
            </button>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default TouristsSports;

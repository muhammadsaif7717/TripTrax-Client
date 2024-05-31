import { Link, useLoaderData } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const Combodia = () => {
  const spots = useLoaderData();

  // Filter spots where countryName is "bangladesh"
  const combodiaSpots = spots.filter(
    (spot) => spot.countryName.toLowerCase() === "cambodia"
  );

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (

    <div className="my-10">
      <Slide direction="down">
        <h1 className="text-3xl font-bold text-center mb-7">Cambodia{`'`}s Tourist Spots</h1>
      </Slide>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {combodiaSpots.map((spot) => (
          <Zoom key={spot._id}>
            <div className="p-5 border rounded-xl">
              <img
                src={spot.photo}
                alt={spot.spotName}
                className="rounded-xl mb-2"
              />
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">
                  {capitalizeFirstLetter(spot.spotName)}
                </h2>
                <p className="flex items-center">
                  <BiWorld></BiWorld>&nbsp;
                  <p className="font-bold">{capitalizeFirstLetter(spot.countryName)}</p>
                </p>
                <p className="flex items-center">
                  <FaLocationDot></FaLocationDot>&nbsp;
                  <p className="font-bold">{capitalizeFirstLetter(spot.location)}</p>
                </p>
                <p className="text-gray-500 text-sm">{spot.description}</p>
                <p>
                  <strong>Cost:</strong> <span className="text-green-500 ">&nbsp;$</span>{spot.cost}
                </p>
                <p>
                  <strong>Seasonality:&nbsp;</strong>{" "}
                  {capitalizeFirstLetter(spot.seasonality)}
                </p>
                <div>
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
    </div>

  );
};

export default Combodia;

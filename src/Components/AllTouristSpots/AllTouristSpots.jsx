import { useState, useEffect, useContext } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Contexts/AuthProvider";


const AllTouristSpots = () => {
  const initialData = useLoaderData(); // Using useLoaderData to get the data
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortedSpots, setSortedSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const {  loading } = useContext(AuthContext);
  if (loading) {
      return (
          <div className="flex items-center justify-center h-[50vh]">
              <span className="loading loading-dots loading-lg"></span>
          </div>
      );
  }

  useEffect(() => {
    setTouristSpots(initialData); // Set the initial data when available
  }, [initialData]);

  useEffect(() => {
    sortTouristSpots();
  }, [sortOrder, touristSpots]); // Added sortOrder and touristSpots as dependencies

  const sortTouristSpots = () => {
    if (!touristSpots.length) return; // Return if touristSpots is empty
    let sorted = [...touristSpots];
    if (sortOrder === "asc") {
      sorted.sort((a, b) => a.cost - b.cost);
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => b.cost - a.cost);
    }
    setSortedSpots(sorted);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="p-7 flex flex-col items-center justify-center">
      <Helmet>
        <title>TripTrax | All Tourist Spots
        </title>
      </Helmet>
      <Slide direction="down"><h1 className="text-3xl font-bold">All Tourist Spots</h1></Slide>
      <Zoom>
        <div className="mt-7 border border-white rounded-xl ">
          <select
            className="btn rounded-xl"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by Average Cost</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </Zoom>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {sortedSpots.map((spot) => (
          <Zoom
            className="border p-5 rounded-xl h-full shadow-2xl hover:scale-105"
            key={spot._id}
          >
            <div className="space-y-2">
              <img src={spot.photo} className="rounded-xl" alt="Spot" />
              <div className="ml-1 space-y-1">
                <h1 className="text-2xl font-bold">
                  {capitalizeFirstLetter(spot.spotName)}
                </h1>
                <p>
                  <strong>Cost:</strong> <span className="text-green-500 ">&nbsp;$</span>{spot.cost}
                </p>
                <h1 className="flex items-center gap-2">
                  <strong>Total Visitors:</strong>
                  <FaPeopleGroup></FaPeopleGroup>
                  {capitalizeFirstLetter(spot.totalVisitors)}
                </h1>
                <h1 className="flex items-center gap-2">
                  <strong>Travel Time:</strong>
                  <FaCalendarCheck></FaCalendarCheck>
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
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpots;

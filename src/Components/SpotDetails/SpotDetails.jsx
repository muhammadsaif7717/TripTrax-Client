import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SpotDetails = () => {
  const { id } = useParams();
  const spots = useLoaderData();
  const clickedSpot = spots.find((spot) => spot._id === id);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <Zoom>
      <Helmet>
        <title>TripTrax | Spot Details</title>
      </Helmet>
      <div className="my-10 flex flex-col md:flex-row gap-5 md:gap-10 justify-between items-start md:items-center bg-gray-100 rounded-xl p-6 shadow-md">
        {/* Image */}
        <img src={clickedSpot.photo} className="w-full md:w-[40%] rounded-xl" alt="" />

        {/* Details */}
        <div className="flex-1 md:mt-0 mt-5 space-y-3">
          <h1 className="font-bold text-4xl text-gray-800">{capitalizeFirstLetter(clickedSpot.spotName)}</h1>
          <div className="flex items-center gap-2">
            <BiWorld className="text-2xl"></BiWorld>
          <h1 className="font-bold text-2xl text-gray-600">{capitalizeFirstLetter(clickedSpot.countryName)}</h1>
          </div>
          <p className="text-gray-700">{clickedSpot.description.charAt(0).toUpperCase() + clickedSpot.description.slice(1)}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="font-bold text-lg text-gray-800">Location</h1>
              <div className="flex items-center gap-2">
              <FaLocationDot></FaLocationDot>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.location)}</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Cost</h1>
              <p className="text-gray-700"><span className="text-green-500 ">&nbsp;$</span> {capitalizeFirstLetter(clickedSpot.cost)}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Total Visitors</h1>
              <div className="flex items-center gap-2">
              <FaPeopleGroup></FaPeopleGroup>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.totalVisitors)}</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Seasonality</h1>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.seasonality)}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Travel Time</h1>
              <div className="flex items-center gap-2">
              <FaCalendarCheck></FaCalendarCheck>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.travelTime)}</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">User Name</h1>
              <div className="flex items-center gap-2">
              <FaUserCircle></FaUserCircle>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.name)}</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">User Email</h1>
              <div className="flex items-center gap-2">
              <MdEmail></MdEmail>
              <p className="text-gray-700">{capitalizeFirstLetter(clickedSpot.email)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default SpotDetails;

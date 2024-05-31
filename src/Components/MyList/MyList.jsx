import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaPen } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const spots = useLoaderData();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    // Filter spots for the current user based on email
    const filteredSpots = spots.filter(
      (spot) => spot.email.toLowerCase() === user.email.toLowerCase()
    );
    setCurrentUser(filteredSpots);
  }, [spots, user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete spot
        fetch(`https://triptrax-server.vercel.app/tourist-spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });

              // Update current user spots after deleting
              const remainingSpots = currentUser.filter(
                (spot) => spot._id !== _id
              );
              setCurrentUser(remainingSpots);
            }
          })
          .catch((error) => {
            console.error("Error deleting spot:", error);
          });
      }
    });
  };

  return (
   <Slide>
     <Helmet>
        <title>TripTrax | My List
        </title>
      </Helmet>
     <div className="my-10">
      <Slide direction="down">
      <h1 className="text-2xl font-bold text-center mb-7">
        {user.displayName}
        {`'`}s Added Spots
      </h1>
      </Slide>
      <div className="overflow-x-auto">
        <table className="table-auto mx-auto md:w-full">
          <thead>
            <tr>
              <th className="p-1 md:px-4 md:py-2 text-sm md:text-[18px]">
                Spot Name
              </th>
              <th className="p-1 md:px-4 md:py-2 text-sm md:text-[18px]">
                Country
              </th>
              <th className="p-1 md:px-4 md:py-2 text-sm md:text-[18px]">
                Cost
              </th>
              <th className="p-1 md:px-4 md:py-2 text-sm md:text-[18px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUser.map((spot) => (
              <tr key={spot._id}>
                <td className="border p-1 md:px-4 md:py-2 text-sm md:text-lg">
                  {spot.spotName}
                </td>
                <td className="border p-1 md:px-4 md:py-2 text-sm md:text-lg ">
                  {spot.countryName}
                </td>
                <td className="border p-1 md:px-4 md:py-2 text-sm md:text-lg ">
                  {spot.cost}
                </td>

                <td className="border px-2 md:px-4 py-2">
                  <div className="flex items-center justify-center gap-3 md:gap-5">
                    <button
                      onClick={() => handleDelete(spot._id)}
                      className="md:btn btn-ghost md:bg-[#FF5861] md:text-white text-sm md:text-lg font-bold"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                      data-tooltip-place="bottom-end"
                    >
                      X
                    </button>
                    <Link
                      to={`/update-tourists-spot/${spot._id}`}
                      className="md:btn btn-ghost md:bg-blue-500 md:text-white text-sm md:text-lg"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Edit"
                      data-tooltip-place="bottom-end"
                    >
                      <FaPen></FaPen>
                    </Link>
                    <Link
                      to={`/spot-details/${spot._id}`}
                      className="md:btn btn-ghost md:bg-blue-400 md:text-white text-sm md:text-lg"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Details"
                      data-tooltip-place="bottom-end"
                    >
                      <BsFillInfoSquareFill></BsFillInfoSquareFill>
                    </Link>
                  </div>
                  <Tooltip id="my-tooltip" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </Slide>
  );
};

export default MyList;

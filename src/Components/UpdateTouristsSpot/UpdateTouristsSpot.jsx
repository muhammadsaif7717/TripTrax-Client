import { Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristsSpot = () => {
  const spot = useLoaderData();
  const {
    _id,
    spotName,
    countryName,
    location,
    description,
    cost,
    travelTime,
    totalVisitors,
    seasonality,
    name,
    email,
    photo,
  } = spot;
  console.log(spot);

  const handleUpdateTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spotName = form.spotName.value.toLowerCase();
    const countryName = form.countryName.value.toLowerCase();
    const location = form.location.value.toLowerCase();
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value.toLowerCase();
    const travelTime = form.travelTime.value.toLowerCase();
    const totalVisitors = form.totalVisitors.value;
    const name = form.name.value.toLowerCase();
    const email = form.email.value;

    const newTouristsSpot = {
      spotName,
      countryName,
      location,
      description,
      cost,
      seasonality,
      travelTime,
      totalVisitors,
      name,
      email,
      photo,
    };
    console.log(newTouristsSpot);

    //send coffee to the server site
    fetch(`https://triptrax-server.vercel.app/tourist-spots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristsSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Tourists Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        form.reset();
      });
  };
  return (
   <Slide>
     <div className="bg-orange-500 bg-opacity-40 p-5 md:p-12 lg:p-24 rounded-xl my-10">
      <Slide direction="down"><h2 className="text-3xl font-extrabold text-center mb-5">
        Update a Tourists Spot
      </h2></Slide>
      <form onSubmit={handleUpdateTouristsSpot}>
        {/* 1st row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Tourists Spot Name</label>
            <input
              type="text"
              name="spotName"
              defaultValue={spotName}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Country Name</label>
            <input
              type="text"
              name="countryName"
              defaultValue={countryName}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Location</label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Short Description</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Average Cost</label>
            <input
              type="number"
              name="cost"
              defaultValue={cost}
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Seasonality</label>
            <br />
            <select
              name="seasonality"
              defaultValue={seasonality}
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Seasonality</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="autumn">Autumn</option>
            </select>
          </div>
        </div>
        {/* 4th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Travel Time</label>
            <br />
            <select
              name="travelTime"
              defaultValue={travelTime}
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Travel Time</option>
              <option value="1 day">1 Day</option>
              <option value="2 days">2 Days</option>
              <option value="3 days">3 Days</option>
              <option value="4 days">4 Days</option>
              <option value="5 days">5 Days</option>
              <option value="6 days">6 Days</option>
              <option value="7 days">7 Days</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label>Total Visitors Per Year</label>
            <input
              type="number"
              name="totalVisitors"
              defaultValue={totalVisitors}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-8">
          <div className="w-full">
            <label>Photo URl</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* submit here */}
        <input type="submit" value="Update Spot" className="btn btn-block" />
      </form>
    </div>
   </Slide>
  );
};

export default UpdateTouristsSpot;

import { Slide, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddCountriesData = () => {
  const handleAddCountriesDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value.toLowerCase();
    const countryDescription = form.countryDescription.value.toLowerCase();
    const countrySpots = form.countrySpots.value
      .toLowerCase()
      .split(",")
      .map((spot) => spot.trim());
    const countryZone = form.countryZone.value.toLowerCase();
    const countryVisitors = form.countryVisitors.value;
    const countryPhoto = form.countryPhoto.value;

    const countryInfo = {
      countryName,
      countryDescription,
      countrySpots,
      countryZone,
      countryVisitors,
      countryPhoto,
    };
    console.log(countryInfo);

    //post tourist sport
    fetch("https://triptrax-server.vercel.app/countries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(countryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          // form.reset();
        }
      });
  };
  return (
    <Zoom className=" mb-14">
      <Helmet>
        <title>TripTrax | Add Countries Data
        </title>
      </Helmet>
      <Slide direction="down"> <h1 className="text-3xl font-bold text-center">
        Add Country Data
      </h1></Slide>
      <form
        onSubmit={handleAddCountriesDetails}
        className="flex items-center justify-center"
      >
        <div className="space-y-5 w-[550px]">
          <input
            type="text"
            name="countryName"
            placeholder="Country Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="countryDescription"
            placeholder="Country Details"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="countrySpots"
            placeholder="Country Spots (use comma between)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="countryZone"
            placeholder="Country Zone like Asia, Europe etc."
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="countryVisitors"
            placeholder=" Total Country Visitors"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="countryPhoto"
            placeholder="Country Photo URL"
            className="input input-bordered w-full"
            required
          />
          {/* submit here */}
          <input
            type="submit"
            value="Add Country Details"
            className="btn btn-block"
          />
        </div>
      </form>
    </Zoom>
  );
};

export default AddCountriesData;

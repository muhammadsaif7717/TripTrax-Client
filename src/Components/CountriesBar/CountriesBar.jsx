import { Link } from "react-router-dom";
import "./CountriesBar.css";
import { useEffect, useState } from "react";
import {  Slide, Zoom } from "react-awesome-reveal";

const CountriesBar = () => {
  const [countriesInfo, setCountriesInfo] = useState(null);

  useEffect(() => {
    fetch("https://triptrax-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountriesInfo(data);
      });
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      <div className="rounded-xl mt-5 md:mt-10 md:mb-5 py-10 px-5">
        <Slide direction="down">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Southeast Asian Countries
        </h1>
        </Slide>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 flex-wrap justify-center items-center gap-5">
            {countriesInfo &&
              countriesInfo.map((country) => (
                <Link
                  key={country._id}
                  to={
                    country.countryName
                      ? `/${country.countryName.toLowerCase()}`
                      : ``
                  }
                >
                 <Zoom>
                 <div className="card bg-base-100 shadow-2xl hover:scale-105 border w-auto h-full cursor-pointer">
                    <figure className="p-5 pb-0">
                      <img src={country.countryPhoto} className="rounded-xl" />
                    </figure>
                    <div className="px-7 py-5">
                      <h2 className="card-title text-3xl">
                        {capitalizeFirstLetter(country.countryName)}
                      </h2>
                      <hr className="border-gray-400 my-1 border-dashed" />

                      <p className="text-sm">
                        {capitalizeFirstLetter(country.countryDescription)}
                      </p>
                      <div className="flex flex-col ">
                        <div>
                          <strong>Zone:</strong>{" "}
                          {capitalizeFirstLetter(country.countryZone)}
                        </div>
                        <div>
                          <strong>Total Visitors:</strong> {country.countryVisitors}
                        </div>
                      </div>
                    </div>
                  </div>
                 </Zoom>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesBar;

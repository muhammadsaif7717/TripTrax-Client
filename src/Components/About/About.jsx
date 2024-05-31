
import { Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const About = () => {



    return (
        <Zoom
            data-aos-duration="1000" className="flex justify-center items-center h-auto mt-16 border border-white rounded-xl">
            <div className=" hero bg-gray-100 md:p-2 rounded-xl">
                <div className="hero-content text-center ">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">Hi There!</h1>
                        <p className="py-6 w-full">
                        TripTrax is your ultimate travel companion, offering personalized trip planning, destination guides, and travel tips. Discover hidden gems, create itineraries, and share experiences with fellow travelers. With TripTrax, explore the world hassle-free and make every journey unforgettable
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <b>Located at:</b>  Banani, Dhaka <br />
                        </p>
                        <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                            <NavLink to='/'>

                            </NavLink>
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default About;
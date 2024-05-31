import { Helmet } from "react-helmet-async";
import Slider from '../Slider/Slider'
import TouristsSports from "../TouristsSports/TouristsSports";
import About from "../About/About";
import Comments from "../Comments/Comments";
import CountriesBar from "../CountriesBar/CountriesBar";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const Home = () => {
    const {  loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="flex items-center justify-center h-[50vh]">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    return (
        <>
            <Helmet>
                <title>TripTrax | Home</title>
            </Helmet>

            <div className="my-10">
                <Slider></Slider>
                <CountriesBar></CountriesBar>
                <TouristsSports></TouristsSports>
                <Comments></Comments>
                <About></About>
            </div>
        </>
    );
};

export default Home;
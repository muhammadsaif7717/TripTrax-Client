import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import AllTouristSpots from "../Components/AllTouristSpots/AllTouristSpots";
import PrivateRoute from "./PrivateRoute";
import TouristsSports from "../Components/TouristsSports/TouristsSports";
import SpotDetails from "../Components/SpotDetails/SpotDetails";
import MyList from "../Components/MyList/MyList";
import UpdateTouristsSpot from "../Components/UpdateTouristsSpot/UpdateTouristsSpot";
import AddCountriesData from "../Components/AddCountriesData/AddCountriesData";
import Bangladesh from "../Components/Countries/Bangladesh";
import Thailand from "../Components/Countries/Thailand";
import Indonesia from "../Components/Countries/Indonesia";
import Malaysia from "../Components/Countries/Malaysia";
import Vietnam from "../Components/Countries/Vietnam";
import Cambodia from "../Components/Countries/Cambodia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://triptrax-server.vercel.app/tourist-spots"),
      },
      {
        path: "/",
        element: <TouristsSports></TouristsSports>,
      },
      {
        path: "/all-tourist-spots",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tourists-spot/:id",
        element: (
          <PrivateRoute>
            <UpdateTouristsSpot></UpdateTouristsSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://triptrax-server.vercel.app/tourist-spots/${params.id}`
          ),
      },
      {
        path: "/spot-details/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/add-countries-data",
        element: (
          <PrivateRoute>
            <AddCountriesData></AddCountriesData>
          </PrivateRoute>
        ),
      },
      {
        path: "/bangladesh",
        element: <Bangladesh></Bangladesh>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/thailand",
        element: <Thailand></Thailand>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/indonesia",
        element: <Indonesia></Indonesia>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/malaysia",
        element: <Malaysia></Malaysia>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/vietnam",
        element: <Vietnam></Vietnam>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
      {
        path: "/cambodia",
        element: <Cambodia></Cambodia>,
        loader: () =>
          fetch(`https://triptrax-server.vercel.app/tourist-spots/`),
      },
    ],
  },
]);

export default router;

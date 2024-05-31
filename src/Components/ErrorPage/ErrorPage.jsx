import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>404 Page Not Found</p>
        <Link to="/">
          <button className="btn btn-ghost text-white bg-orange-500">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

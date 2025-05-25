import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-red-500 mb-6">
        404 - Page Not Found
      </h1>
      <p className="text-lg lg:text-xl text-gray-700 font-semibold mb-10">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn bg-[#23BE0A] text-white text-xl font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
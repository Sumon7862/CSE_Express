import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="container min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <p className="text-2xl font-semibold mt-3">
          Page Not Found
        </p>

        <p className="mt-3 text-gray-500">
          Sorry! The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 duration-300"
        >
          Back Home
        </Link>

      </div>
    </section>
  );
};

export default Error;
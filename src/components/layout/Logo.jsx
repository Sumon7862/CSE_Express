import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const Logo = ({ dark = false }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl">
        <FaGraduationCap />
      </div>

      <div>
        <h2
          className={`text-xl font-bold leading-none ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          CSE Express
        </h2>

        <p
          className={`text-xs ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Question & Solution Library
        </p>
      </div>
    </Link>
  );
};

export default Logo;
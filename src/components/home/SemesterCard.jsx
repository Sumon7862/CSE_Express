import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBook,
  FaFilePdf,
  FaArrowRight,
} from "react-icons/fa";

const SemesterCard = ({ semester }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl p-7"
    >
      <div className="flex items-center justify-between">

        <span className="text-sm font-semibold bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
          Semester
        </span>

        <span className="text-3xl font-extrabold text-blue-600">
          {semester.number}
        </span>

      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Semester {semester.number}
      </h3>

      <div className="mt-7 space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <FaBook className="text-blue-600" />
            <span>Subjects</span>
          </div>

          <strong>{semester.subjects}</strong>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <FaFilePdf className="text-red-500" />
            <span>PDF Files</span>
          </div>

          <strong>{semester.pdfs}</strong>

        </div>

      </div>

      <Link
        to="/semesters"
        className="mt-8 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
      >
        Explore Semester

        <FaArrowRight />
      </Link>

    </motion.div>
  );
};

export default SemesterCard;
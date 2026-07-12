import { Link } from "react-router-dom";
import {
  FaFilePdf,
  FaLock,
  FaLockOpen,
  FaArrowRight,
} from "react-icons/fa";

const PDFCard = ({ pdf }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-red-50 flex items-center justify-center h-40">
        <FaFilePdf className="text-6xl text-red-500" />
      </div>

      {/* Body */}

      <div className="p-6">

        <div className="flex justify-between items-center">

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Semester {pdf.semester}
          </span>

          {pdf.premium ? (
            <span className="flex items-center gap-2 text-red-500 text-sm font-semibold">
              <FaLock />
              Premium
            </span>
          ) : (
            <span className="flex items-center gap-2 text-green-600 text-sm font-semibold">
              <FaLockOpen />
              Free
            </span>
          )}

        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900 line-clamp-2">
          {pdf.subject}
        </h3>

        <p className="mt-2 text-slate-500">
          {pdf.exam}
        </p>

        <div className="flex justify-between items-center mt-6 text-sm text-slate-500">

          <span>{pdf.year}</span>

          <span>{pdf.pages} Pages</span>

        </div>

        <Link
          to="/pdfs"
          className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
        >
          View Details

          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
};

export default PDFCard;
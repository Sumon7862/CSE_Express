import { FiSearch } from "react-icons/fi";
import { FaCode, FaBookOpen, FaLayerGroup } from "react-icons/fa";

const SearchSection = () => {
  return (
    <section className="-mt-10 relative z-20">
      <div className="container">

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">

          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Find Your Study Materials
          </h2>

          <p className="text-slate-500 text-center mt-2">
            Search by subject name, subject code or semester.
          </p>

          {/* Search */}

          <div className="grid lg:grid-cols-4 gap-4 mt-8">

            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search Subject (Example: Data Structure)"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject Code"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
              <FiSearch />
              Search
            </button>

          </div>

          {/* Quick Actions */}

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                <FaBookOpen />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Browse Subjects
              </h3>

              <p className="text-slate-500 mt-2">
                Explore all available CSE subjects semester-wise.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                <FaLayerGroup />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Browse Semesters
              </h3>

              <p className="text-slate-500 mt-2">
                Access all semesters and previous year questions.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                <FaCode />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Subject Codes
              </h3>

              <p className="text-slate-500 mt-2">
                Search instantly using official course codes.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SearchSection;
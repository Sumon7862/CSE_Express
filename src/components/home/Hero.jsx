import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaGraduationCap,
  FaFilePdf,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="container min-h-[calc(100vh-80px)] grid lg:grid-cols-2 gap-12 items-center py-20">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <FaGraduationCap />
            Bangladesh's CSE Question Library
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6 text-slate-900">

            Study Smarter with

            <span className="text-blue-600 block">
              CSE Express
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
            Previous year questions, AI-assisted solutions,
            semester-wise PDF collections and organized study
            materials for CSE students.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/semesters"
              className="bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Browse Semesters
            </Link>

            <Link
              to="/pricing"
              className="border border-slate-300 px-7 py-4 rounded-xl hover:bg-slate-100 transition font-semibold"
            >
              View Pricing
            </Link>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                1200+
              </h2>

              <p className="text-slate-500 mt-2">
                PDFs
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                80+
              </h2>

              <p className="text-slate-500 mt-2">
                Subjects
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                12
              </h2>

              <p className="text-slate-500 mt-2">
                Years
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="flex justify-center"
        >

          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

            <div className="space-y-5">

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">

                <FaBookOpen className="text-blue-600 text-2xl"/>

                <div>

                  <h3 className="font-bold">
                    Previous Questions
                  </h3>

                  <p className="text-sm text-slate-500">
                    Last 10-12 Years
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">

                <FaFilePdf className="text-red-500 text-2xl"/>

                <div>

                  <h3 className="font-bold">
                    PDF Solutions
                  </h3>

                  <p className="text-sm text-slate-500">
                    Semester-wise
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">

                <FaGraduationCap className="text-green-600 text-2xl"/>

                <div>

                  <h3 className="font-bold">
                    AI Assisted Answers
                  </h3>

                  <p className="text-sm text-slate-500">
                    Easy to Understand
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
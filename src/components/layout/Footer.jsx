import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="container py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 */}

          <div>

            <Logo dark/>

            <p className="mt-5 leading-7 text-slate-400">
              CSE Express is a digital question & solution library
              for Computer Science students. Access previous year
              questions, AI-assisted solutions and semester-wise PDFs.
            </p>

          </div>

          {/* Column 2 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/semesters"
                  className="hover:text-blue-400 transition"
                >
                  Semesters
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="hover:text-blue-400 transition"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Column 3 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Popular Semesters
            </h3>

            <ul className="space-y-3">

              <li>Semester 1</li>
              <li>Semester 2</li>
              <li>Semester 3</li>
              <li>Semester 4</li>
              <li>Semester 5</li>

            </ul>

          </div>

          {/* Column 4 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <p>Email</p>

            <p className="text-slate-400">
              support@cseexpress.com
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © {year} CSE Express. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React + Firebase + Vercel ❤️
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
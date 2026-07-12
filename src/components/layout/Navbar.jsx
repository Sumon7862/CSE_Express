import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Semesters",
      path: "/semesters",
    },
    {
      name: "Subjects",
      path: "/subjects",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${shadow ? "shadow-md" : ""
        }`}
    >
      <div className="container h-20 flex items-center justify-between">

        <Logo />

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-primary"
          >
            Register
          </Link>
        </div>

        {/* Mobile Icon */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-slate-700"
        >
          {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="container pb-6 flex flex-col gap-5">

          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700"
              }
            >
              {menu.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white py-3 rounded-xl text-center"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="text-center text-blue-600 font-semibold"
          >
            Create New Account
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
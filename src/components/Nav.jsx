import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border rounded-lg px-4 py-2 font-semibold border-[#23BE0A]"
              : "px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border rounded-lg px-4 py-2 font-semibold border-[#23BE0A]"
              : "px-4 py-2"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/barChart"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border rounded-lg px-4 py-2 font-semibold border-[#23BE0A]"
              : "px-4 py-2"
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border rounded-lg px-4 py-2 font-semibold border-[#23BE0A]"
              : "px-4 py-2"
          }
        >
          Feedback
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/subscribe"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border rounded-lg px-4 py-2 font-semibold border-[#23BE0A]"
              : "px-4 py-2"
          }
        >
          Subscribe
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-4 lg:px-20 lg:py-8">
      <div className="navbar bg-base-100 relative z-10">
        <div className="navbar-start">
          {/* Dropdown for smaller screens */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold ml-2">Book Vibe</a>
        </div>

        {/* Desktop navigation links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 justify-center items-center">
            {navLinks}
          </ul>
        </div>

        {/* Sign In/Sign Up buttons */}
        <div className="navbar-end flex gap-3 lg:gap-8">
          <a className="btn bg-[#23BE0A] text-white font-semibold text-sm lg:text-lg px-4 py-2">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white font-semibold text-sm lg:text-lg px-4 py-2">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
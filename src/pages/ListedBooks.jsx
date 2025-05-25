import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8 lg:px-0">
 
      <div className="bg-[#1313130D] p-8 text-center rounded-2xl mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Books
        </h1>
      </div>

      <div className="flex border-b border-gray-300 overflow-x-auto whitespace-nowrap mb-8">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex-shrink-0 px-6 py-3 text-lg font-medium ${
            tabIndex === 0
              ? "border-b-2 border-[#23BE0A] text-[#23BE0A]"
              : "text-gray-600 hover:text-gray-900"
          } transition-colors duration-200`}
        >
          Read Books
        </Link>

        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex-shrink-0 px-6 py-3 text-lg font-medium ${
            tabIndex === 1
              ? "border-b-2 border-[#23BE0A] text-[#23BE0A]"
              : "text-gray-600 hover:text-gray-900"
          } transition-colors duration-200 ml-4`}
        >
          Wishlist Books
        </Link>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
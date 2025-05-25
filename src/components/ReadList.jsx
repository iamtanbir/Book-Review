import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  const handleReadListFilter = (filter) => {
    let sortedBooks = [...readList]; // Create a mutable copy

    if (filter === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (filter === "totalPages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === "yearOfPublishing") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    // If filter is "all", sortedBooks is already a copy of readList, no further action needed

    setDisplayReadBooks(sortedBooks);
  };

  // LOAD DATA FROM LOCAL STORAGE
  useEffect(() => {
    const getReadData = JSON.parse(localStorage.getItem("books")) || [];
    setReadList(getReadData);
    setDisplayReadBooks(getReadData); // Initialize displayReadBooks with all books
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      {/* SORTING BUTTON */}
      <div className="flex justify-center items-center py-8">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white text-lg font-semibold"
          >
            Sort By <AiOutlineArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handleReadListFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleReadListFilter("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleReadListFilter("totalPages")}>
                Number of pages
              </a>
            </li>
            <li>
              <a onClick={() => handleReadListFilter("yearOfPublishing")}>
                Published year
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Book List */}
      <div className="space-y-6">
        {displayReadBooks.map((book) => (
          <div
            className="p-6 border border-gray-200 rounded-2xl lg:flex items-center gap-6"
            key={book.bookId}
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-48 mb-6 lg:mb-0 bg-[#1313130D] rounded-2xl flex items-center justify-center p-4">
              <img
                src={book.image}
                alt={`Cover of ${book.bookName}`}
                className="max-h-48 object-contain rounded"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow space-y-4">
              <h2 className="text-2xl font-bold">{book.bookName}</h2>
              <p className="text-base text-gray-700">By: {book.author}</p>

              {/* Tags and Publishing Year */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-gray-700">
                <p className="font-bold">Tag:</p>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-3xl px-4 py-2 bg-green-100 text-[#23BE0A] font-medium whitespace-nowrap"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2 lg:mt-0">
                  <CiLocationOn className="text-xl" />
                  <span>Year of Publishing: {book.yearOfPublishing}</span>
                </div>
              </div>

              {/* Publisher and Total Pages */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <GoPeople className="text-xl" />
                  <span>Publisher: {book.publisher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsFileEarmarkBarGraph className="text-xl" />
                  <span>Page: {book.totalPages}</span>
                </div>
              </div>

              <hr className="border border-dashed my-4" />

              {/* Category, Rating, and View Details Button */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                <span className="rounded-3xl px-4 py-2 font-medium text-[#328EFF] bg-[#328EFF1A] whitespace-nowrap">
                  Category: {book.category}
                </span>
                <span className="rounded-3xl px-4 py-2 font-medium text-[#FFAC33] bg-[#FFAC331A] whitespace-nowrap">
                  Rating: {book.rating}
                </span>
                <Link to={`/book-details/${book.bookId}`} className="w-full lg:w-auto">
                  <button className="btn rounded-full text-white font-medium text-lg bg-[#23BE0A] w-full lg:w-auto mt-2 lg:mt-0">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
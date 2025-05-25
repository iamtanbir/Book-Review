import { useLoaderData, useParams } from "react-router-dom";
import {
  saveReadDataToLocal,
  saveWishlistDataToLocal,
} from "../utility/localStorage";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { bookId } = useParams();

  const idInt = parseInt(bookId);

  const book = bookDetails.find((book) => book.bookId === idInt);

  // Destructure book properties for easier use
  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = book;

  // READ BUTTON
  const handleRead = () => {
    saveReadDataToLocal(book);
  };

  // WISHLIST BUTTON
  const handleWishlist = () => {
    saveWishlistDataToLocal(book);
  };

  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border p-6 rounded-2xl">
        {/* Image Section */}
        <div className="flex justify-center items-center bg-[#1313130D] rounded-2xl p-8 min-h-[300px]">
          <img className="max-h-[450px] object-contain rounded" src={image} alt={`Cover of ${bookName}`} />
        </div>

        {/* Details Section */}
        <div className="flex flex-col p-0 lg:p-0 space-y-4">
          <h1 className="text-3xl font-bold lg:text-5xl">{bookName}</h1>
          <p className="text-xl font-medium text-gray-700">By: {author}</p>
          <hr />
          <p className="text-lg lg:text-xl font-medium text-gray-800">{category}</p>
          <hr />
          <p className="text-base text-gray-800">
            <span className="font-bold">Review: </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 py-2">
            <p className="font-bold text-gray-800">Tag:</p>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-3xl px-4 py-2 bg-green-100 text-[#23BE0A] font-medium whitespace-nowrap"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border border-dashed" />

          {/* Additional Details Table-like Layout */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-base text-gray-700">Number of Pages:</p>
              <p className="font-semibold text-gray-900 text-right lg:text-left">{totalPages}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-base text-gray-700">Publisher:</p>
              <p className="font-semibold text-gray-900 text-right lg:text-left">{publisher}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-base text-gray-700">Year of Publishing:</p>
              <p className="font-semibold text-gray-900 text-right lg:text-left">{yearOfPublishing}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-base text-gray-700">Rating:</p>
              <p className="font-semibold text-gray-900 text-right lg:text-left">{rating}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleRead}
              className="btn text-lg font-bold px-6 py-3 border border-[#131313] rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="btn text-lg font-bold px-6 py-3 bg-[#59C6D2] text-white rounded-lg hover:bg-[#48b5c0] transition-colors duration-200"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
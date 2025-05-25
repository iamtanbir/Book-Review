import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <div className="border rounded-2xl ">
      <Link
        to={`/book-details/${bookId}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 h-full flex flex-col"
      >
        <div className="flex justify-center items-center bg-[#1313130D] m-4 rounded-2xl p-4 min-h-[150px]">
          <img
            role="presentation"
            className="rounded max-h-44 object-contain"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="p-6 space-y-3 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-3xl p-2 bg-green-100 text-[#23BE0A] text-xs lg:text-base font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-2xl lg:font-bold mt-4">
            {bookName}{" "}
          </h3>
          <p className="text-base text-gray-700">By: {author}</p>

          <hr className="border border-dashed my-4" />

          <div className="flex justify-between items-center mt-auto">
            <p className="text-base text-gray-700">{category}</p>
            <p className="flex items-center gap-2 text-base text-gray-700">
              {rating} <span className="text-xl"><AiOutlineStar /></span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
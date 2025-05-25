import { NavLink } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto px-4 py-8 space-y-12 lg:px-0">
        {/* BANNER */}
        <div className="flex flex-col lg:flex-row items-center bg-[#1313130D] rounded-3xl p-6 lg:p-10 gap-6">
          <div className="flex flex-col justify-center text-center lg:text-left py-8 lg:py-0 lg:w-7/12 order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Books to freshen up your bookshelf
            </h3>
            {/* Modified NavLink for button positioning and sizing */}
            <NavLink to="/listedBooks" className="w-full sm:w-auto mx-auto lg:mx-0">
              <button className="btn text-xl font-bold bg-[#23BE0A] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto">
                View The List
              </button>
            </NavLink>
          </div>
          {books.length > 0 && (
            <div className="flex justify-center items-center lg:w-5/12 order-1 lg:order-2">
              <img
                src={books[0].image}
                alt="Bookshelf banner"
                className="max-h-64 object-contain rounded-lg"
              />
            </div>
          )}
        </div>

        {/* BOOK CARDS */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-10">Books</h2>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.bookId} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
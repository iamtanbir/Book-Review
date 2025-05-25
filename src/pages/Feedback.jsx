const Feedback = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* YOUR OPINION */}
        <div className="flex flex-col p-6 shadow-md rounded-xl bg-gray-50 text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center text-lg">How was your experience?</span>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    title={`Rate ${star} stars`}
                    aria-label={`Rate ${star} stars`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full px-4">
              <textarea
                rows="4"
                placeholder="Share your thoughts..."
                className="p-4 rounded-md resize-none text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="py-3 mt-6 font-semibold rounded-md text-white bg-[#23BE0A] hover:bg-green-700 transition-colors duration-300"
              >
                Leave feedback
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm text-gray-600 hover:underline"
            >
              Maybe later
            </a>
          </div>
        </div>

        {/* CUSTOMER REVIEW */}
        <div className="flex flex-col p-6 shadow-md rounded-xl bg-gray-50 text-gray-800">
          <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Customer Reviews
            </h2>
            <div className="flex flex-col items-center mt-2 mb-4 space-y-2">
              <div className="flex">
                {[1, 2, 3].map((star) => (
                  <button
                    key={star}
                    type="button"
                    title={`Rate ${star} stars`}
                    aria-label={`Rate ${star} stars`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                ))}
                {[4,5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    title={`Rate ${star} stars`}
                    aria-label={`Rate ${star} stars`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                ))}
              </div>
              <span className="text-gray-600">3 out of 5</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              861 global ratings
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-12 text-sm text-gray-700">5 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                  <div className="bg-orange-500 h-4 w-5/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right text-gray-700">83%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-12 text-sm text-gray-700">4 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                  <div className="bg-orange-500 h-4 w-4/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right text-gray-700">67%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-12 text-sm text-gray-700">3 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                  <div className="bg-orange-500 h-4 w-3/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right text-gray-700">50%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-12 text-sm text-gray-700">2 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                  <div className="bg-orange-500 h-4 w-2/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right text-gray-700">33%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-12 text-sm text-gray-700">1 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                  <div className="bg-orange-500 h-4 w-1/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right text-gray-700">17%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
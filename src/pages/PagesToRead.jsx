import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer, 
  Tooltip, 
} from "recharts";

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const savedReadBooks = JSON.parse(localStorage.getItem("books")) || [];

    const uniqueBookIds = new Set();
    const uniqueReadBooks = savedReadBooks.filter(book => {
      if (uniqueBookIds.has(book.bookId)) {
        return false; 
      }
      uniqueBookIds.add(book.bookId); 
      return true; 
    });

    const transformedReadBooks = uniqueReadBooks.map((book) => ({
      name: book.bookName,
      pages: book.totalPages,
    }));
    setReadBooks(transformedReadBooks);
  }, []);

  
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink", "#82ca9d", "#a4de6c", "#d0ed57", "#c2e7b8", "#f4b942", "#a6c9e0"]; 
  
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

 
  const CustomXAxisTick = ({ x, y, payload }) => {
    const MAX_LENGTH = 15; 
    const displayName = payload.value.length > MAX_LENGTH
      ? `${payload.value.substring(0, MAX_LENGTH)}...`
      : payload.value;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {displayName}
        </text>
      </g>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-0">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-[400px] w-full">
        {readBooks.length > 0 ? ( 
          <ResponsiveContainer width="95%" height="95%">
            <BarChart
              data={readBooks}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 80, 
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={<CustomXAxisTick />}
                interval={0} 
                height={70} 
              />
              <YAxis />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar
                dataKey="pages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top", fill: '#333' }}
              >
                {readBooks.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-xl text-gray-600 text-center">
            No books added to "Read Books" yet. Add some to see the chart!
          </p>
        )}
      </div>
    </div>
  );
};

export default PagesToRead;
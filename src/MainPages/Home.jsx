import React, { useState } from "react";
import img from "../assets/loveWedding.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
    // You can later redirect to /vendor?query=search or filter vendor list
  };

  return (
    <div className="w-full h-96 relative overflow-hidden">
      <img src={img} alt="Wedding" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to WeddingFlow</h1>
        <p className="mt-2 text-lg md:text-2xl text-center">Plan your perfect wedding easily!</p>

        <div className="flex flex-col md:flex-row items-center gap-2 mt-6 bg-rose-50 text-pink-700 p-2 rounded-lg w-full max-w-3xl">
          <input
            type="search"
            placeholder="Search your vendors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

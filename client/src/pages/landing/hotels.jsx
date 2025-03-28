import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Search, StarFill } from "react-bootstrap-icons";

// Sample images
import hotel1 from "../../../public/images/5536fbbe4944cceeee25db1bd75a0faf.jpg";
import hotel2 from "../../../public/images/6c886a58955b62b80b29d29a69432904.jpg";
import hotel3 from "../../../public/images/b866c3e894ab5648a3b779679b8b9069.jpg";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

// Sample hotel data
const hotels = [
  { id: 1, name: "Emerald Valley Lodge", location: "New York, USA", image: hotel1, rating: 5 },
  { id: 2, name: "Grand Horizon Hotel", location: "Los Angeles, USA", image: hotel2, rating: 4 },
  { id: 3, name: "Ocean Breeze Resort", location: "Miami, USA", image: hotel3, rating: 5 },
];

const Hotels = () => {
  const { city } = useParams(); // Get city from URL
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) {
      // If no city in URL, get user's location
      setLoading(true);
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setLoading(false);
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    }
  }, [city]);

  return (
    <div>
       <Nav />
      <div className="px-6 lg:px-24 py-8 h-screen">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <h3 className="text-3xl lg:text-5xl font-semibold text-[#212121] mb-6 lg:mb-0">
            {city ? `Hotels in ${city}` : "Hotels Near You"}
          </h3>
          <div className="flex w-full lg:w-4/12 items-center">
            <input
              type="text"
              className="p-3 lg:p-4 px-6 lg:px-10 border-2 lg:border-3 border-gray-400 w-full rounded-full placeholder:text-lg lg:placeholder:text-2xl placeholder:text-[#212121]"
              placeholder="Search by city"
            />
            <div className="p-4 lg:p-5 cursor-pointer text-lg lg:text-xl rounded-full bg-[#212121] text-white font-bold -ml-10 lg:-ml-12">
              <Search />
            </div>
          </div>
        </div>



        {/* Hotels Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="flex flex-col w-full mx-auto">
              <img src={hotel.image} alt={hotel.name} className="rounded-xl h-80 w-full object-cover" />
              <div className="text-start mt-4">
                <h4 className="text-xl lg:text-2xl font-semibold">{hotel.name}</h4>
                <p className="text-lg lg:text-xl mt-2 mb-4">{hotel.location}</p>
                {/* Star Ratings */}
                <div className="flex items-center text-2xl text-yellow-500">
                  {Array.from({ length: hotel.rating }, (_, index) => (
                    <StarFill key={index} />
                  ))}
                </div>
                {/* Book Now Button */}
                <button className="w-full cursor-pointer rounded-full text-[#212121] border-2 border-[#212121] transition-all text-center text-xl lg:text-2xl py-3 my-4 hover:text-white hover:bg-[#212121]">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Hotels;

import ResturentCard, { withVegLevel } from "./ResturentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";
const Body = () => {
  //state varible
  const [resturendtData, setresturendtData] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ResturentCardVeg = withVegLevel(ResturentCard);
  useEffect(() => {
    fetchData();
  }, []);
    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setresturendtData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="m-auto text-center">
        <h1 className="bg-red-700">No internet</h1>
        <h2>Try:</h2>
        <h3>Checking the network cables, modem, and router</h3>
        <h3>Reconnecting to Wi-Fi</h3>
        <h3> Running Windows Network Diagnostics</h3>
        <h3 className="bg-red-700">ERR_INTERNET_DISCONNECTED</h3>
      </div>
    );
  }  
  return (resturendtData === undefined||resturendtData.length ===0 )? <Shimmer /> : (
    <div className="w-full body  flex-shrink">
      <div className="filter md:flex">
        <div className="search p-2 m-2 md:p-4 md:m-4">
          <input
             data-testid="testinput"
            placeholder="Search"
            type="text"
            className="w-48 md:w-52 p-1 m-1 md:p-2 md:m-2 border border-solid border-black rounded-lg  hover:border hover:border-solid hover: border-blue"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-xs md:text-lg px-2 md:px-4 rounded-lg text-white hover:text-black py-2 bg-gray-400 hover:bg-gray-200 m-2 md:m-4  shadow-xl transition ease-in-out delay-0   hover:-translate-y-1 hover:scale-110 hover:bg-white-200 duration-300  "
            onClick={() => {
              console.log(searchText);
              const filtedlistOfres = resturendtData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("filter called");
              setFilterRestaurent(filtedlistOfres);
            }}
          >
            Search
          </button>
        </div>

        <div className="search p-1 m-1 md:p-4 md:m-4 flex items-center">
          <button
            className="text-xs md:text-lg  px-2 md:px-4 py-2 bg-gray-400 text-white hover:text-black rounded-lg  hover:bg-gray-200 hover:shadow-xl transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 hover:bg-white-200 duration-300 "
            onClick={() => {
              const filteredresData = resturendtData?.filter(
                (res) => res?.info?.avgRating > 4
              );
              console.log("rating filter called :",filteredresData.length);
              setFilterRestaurent(filteredresData);
            }}
          >
            Top Rated Resturents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurent?.map((resturent) => (
          <Link
            key={resturent?.info?.id}
            to={"/restaurants/" + resturent?.info?.id}
          >
            {resturent?.info?.veg ? (
              <ResturentCardVeg resData={resturent} />
            ) : (
             <ResturentCard resData={resturent} />
            )}
          </Link>
        ))}
      </div>
     
    </div>
  );
};
export default Body;

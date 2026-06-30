import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import obj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5134376&lng=77.0801899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      //   const jsonData = data.json();
      const data = obj;
      const jsonData =
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      setListOfRestaurants(jsonData);
      setSearchFilter(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus){
    return <h1>Looks like you are offline!! Please check your internet connection</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setSearchFilter(filteredRestaurant);
              console.log(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setSearchFilter(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchFilter.map((restaurant, index) => {
          return (
            <Link key={index} to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard resObj={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { restaurantMenuObj } from "../utils/restaurantMenuData";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { params } = useParams();

  const resInfo = useRestaurantMe(params);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines[0]}</h2>
        <h2>{cuisines[1]}</h2>
        <h2>{cuisines[2]}</h2>
        <h3>{costForTwoMessage}</h3>
        <ul>
          <li>Biryanii</li>
          <li>Chicken</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

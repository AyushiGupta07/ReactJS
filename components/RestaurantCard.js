import { FOOD_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const cloudinaryImageId = resObj.info.cloudinaryImageId;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={FOOD_IMAGE + cloudinaryImageId}
      />
      <h3>{resObj.info.name}</h3>
      <h4>{resObj.info.avgRating}</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestaurantCard;

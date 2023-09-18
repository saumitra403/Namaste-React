import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg hover:bg-gray-200 bg-gray-100">
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>${costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;

import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.724450403454345&lng=77.13298384599054&restaurantId=254192&submitAction=ENTER")
        const json = await data.json();
        setResInfo(json?.data);
    }


    return resInfo===null ? <Shimmer /> : (<div className="menu">
        <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
        <p>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")} - {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>);
}

export default RestaurantMenu;
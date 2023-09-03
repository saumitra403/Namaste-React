import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");

  //if no dependency array => useEffect is called on every render(default behaviour)
  //if dependency array is empty [] => useEffect is called on initial render(just once)
  //if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }}
            className="login"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// external
import TwitterIcon from "@mui/icons-material/Twitter";
// internal
import "../css/navbar.scss";
import coffee_logo from "../assets/coffee_logo.svg";

const PROFILE_URL = "https://twitter.com/thekvnlee";

const Navbar = ({ user }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <div className="navbar-left-content">
          <img src={coffee_logo} className="coffee-logo" />
        </div>
      </div>
      <div className="navbar-right-container">
        <div className="navbar-right-content">
          <TwitterIcon
            className="twitter-icon"
            onClick={() => {
              window.open(PROFILE_URL, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

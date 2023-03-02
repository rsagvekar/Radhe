import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/home">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/home">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/home">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="data:image/png;base64,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"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;

import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import navb from '../assets/bars-solid.svg'
const Header = () => {
  const [refresh, userefesh] = useState<boolean>(false);
  const ShowNav = () => {
    userefesh(!refresh);
  };
  return (
    <div>
      <div className="bodyy">
        <div className="inner-body">
          <div className="logo">POWER VOLTE</div>
          <div className={refresh ? "list-items1" : "list-items"}>
            <button
              type="button"
              className={refresh ? "toggle-btn1" : "toggle-btn"}
              onClick={ShowNav}
            >
              <img src={navb} alt="" />
            </button>
            <ul>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/"
              >
                <li>Home</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/about"
              >

              <li>About us</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/services"
              >

              <li>Our Services</li>
              </Link>
              
             
              <li>
              <a href="#contact" id="abc" style={{
              textDecoration:"none",color:"black"
             }}>
                Contact us
                </a> </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaPeopleArrows,
  FaEdit,
  FaSignOutAlt,
  FaUserAlt,
  FaShip,
} from "react-icons/fa";
import "../../CSS/DashboardStyle.css";
import cargo from "../../../Images/Cargo logo/cargo1.png";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const handleToggle = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
  };
  const handleSelect = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("select");
  };
  return (
    <div className="bg-slate-900 text-white">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="  ">
              <li style={{ marginLeft: "-12px", marginBottom: "100px" }}>
                <Link className="aLink flex justify-center" to="/">
                  <FaShip className="text-6xl" />
                  {/* <img
                    className="h-20 w-20 "
                    // src="https://cdn-icons-png.flaticon.com/512/8047/8047721.png"
                    src={cargo}
                    alt=""
                  /> */}
                </Link>
              </li>
              {/* start */}
              <li>
                <Link className="aLink" to="/">
                  <span className="icon  ">
                    <FaHome className="text-4xl mt-3 ml-2" />
                  </span>
                  <span className="title hover:animate-pulse font-bold ">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link className="aLink" to="/appointment">
                  <span className="icon">
                    <FaPeopleArrows className="text-4xl mt-3 ml-2" />
                  </span>
                  <span className="title">Booking</span>
                </Link>
              </li>
              <li>
                <Link className="aLink" to="/dashboard/booking">
                  <span className="icon">
                    <FaEdit className="text-4xl mt-3 ml-2" />
                  </span>
                  <span className="title">Manage Booking</span>
                </Link>
              </li>
              <li className="mt-64">
                <Link className="aLink" to="/profile">
                  <span className="icon">
                    <FaUserAlt className="text-4xl mt-3 ml-2" />
                  </span>
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link className="aLink " to="/dashboard/booking">
                  <span className="icon">
                    <FaSignOutAlt className="text-4xl mt-3 ml-2" />
                  </span>
                  <span className="title">Sign Out</span>
                </Link>
              </li>
            </ul>
            <div onClick={handleToggle} className="toggle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

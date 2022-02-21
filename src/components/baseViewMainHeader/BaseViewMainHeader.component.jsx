import React, { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
// import { removeUserSession } from "../../utils/utils";
import profilePics from "../../assets/profile-pics.jpg";
import { BiLogOut } from "react-icons/bi";
import { FaList, FaEllipsisV } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { GiRingingBell } from "react-icons/gi";

import "./BaseViewMainHeader.styles.css";

const BaseViewMainHeader = () => {
  const { logout, token } = useContext(authContext);
  const [logoutdd, setLogoutdd] = useState(false);
  const [alarm, setAlarm] = useState(false);

  const handleAlarm = () => {
    setAlarm(!alarm);
    if (alarm) {
      fetch(
        "https://inverterdev.herokuapp.com/dashboard/status/control_alarmOn",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      ).then((res) => console.log(res));
    } else {
      fetch(
        "https://inverterdev.herokuapp.com/dashboard/status/control_alarmOff",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );
    }
  };

  //inverterdev.herokuapp.com/dashboard/status/control_alarmOff

  return (
    <div className="baseview-header">
      <ul className="navigation">
        <li className="nav--item">
          <input type="search" />
          {/* {<BiSearchAlt />} */}
        </li>
        <li className="nav--item">
          {<FaList />} <span>Menu</span>{" "}
        </li>
        <li className="nav--item">
          <span className="badge">4</span> <span>Settings</span>{" "}
          {<FiSettings className="settings" />}
        </li>
      </ul>
      <div className="profile">
        <div className="notifications">
          <IoRefreshCircleOutline />
          <CgMenuGridR />
          <span onClick={handleAlarm}>
            {alarm ? (
              <GiRingingBell className="alarm--fired" />
            ) : (
              <BsBellFill />
            )}
          </span>
        </div>
        <div className="profile-details">
          <div className="profile--pics">
            <img src={profilePics} alt="profile" />
          </div>
          <div className="profile--name">
            <h4>Alvaro Monte</h4>
            <p>CSO MON</p>
          </div>
          <div className="ellipsis">
            <FaEllipsisV onClick={() => setLogoutdd(!logoutdd)} />
            {/* {console.log(logout)} */}
            <div className={!logoutdd ? "logout" : "logout logout--display"}>
              <Link onClick={logout} to="/">
                <BiLogOut /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseViewMainHeader;

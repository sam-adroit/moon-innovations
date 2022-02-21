import React from "react";
import { Link } from "react-router-dom";

import "./BaseViewSidebarMenu.styles.css";

const BaseViewSidebarMenu = () => {
  return (
    <div>
      <ul className="baseview-menu">
        <li className="baseview-menu--item">
          <Link to="/dashboard" className="baseview-menu--link">
            Dashboard
          </Link>
        </li>
        <li className="baseview-menu--item">
          <Link to="/home" className="baseview-menu--link">
            Pool
          </Link>
        </li>
        <li className="baseview-menu--item">Posts</li>
        <li className="baseview-menu--item">Profile View</li>
      </ul>
    </div>
  );
};

export default BaseViewSidebarMenu;

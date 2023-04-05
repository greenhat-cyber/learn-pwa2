import React from "react";
import "./Bottomnav.css";

import { AiFillHome } from "react-icons/ai";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottomnav shadow-lg">
      <ul>
        <NavLink to={"/"} className="icons"  >
          <li>
            <AiFillHome size={26} />
          </li>
        </NavLink>
        <NavLink to={"/scan-qrcode"} className="icons" >
          <li>
            <MdOutlineQrCodeScanner size={25} />
          </li>
        </NavLink>
        <NavLink to={"/users"} className="icons" >
          <li>
            <FaUser size={25} />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default BottomNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function NavBar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navBar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-menu-toggle">
              <Link to="#" className="menue-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, i) => {
              return (
                <li key={i} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;

{
  /* <img src="https://www.graphicsprings.com/filestorage/stencils/30be204cf77d680e2c52b2abb6794503.png?width=50&height=50" /> */
}

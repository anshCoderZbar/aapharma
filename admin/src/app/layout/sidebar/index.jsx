import { Layout } from "app/images";
import { SidebarData } from "app/mock/sidebar";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <div
      className={`dashboard_sidebar ${sidebarActive ? "dashboard_active" : ""}`}
    >
      <div
        className="menu_icon"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <ChevronLeft />
      </div>
      <Link to={"/dashboard"} className="logo">
        <img src={Layout?.LOGO} alt="logo" />
      </Link>
      <div className="nav-links">
        <p>Main</p>
        <ul className="nav-items">
          {SidebarData?.map((menu, i) => {
            return (
              <li
                key={i}
                className={`${
                  window?.location?.pathname
                    ?.toLowerCase()
                    ?.includes(menu?.slug?.toLowerCase())
                    ? "side_active"
                    : ""
                }`}
              >
                <Link
                  to={`/${menu?.slug}`}
                  className="d-flex gap-2 align-items-center"
                  onClick={(event) =>
                    menu?.subMenu ? event.preventDefault() : null
                  }
                >
                  <div
                    className={`sidebar_icon ${
                      window?.location?.pathname
                        ?.toLowerCase()
                        ?.includes(menu?.slug?.toLowerCase())
                        ? "sidebar_icon_active "
                        : ""
                    }`}
                  >
                    {menu?.icon}
                  </div>
                  <span
                    className={`${
                      menu?.subMenu?.length >= 1
                        ? " dropdown dropdown-toggle"
                        : ""
                    }`}
                    type="button"
                    data-bs-toggle={`${
                      menu?.subMenu?.length >= 1 ? "dropdown" : ""
                    }`}
                  >
                    {menu?.name}
                  </span>
                  {menu?.subMenu?.length >= 1 && (
                    <ul className="dropdown-menu">
                      {menu?.subMenu?.map((elm, i) => {
                        return (
                          <li
                            className={`submenu_vs ${
                              window?.location?.pathname
                                ?.toLowerCase()
                                ?.includes(elm?.slug?.toLowerCase())
                                ? "side_active"
                                : ""
                            }`}
                            key={i}
                          >
                            <Link
                              className={`dropdown-item `}
                              to={`/${elm?.slug}`}
                            >
                              {elm?.subMenuName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

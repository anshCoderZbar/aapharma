import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "styles/Layout.css";
import headerLogo from "assets/header_logo.svg";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { HeaderData } from "app/mock/header";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { useAtom } from "jotai";
import { allSettings } from "store/SettingsStore";
import { MasterCategory, SubCategory } from "rest/main";

import { HeaderCatalogFilter } from "./HeaderCatalogFilter";

export const Header = () => {
  const navRef = useRef(null);
  const submenuRef = useRef(null);
  const navigate = useNavigate();
  const [allDetails] = useAtom(allSettings);
  const [active, setActive] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [dropMenu, setDropMenu] = useState(-1);
  const masterCategory = MasterCategory();
  const subCategory = SubCategory();

  const handleMenuClick = (i) => {
    if (i === selected) {
      setOpen(!open);
      setSelected(-1);
      if (!open) {
        setSelected(-1);
      }
    } else {
      setSelected(i);
      setOpen(true);
    }
  };

  const handleDocumentClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      const isInsideSubMenu = event.target.closest(".dropdown__list");

      if (!isInsideSubMenu || !open) {
        setOpen(false);
        setSelected(-1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useOutsideClick(navRef, active, () => {
    setActive(false);
  });

  return (
    <>
      <header ref={navRef} className="header jh_lop">
        <div className="container-fluid">
          <div className="nav-colums">
            <div className="nav-left">
              <Link onClick={() => setSelected(-1)} to={"/"}>
                <img
                  src={
                    allDetails?.headerlogo ? allDetails?.headerlogo : headerLogo
                  }
                  alt="logo"
                  className="logo"
                />
              </Link>
              <div className="d-flex position-relative search_input">
                <input type="text" placeholder="Search" />
                <div className="position-absolute top-50 end-0 translate-middle-y search_icon">
                  <Search />
                </div>
              </div>
              <div className="search_icon_md">
                <div onClick={() => setOpenInput(true)} className="full_search">
                  <Search />
                </div>
                <div
                  onClick={() => setOpenInput(false)}
                  className={`close_Icon ${openInput ? "d-block" : "d-none"}`}
                >
                  <X />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className={`${openInput ? "full_input" : "input_none"}`}
                />
              </div>
            </div>
            <div className="nav-right">
              <ul className={`${active ? "nav_active" : ""} nav-ri-ul`}>
                {HeaderData?.map((data, i) => {
                  return (
                    <li
                      className={`nav-right-li ${
                        data?.class ? data?.class : ""
                      }`}
                      key={i}
                    >
                      <div className="d-flex align-items-center">
                        <Link
                          className={`${
                            window?.location?.pathname === data?.slug
                              ? "active_color"
                              : ""
                          }`}
                          to={data?.slug}
                          onClick={() => setOpen(false)}
                        >
                          {data?.name}
                        </Link>
                        {/* {data?.menu && ( */}
                        <span style={{ cursor: "pointer" }}>
                          <ChevronDown onClick={() => handleMenuClick(i)} />
                        </span>
                        {/* )} */}
                      </div>
                      {data && selected !== -1 && (
                        <div ref={submenuRef} className="dropdown vP_csPc">
                          {i === selected && (
                            <ul
                              className={`dropdown__list ${
                                open ? "dropdown__list--active" : ""
                              }`}
                            >
                              {i === selected &&
                                i <= 3 &&
                                data?.menu?.map((menu, i) => {
                                  return (
                                    <li
                                      key={i}
                                      className={`dropdown__list-item ${
                                        data?.id === 5 ? "" : "m_xLx"
                                      }`}
                                    >
                                      {!menu?.subMenu && (
                                        <Link
                                          className={
                                            window?.location?.pathname ===
                                            menu?.slug
                                              ? "active_color"
                                              : ""
                                          }
                                          onClick={() => {
                                            setActive(false);
                                            setOpen(false);
                                          }}
                                          to={menu?.slug}
                                        >
                                          {menu?.name}
                                        </Link>
                                      )}
                                      {menu?.subMenu?.length >= 1 && (
                                        <>
                                          <div
                                            onClick={() => {
                                              setDropMenu(
                                                dropMenu === menu?.id
                                                  ? -1
                                                  : menu?.id
                                              );
                                            }}
                                            className={`drop_acor_m accordion accordion-flush ${
                                              menu?.id === dropMenu
                                                ? "menu_li_active"
                                                : ""
                                            }`}
                                          >
                                            <span> {menu?.name}</span>
                                            <span>
                                              <ChevronDown />
                                            </span>
                                          </div>
                                          <div
                                            className={`drop_ul_main ${
                                              menu?.id === dropMenu
                                                ? "drop_ul_active"
                                                : ""
                                            }`}
                                          >
                                            {menu?.subMenu?.map((sub) => {
                                              return (
                                                <Link
                                                  className={`${
                                                    menu?.id === dropMenu
                                                      ? "text-white"
                                                      : ""
                                                  } ${
                                                    window?.location
                                                      ?.pathname === sub?.slug
                                                      ? "active_color"
                                                      : ""
                                                  }`}
                                                  onClick={() => {
                                                    setActive(false);
                                                    setOpen(false);
                                                    setDropMenu(-1);
                                                  }}
                                                  to={sub?.slug}
                                                >
                                                  {sub?.subMenu}
                                                </Link>
                                              );
                                            })}
                                          </div>
                                        </>
                                      )}
                                    </li>
                                  );
                                })}
                              {i === selected &&
                                i === 4 &&
                                masterCategory?.data?.data?.length >= 1 &&
                                masterCategory?.data?.data?.map((menu, i) => {
                                  const subCategoryFilter =
                                    subCategory?.data?.data?.filter(
                                      (elm) => elm?.catalog === menu?.id
                                    );
                                  return (
                                    <HeaderCatalogFilter
                                      menu={menu}
                                      subCategoryFilter={subCategoryFilter}
                                      subCategory={subCategory}
                                      setSelected={setSelected}
                                      setOpen={setOpen}
                                      key={i}
                                      i={i}
                                      data={data}
                                    />
                                  );
                                })}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
                <li>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="contact_btn "
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
              <div onClick={() => setActive(!active)} className="hamburgur">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="page"></div>
    </>
  );
};

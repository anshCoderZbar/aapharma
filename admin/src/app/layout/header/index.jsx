import React, { useEffect, useRef, useState } from "react";
import { LogOutIcon } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useToken } from "lib/utils/useToken";

import { Layout } from "app/images";
import { useAuth } from "lib/utils/useAuth";

export const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { removeToken } = useToken();
  const { removeAuth } = useAuth();
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef?.current?.contains(event?.target) &&
        menuToggle
      ) {
        setMenuToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuToggle, setMenuToggle]);

  return (
    <div className="header">
      <div className="d-flex align-items-center header_right">
        <div
          onClick={() => setMenuToggle(!menuToggle)}
          className="d-flex align-items-center gap-2 px-3 py-2 bg_btm_menu"
        >
          <div className="img-box">
            <img src={Layout?.AVATAR} alt="user profile" />
          </div>
        </div>
        <div
          ref={menuRef}
          className={`menu ${menuToggle ? "dropdown_active" : ""}`}
        >
          <ul>
            <li className="logout_btn">
              <button
                onClick={() => {
                  removeToken();
                  removeAuth();
                  navigate("/login");
                  window.location.reload();
                }}
              >
                <span>
                  <LogOutIcon />
                </span>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

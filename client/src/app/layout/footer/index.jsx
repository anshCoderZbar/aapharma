import React from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ShoppingCart,
  Youtube,
} from "lucide-react";

import { allSettings } from "store/SettingsStore";
import { useAtom } from "jotai";
import { CartModal } from "app/components/Cart-Modal";
import { Link } from "react-router-dom";
import { GetFooterLinksMutation } from "rest/main";

export const Footer = () => {
  const [allDetails] = useAtom(allSettings);

  const footerLinks = GetFooterLinksMutation();

  console.log(footerLinks);

  return (
    <>
      <footer className="footer">
        <div className="footer_banner">
          <div className="container-fluid">
            <div className="footer_inner_banner">
              <h2>Subscribe for Latest Updates</h2>
              <div className="footer_input">
                <input type="text" placeholder="Email Address" />
                <div className="footer_input_btn">
                  <Send color="#fff" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_banner_social">
            <ul>
              <li>
                <a href={allDetails?.twitter}>
                  <svg
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="x-svg"
                  >
                    <g clipPath="url(#clip0_129_381)">
                      <path
                        d="M256 0C114.62 0 0 114.62 0 256C0 397.38 114.62 512 256 512C397.38 512 512 397.38 512 256C512 114.62 397.38 0 256 0Z"
                        fill="black"
                        className="svg_ik"
                      />
                      <path
                        d="M284.006 232.832L393.597 105.442H367.628L272.47 216.054L196.468 105.442H108.809L223.739 272.706L108.809 406.294H134.78L235.269 289.485L315.532 406.294H403.191L284 232.832H284.006ZM144.137 124.993H184.027L367.639 387.632H327.75L144.137 124.993Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_381">
                        <rect width="512" height="512" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href={allDetails?.youtube}>
                  <Youtube />
                </a>
              </li>
              <li>
                <a href={allDetails?.linkedin}>
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_details">
          <div className="container-fluid  text-md-left">
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <Link to="/">
                  <img
                    src={allDetails?.footerlogo}
                    alt="logo"
                    className="footer_img_vs"
                  />
                </Link>
                <p className="comp_desc">{allDetails?.footerText}</p>
              </div>
              {footerLinks?.data?.data?.map((links) => {
                return (
                  <div className="col-6 col-md-6 col-lg-3 mx-auto ">
                    <h4 className=" footer_sec_head">{links?.title}</h4>
                    <ul className="footer_links">
                      {links?.items?.map((elm) => {
                        return (
                          <li>
                            <Link to={elm?.url}>{elm?.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              <div className="col-12 col-md-6 col-lg-3 mx-auto mb-md-0 ">
                <h4 className="footer_sec_head">Address</h4>
                <ul className="footer_links">
                  <li>
                    <a href="#">
                      <div className="d-flex align-items-center">
                        <MapPin />
                        <span>{allDetails?.address}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${allDetails?.phone}`}>
                      <PhoneCall /> {allDetails?.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${allDetails?.email}`}>
                      <Mail /> {allDetails?.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <p className="copyright">
                {`© ${new Date().getFullYear()} AAPharmaSyn, LLC. All Rights Reserved`}
              </p>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
              className="cart_btn_aadd"
            >
              <ShoppingCart />
            </div>
          </div>
        </div>
      </footer>
      <CartModal id={"cartModal"} />
    </>
  );
};

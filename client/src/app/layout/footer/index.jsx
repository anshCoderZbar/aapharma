import React from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

import { allSettings } from "store/SettingsStore";
import { useAtom } from "jotai";

export const Footer = () => {
  const [allDetails] = useAtom(allSettings);

  return (
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
                <Twitter />
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
              <a href="#">
                <img
                  src={allDetails?.footerlogo}
                  alt="logo"
                  className="footer_img_vs"
                />
              </a>
              <p className="comp_desc">{allDetails?.footerText}</p>
            </div>
            <div className="col-6 col-md-6 col-lg-3 mx-auto ">
              <h4 className=" footer_sec_head">Useful Links</h4>
              <ul className="footer_links">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">About us</a>
                </li>
                <li>
                  <a href="#!">Capabilities</a>
                </li>
                <li>
                  <a href="#!">Catalogs</a>
                </li>
                <li>
                  <a href="#!">Resources</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-3 mx-auto ">
              <h4 className="footer_sec_head">Services</h4>
              <ul className="footer_links">
                <li>
                  <a href="#!">Custom Chemical Synthesis</a>
                </li>
                <li>
                  <a href="#!">Chemical Manufacturing</a>
                </li>
                <li>
                  <a href="#!">Medical Chemistry</a>
                </li>
                <li>
                  <a href="#!">Process Development</a>
                </li>
                <li>
                  <a href="#!">Consulting</a>
                </li>
                <li>
                  <a href="#!">Inventory Management</a>
                </li>
              </ul>
            </div>
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
        </div>
      </div>
    </footer>
  );
};

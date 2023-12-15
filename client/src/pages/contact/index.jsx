import { useAtom } from "jotai";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { allSettings } from "store/SettingsStore";

import "styles/Pages.css";

export const Contact = () => {
  const [allDetails] = useAtom(allSettings);

  return (
    <div className="contact_page">
      <div className="container-fluid">
        <h1 className="main_top_heading">Contact us</h1>
        <p>
          Thank you for visiting our website. Should we be able to assist you,
          please do not hesitate to reach out. We reply to all legitimate
          inquiries. If you have a specific, topic you would like to discuss,
          please fill out the form below and we will get back to you within 48
          hours.
        </p>
        <div className="contact_details">
          <div className="contact_tabs">
            <button className="tab_btn">Project Quotes</button>
            <button className="tab_btn">Joint Collaboration Opportnity</button>
            <button className="tab_btn">Consulting Assignment</button>
            <button className="tab_btn">All Other Inquiries</button>
            <button className="tab_btn">Commnets/Suggestions</button>
          </div>
          <div className="contact-data">
            <ul className="details_content">
              <li>
                <span>
                  <Mail />
                </span>
                <a href={`mailto:${allDetails?.email}`}>
                  {allDetails?.email && allDetails?.email}
                </a>
              </li>
              <li>
                <span>
                  <Phone />
                </span>
                <a href={`tel:${allDetails?.phone}`}>
                  {allDetails?.phone && allDetails?.phone}
                </a>
              </li>
              <li>
                <span>
                  <MapPin />
                </span>
                <a href="#">{allDetails?.address && allDetails?.address}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="main_top_heading">Get in touch</h2>
          <form>
            <input type="text" placeholder="Name" className="form-control" />
            <input
              type="text"
              placeholder="Phone number"
              className="form-control"
            />
            <input
              type="text"
              placeholder="Email address"
              className="form-control"
            />
            <textarea rows="5" placeholder="Message" className="form-control" />
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

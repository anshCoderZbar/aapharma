import { formState } from "app/common/contact/state";
import { ValidateForm } from "app/common/contact/validation";
import { Loader } from "app/components/Ui/Loader";
import { useAtom } from "jotai";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ContactUs } from "rest/main";
import { allSettings } from "store/SettingsStore";

import "styles/Pages.css";

export const Contact = () => {
  const [allDetails] = useAtom(allSettings);
  const [formValues, setFormValues] = useState(formState);
  const message = ContactUs(setFormValues);

  useEffect(() => {
    const toast = document.getElementById("toast");
    const timeout = setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [message?.isSuccess, message?.isError]);

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidateForm(formValues));
    if (Object.keys(ValidateForm(formValues)).length < 1) {
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("phone", formValues.phoneNumber);
      formData.append("email", formValues.emailAddress);
      formData.append("message", formValues.message);
      message.mutate(formData);
    }
  };

  return (
    <div className="contact_page">
      <div className="container-fluid">
        <h1 className="main_top_heading">Contact us</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: allDetails?.contacttext && allDetails?.contacttext,
          }}
        />
        <div className="contact_details">
          {/* <div className="contact_tabs">
            <button className="tab_btn">Project Quotes</button>
            <button className="tab_btn">Joint Collaboration Opportnity</button>
            <button className="tab_btn">Consulting Assignment</button>
            <button className="tab_btn">All Other Inquiries</button>
            <button className="tab_btn">Commnets/Suggestions</button>
          </div> */}
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber}</p>
            )}
            <input
              type="text"
              placeholder="Email address"
              className="form-control"
              name="emailAddress"
              value={formValues.emailAddress}
              onChange={handleInputChange}
            />
            {errors.emailAddress && (
              <p className="error-message">{errors.emailAddress}</p>
            )}
            <textarea
              rows="5"
              placeholder="Message"
              className="form-control"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
            {message?.isPending ? (
              <div className="d-flex justify-content-center align-items-center">
                <Loader />
              </div>
            ) : (
              <input type="submit" value="Submit" className="submit-btn" />
            )}
          </form>
          <div id="toast"></div>
        </div>
      </div>
    </div>
  );
};

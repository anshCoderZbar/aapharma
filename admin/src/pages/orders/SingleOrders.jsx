import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { useParams } from "react-router-dom";

import { GetSingleOrders } from "rest/main";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { FormInput } from "components/ui/FormInput";

export default function SingleOrders() {
  const { id } = useParams();
  const formData = new FormData();
  formData.append("id", id);

  const singleOrder = GetSingleOrders(formData);
  console.log(singleOrder?.data);

  return (
    <>
      <PageWrapper slug="orders" name="Orders" />
      {singleOrder?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleOrder?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <FormInput
                type="text"
                name="firstName"
                value={singleOrder?.data?.data?.firstName}
                disabled
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <FormInput
                type="text"
                name="lastName"
                value={singleOrder?.data?.data?.lastName}
                disabled
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <FormInput
                type="text"
                name="companyName"
                value={singleOrder?.data?.data?.companyName}
                disabled
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="country" className="form-label">
                Country / Region
              </label>
              <FormInput
                type="text"
                name="country"
                disabled
                value={singleOrder?.data?.data?.country}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="streetAddress" className="form-label">
                Street Address
              </label>
              <FormInput
                type="text"
                name="streetAddress"
                disabled
                value={singleOrder?.data?.data?.street}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="townCity" className="form-label">
                Town / City
              </label>
              <FormInput
                type="text"
                name="townCity"
                disabled
                value={singleOrder?.data?.data?.town}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <FormInput
                type="text"
                name="state"
                disabled
                value={singleOrder?.data?.data?.state}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <FormInput
                type="text"
                name="zipCode"
                disabled
                value={singleOrder?.data?.data?.zipCode}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <FormInput
                type="text"
                name="phone"
                disabled
                value={singleOrder?.data?.data?.phone}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <FormInput
                type="text"
                name="emailAddress"
                disabled
                value={singleOrder?.data?.data?.email}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="paymentMethod" className="form-label">
                Payment Method
              </label>
              <FormInput
                type="text"
                name="paymentMethod"
                disabled
                value={singleOrder?.data?.data?.paymentMethod}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="paymentId" className="form-label">
                Payment Id (Paypal)
              </label>
              <FormInput
                type="text"
                name="paymentId"
                disabled
                value={singleOrder?.data?.data?.paypalid}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="subtotal" className="form-label">
                Subtotal
              </label>
              <FormInput
                type="text"
                name="subtotal"
                disabled
                value={singleOrder?.data?.data?.subtotal}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="total" className="form-label">
                Total
              </label>
              <FormInput
                type="text"
                name="total"
                disabled
                value={singleOrder?.data?.data?.total}
              />
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="otherNotes" className="form-label">
                Other Notes
              </label>
              <textarea
                className="form-control"
                name="otherNotes"
                value={singleOrder?.data?.data?.otherNotes}
                disabled
              />
            </div>
            <div className="page_head">
              <h2>Products</h2>
            </div>
            {singleOrder?.data?.data?.products?.map((elm) => {
              return (
                <div className="row" key={elm?.id}>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="productHeading" className="form-label">
                      Product Heading
                    </label>
                    <FormInput
                      type="text"
                      name="productHeading"
                      disabled
                      value={elm?.heading}
                    />
                  </div>
                  <div className="mb-3  col-md-6">
                    <label htmlFor="productImage" className="form-label">
                      Product Image
                    </label>
                    <br />
                    <img
                      src={`${singleOrder?.data?.baseUrl}/${elm?.image}`}
                      alt="Featured Image Preview"
                      className="proc_img"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      )}
    </>
  );
}

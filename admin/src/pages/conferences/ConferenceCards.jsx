import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";
import { EditConferenceCardsMutation } from "rest/conferences";
import { GetConferenceCardsMutation } from "rest/conferences";

export default function ConferenceCards() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const editCards = EditConferenceCardsMutation();
  const getCards = GetConferenceCardsMutation();

  const [perviewImages, setPreviewImages] = useState({
    main1: "",
    main2: "",
    logo1: "",
    logo2: "",
  });

  const [defaultImages, setDefaultImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.card1Heading = getCards?.data?.data?.card1heading;
    defaultValues.main1 = getCards?.data?.data?.card1image;
    defaultValues.logo1 = getCards?.data?.data?.card1logo;
    defaultValues.card1SubHeading = getCards?.data?.data?.card1subheading;
    defaultValues.card1Description = getCards?.data?.data?.card1description;
    defaultValues.card1location = getCards?.data?.data?.card1location;
    defaultValues.card1Link = getCards?.data?.data?.card1link;
    defaultValues.card2Heading = getCards?.data?.data?.card2heading;
    defaultValues.main2 = getCards?.data?.data?.card2image;
    defaultValues.logo2 = getCards?.data?.data?.card2logo;
    defaultValues.card2SubHeading = getCards?.data?.data?.card2subheading;
    defaultValues.card2Description = getCards?.data?.data?.card2description;
    defaultValues.card2location = getCards?.data?.data?.card2location;
    defaultValues.card2Link = getCards?.data?.data?.card2link;
    setDefaultImages({
      img1: getCards?.data?.data?.card1image,
      img2: getCards?.data?.data?.card1logo,
      img3: getCards?.data?.data?.card2image,
      img4: getCards?.data?.data?.card2logo,
    });

    reset(defaultValues);
  }, [getCards?.data?.data]);

  const handleChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages({ ...perviewImages, [type]: imageUrl });
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("card1heading", data.card1Heading);
    formData.append("card1image", data.main1[0]);
    formData.append("card1logo", data.logo1[0]);
    formData.append("card1subheading", data.card1SubHeading);
    formData.append("card1description", data.card1Description);
    formData.append("card1location", data.card1location);
    formData.append("card1link", data.card1Link);
    formData.append("card2heading", data.card2Heading);
    formData.append("card2image", data.main2[0]);
    formData.append("card2logo", data.logo2[0]);
    formData.append("card2subheading", data.card2SubHeading);
    formData.append("card2description", data.card2Description);
    formData.append("card2location", data.card2location);
    formData.append("card2link", data.card2Link);
    editCards.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="conference-cards" name="Conference Cards" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mb-3">
          <div className="page_head border-top-0 mt-0 cxxxz py-0">
            <h2>Card 1</h2>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card1Heading" className="form-label">
              Card Heading
            </label>
            <FormInput
              type="text"
              name="card1Heading"
              placeholder="Card Heading"
              {...register("card1Heading", { required: true })}
            />
            {errors?.card1Heading && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="main1" className="form-label">
              Card Image
            </label>
            <FormInput
              type="file"
              name="main1"
              placeholder="main1"
              {...register("main1", {
                required: !perviewImages?.main1 && !defaultImages?.img1,
                onChange: (e) => handleChange(e, "main1"),
              })}
            />
            {errors?.main1 && <p className="errorMessage">Field is required</p>}
            {perviewImages.main1 && (
              <img
                src={perviewImages.main1}
                alt="main1 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.main1 && defaultImages?.img1 && (
              <img
                src={defaultImages?.img1}
                alt="main1 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="logo1" className="form-label">
              Card Logo
            </label>
            <FormInput
              type="file"
              name="logo1"
              placeholder="logo1"
              {...register("logo1", {
                required: !perviewImages?.logo1 && !defaultImages?.img2,
                onChange: (e) => handleChange(e, "logo1"),
              })}
            />
            {errors?.logo1 && <p className="errorMessage">Field is required</p>}
            {perviewImages.logo1 && (
              <img
                src={perviewImages.logo1}
                alt="logo1 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.logo1 && defaultImages?.img2 && (
              <img
                src={defaultImages?.img2}
                alt="logo1 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card1SubHeading" className="form-label">
              Sub Heading
            </label>
            <FormInput
              type="text"
              name="card1SubHeading"
              placeholder="Sub Heading"
              {...register("card1SubHeading", { required: true })}
            />
            {errors?.card1SubHeading && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-12">
            <label htmlFor="card1Description" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name={`card1Description`}
              defaultValue={getCards?.data?.data?.card1description}
              {...register(`card1Description`, {
                required: true,
              })}
            />
            {errors?.card1Description && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card1location" className="form-label">
              Location
            </label>
            <FormInput
              type="text"
              name="card1location"
              placeholder="Location"
              {...register("card1location", { required: true })}
            />
            {errors?.card1location && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card1Link" className="form-label">
              URL
            </label>
            <FormInput
              type="text"
              name="card1Link"
              placeholder="Location"
              {...register("card1Link", { required: true })}
            />
            {errors?.card1Link && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="page_head ">
            <h2>Card 2</h2>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card2Heading" className="form-label">
              Card Heading
            </label>
            <FormInput
              type="text"
              name="card2Heading"
              placeholder="Card Heading"
              {...register("card2Heading", { required: true })}
            />
            {errors?.card2Heading && (
              <p className="errorMessage">field is required</p>
            )}
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="main2" className="form-label">
              Card Image
            </label>
            <FormInput
              type="file"
              name="main2"
              placeholder="main2"
              {...register("main2", {
                required: !perviewImages?.main2 && !defaultImages?.img3,
                onChange: (e) => handleChange(e, "main2"),
              })}
            />
            {errors?.main2 && <p className="errorMessage">Field is required</p>}
            {perviewImages.main2 && (
              <img
                src={perviewImages.main2}
                alt="main2 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.main2 && defaultImages?.img3 && (
              <img
                src={defaultImages?.img3}
                alt="main2 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="logo2" className="form-label">
              Card Logo
            </label>
            <FormInput
              type="file"
              name="logo2"
              placeholder="logo2"
              {...register("logo2", {
                required: !perviewImages?.logo2 && !defaultImages?.img4,
                onChange: (e) => handleChange(e, "logo2"),
              })}
            />
            {errors?.logo2 && <p className="errorMessage">Field is required</p>}
            {perviewImages.logo2 && (
              <img
                src={perviewImages.logo2}
                alt="logo2 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.logo2 && defaultImages?.img4 && (
              <img
                src={defaultImages?.img4}
                alt="logo2 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card2SubHeading" className="form-label">
              Sub Heading
            </label>
            <FormInput
              type="text"
              name="card2SubHeading"
              placeholder="Sub Heading"
              {...register("card2SubHeading", { required: true })}
            />
            {errors?.card2SubHeading && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-22">
            <label htmlFor="card2Description" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name={`card2Description`}
              defaultValue={getCards?.data?.data?.card2description}
              {...register(`card2Description`, {
                required: true,
              })}
            />
            {errors?.card2Description && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card2location" className="form-label">
              Location
            </label>
            <FormInput
              type="text"
              name="card2location"
              placeholder="Location"
              {...register("card2location", { required: true })}
            />
            {errors?.card2location && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="card2Link" className="form-label">
              URL
            </label>
            <FormInput
              type="text"
              name="card2Link"
              placeholder="Location"
              {...register("card2Link", { required: true })}
            />
            {errors?.card2Link && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          {editCards?.isPending ? (
            <div>
              <ButtonLoader />
            </div>
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </>
  );
}

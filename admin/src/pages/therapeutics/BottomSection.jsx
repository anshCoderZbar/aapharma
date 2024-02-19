import React, { useEffect, useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { GetTherapeuticsBottom } from "rest/therapeutics";
import { EditTherapeuticsBottom } from "rest/therapeutics";
import { TextEditor } from "components/ui/TextEditor";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";

export default function BottomSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const getBottom = GetTherapeuticsBottom();
  const editBottom = EditTherapeuticsBottom();
  const [images, setImages] = useState({ image1: "", image2: "", image3: "" });
  const [filePreviews, setFilePreviews] = useState({
    image1Preview: "",
    image2Preview: "",
    image3Preview: "",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.topDescription = getBottom?.data?.data?.topDescription;
    defaultValues.image1 = getBottom?.data?.data?.imageLeft;
    defaultValues.image2 = getBottom?.data?.data?.imageRight;
    defaultValues.image3 = getBottom?.data?.data?.imageBottom;
    defaultValues.description1 = getBottom?.data?.data?.imageLeftDescription;
    defaultValues.description2 = getBottom?.data?.data?.imageRightDescription;
    defaultValues.description3 = getBottom?.data?.data?.imageBottomDescription;
    setImages({
      image1: getBottom?.data?.data?.imageLeft,
      image2: getBottom?.data?.data?.imageRight,
      image3: getBottom?.data?.data?.imageBottom,
    });
    reset(defaultValues);
  }, [getBottom?.data?.data]);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFilePreviews((prevState) => ({
        ...prevState,
        [`${type}Preview`]: previewURL,
      }));
    }
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("topDescription", data?.topDescription);
    formData.append("imageLeft", data?.image1[0]);
    formData.append("imageRight", data?.image2[0]);
    formData.append("imageBottom", data?.image3[0]);
    formData.append("imageLeftDescription", data?.description1);
    formData.append("imageRightDescription", data?.description2);
    formData.append("imageBottomDescription", data?.description3);
    editBottom.mutate(formData);
  };
  return (
    <div className="therapeutics_page">
      <PageWrapper slug="therapeutics-bottom" name="Bottom Section" />{" "}
      <div className="input_banners  mb-3">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-12">
            <label htmlFor="topDescription" className="form-label">
              Top Description
            </label>
            <TextEditor
              control={control}
              name="topDescription"
              placeholder="Descripton"
              defaultValue={getBottom?.data?.data?.topDescription}
              {...register("topDescription", { required: true })}
            />
            {errors?.topDescription && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="image1" className="form-label">
              Image 1 (530px * 210px)
            </label>
            <div className="main_icons">
              <FormInput
                type="file"
                name="image1"
                placeholder="image1"
                {...register("image1", {
                  required: !filePreviews?.image1Preview && !images?.image1,
                  onChange: (e) => handleFileChange(e, "image1"),
                })}
              />
              {errors?.image1 && (
                <p className="errorMessage">Icon is required</p>
              )}
              <div className="icon__preview">
                {filePreviews?.image1Preview && (
                  <img
                    src={filePreviews.image1Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
                {!filePreviews.image1Preview && images?.image1 && (
                  <img
                    src={images?.image1}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="description1" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name="description1"
              {...register("description1", { required: true })}
              defaultValue={getBottom?.data?.data?.imageLeftDescription}
            />
            {errors?.description1 && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="image2" className="form-label">
              Image 2 (611px * 262px)
            </label>
            <div className="main_icons">
              <FormInput
                type="file"
                name="image2"
                placeholder="image2"
                {...register("image2", {
                  required: !filePreviews?.image2Preview && !images?.image2,
                  onChange: (e) => handleFileChange(e, "image2"),
                })}
              />
              {errors?.image2 && (
                <p className="errorMessage">Icon is required</p>
              )}
              <div className="icon__preview">
                {filePreviews?.image2Preview && (
                  <img
                    src={filePreviews.image2Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
                {!filePreviews.image2Preview && images?.image2 && (
                  <img
                    src={images?.image2}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="description2" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name="description2"
              {...register("description2", { required: true })}
              defaultValue={getBottom?.data?.data?.imageRightDescription}
            />
            {errors?.description2 && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="image3" className="form-label">
              Image 3 (970px * 230px)
            </label>
            <div className="main_icons">
              <FormInput
                type="file"
                name="image3"
                placeholder="image3"
                {...register("image3", {
                  required: !filePreviews?.image3Preview && !images?.image3,
                  onChange: (e) => handleFileChange(e, "image3"),
                })}
              />
              {errors?.image3 && (
                <p className="errorMessage">Icon is required</p>
              )}
              <div className="icon__preview">
                {filePreviews?.image3Preview && (
                  <img
                    src={filePreviews.image3Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
                {!filePreviews.image3Preview && images?.image3 && (
                  <img
                    src={images?.image3}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="description3" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name="description3"
              defaultValue={getBottom?.data?.data?.imageBottomDescription}
              {...register("description3", { required: true })}
            />
            {errors?.description3 && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          {editBottom?.isPending ? (
            <div>
              <ButtonLoader />
            </div>
          ) : (
            <div className="mb-3 col-12 ">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

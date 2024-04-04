import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { EditResourcesGuides, GetResourcesGuides } from "rest/resources";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import "styles/main.css";

export default function ResourcesUsefulGuides() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const editGuides = EditResourcesGuides();
  const getGuides = GetResourcesGuides();

  const [files, setFiles] = useState({ file1: "", file2: "", file3: "" });

  const [filePreviews, setFilePreviews] = useState({
    file1Preview: "",
    file2Preview: "",
    file3Preview: "",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getGuides?.data?.data?.heading;
    defaultValues.button1 = getGuides?.data?.data?.pdf1text;
    defaultValues.button2 = getGuides?.data?.data?.pdf2text;
    defaultValues.button3 = getGuides?.data?.data?.pdf3text;
    defaultValues.file_1 = getGuides?.data?.data?.pdf1;
    defaultValues.file_2 = getGuides?.data?.data?.pdf2;
    defaultValues.file_3 = getGuides?.data?.data?.pdf3;
    setFiles({
      file1: getGuides?.data?.data?.pdf1,
      file2: getGuides?.data?.data?.pdf2,
      file3: getGuides?.data?.data?.pdf3,
    });
    reset(defaultValues);
  }, [getGuides?.data?.data]);

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
    formData.append("heading", data?.heading);
    formData.append("pdf1text", data?.button1);
    formData.append("pdf2text", data?.button2);
    formData.append("pdf3text", data?.button3);
    formData.append("pdf1", data?.file_1[0]);
    formData.append("pdf2", data?.file_2[0]);
    formData.append("pdf3", data?.file_3[0]);
    editGuides.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="resources-useful-guides" name="Useful Guides" />
      {getGuides?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getGuides?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
              <div className="col-md-6">
                <label htmlFor="heading" className="form-label">
                  heading
                </label>
                <FormInput
                  type="text"
                  name="heading"
                  placeholder="Heading"
                  {...register("heading", { required: true })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="button1" className="form-label">
                Button 1
              </label>
              <FormInput
                type="text"
                name="button1"
                placeholder="Button 1"
                {...register("button1", { required: true })}
              />
              {errors?.button1 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <div className="Attachments-x">
                <div className="luxa_x cv-x cls_jhg">
                  <label htmlFor={`file_1`} className="form-label">
                    File 1
                  </label>
                  <FormInput
                    type="file"
                    name={`file_1`}
                    placeholder="files"
                    accept="application/pdf"
                    {...register("file_1", {
                      required: !filePreviews?.file1Preview && !files?.file1,
                      onChange: (e) => handleFileChange(e, "file1"),
                    })}
                  />
                  {errors?.file_1 && (
                    <p className="errorMessage">Field is required</p>
                  )}
                </div>
                <div className="luxa_x cv-x2">
                  {filePreviews?.file1Preview && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a
                          href={filePreviews?.file1Preview}
                          target="_blank"
                          className="view"
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                  {!filePreviews?.file1Preview && files?.file1 && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a href={files?.file1} target="_blank" className="view">
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="button2" className="form-label">
                Button 2
              </label>
              <FormInput
                type="text"
                name="button2"
                placeholder="Button 2"
                {...register("button2", { required: true })}
              />
              {errors?.button2 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <div className="Attachments-x">
                <div className="luxa_x cv-x cls_jhg">
                  <label htmlFor={`file_2`} className="form-label">
                    File 2
                  </label>
                  <FormInput
                    type="file"
                    name={`file_2`}
                    placeholder="files"
                    accept="application/pdf"
                    {...register("file_2", {
                      required: !filePreviews?.file2Preview && !files?.file2,
                      onChange: (e) => handleFileChange(e, "file2"),
                    })}
                  />
                  {errors?.file_2 && (
                    <p className="errorMessage">Field is required</p>
                  )}
                </div>
                <div className="luxa_x cv-x2">
                  {filePreviews?.file2Preview && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a
                          href={filePreviews?.file2Preview}
                          target="_blank"
                          className="view"
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                  {!filePreviews?.file2Preview && files?.file2 && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a href={files?.file2} target="_blank" className="view">
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="button3" className="form-label">
                Button 3
              </label>
              <FormInput
                type="text"
                name="button3"
                placeholder="Button 3"
                {...register("button3", { required: true })}
              />
              {errors?.button3 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <div className="Attachments-x">
                <div className="luxa_x cv-x cls_jhg">
                  <label htmlFor={`file_3`} className="form-label">
                    File 3
                  </label>
                  <FormInput
                    type="file"
                    name={`file_3`}
                    placeholder="files"
                    accept="application/pdf"
                    {...register("file_3", {
                      required: !filePreviews?.file3Preview && !files?.file3,
                      onChange: (e) => handleFileChange(e, "file3"),
                    })}
                  />
                  {errors?.file_3 && (
                    <p className="errorMessage">Field is required</p>
                  )}
                </div>
                <div className="luxa_x cv-x2">
                  {filePreviews?.file3Preview && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a
                          href={filePreviews?.file3Preview}
                          target="_blank"
                          className="view"
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                  {!filePreviews?.file3Preview && files?.file3 && (
                    <div className="d-flex">
                      <div className="mt-2">
                        <img
                          src={require("assets/pdf.png")}
                          alt="File Preview"
                          className="pdf_img"
                        />
                        <a href={files?.file3} target="_blank" className="view">
                          Preview
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {editGuides?.isPending ? (
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
      )}
    </div>
  );
}

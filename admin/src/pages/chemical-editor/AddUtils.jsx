import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { TextEditor } from "components/ui/TextEditor";
import { utilsSchema } from "app/common/chemical/validation";
import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { CreateUtility } from "rest/chemical";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetUtility } from "rest/chemical";

export default function AddUtils() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm();
  const [searchParams] = useSearchParams();

  const [inputs, setInputs] = useState([
    { sortNo: "", heading: "", description: "", files: "" },
  ]);

  const [filePreviews, setFilePreviews] = useState([]);

  const [onlinePdf, setOnlinePdf] = useState("");

  const handleFileInputChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      const newPreviews = [...filePreviews];
      newPreviews[index] = filePreviewUrl;
      setFilePreviews(newPreviews);
    }
  };
  const handleAddInputs = (e) => {
    setInputs([...inputs, { heading: "", description: "", files: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    const headingKey = `heading_${index + 1}`;
    const attachmentsKey = `attachments_${index + 1}`;
    const descriptionKey = `description_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[headingKey];
    delete newFormData[attachmentsKey];
    delete newFormData[descriptionKey];
    reset(newFormData);
  };

  const addUtility = CreateUtility();

  const getUtility = GetUtility(searchParams.get("id"));

  useEffect(() => {
    const defaultValues = {};
    const defaultInputs =
      getUtility?.data?.data?.map((elm) => ({
        heading: elm?.heading || "",
        description: elm?.description || "",
        files: elm?.image || "",
      })) || [];

    defaultInputs.length >= 1 && setInputs(defaultInputs);
    const pdfUrls = defaultInputs?.map((elm, i) => {
      defaultValues[`heading_${i + 1}`] = elm?.heading;
      defaultValues[`description_${i + 1}`] = elm?.description;
      defaultValues[`files_${i + 1}`] = elm?.files;
      return elm?.files && `${getUtility?.data?.baseUrl}/${elm?.files}`;
    });
    setOnlinePdf(pdfUrls);
    reset(defaultValues);
  }, [getUtility?.data?.data]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("chemicalId", searchParams.get("id"));

    inputs.forEach((_, index) => {
      const headingKey = `heading_${index + 1}`;
      const attachmentsKey = `attachments_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;

      formData.append("heading[]", data[headingKey]);
      formData.append("description[]", data[descriptionKey]);
      formData.append("image[]", data[attachmentsKey][0]);
    });

    await addUtility.mutate(formData);
  };

  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   formData.append("chemicalId", searchParams.get("id"));

  //   inputs.forEach((_, index) => {
  //     const headingKey = `heading_${index + 1}`;
  //     const attachmentsKey = `attachments_${index + 1}`;
  //     const descriptionKey = `description_${index + 1}`;

  //     formData.append("heading[]", data[headingKey]);
  //     formData.append("description[]", data[descriptionKey]);

  //     const onlinePdfUrl = onlinePdf[index]; // Get online PDF URL for this index
  //     const file = data[attachmentsKey][0]; // Get newly added file for this index

  //     if (onlinePdfUrl && onlinePdfUrl.length >= 1 && file) {
  //       // If both online PDF URL and new file exist, send both
  //       formData.append("imageString[]", onlinePdfUrl);
  //       formData.append("image[]", file);
  //     } else if (onlinePdfUrl && onlinePdfUrl.length >= 1) {
  //       // If only online PDF URL exists, send it
  //       formData.append("imageString[]", onlinePdfUrl);
  //     } else if (file) {
  //       // If only a new file exists, send it
  //       formData.append("image[]", file);
  //     } else {
  //       // If neither online PDF nor a new file exists, append an empty string
  //       formData.append("image[]", "");
  //     }
  //   });

  //   await addUtility.mutate(formData);
  // };

  return (
    <div className="utils_page">
      <PageWrapper slug="Utils" name="Add Utils" />
      <div className="utils_page_input_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs?.map((inputElm, index) => {
            return (
              <div key={index} className="row">
                <div
                  onClick={() => handleDeleteInput(index)}
                  className="d-flex justify-content-end"
                >
                  <span className="btn btn-danger">
                    <X />
                  </span>
                </div>
                <div className="mb-3 col-md-6">
                  <label
                    htmlFor={`heading_${index + 1}`}
                    className="form-label"
                  >
                    Heading
                  </label>
                  <FormInput
                    type="text"
                    name={`heading_${index + 1}`}
                    placeholder="Heading"
                    {...register(`heading_${index + 1}`, { required: true })}
                  />
                  {errors[`heading_${index + 1}`] && (
                    <p className="errorMessage">Heading is required</p>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label
                    htmlFor={`attachments_${index + 1}`}
                    className="form-label"
                  >
                    Attachments
                  </label>
                  <FormInput
                    type="file"
                    name={`attachments_${index + 1}`}
                    placeholder="attachments"
                    accept="application/pdf"
                    {...register(`attachments_${index + 1}`)}
                    onChange={(e) => handleFileInputChange(e, index)}
                  />

                  {filePreviews[index] && (
                    <div className="mt-2">
                      <img
                        src={require("assets/pdf.png")}
                        alt="File Preview"
                        className="pdf_img"
                      />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={filePreviews[index]}
                        className="view"
                      >
                        View
                      </a>
                    </div>
                  )}
                  {!filePreviews[index] && onlinePdf?.length >= 1 && (
                    <div className="mt-2">
                      <img
                        src={require("assets/pdf.png")}
                        alt="File Preview"
                        className="pdf_img"
                      />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={onlinePdf[index]}
                        className="view"
                      >
                        View
                      </a>
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label
                    htmlFor={`description_${index + 1}`}
                    className="form-label"
                  >
                    Description
                  </label>
                  <TextEditor
                    control={control}
                    name={`description_${index + 1}`}
                    {...register(`description_${index + 1}`, {
                      required: true,
                    })}
                  />
                  {errors[`description_${index + 1}`] && (
                    <p className="errorMessage">Description is required</p>
                  )}
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-end">
            <span onClick={handleAddInputs} className="btn btn-danger">
              Add More
            </span>
          </div>
          {addUtility?.isPending ? (
            <ButtonLoader />
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { TextEditor } from "components/ui/TextEditor";
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

  const handleFileInputChange = (event, index) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      let reader = new FileReader();
      reader.onload = function (event) {
        const selectedFileBase64 = event.target.result.split(",")[1];
        setFilePreviews((prevFilePreviews) => {
          const newPreviews = [...prevFilePreviews];
          newPreviews[index] = selectedFileBase64;
          return newPreviews;
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAddInputs = () => {
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
      // defaultValues[`attachments_${i + 1}`] = elm?.files;
      setFilePreviews((prev) => [...prev, elm?.files]);

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
      // const attachmentsKey = `attachments_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;

      formData.append("heading[]", data[headingKey]);
      formData.append("description[]", data[descriptionKey]);
    });

    filePreviews.forEach((elm) => {
      formData.append("image[]", elm);
    });

    await addUtility.mutate(formData);
  };
  console.log(filePreviews);

  return (
    <div className="utils_page">
      <PageWrapper slug="Utils" name="Add Utils" />
      <div className="utils_page_input_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs?.map((inputElm, index) => {
            return (
              <div key={index} className="row cxxxz">
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
                  <div className="Attachments-x">
                    <div className="luxa_x cv-x">
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
                        {...register(`attachments_${index + 1}`, {
                          // required: !filePreviews[index],
                        })}
                        onChange={(e) => handleFileInputChange(e, index)}
                      />
                      {errors[`attachments_${index + 1}`] && (
                        <p className="errorMessage">Field is required</p>
                      )}
                    </div>
                    <div className="luxa_x cv-x2">
                      {filePreviews[index] && (
                        <div className="mt-2">
                          <img
                            src={require("assets/pdf.png")}
                            alt="File Preview"
                            className="pdf_img"
                          />
                          <a
                            href={`data:application/pdf;base64,${filePreviews[index]}`}
                            target="_blank"
                            download={`download_${index + 1}.pdf`}
                            className="view"
                          >
                            Preview
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
                            href={filePreviews[index]}
                            download={`download_${index + 1}.pdf`}
                            className="view"
                          >
                            Preview
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="luxa_x cv-x2">
                      {inputs?.length > 1 && (
                        <div
                          onClick={() => handleDeleteInput(index)}
                          className="d-flex justify-content-end"
                        >
                          <span className="btn btn-danger">
                            <X />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-md-12">
                  <label
                    htmlFor={`description_${index + 1}`}
                    className="form-label"
                  >
                    Description
                  </label>
                  <TextEditor
                    control={control}
                    defaultValue={
                      getUtility?.data?.data[index] &&
                      getUtility?.data?.data[index]?.description
                    }
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
          <div className="row">
            <div className="col-6">
              {addUtility?.isPending ? (
                <ButtonLoader />
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="submit"
                    className="input_submit"
                  />
                </div>
              )}
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <span onClick={handleAddInputs} className="btn btn-success">
                  Add More
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { ErrorComponent } from "components/Alerts/Error";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { EditCarbohydrateDiagramMutation } from "rest/complexCarbohydrate";
import { SingleCarbohydrateDiagram } from "rest/complexCarbohydrate";

export default function EditCarbohydrateDiagram() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [list, setList] = useState([{ list: "" }]);
  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const formData = new FormData();
  formData.append("id", id);
  const getSingleDiagram = SingleCarbohydrateDiagram(formData);
  const editDiagram = EditCarbohydrateDiagramMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = getSingleDiagram?.data?.data?.sortNo;
    defaultValues.year = getSingleDiagram?.data?.data?.year;
    defaultValues.heading = getSingleDiagram?.data?.data?.heading;
    setDefaultImg(getSingleDiagram?.data?.data?.image);
    const defaultInputs =
      getSingleDiagram?.data?.data?.list?.map((elm) => ({
        list: elm || "",
      })) || [];

    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });
    reset(defaultValues);
  }, [getSingleDiagram?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const handleDeleteInput = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
    const listKey = `list_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[listKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("year", data?.year);
    formData.append("heading", data?.heading);
    formData.append("image", data?.image[0]);
    list.forEach((_, index) => {
      const listKey = `list_${index + 1}`;
      formData.append("list[]", data[listKey]);
    });
    editDiagram.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="carbohydrate-diagram" name="Carbohydrate Diagram" />
      {getSingleDiagram?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getSingleDiagram?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="sortNo" className="form-label">
                Sort No
              </label>
              <FormInput
                type="number"
                name="sortNo"
                placeholder="Sort No"
                {...register("sortNo", { required: true })}
              />
              {errors?.sortNo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <FormInput
                type="number"
                name="Year"
                placeholder="year"
                {...register("year", { required: true })}
              />
              {errors?.year && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <FormInput
                type="file"
                name="image"
                placeholder="image"
                {...register("image", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.image && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt=" image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Diagram Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="Heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="list" className="form-label">
                List
              </label>
              {list.map((item, index) => (
                <div key={index} className="row">
                  <div key={index} className="col-10">
                    <FormInput
                      type="text"
                      name={`list_${index + 1}`}
                      extraClass="mt-2"
                      placeholder="List"
                      {...register(`list_${index + 1}`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    {list?.length > 1 ? (
                      <div onClick={() => handleDeleteInput(index)}>
                        <span className="btn btn-danger btn_cross_vv bottom-0">
                          <X />
                        </span>
                      </div>
                    ) : null}
                    <div className="add_btn">
                      <span
                        onClick={() => setList([...list, { list: "" }])}
                        className="btn btn-success btn_cross_vv2 bottom-0"
                      >
                        <Plus />
                      </span>
                    </div>
                  </div>
                  {errors?.[`list_${index + 1}`] && (
                    <p className="errorMessage">Field is required</p>
                  )}
                </div>
              ))}
            </div>
            {editDiagram?.isPending ? (
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
    </>
  );
}

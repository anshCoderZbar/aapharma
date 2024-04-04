import React, { useState } from "react";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { Plus, X } from "lucide-react";

export const TeamMemberForm = (props) => {
  const {
    onSubmit,
    register,
    errors,
    isLoading,
    memberImage,
    getValues,
    reset,
    list1,
    setList1,
    list2,
    setList2,
    list3,
    setList3,
  } = props;

  const [previewImage, setPreviewImage] = useState("");

  const handleDelete = (index, listType) => {
    if (listType === "list1") {
      const newList = [...list1];
      newList.splice(index, 1);
      setList1(newList);
    } else if (listType === "list2") {
      const newList = [...list2];
      newList.splice(index, 1);
      setList2(newList);
    } else if (listType === "list3") {
      const newList = [...list3];
      newList.splice(index, 1);
      setList3(newList);
    }

    const newFormData = { ...getValues() };
    const updatedFormData = {};

    Object.keys(newFormData).forEach((key) => {
      if (key.startsWith(listType)) {
        const keyIndex = parseInt(key.split("_")[1]);
        if (keyIndex !== index + 1) {
          const updatedKey =
            keyIndex > index + 1 ? `${listType}_${keyIndex - 1}` : key;
          updatedFormData[updatedKey] = newFormData[key];
        }
      } else {
        updatedFormData[key] = newFormData[key];
      }
    });

    reset(updatedFormData);
  };

  const handleAdd = (listType) => {
    if (listType === "list1") {
      setList1([...list1, { list: "" }]);
    } else if (listType === "list2") {
      setList2([...list2, { list: "" }]);
    } else if (listType === "list3") {
      setList3([...list3, { list: "" }]);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(filePreviewUrl);
    }
  };
  return (
    <div className="home_banner_input">
      <form onSubmit={onSubmit} className="row mt-4 mb-3">
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
            <p className="errorMessage"> Sort No is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors?.name && <p className="errorMessage"> Name is required</p>}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <FormInput
            type="text"
            name="designation"
            placeholder="Designation"
            {...register("designation", { required: true })}
          />
          {errors?.designation && (
            <p className="errorMessage"> Designation is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="memberImage" className="form-label">
            Member Image (395px * 385px)
          </label>
          <FormInput
            type="file"
            name="memberImage"
            placeholder="memberImage"
            {...register("memberImage", {
              required: !previewImage && !memberImage,
              onChange: (e) => handleChange(e),
            })}
          />
          {errors?.memberImage && (
            <p className="errorMessage">Member Image is required</p>
          )}
          {previewImage && (
            <div className="mt-2">
              <img
                src={previewImage}
                alt="File Preview"
                style={{ maxWidth: "150px" }}
              />
            </div>
          )}
          {!previewImage && memberImage && (
            <div className="mt-2">
              <img
                src={memberImage}
                alt="File Preview"
                style={{ maxWidth: "150px" }}
              />
            </div>
          )}
        </div>
        <div className="row">
          <div className="mb-3 col-md-7">
            <label htmlFor="list" className="form-label">
              Relevant Experience
            </label>
            {list1.map((item, index) => (
              <div key={index}>
                <div key={index} className="d-flex align-items-center">
                  <FormInput
                    type="text"
                    name={`list1_${index + 1}`}
                    extraClass="mt-2"
                    placeholder="Relevant Experience"
                    {...register(`list1_${index + 1}`, {
                      required: true,
                    })}
                  />
                  <span
                    className="btn btn-danger ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index, "list1")}
                  >
                    <X />
                  </span>
                  <span
                    className="btn btn-success ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAdd("list1")}
                  >
                    <Plus />
                  </span>
                </div>
                {errors?.[`list1_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-7">
            <label htmlFor="list2" className="form-label">
              Education
            </label>

            {list2.map((item, index) => (
              <div key={index}>
                <div className="d-flex align-items-center">
                  <FormInput
                    type="text"
                    name={`list2_${index + 1}`}
                    extraClass="mt-2"
                    placeholder="Education"
                    {...register(`list2_${index + 1}`, {
                      required: true,
                    })}
                  />
                  <span
                    className="btn btn-danger ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index, "list2")}
                  >
                    <X />
                  </span>
                  <span
                    className="btn btn-success ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAdd("list2")}
                  >
                    <Plus />
                  </span>
                </div>
                {errors?.[`list2_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-7">
            <label htmlFor="list3" className="form-label">
              Contact
            </label>

            {list3.map((item, index) => (
              <div key={index}>
                <div key={index} className="d-flex align-items-center">
                  <FormInput
                    type="text"
                    name={`list3_${index + 1}`}
                    extraClass="mt-2"
                    placeholder="Contact"
                    {...register(`list3_${index + 1}`, {
                      required: true,
                    })}
                  />
                  <span
                    className="btn btn-danger ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index, "list3")}
                  >
                    <X />
                  </span>
                  <span
                    className="btn btn-success ms-2 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAdd("list3")}
                  >
                    <Plus />
                  </span>
                </div>
                {errors?.[`list3_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {isLoading ? (
          <div>
            <ButtonLoader />
          </div>
        ) : (
          <div className="my-3 col-12">
            <input type="submit" value="submit" className="input_submit" />
          </div>
        )}
      </form>
    </div>
  );
};

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { CreateAboutCardMutation } from "rest/about";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetAboutCardMutation } from "rest/about";
import { ComponentLoader } from "components/Loader/ComponentLoader";

export default function AboutCardDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState({
    icon1: "",
    icon2: "",
    icon3: "",
  });

  const [list1, setList1] = useState([{ list: "" }]);
  const [list2, setList2] = useState([{ list: "" }]);
  const [list3, setList3] = useState([{ list: "" }]);

  const [defaultImages, setDefaultImages] = useState({
    img1: "",
    img2: "",
    img3: "",
  });

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

  const handleChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages({ ...perviewImages, [type]: imageUrl });
    }
  };

  const getAboutCard = GetAboutCardMutation();
  const createAboutCard = CreateAboutCardMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading1 = getAboutCard?.data?.data?.title1;
    defaultValues.heading2 = getAboutCard?.data?.data?.title2;
    defaultValues.heading3 = getAboutCard?.data?.data?.title3;
    defaultValues.icon1 = getAboutCard?.data?.data?.icon1;
    defaultValues.icon2 = getAboutCard?.data?.data?.icon2;
    defaultValues.icon3 = getAboutCard?.data?.data?.icon3;
    getAboutCard?.data?.data?.icon1 &&
      getAboutCard?.data?.data?.icon2 &&
      getAboutCard?.data?.data?.icon3 &&
      setDefaultImages({
        img1: getAboutCard?.data?.data?.icon1,
        img2: getAboutCard?.data?.data?.icon2,
        img3: getAboutCard?.data?.data?.icon3,
      });
    setList1(
      getAboutCard?.data?.data?.list1
        ? getAboutCard.data.data.list1.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    // Update list2 state
    setList2(
      getAboutCard?.data?.data?.list2
        ? getAboutCard.data.data.list2.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    // Update list3 state
    setList3(
      getAboutCard?.data?.data?.list3
        ? getAboutCard.data.data.list3.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    ["list1", "list2", "list3"].forEach((listType) => {
      getAboutCard?.data?.data?.[listType]?.forEach((item, index) => {
        defaultValues[`${listType}_${index + 1}`] = item || "";
      });
    });
    console.log(defaultValues);
    reset(defaultValues);
  }, [getAboutCard?.data?.data]);

  const onSubmit = (data) => {
    const { icon1, heading1, icon2, heading2, icon3, heading3, ...rest } = data;

    const listData = {
      list1: [],
      list2: [],
      list3: [],
    };

    // Extract list items for list1
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list1")) {
        listData.list1.push(rest[key]);
        delete rest[key];
      }
    });

    // Extract list items for list2
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list2")) {
        listData.list2.push(rest[key]);
        delete rest[key];
      }
    });

    // Extract list items for list3
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list3")) {
        listData.list3.push(rest[key]);
        delete rest[key];
      }
    });

    const formData = new FormData();
    formData.append("title1", heading1);
    formData.append("title2", heading2);
    formData.append("title3", heading3);
    formData.append("icon1", icon1[0]);
    formData.append("icon2", icon2[0]);
    formData.append("icon3", icon3[0]);
    listData?.list1?.map((data) => {
      formData.append("list1[]", data);
    });
    listData?.list2?.map((data) => {
      formData.append("list2[]", data);
    });
    listData?.list3?.map((data) => {
      formData.append("list3[]", data);
    });

    createAboutCard.mutate(formData);
  };

  console.log(defaultImages);

  return (
    <div className="about-us">
      <PageWrapper slug="about-card-details" name="About Card" />
      {getAboutCard?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon1" className="form-label">
                  Icon 1
                </label>
                <FormInput
                  type="file"
                  name="icon1"
                  placeholder="icon1"
                  {...register("icon1", {
                    required: !perviewImages?.icon1 && !defaultImages?.img1,
                    onChange: (e) => handleChange(e, "icon1"),
                  })}
                />
                {errors?.icon1 && (
                  <p className="errorMessage">Field is required</p>
                )}
                {perviewImages?.icon1 && (
                  <img
                    src={perviewImages?.icon1}
                    alt="icon1 Preview"
                    className="preview-image bg-info"
                  />
                )}
                {!perviewImages?.icon1 && defaultImages?.img1 && (
                  <img
                    src={defaultImages?.img1}
                    alt="icon1 Preview"
                    className="preview-image bg-info"
                  />
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="heading1" className="form-label">
                  Heading 1
                </label>
                <FormInput
                  type="text"
                  name="heading1"
                  placeholder="Heading 1"
                  {...register("heading1", {
                    required: true,
                  })}
                />
                {errors?.heading1 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="list" className="form-label">
                  List 1
                </label>
                {list1.map((item, index) => (
                  <div key={index}>
                    <div key={index} className="d-flex align-items-center">
                      <FormInput
                        type="text"
                        name={`list1_${index + 1}`}
                        extraClass="mt-2"
                        placeholder="List"
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
                    </div>
                    {errors?.[`list1_${index + 1}`] && (
                      <p className="errorMessage">Field is required</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="add_catalog_btn">
                <span
                  onClick={() => handleAdd("list1")}
                  className="btn btn-primary d-grid primary-bg-color outline-0 border-0 py-2 width_fit"
                >
                  Add More
                </span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon2" className="form-label">
                  Icon 2
                </label>
                <FormInput
                  type="file"
                  name="icon2"
                  placeholder="icon2"
                  {...register("icon2", {
                    required: !perviewImages?.icon2 && !defaultImages?.img2,
                    onChange: (e) => handleChange(e, "icon2"),
                  })}
                />
                {errors?.icon2 && (
                  <p className="errorMessage">Field is required</p>
                )}
                {perviewImages.icon2 && (
                  <img
                    src={perviewImages.icon2}
                    alt="Icon 2 Preview"
                    className="preview-image bg-info"
                  />
                )}
                {!perviewImages?.icon2 && defaultImages?.img2 && (
                  <img
                    src={defaultImages?.img2}
                    alt="icon1 Preview"
                    className="preview-image bg-info"
                  />
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="heading2" className="form-label">
                  Heading 2
                </label>
                <FormInput
                  type="text"
                  name="heading2"
                  placeholder="Heading 2"
                  {...register("heading2", {
                    required: true,
                  })}
                />
                {errors?.heading2 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="list2" className="form-label">
                  list 2
                </label>

                {list2.map((item, index) => (
                  <div key={index}>
                    <div className="d-flex align-items-center">
                      <FormInput
                        type="text"
                        name={`list2_${index + 1}`}
                        extraClass="mt-2"
                        placeholder="List"
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
                    </div>
                    {errors?.[`list2_${index + 1}`] && (
                      <p className="errorMessage">Field is required</p>
                    )}
                  </div>
                ))}
                <div className="add_catalog_btn">
                  <span
                    onClick={() => handleAdd("list2")}
                    className="btn btn-primary d-grid primary-bg-color outline-0 border-0 py-2 width_fit"
                  >
                    Add More
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon3" className="form-label">
                  Icon 3
                </label>
                <FormInput
                  type="file"
                  name="icon3"
                  placeholder="icon3"
                  {...register("icon3", {
                    required: !perviewImages?.icon3 && !defaultImages?.img3,
                    onChange: (e) => handleChange(e, "icon3"),
                  })}
                />
                {errors?.icon3 && (
                  <p className="errorMessage">Field is required</p>
                )}
                {perviewImages.icon3 && (
                  <img
                    src={perviewImages.icon3}
                    alt="Icon 3 Preview"
                    className="preview-image bg-info"
                  />
                )}
                {!perviewImages?.icon3 && defaultImages?.img3 && (
                  <img
                    src={defaultImages?.img3}
                    alt="icon3 Preview"
                    className="preview-image bg-info"
                  />
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="heading3" className="form-label">
                  Heading 3
                </label>
                <FormInput
                  type="text"
                  name="heading3"
                  placeholder="Heading 3"
                  {...register("heading3", {
                    required: true,
                  })}
                />
                {errors?.heading3 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="list3" className="form-label">
                  list 3
                </label>

                {list3.map((item, index) => (
                  <div key={index}>
                    <div key={index} className="d-flex align-items-center">
                      <FormInput
                        type="text"
                        name={`list3_${index + 1}`}
                        extraClass="mt-2"
                        placeholder="List"
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
                    </div>
                    {errors?.[`list3_${index + 1}`] && (
                      <p className="errorMessage">Field is required</p>
                    )}
                  </div>
                ))}
                <div className="add_catalog_btn">
                  <span
                    onClick={() => handleAdd("list3")}
                    className="btn btn-primary d-grid primary-bg-color outline-0 border-0 py-2 width_fit"
                  >
                    Add More
                  </span>
                </div>
              </div>
            </div>
            {createAboutCard?.isPending ? (
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
      )}
    </div>
  );
}

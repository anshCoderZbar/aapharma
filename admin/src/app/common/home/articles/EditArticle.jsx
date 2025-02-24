import React, { useEffect, useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { ArticleForm } from "./ArticleForm";
import { SingleArticle } from "rest/home";
import { useParams } from "react-router-dom";
import { UpdateArticleMutation } from "rest/home";

export default function EditArticle() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [articleImage, setArticleImage] = useState("");

  const formData = new FormData();
  formData?.append("articalId", id);
  const singleArticle = SingleArticle(formData);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleArticle?.data?.data?.heading;
    defaultValues.description = singleArticle?.data?.data?.description;
    defaultValues.articleImage = singleArticle?.data?.data?.featuredImage;
    defaultValues.readMoreLink = singleArticle?.data?.data?.readmorelink;
    setArticleImage(singleArticle?.data?.data?.featuredImage);
    reset(defaultValues);
  }, [singleArticle?.data?.data]);

  const editArticle = UpdateArticleMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData?.append("articalId", id);
    formData.append("description", data?.description);
    formData.append("featuredImage", data?.articleImage[0]);
    formData.append("readmorelink", data?.readMoreLink);
    editArticle.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="home-article" name="Edit article" />
      <div className="home_banner_input">
        <ArticleForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          articleImage={articleImage}
          isLoading={editArticle?.isPending}
          defaultArticleDesc={singleArticle?.data?.data?.description}
        />
      </div>
    </>
  );
}

import React from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { ArticleForm } from "./ArticleForm";
import { useForm } from "react-hook-form";
import { CreateArticleMutation } from "rest/home";

export default function AddArticle() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createArticle = CreateArticleMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("featuredImage", data?.articleImage[0]);

    createArticle.mutate(formData);
  };
  return (
    <div>
      <PageWrapper slug="home-add-article" name="Add article" />
      <div className="home_banner_input">
        <ArticleForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          isLoading={createArticle?.isPending}
        />
      </div>
    </div>
  );
}

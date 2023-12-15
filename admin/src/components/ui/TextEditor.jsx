import React from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextEditor = React.forwardRef((props, ref) => {
  return (
    <Controller
      name={props?.name}
      control={props?.control}
      render={({ field }) => {
        return (
          <ReactQuill
            ref={ref}
            name={field?.name}
            value={field?.value}
            onChange={field?.onChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
            ]}
          />
        );
      }}
    />
  );
});

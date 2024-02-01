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
                [{ font: ["selected", "serif", "monospace"] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  {
                    color: [
                      "#2E2E2E",
                      "#2A3072",
                      "#1AA338",
                      "#34CAFF",
                      "#666666",
                      "#F7F7F7",
                      "#FC0D1B",
                      "#D1D1D1",
                      "#2A3072",
                      "#292D32",
                      "#D9D9D9",
                      "#000000",
                      "#46EFF5",
                      "#e60000",
                      "#ffff00",
                      "#008a00",
                      "#9933ff",
                      "#facccc",
                      "#bbbbbb",
                      "#ffc266",
                      "#006100",
                    ],
                  },
                ],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ indent: "-1" }, { indent: "+1" }],
                ["code"],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            formats={[
              "font",
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "color",
              "code",
              "list",
              "indent",
              "bullet",
              "link",
              "image",
              "video",
              "iframe",
              "clean",
            ]}
          />
        );
      }}
    />
  );
});

// import React, { Component } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Controller } from "react-hook-form";

// export const TextEditor = React.forwardRef(
//   ({ control, name, ...rest }, ref) => {
//     return (
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => {
//           const fieldName = field && field.name;
//           return (
//             <CKEditor
//               ref={ref}
//               editor={ClassicEditor}
//               data={field?.value || ""}
//               onChange={(event, editor) => {
//                 event.name = name;
//                 const data = editor.getData();
//                 field.onChange(data);
//               }}
//             />
//           );
//         }}
//       />
//     );
//   }
// );

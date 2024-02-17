// import React from "react";
// import { Controller } from "react-hook-form";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// export const TextEditor = React.forwardRef((props, ref) => {
//   return (
//     <Controller
//       name={props?.name}
//       control={props?.control}
//       render={({ field }) => {
//         return (
//           <ReactQuill
// ref={ref}
// name={field?.name}
// value={field?.value}
// onChange={field?.onChange}
//             modules={{
//               toolbar: [
//                 [{ font: ["selected", "serif", "monospace"] }],
//                 [{ header: [1, 2, 3, 4, 5, 6, false] }],
//                 ["bold", "italic", "underline", "strike", "blockquote"],
//                 [
//                   {
//                     color: [
//                       "#2E2E2E",
//                       "#2A3072",
//                       "#1AA338",
//                       "#34CAFF",
//                       "#666666",
//                       "#F7F7F7",
//                       "#FC0D1B",
//                       "#D1D1D1",
//                       "#2A3072",
//                       "#292D32",
//                       "#D9D9D9",
//                       "#000000",
//                       "#46EFF5",
//                       "#e60000",
//                       "#ffff00",
//                       "#008a00",
//                       "#9933ff",
//                       "#facccc",
//                       "#bbbbbb",
//                       "#ffc266",
//                       "#006100",
//                     ],
//                   },
//                 ],
//                 [{ list: "ordered" }, { list: "bullet" }],
//                 [{ indent: "-1" }, { indent: "+1" }],
//                 ["code"],
//                 ["link", "image", "video"],
//                 ["clean"],
//               ],
//             }}
//             formats={[
//               "font",
//               "header",
//               "bold",
//               "italic",
//               "underline",
//               "strike",
//               "blockquote",
//               "color",
//               "code",
//               "list",
//               "indent",
//               "bullet",
//               "link",
//               "image",
//               "video",
//               "iframe",
//               "clean",
//             ]}
//           />
//         );
//       }}
//     />
//   );
// });

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export const TextEditor = React.forwardRef((props, ref) => {
  const editorRef = useRef(null);

  return (
    <div>
      <Controller
        name={props?.name}
        control={props?.control}
        render={({ field: { onChange } }) => (
          <Editor
            ref={ref}
            onInit={(evt, editor) => {
              editorRef.current = editor;
            }}
            initialValue={props?.defaultValue || ""}
            apiKey="9nf1nllqu574cxdfqfe5sdah93bhag187zqn4gkbmmw5rfop"
            init={{
              initialValue: props?.defaultValue || "",
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "upload",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              file_picker_callback: function (cb, value, meta) {
                var input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.onchange = function () {
                  var file = this.files[0];

                  var reader = new FileReader();
                  reader.onload = function () {
                    var id = "blobid" + new Date().getTime();
                    var blobCache = editorRef?.current?.editorUpload?.blobCache;
                    var base64 = reader.result.split(",")[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                  };
                  reader.readAsDataURL(file);
                };
                input.click();
              },
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
});

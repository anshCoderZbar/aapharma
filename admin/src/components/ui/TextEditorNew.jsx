import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { Controller } from "react-hook-form";

const TextEditorNew = ({ name, control, config = {} }) => {
  const editorRef = useRef(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <JoditEditor
          ref={editorRef}
          value={value}
          onBlur={(newContent) => onChange(newContent)}
          config={{
            minHeight: 300,
            readonly: false,
            ...config,
          }}
        />
      )}
    />
  );
};

export default TextEditorNew;

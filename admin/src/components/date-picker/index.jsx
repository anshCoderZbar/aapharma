import React from "react";
import { Controller } from "react-hook-form";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CustomeDate = React.forwardRef((props, ref) => {
  console.log(props?.defaultDate);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Controller
          name={props?.name}
          control={props?.control}
          defaultValue={props?.defaultDate}
          render={({ field }) => (
            <DatePicker
              ref={ref}
              name={field?.name}
              value={props?.defaultDate}
              // defaultValue={props?.defaultDate}
              onChange={field?.onChange}
              format="MM-DD-YYYY"
              maxDate={props?.maxDate}
            />
          )}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
});

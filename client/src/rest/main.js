import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { formState } from "app/common/contact/state";

export const GetSettings = () => {
  const allSetting = useQuery({
    queryKey: ["get-all-settings"],
    queryFn: () => client.main.getSettings(),
  });
  return allSetting;
};

export const ContactUs = (setFormValues) => {
  const message = useMutation({
    mutationFn: (data) => client.contact.contactUs(data),
    onSuccess: () => {
      console.log("succes");
      setFormValues(formState);
    },
    onError: () => {
      console.log("error");
    },
  });
  return message;
};

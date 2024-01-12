import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export const MasterCategory = () => {
  const getCatalogCategory1 = useQuery({
    queryKey: ["master-category-header"],
    queryFn: () => client.catalog.catalogCategory1(),
  });
  return getCatalogCategory1;
};

export const SubCategory = (id) => {
  const getCatalogCategory2 = useQuery({
    queryKey: ["sub-category-header"],
    queryFn: () => client.catalog.catalogCategory2(),
    enabled: id?.length >= 1,
  });
  return getCatalogCategory2;
};

export const SubChildCategory = (id) => {
  const getCatalogCategory3 = useQuery({
    queryKey: ["sub-child-category-header"],
    queryFn: () => client.catalog.catalogCategory3(),
    enabled: id?.length >= 1,
  });
  return getCatalogCategory3;
};

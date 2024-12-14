import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { formState } from "app/common/contact/state";
import { toast } from "react-toastify";

export const GetSettings = () => {
  const allSetting = useQuery({
    queryKey: ["get-all-settings"],
    queryFn: () => client.main.getSettings(),
  });
  return allSetting;
};

export const MasterCategory = () => {
  const getCatalogCategory1 = useQuery({
    queryKey: ["master-category-header"],
    queryFn: () => client.catalog.catalogCategory1(),
  });
  return getCatalogCategory1;
};

export const SubCategory = () => {
  const getCatalogCategory2 = useQuery({
    queryKey: ["sub-category-header"],
    queryFn: () => client.catalog.catalogCategory2(),
  });
  return getCatalogCategory2;
};

export const SubChildCategory = () => {
  const getCatalogCategory3 = useQuery({
    queryKey: ["sub-child-category-header"],
    queryFn: () => client.catalog.catalogCategory3(),
  });
  return getCatalogCategory3;
};

// contact
export const ContactUs = (setFormValues) => {
  const message = useMutation({
    mutationFn: (data) => client.contact.contactUs(data),
    onSuccess: () => {
      console.log("succes");
      setFormValues(formState);
      toast.success("Details Submited Successfully");
    },
    onError: () => {
      toast.error("OOPS! Some error occured");
    },
  });
  return message;
};

export const SendResume = (setFormState, setFile) => {
  const resume = useMutation({
    mutationFn: (data) => client.contact.sendResume(data),
    onSuccess: () => {
      setFormState({ name: "", email: "" });
      setFile(null);
      toast.success("Details Submited Successfully");
    },
    onError: () => {
      toast.error("OOPS! Some error occured");
    },
  });
  return resume;
};

// employment

export const GetEmploymentBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-employment-banner"],
    queryFn: () => client.contact.getEmploymentBanner(),
  });
  return getBanner;
};

export const GetEmploymentResponsibilities = () => {
  const getResponsibilities = useQuery({
    queryKey: ["get-employment-responsibilities"],
    queryFn: () => client.contact.getEmploymentResponsibilities(),
  });
  return getResponsibilities;
};

// footer links

export const GetFooterLinksMutation = () => {
  const footerLinks = useQuery({
    queryKey: ["get-all-footer-links"],
    queryFn: () => client.main.getFooterLinks(),
  });
  return footerLinks;
};

import { useNotifications } from "reapop";
import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "queryclient";

export const GetEmploymentBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-employment-banner"],
    queryFn: () => client.employment.getEmploymentBanner(),
  });
  return getBanner;
};

export const UpdateEmploymentBanner = () => {
  const { notify } = useNotifications();
  const employmentBanner = useMutation({
    mutationFn: (data) => client.employment.updateEmploymentBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-employment-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return employmentBanner;
};

export const GetEmploymentResponsibilities = () => {
  const getResponsibilities = useQuery({
    queryKey: ["get-employment-responsibilities"],
    queryFn: () => client.employment.getEmploymentResponsibilities(),
  });
  return getResponsibilities;
};

export const UpdateEmploymentResponsibilities = () => {
  const { notify } = useNotifications();
  const employmentResponsibilities = useMutation({
    mutationFn: (data) =>
      client.employment.updateEmploymentResponsibilities(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-employment-responsibilities"],
      });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return employmentResponsibilities;
};

export const GetResumes = () => {
  const getResumes = useQuery({
    queryKey: ["get-resumes"],
    queryFn: () => client.employment.getResumes(),
  });
  return getResumes;
};

export const DeleteResumes = () => {
  const { notify } = useNotifications();
  const deleteResumes = useMutation({
    mutationFn: (data) => client.employment.deleteResume(data),
    onSuccess: () => {
      notify("Data Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-resumes"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });

  return deleteResumes;
};

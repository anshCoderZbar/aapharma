import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const EditProjectManagementBanner = () => {
  const { notify } = useNotifications();
  const bannerMutation = useMutation({
    mutationFn: (data) =>
      client.projectManagement.editProjectManagementBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerMutation;
};

export const GetProjectManagementBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-project-management-banner"],
    queryFn: () => client.projectManagement.getProjectManagementBanner(),
  });
  return getBanner;
};

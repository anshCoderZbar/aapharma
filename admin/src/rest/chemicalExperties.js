import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateChemistryBannerMutation = () => {
  const { notify } = useNotifications();
  const chemistryBanner = useMutation({
    mutationFn: (data) =>
      client.chemistryExpertise.createChemistryExpertiseBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-chemistry-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return chemistryBanner;
};

export const GetChemistryBannerMutation = () => {
  const chemistryBanner = useQuery({
    queryKey: ["get-chemistry-banner"],
    queryFn: () => client.chemistryExpertise.getChemistryExpertiseBanner(),
  });
  return chemistryBanner;
};

export const GetChemistryTabsMutation = () => {
  const chemistryTabs = useQuery({
    queryKey: ["get-all-chemistry-tabs"],
    queryFn: () => client.chemistryExpertise.getAllChemistryTabs(),
  });
  return chemistryTabs;
};

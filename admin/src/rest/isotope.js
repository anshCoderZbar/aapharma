import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const EditIsotopeBannerMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeBanner(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-banner-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetIsotopeBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-isotope-banner-section"],
    queryFn: () => client.isotope.getIsotopeBanner(),
  });
  return bannerSection;
};

export const EditIsotopeAssessmentMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeAssessment(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-assessment"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetIsotopeAssessmentMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-isotope-assessment"],
    queryFn: () => client.isotope.getIsotopeAssessment(),
  });
  return bannerSection;
};

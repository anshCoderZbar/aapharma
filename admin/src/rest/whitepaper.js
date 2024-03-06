import { useNotifications } from "reapop";
import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const GetWhitePaperBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-whitepaper-banner"],
    queryFn: () => client.whitepaper.getWhitePaperBanner(),
  });
  return getBanner;
};

export const CreateWhitePaperBannerMutation = () => {
  const { notify } = useNotifications();
  const whitepaperBanner = useMutation({
    mutationFn: (data) => client.whitepaper.editWhitePaperBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-whitepaper-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return whitepaperBanner;
};

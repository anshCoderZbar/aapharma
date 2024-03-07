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

export const GetAllWhitePapers = () => {
  const getWhitepaper = useQuery({
    queryKey: ["get-all-whitepaper"],
    queryFn: () => client.whitepaper.allWhitepapers(),
  });
  return getWhitepaper;
};

export const CreateWhitePaperMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const addWhitepaper = useMutation({
    mutationFn: (data) => client.whitepaper.addWhitepaper(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-whitepaper"] });
      navigate("/all-whitepapers");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return addWhitepaper;
};

export const GetSingleWhitePapers = (data) => {
  const singleWhitepaper = useQuery({
    queryKey: ["get-single-whitepaper"],
    queryFn: () => client.whitepaper.singleWhitepaper(data),
  });
  return singleWhitepaper;
};

export const EditWhitePaperMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editWhitepaper = useMutation({
    mutationFn: (data) => client.whitepaper.editWhitepaper(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-whitepaper"] });
      navigate("/all-whitepapers");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editWhitepaper;
};

export const DeleteWhitePaperMutation = () => {
  const { notify } = useNotifications();
  const deleteWhitepaper = useMutation({
    mutationFn: (data) => client.whitepaper.deleteWhitepaper(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-whitepaper"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return deleteWhitepaper;
};

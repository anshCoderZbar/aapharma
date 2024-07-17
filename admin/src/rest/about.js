import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateAboutBannerMutation = () => {
  const { notify } = useNotifications();
  const aboutBanner = useMutation({
    mutationFn: (data) => client.about.createAboutBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-about-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return aboutBanner;
};

export const GetAboutBannerMutation = () => {
  const aboutBanner = useQuery({
    queryKey: ["get-about-banner"],
    queryFn: () => client.about.getAboutBanner(),
  });
  return aboutBanner;
};

export const CreateAboutCardMutation = () => {
  const { notify } = useNotifications();
  const aboutCard = useMutation({
    mutationFn: (data) => client.about.createAboutCard(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-about-card"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return aboutCard;
};

export const GetAboutCardMutation = () => {
  const aboutCard = useQuery({
    queryKey: ["get-about-card"],
    queryFn: () => client.about.getAboutUsCard(),
  });
  return aboutCard;
};

export const CreateTimelineMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const aboutTimeline = useMutation({
    mutationFn: (data) => client.about.createTimeline(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-about-timeline"] });
      navigate("/about-timeline");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return aboutTimeline;
};

export const GetAboutTimelineMutation = () => {
  const aboutTimeline = useQuery({
    queryKey: ["get-about-timeline"],
    queryFn: () => client.about.getTimeline(),
  });
  return aboutTimeline;
};

export const GetSingleTimeline = (id) => {
  const singleTimeline = useQuery({
    queryKey: ["get-single-timeline"],
    queryFn: () => client.about.singleTimeline(id),
  });
  return singleTimeline;
};

export const UpdateTimelineMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateTimeline = useMutation({
    mutationFn: (data) => client.about.updateTimeline(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-about-timeline"] });
      navigate("/about-timeline");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return updateTimeline;
};

export const DeleteTimelineMutation = () => {
  const { notify } = useNotifications();
  const deleteTimeline = useMutation({
    mutationFn: (data) => client.about.deleteTimeline(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-about-timeline"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return deleteTimeline;
};

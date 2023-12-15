import { useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetAboutBannerMutation = () => {
  const aboutBanner = useQuery({
    queryKey: ["get-about-banner"],
    queryFn: () => client.about.getAboutBanner(),
  });
  return aboutBanner;
};

export const GetAboutCardMutation = () => {
  const aboutCard = useQuery({
    queryKey: ["get-about-card"],
    queryFn: () => client.about.getAboutUsCard(),
  });
  return aboutCard;
};

export const GetAboutTimelineMutation = () => {
  const aboutTimeline = useQuery({
    queryKey: ["get-about-timeline"],
    queryFn: () => client.about.getTimeline(),
  });
  return aboutTimeline;
};

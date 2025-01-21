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

// personnel

export const GetPeronnelBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-personnel-banner"],
    queryFn: () => client.about.getPersonnelBanner(),
  });
  return getBanner;
};

export const GetPersonnelCharacterized = () => {
  const getCharacterized = useQuery({
    queryKey: ["get-personnel-characterized"],
    queryFn: () => client.about.getPersonnelCharacterized(),
  });
  return getCharacterized;
};

export const GetTeamMemberMutation = () => {
  const getTeamMember = useQuery({
    queryKey: ["get-all-personnel-team-members"],
    queryFn: () => client.about.getTeamMember(),
  });
  return getTeamMember;
};

// operating philosophy

export const GetOperatingPhilosophyMutation = () => {
  const getOperatingMutation = useQuery({
    queryKey: ["get-operating-philosophy"],
    queryFn: () => client.about.getOperatingPhilosophy(),
  });
  return getOperatingMutation;
};

export const GetOperatingPhilosophyDiagram = () => {
  const getOperatingDiagramMutation = useQuery({
    queryKey: ["get-operating-philosophy-diagram"],
    queryFn: () => client.about.getOperatingPhilosophyDiagram(),
  });
  return getOperatingDiagramMutation;
};

// testimonials

export const GetTestimonialPageHeading = () => {
  const getHeading = useQuery({
    queryKey: ["get-tesimonial-heading"],
    queryFn: () => client.about.getTestimonialPageHeading(),
  });
  return getHeading;
};

export const AllTestimonialMutation2 = () => {
  const allTestimonial = useQuery({
    queryKey: ["get-all-testimonial-2"],
    queryFn: () => client.about.getAllTestimonial2(),
  });
  return allTestimonial;
};

export const AllTestimonialClientMutation = () => {
  const allClients = useQuery({
    queryKey: ["get-all-testimonial-clients"],
    queryFn: () => client.about.allClientsImg(),
  });
  return allClients;
};

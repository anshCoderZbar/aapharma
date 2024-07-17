import { useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetBannerApi = () => {
  const banner = useQuery({
    queryKey: ["get-banner"],
    queryFn: () => client.home.getBanner(),
  });
  return banner;
};

export const GetHomeCompanyMission = () => {
  const mission = useQuery({
    queryKey: ["get-company-mission"],
    queryFn: () => client.home.getCompanyMission(),
  });
  return mission;
};

export const GetHomeServicesHeadings = () => {
  const headings = useQuery({
    queryKey: ["get-company-services-heading"],
    queryFn: () => client.home.getServiceHeading(),
  });
  return headings;
};

export const GetHomeAddServices = () => {
  const services = useQuery({
    queryKey: ["get-company-services"],
    queryFn: () => client.home.allServices(),
  });
  return services;
};

export const GetVisionMutation = () => {
  const vision = useQuery({
    queryKey: ["get-company-vision"],
    queryFn: () => client.home.getVision(),
  });
  return vision;
};

export const AllClientMutation = () => {
  const allClients = useQuery({
    queryKey: ["get-all-clients"],
    queryFn: () => client.home.allClientsImg(),
  });
  return allClients;
};

export const AllTestimonialMutation = () => {
  const allTestimonial = useQuery({
    queryKey: ["get-all-testimonial"],
    queryFn: () => client.home.getTestimonial(),
  });
  return allTestimonial;
};

export const AllArticlesMutation = () => {
  const allArticles = useQuery({
    queryKey: ["get-all-Articles"],
    queryFn: () => client.home.getArticles(),
  });
  return allArticles;
};

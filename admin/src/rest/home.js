import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const HomeBannerApi = () => {
  const { notify } = useNotifications();
  const banner = useMutation({
    mutationFn: (data) => client.home.createBanner(data),
    onSuccess: () => {
      notify("Data Successfully Added", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return banner;
};

export const GetBannerApi = () => {
  const banner = useQuery({
    queryKey: ["get-banner"],
    queryFn: () => client.home.getBanner(),
  });
  return banner;
};

export const HomeCompanyMission = () => {
  const { notify } = useNotifications();
  const mission = useMutation({
    mutationFn: (data) => client.home.createCompanyMission(data),
    onSuccess: () => {
      notify("Data Successfully Added", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return mission;
};

export const GetHomeCompanyMission = () => {
  const mission = useQuery({
    queryKey: ["get-company-mission"],
    queryFn: () => client.home.getCompanyMission(),
  });
  return mission;
};

export const HomeServicesHeadings = () => {
  const { notify } = useNotifications();
  const headings = useMutation({
    mutationFn: (data) => client.home.createSeviceheading(data),
    onSuccess: () => {
      notify("Data Successfully Added", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return headings;
};

export const GetHomeServicesHeadings = () => {
  const headings = useQuery({
    queryKey: ["get-company-services-heading"],
    queryFn: () => client.home.getServiceHeading(),
  });
  return headings;
};

export const HomeAddServices = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const services = useMutation({
    mutationFn: (data) => client.home.addService(data),
    onSuccess: () => {
      notify("Service Successfully Added", "success");
      navigate("/home-services");
      queryClient.invalidateQueries({ queryKey: ["get-company-services"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return services;
};

export const GetHomeAddServices = () => {
  const services = useQuery({
    queryKey: ["get-company-services"],
    queryFn: () => client.home.allServices(),
  });
  return services;
};

export const GetSingleAddedServices = (id) => {
  const services = useQuery({
    queryKey: ["get-company-single-services"],
    queryFn: () => client.home.singleService({ id: id }),
  });
  return services;
};

export const UpdateSingleServices = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const services = useMutation({
    mutationFn: (data) => client.home.updateServices(data),
    onSuccess: () => {
      notify("Service Updated Successfully ", "success");
      navigate("/home-services");
      queryClient.invalidateQueries({ queryKey: ["get-company-services"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return services;
};

export const DeleteService = () => {
  const { notify } = useNotifications();
  const service = useMutation({
    mutationFn: (data) => client.home.deleteService(data),
    onSuccess: () => {
      notify("Category Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-company-services"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return service;
};

export const CreateVisionMutation = () => {
  const { notify } = useNotifications();
  const vision = useMutation({
    mutationFn: (data) => client.home.createVision(data),
    onSuccess: () => {
      notify("Data successfully Added", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return vision;
};

export const GetVisionMutation = () => {
  const vision = useQuery({
    queryKey: ["get-company-vision"],
    queryFn: () => client.home.getVision(),
  });
  return vision;
};

export const CreateClientMutation = (reset) => {
  const { notify } = useNotifications();
  const createClient = useMutation({
    mutationFn: (data) => client.home.addClientImg(data),
    onSuccess: () => {
      notify("Data successfully Added", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-clients"] });
      reset({ image: "" });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createClient;
};

export const AllClientMutation = () => {
  const allClients = useQuery({
    queryKey: ["get-all-clients"],
    queryFn: () => client.home.allClientsImg(),
  });
  return allClients;
};

export const GetSingleClient = (data) => {
  const services = useQuery({
    queryKey: ["get-single-client"],
    queryFn: () => client.home.singleClient(data),
  });
  return services;
};

export const UpdateClientMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateClient = useMutation({
    mutationFn: (data) => client.home.updateClientImg(data),
    onSuccess: () => {
      notify("Data Updated Added", "success");
      navigate("/home-client");
      queryClient.invalidateQueries({ queryKey: ["get-all-clients"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return updateClient;
};

export const DeleteClientMutation = () => {
  const { notify } = useNotifications();
  const deleteClient = useMutation({
    mutationFn: (data) => client.home.deleteClientsImg(data),
    onSuccess: () => {
      notify("Client Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-clients"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteClient;
};

export const CreateTestimonial = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const testimonialMutation = useMutation({
    mutationFn: (data) => client.home.addTestimonial(data),
    onSuccess: () => {
      notify("Testimonail Created successfully", "success");
      navigate("/home-testimonial");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return testimonialMutation;
};

export const AllTestimonialMutation = () => {
  const allTestimonial = useQuery({
    queryKey: ["get-all-testimonial"],
    queryFn: () => client.home.getTestimonial(),
  });
  return allTestimonial;
};

export const DeleteTestimonial = () => {
  const { notify } = useNotifications();
  const deletetestimonial = useMutation({
    mutationFn: (data) => client.home.deleteTestimonial(data),
    onSuccess: () => {
      notify("Testimonial Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deletetestimonial;
};

export const GetSingleTestimonial = (data) => {
  const testimonial = useQuery({
    queryKey: ["get-single-testimonial"],
    queryFn: () => client.home.singleTestimonial(data),
  });
  return testimonial;
};

export const UpdateTestimonialMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateTestimonial = useMutation({
    mutationFn: (data) => client.home.editTestimonial(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      navigate("/home-testimonial");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return updateTestimonial;
};

export const CreateArticleMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const createArticle = useMutation({
    mutationFn: (data) => client.home.addArticle(data),
    onSuccess: () => {
      notify("Data successfully Added", "success");
      navigate("/home-article");
      queryClient.invalidateQueries({ queryKey: ["get-all-Articles"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createArticle;
};

export const AllArticlesMutation = () => {
  const allArticles = useQuery({
    queryKey: ["get-all-Articles"],
    queryFn: () => client.home.getArticles(),
  });
  return allArticles;
};

export const DeleteArticle = () => {
  const { notify } = useNotifications();
  const deleteArticles = useMutation({
    mutationFn: (data) => client.home.deleteArticle(data),
    onSuccess: () => {
      notify("Articles Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-Articles"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteArticles;
};

export const SingleArticle = (data) => {
  const article = useQuery({
    queryKey: ["get-single-article"],
    queryFn: () => client.home.singleArticle(data),
  });
  return article;
};

export const UpdateArticleMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateArticle = useMutation({
    mutationFn: (data) => client.home.editArticle(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      navigate("/home-article");
      queryClient.invalidateQueries({ queryKey: ["get-all-Articles"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return updateArticle;
};

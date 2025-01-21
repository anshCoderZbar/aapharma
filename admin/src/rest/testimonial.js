import { queryClient } from "queryclient";
import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";

export const GetTestimonialPageHeading = () => {
  const getHeading = useQuery({
    queryKey: ["get-tesimonial-heading"],
    queryFn: () => client.testimonialPage.getTestimonialPageHeading(),
  });
  return getHeading;
};

export const CreateTestimonialsHeading = () => {
  const { notify } = useNotifications();
  const createTestimoniol = useMutation({
    mutationFn: (data) =>
      client.testimonialPage.editTestimonialPageHeading(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-tesimonial-heading"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createTestimoniol;
};

export const CreateTestimonial2 = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const testimonialMutation = useMutation({
    mutationFn: (data) => client.testimonialPage.createTestimonial2(data),
    onSuccess: () => {
      notify("Testimonail Created successfully", "success");
      navigate("/all-testimonial");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial-2"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return testimonialMutation;
};

export const AllTestimonialMutation2 = () => {
  const allTestimonial = useQuery({
    queryKey: ["get-all-testimonial-2"],
    queryFn: () => client.testimonialPage.getAllTestimonial2(),
  });
  return allTestimonial;
};

export const DeleteTestimonial2 = () => {
  const { notify } = useNotifications();
  const deletetestimonial = useMutation({
    mutationFn: (data) => client.testimonialPage.deleteTestimonial2(data),
    onSuccess: () => {
      notify("Testimonial Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial-2"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deletetestimonial;
};

export const GetSingleTestimonial2 = (data) => {
  const testimonial = useQuery({
    queryKey: ["get-single-testimonial-2"],
    queryFn: () => client.testimonialPage.singleTestimonial2(data),
  });
  return testimonial;
};

export const UpdateTestimonialMutation2 = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateTestimonial = useMutation({
    mutationFn: (data) => client.testimonialPage.editTestimonial2(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      navigate("/all-testimonial");
      queryClient.invalidateQueries({ queryKey: ["get-all-testimonial-2"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return updateTestimonial;
};

export const CreateTestimonialClientMutation = (reset) => {
  const { notify } = useNotifications();
  const createClient = useMutation({
    mutationFn: (data) => client.testimonialPage.addClientImg(data),
    onSuccess: () => {
      notify("Data successfully Added", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-testimonial-clients"],
      });
      reset({ image: "" });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createClient;
};

export const AllTestimonialClientMutation = () => {
  const allClients = useQuery({
    queryKey: ["get-all-testimonial-clients"],
    queryFn: () => client.testimonialPage.allClientsImg(),
  });
  return allClients;
};

export const DeleteTestimonialClientMutation = () => {
  const { notify } = useNotifications();
  const deleteClient = useMutation({
    mutationFn: (id) => client.testimonialPage.deleteClientsImg(id),
    onSuccess: () => {
      notify("Client Deleted successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-testimonial-clients"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteClient;
};

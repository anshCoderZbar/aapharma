import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const GetConferenceBannerMutation = () => {
  const conferenceBanner = useQuery({
    queryKey: ["get-conference-banner"],
    queryFn: () => client.conferences.getConferenceBanner(),
  });
  return conferenceBanner;
};

export const EditConferenceBannerMutation = () => {
  const { notify } = useNotifications();

  const conferenceBanner = useMutation({
    mutationFn: (data) => client.conferences.editConferenceBanner(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-conference-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return conferenceBanner;
};

export const GetConferenceCardsMutation = () => {
  const confrenceCard = useQuery({
    queryKey: ["get-conference-cards"],
    queryFn: () => client.conferences.getAllConferenceCards(),
  });
  return confrenceCard;
};

export const GetSingleConferenceCardsMutation = (data) => {
  const confrenceCard = useQuery({
    queryKey: ["get-single-conference-cards"],
    queryFn: () => client.conferences.singleConferenceCards(data),
  });
  return confrenceCard;
};

export const CreateConferenceCardsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const confrenceCard = useMutation({
    mutationFn: (data) => client.conferences.createConferenceCards(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-conference-cards"],
      });
      navigate("/conference-cards");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return confrenceCard;
};

export const EditConferenceCardsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const confrenceCard = useMutation({
    mutationFn: (data) => client.conferences.editConferenceCards(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-conference-cards"],
      });
      navigate("/conference-cards");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return confrenceCard;
};

export const DeleteConferenceCardsMutation = () => {
  const { notify } = useNotifications();
  const confrenceCard = useMutation({
    mutationFn: (data) => client.conferences.deleteConferenceCards(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-conference-cards"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return confrenceCard;
};

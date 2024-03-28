import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";

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
    queryFn: () => client.conferences.getConferenceCards(),
  });
  return confrenceCard;
};

export const EditConferenceCardsMutation = () => {
  const { notify } = useNotifications();
  const confrenceCard = useMutation({
    mutationFn: (data) => client.conferences.editConferenceCards(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
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

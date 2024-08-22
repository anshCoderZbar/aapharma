import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const AllSynthesisMutation = () => {
  const allSynthesis = useQuery({
    queryKey: ["get-all-synthesis"],
    queryFn: () => client.synthesis.allSynthesis(),
  });
  return allSynthesis;
};

export const AddSynthesisMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const addSynthesis = useMutation({
    mutationFn: (data) => client.synthesis.addSynthesis(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-synthesis"],
      });
      navigate("/all-synthesis");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return addSynthesis;
};

export const SingleSynthesisMutation = (data) => {
  const singleSynthesis = useQuery({
    queryKey: ["get-single-synthesis"],
    queryFn: () => client.synthesis.singleSynthesis(data),
  });
  return singleSynthesis;
};

export const EditSynthesisMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editSynthesis = useMutation({
    mutationFn: (data) => client.synthesis.editSynthesis(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-synthesis"],
      });
      navigate("/all-synthesis");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editSynthesis;
};

export const DeleteSynthesisMutation = () => {
  const { notify } = useNotifications();
  const deleteSynthesis = useMutation({
    mutationFn: (data) => client.synthesis.deleteSynthesis(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-synthesis"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteSynthesis;
};

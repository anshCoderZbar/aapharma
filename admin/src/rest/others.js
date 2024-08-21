import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateOthersBannerMutation = () => {
  const { notify } = useNotifications();
  const othersBanner = useMutation({
    mutationFn: (data) => client.others.createOtherBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-others-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return othersBanner;
};

export const GetOthersBannerMutation = () => {
  const othersBanner = useQuery({
    queryKey: ["get-others-banner"],
    queryFn: () => client.others.getOtherBanner(),
  });
  return othersBanner;
};

export const GetOthersListMutation = () => {
  const othersList = useQuery({
    queryKey: ["get-all-others-list"],
    queryFn: () => client.others.allOtherList(),
  });
  return othersList;
};

export const AddOthersListMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const addList = useMutation({
    mutationFn: (data) => client.others.addOtherList(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-others-list"] });
      navigate("/others-list");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return addList;
};

export const DeleteOthersListMutation = () => {
  const { notify } = useNotifications();
  const deleteList = useMutation({
    mutationFn: (data) => client.others.deleteOtherList(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-others-list"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return deleteList;
};

export const SingleOthersListMutation = (data) => {
  const singleList = useQuery({
    queryKey: ["get-single-others-list"],
    queryFn: () => client.others.singleOtherList(data),
  });
  return singleList;
};

export const EditOthersListMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editList = useMutation({
    mutationFn: (data) => client.others.editOtherList(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-others-list"] });
      navigate("/others-list");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editList;
};

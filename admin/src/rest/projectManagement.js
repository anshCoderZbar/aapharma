import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const EditProjectManagementBanner = () => {
  const { notify } = useNotifications();
  const bannerMutation = useMutation({
    mutationFn: (data) =>
      client.projectManagement.editProjectManagementBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerMutation;
};

export const GetProjectManagementBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-project-management-banner"],
    queryFn: () => client.projectManagement.getProjectManagementBanner(),
  });
  return getBanner;
};

export const EditProjectManagementDescription = () => {
  const { notify } = useNotifications();
  const editDesc = useMutation({
    mutationFn: (data) =>
      client.projectManagement.editProjectManagementBottomDesc(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-description"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editDesc;
};

export const GetProjectManagementDescription = () => {
  const getDesc = useQuery({
    queryKey: ["get-project-management-description"],
    queryFn: () => client.projectManagement.getProjectManagementBottomDesc(),
  });
  return getDesc;
};

export const AddProjectManagementList = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const addList = useMutation({
    mutationFn: (data) =>
      client.projectManagement.addProjectManagementList(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-lists"],
      });
      navigate("/project-management-Lists");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return addList;
};

export const GetProjectManagementLists = () => {
  const getDesc = useQuery({
    queryKey: ["get-project-management-lists"],
    queryFn: () => client.projectManagement.getAllProjectManagementList(),
  });
  return getDesc;
};

export const DeleteProjectManagementList = () => {
  const { notify } = useNotifications();
  const addList = useMutation({
    mutationFn: (data) =>
      client.projectManagement.deleteProjectManagementList(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-lists"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return addList;
};

export const SingleProjectManagementLists = (data) => {
  const singleList = useQuery({
    queryKey: ["get-project-single-management-lists"],
    queryFn: () => client.projectManagement.singleProjectManagementList(data),
  });
  return singleList;
};

export const EditProjectManagementList = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editList = useMutation({
    mutationFn: (data) =>
      client.projectManagement.updateProjectManagementList(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-project-management-lists"],
      });
      navigate("/project-management-Lists");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editList;
};

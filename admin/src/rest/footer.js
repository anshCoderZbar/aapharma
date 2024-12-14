import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const GetUsefullLinksMutation = () => {
  const usefullLinks = useQuery({
    queryKey: ["get-all-usefull-links"],
    queryFn: () => client.footer.getAllusefullLinks(),
  });
  return usefullLinks;
};

export const CreateUsefullLinksMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const usefullLinks = useMutation({
    mutationFn: (data) => client.footer.createAllUsefullLink(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-usefull-links"],
      });
      navigate("/all-usefull-links");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return usefullLinks;
};

export const GetSingleUsefullLinksMutation = (data) => {
  const usefullLinks = useQuery({
    queryKey: ["get-single-usefull-links"],
    queryFn: () => client.footer.getSingleusefullLinks(data),
  });
  return usefullLinks;
};

export const EditUsefullLinksMutation = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const usefullLinks = useMutation({
    mutationFn: (data) => client.footer.editusefullLinks(data, id),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-usefull-links"],
      });
      navigate("/all-usefull-links");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return usefullLinks;
};

export const DeleteUsefullLinksMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const usefullLinks = useMutation({
    mutationFn: (id) => client.footer.deleteusefullLinks(id),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-usefull-links"],
      });
      navigate("/all-usefull-links");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return usefullLinks;
};

export const GetAllMenuItemsMutation = () => {
  const menuItems = useQuery({
    queryKey: ["get-all-menu-items"],
    queryFn: () => client.footer.getAllMenuItems(),
  });
  return menuItems;
};

export const CreateMenuItemsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const menuItems = useMutation({
    mutationFn: (data) => client.footer.createAllMenuItems(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-menu-items"],
      });
      navigate("/all-menu-items");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return menuItems;
};

export const GetSingleMenuItemsMutation = (id) => {
  const menuItems = useQuery({
    queryKey: ["get-single-menu-items"],
    queryFn: () => client.footer.getSingleMenuItems(id),
  });
  return menuItems;
};

export const EditMenuItemsMutation = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const menuItems = useMutation({
    mutationFn: (data) => client.footer.editMenuItems(id, data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-menu-items"],
      });
      navigate("/all-menu-items");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return menuItems;
};

export const DeleteMenuItemsMutation = () => {
  const { notify } = useNotifications();
  const menuItems = useMutation({
    mutationFn: (id) => client.footer.deleteMenuItems(id),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-menu-items"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return menuItems;
};

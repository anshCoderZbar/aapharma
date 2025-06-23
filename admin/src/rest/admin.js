import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const GetAllAdminMutation = () => {
  const allAdmin = useQuery({
    queryKey: ["get-all-admin"],
    queryFn: () => client.admin.getAllAdmin(),
  });
  return allAdmin;
};

export const DeleteAdminMutation = () => {
  const { notify } = useNotifications();
  const admin = useMutation({
    mutationFn: (data) => client.admin.deleteAdmin(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-admin"] });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return admin;
};

export const CreateAdminMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const admin = useMutation({
    mutationFn: (data) => client.admin.createAdmin(data),
    onSuccess: () => {
      notify("Details added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-admin"] });
      navigate("/all-admin");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return admin;
};

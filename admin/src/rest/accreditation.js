import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateAccreditationMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const accreditations = useMutation({
    mutationFn: (data) => client.accreditations.addAccreditations(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-accreditations"] });
      navigate("/accreditations");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return accreditations;
};

export const GetAllAccreditationMutation = () => {
  const accreditations = useQuery({
    queryKey: ["get-all-accreditations"],
    queryFn: () => client.accreditations.getAccreditations(),
  });
  return accreditations;
};

export const GetSingleAccreditationMutation = (id) => {
  const accreditations = useQuery({
    queryKey: ["get-single-accreditations"],
    queryFn: () => client.accreditations.getSingleAccreditations(id),
  });
  return accreditations;
};

export const EditAccreditationMutation = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const accreditations = useMutation({
    mutationFn: (data) => client.accreditations.editAccreditations(data, id),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-accreditations"] });
      navigate("/accreditations");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return accreditations;
};

export const DeleteAccreditationMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const accreditations = useMutation({
    mutationFn: (id) => client.accreditations.deleteAccreditations(id),
    onSuccess: () => {
      notify("Details deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-accreditations"] });
      navigate("/accreditations");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return accreditations;
};

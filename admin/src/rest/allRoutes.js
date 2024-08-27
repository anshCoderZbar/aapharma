import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateRoutesMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const routes = useMutation({
    mutationFn: (data) => client.routes.createRoute(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-routes"] });
      navigate("/all-routes");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return routes;
};

export const GetAllRoutesMutation = () => {
  const routes = useQuery({
    queryKey: ["get-all-routes"],
    queryFn: () => client.routes.getAllRoutes(),
  });
  return routes;
};

export const GetSingleRoutesMutation = (data) => {
  const routes = useQuery({
    queryKey: ["get-single-page-routes"],
    queryFn: () => client.routes.singleRoute(data),
  });
  return routes;
};

export const EditRoutesMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const routes = useMutation({
    mutationFn: (data) => client.routes.editRoute(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-routes"] });
      navigate("/all-routes");
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return routes;
};

export const DeleteRoutesMutation = () => {
  const { notify } = useNotifications();
  const routes = useMutation({
    mutationFn: (data) => client.routes.deleteRoute(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-routes"] });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return routes;
};

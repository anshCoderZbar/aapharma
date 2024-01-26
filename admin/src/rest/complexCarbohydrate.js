import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const GetCarbohydrateBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-carbohydrate-banner"],
    queryFn: () => client.complexCarbohydrate.getCarbohydrateBanner(),
  });
  return getBanner;
};

export const CreateCarbohydrateBanner = () => {
  const { notify } = useNotifications();
  const createBanner = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.createCarbohydrateBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return createBanner;
};

export const AllCarbohydrateTimeline = () => {
  const getTimeline = useQuery({
    queryKey: ["get-carbohydrate-timeline"],
    queryFn: () => client.complexCarbohydrate.allCarbohydrateTimeline(),
  });
  return getTimeline;
};

export const CreateCarbohydrateTimeline = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const createBanner = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.createCarbohydrateTimeline(data),
    onSuccess: () => {
      notify("Timeline Added Successfully", "success");
      navigate("/carbohydrate-timeline");
      queryClient.invalidateQueries({
        queryKey: ["get-carbohydrate-timeline"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return createBanner;
};

export const SingleCarbohydrateTimeline = (data) => {
  const getTimeline = useQuery({
    queryKey: ["get-single-carbohydrate-timeline"],
    queryFn: () => client.complexCarbohydrate.singleCarbohydrateTimeline(data),
  });
  return getTimeline;
};

export const UpdateCarbohydrateTimeline = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const createBanner = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.updateCarbohydrateTimeline(data),
    onSuccess: () => {
      navigate("/carbohydrate-timeline");

      notify("Timeline Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-carbohydrate-timeline"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return createBanner;
};

export const DeleteCarbohydrateTimeline = () => {
  const { notify } = useNotifications();
  const createBanner = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.deleteCarbohydrateTimeline(data),
    onSuccess: () => {
      notify("Timeline Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-carbohydrate-timeline"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return createBanner;
};

export const GetCarbohydrateDescription = () => {
  const getDecription = useQuery({
    queryKey: ["carbohydrate-description"],
    queryFn: () => client.complexCarbohydrate.getCarbohydrateDescription(),
  });
  return getDecription;
};

export const CreateCarbohydrateDescription = () => {
  const { notify } = useNotifications();
  const createDescription = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.createCarbohydrateDescription(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["carbohydrate-description"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return createDescription;
};

export const GetCarbohydrateDiagram = () => {
  const getDiagram = useQuery({
    queryKey: ["carbohydrate-diagram"],
    queryFn: () => client.complexCarbohydrate.getCarbohydrateDiagram(),
  });
  return getDiagram;
};

export const SingleCarbohydrateDiagram = (data) => {
  const getSingleDiagram = useQuery({
    queryKey: ["get-single-carbohydrate-diagram"],
    queryFn: () => client.complexCarbohydrate.singleCarbohydrateDiagram(data),
  });
  return getSingleDiagram;
};

export const EditCarbohydrateDiagramMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editDiagram = useMutation({
    mutationFn: (data) =>
      client.complexCarbohydrate.editCarbohydrateDiagram(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      navigate("/carbohydrate-diagram");
      queryClient.invalidateQueries({
        queryKey: ["carbohydrate-diagram"],
      });
    },
    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editDiagram;
};

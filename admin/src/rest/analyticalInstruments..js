import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const AllAnalyticalInstrumentMutation = () => {
  const allAnalyticalInstrument = useQuery({
    queryKey: ["get-all-analytical-instruments"],
    queryFn: () => client.analyticalInstruments.allAnalyticalInstrument(),
  });
  return allAnalyticalInstrument;
};

export const AddAnalyticalInstrumentMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const AnalyticalInstrument = useMutation({
    mutationFn: (data) =>
      client.analyticalInstruments.addAnalyticalInstrument(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-analytical-instruments"],
      });
      navigate("/all-analytical-instruments");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return AnalyticalInstrument;
};

export const SingleAnalyticalInstrumentMutation = (data) => {
  const singleAnalyticalInstrument = useQuery({
    queryKey: ["get-single-analytical-instrument"],
    queryFn: () =>
      client.analyticalInstruments.singleAnalyticalInstrument(data),
  });
  return singleAnalyticalInstrument;
};

export const EditAnalyticalInstrumentMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editAnalyticalInstrument = useMutation({
    mutationFn: (data) =>
      client.analyticalInstruments.editAnalyticalInstrument(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-analytical-instruments"],
      });
      navigate("/all-analytical-instruments");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editAnalyticalInstrument;
};

export const DeleteAnalyticalInstrumentMutation = () => {
  const { notify } = useNotifications();
  const deleteAnalyticalInstrument = useMutation({
    mutationFn: (data) =>
      client.analyticalInstruments.deleteAnalyticalInstrument(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-analytical-instruments"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteAnalyticalInstrument;
};

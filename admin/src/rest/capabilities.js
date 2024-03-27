import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";

export const GetCapabilitiesOverviewMutation = () => {
  const capabilitiesOverview = useQuery({
    queryKey: ["get-capabilities-overview"],
    queryFn: () => client.capabilities.getCapabilitiesOverview(),
  });
  return capabilitiesOverview;
};

export const EditCapabilitiesOverviewMutation = () => {
  const { notify } = useNotifications();

  const capabilitiesOverview = useMutation({
    mutationFn: (data) => client.capabilities.createCapabilitiesOverview(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-capabilities-overview"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return capabilitiesOverview;
};

export const GetAnalyticalInstrumentationMutation = () => {
  const analyticalInstrumentation = useQuery({
    queryKey: ["get-analytical-instrumentation"],
    queryFn: () => client.capabilities.getAnalyticalInstrumentation(),
  });
  return analyticalInstrumentation;
};

export const EditAnalyticalInstrumentationMutation = () => {
  const { notify } = useNotifications();

  const analyticalInstrumentation = useMutation({
    mutationFn: (data) =>
      client.capabilities.createAnalyticalInstrumentation(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-analytical-instrumentation"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return analyticalInstrumentation;
};

export const GetAccredationMutation = () => {
  const accredation = useQuery({
    queryKey: ["get-accredation"],
    queryFn: () => client.capabilities.getAccreditations(),
  });
  return accredation;
};

export const EditAccredationMutation = () => {
  const { notify } = useNotifications();

  const accredation = useMutation({
    mutationFn: (data) => client.capabilities.createAccreditations(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-accredation"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return accredation;
};

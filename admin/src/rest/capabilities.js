import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

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
      notify("Details Edited Successfully", "success");
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
      notify("Details Edited Successfully", "success");
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
      notify("Details Edited Successfully", "success");
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

export const GetLabEquipmentBannerMutation = () => {
  const labEquipment = useQuery({
    queryKey: ["get-lab-equipment-banner"],
    queryFn: () => client.capabilities.getLabEquipmentBanner(),
  });
  return labEquipment;
};

export const EditLabEquipmentBannerMutation = () => {
  const { notify } = useNotifications();

  const labEquipment = useMutation({
    mutationFn: (data) => client.capabilities.editLabEquipmentBanner(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-lab-equipment-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return labEquipment;
};

export const AllLabEquipmentMutation = () => {
  const allLabEquipment = useQuery({
    queryKey: ["get-all-equipment"],
    queryFn: () => client.capabilities.allLabEquipment(),
  });
  return allLabEquipment;
};

export const AddLabEquipmentMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const labEquipment = useMutation({
    mutationFn: (data) => client.capabilities.addLabEquipment(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-equipment"],
      });
      navigate("/all-lab-equipment");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return labEquipment;
};

export const SingleLabEquipmentMutation = (data) => {
  const singleLabEquipment = useQuery({
    queryKey: ["get-single-lab-equipment"],
    queryFn: () => client.capabilities.singleLabEquipment(data),
  });
  return singleLabEquipment;
};

export const EditLabEquipmentMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editLabEquipment = useMutation({
    mutationFn: (data) => client.capabilities.editLabEquipment(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-equipment"],
      });
      navigate("/all-lab-equipment");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editLabEquipment;
};

export const DeleteLabEquipmentMutation = () => {
  const { notify } = useNotifications();
  const deleteLabEquipment = useMutation({
    mutationFn: (data) => client.capabilities.deleteLabEquipment(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-equipment"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteLabEquipment;
};

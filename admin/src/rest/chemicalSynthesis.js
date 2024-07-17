import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const CreateChemicalSynthesisMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const createChemicalSynthesis = useMutation({
    mutationFn: (data) =>
      client.chemicalSynthesis.createCustomChemicalSynthesis(data),
    onSuccess: () => {
      notify("Data Added Successfully", "success");
      navigate("/chemical-synthesis");
      queryClient.invalidateQueries({
        queryKey: ["fetch-custom-chemical-synthesis"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createChemicalSynthesis;
};

export const GetCustomChemicalSynthesisMutation = () => {
  const getChemicalSynthesis = useQuery({
    queryKey: ["fetch-custom-chemical-synthesis"],
    queryFn: () => client.chemicalSynthesis.getCustomChemicalSynthesis(),
  });
  return getChemicalSynthesis;
};

export const GetSingleChemicalSynthesisMutation = (data) => {
  const getSingleChemicalSynthesis = useQuery({
    queryKey: ["fetch-single-chemical-synthesis"],
    queryFn: () => client.chemicalSynthesis.getSingleChemicalSynthesis(data),
  });
  return getSingleChemicalSynthesis;
};

export const UpdateChemicalSynthesisMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateChemicalSynthesis = useMutation({
    mutationFn: (data) =>
      client.chemicalSynthesis.updateCustomChemicalSynthesis(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      navigate("/chemical-synthesis");
      queryClient.invalidateQueries({
        queryKey: ["fetch-custom-chemical-synthesis"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return updateChemicalSynthesis;
};

export const DeleteChemicalSynthesisMutation = () => {
  const { notify } = useNotifications();
  const deleteChemicalSynthesis = useMutation({
    mutationFn: (data) =>
      client.chemicalSynthesis.deleteCustomChemicalSynthesis(data),
    onSuccess: () => {
      notify("Data Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["fetch-custom-chemical-synthesis"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteChemicalSynthesis;
};

// experties-include

export const CreateExpertiesIncludesMutation = () => {
  const { notify } = useNotifications();
  const expertiesIncludes = useMutation({
    mutationFn: (data) => client.chemicalSynthesis.expertiseIncludes(data),
    onSuccess: () => {
      notify("Data Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["fetch-experties-includes"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return expertiesIncludes;
};

export const GetExpertiesIncludesMutation = () => {
  const getExpertiesIncludesMutation = useQuery({
    queryKey: ["fetch-experties-includes"],
    queryFn: () => client.chemicalSynthesis.getExpertiseIncludes(),
  });
  return getExpertiesIncludesMutation;
};

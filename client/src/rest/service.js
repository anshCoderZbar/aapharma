import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";

// chemical synthesis page
export const GetCustomChemicalSynthesisMutation = () => {
  const getChemicalSynthesis = useQuery({
    queryKey: ["fetch-custom-chemical-synthesis"],
    queryFn: () => client.services.getCustomChemicalSynthesis(),
  });
  return getChemicalSynthesis;
};

export const GetSingleChemicalSynthesisMutation = () => {
  const getSingleChemicalSynthesis = useMutation({
    mutationFn: (data) => client.services.getSingleChemicalSynthesis(data),
    onSuccess: () => {
      return;
    },
    onError: () => {
      return;
    },
  });
  return getSingleChemicalSynthesis;
};

export const GetExpertiesIncludesMutation = () => {
  const getExpertiesIncludesMutation = useQuery({
    queryKey: ["fetch-experties-includes"],
    queryFn: () => client.services.getExpertiseIncludes(),
  });
  return getExpertiesIncludesMutation;
};

// chemical synthesis page

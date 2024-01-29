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

// therapeutics page

export const GetTherapeuticsBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-therapeutics-banner"],
    queryFn: () => client.services.getTherapeuticsBanner(),
  });
  return getBanner;
};

export const GetTherapeuticsSupport = () => {
  const getSupport = useQuery({
    queryKey: ["get-therapeutics-support"],
    queryFn: () => client.services.getTherapeuticsSupport(),
  });
  return getSupport;
};

export const GetAllTherapeuticsSteps = () => {
  const getSteps = useQuery({
    queryKey: ["get-therapeutics-steps"],
    queryFn: () => client.services.getAllStepsTherapeutics(),
  });
  return getSteps;
};

export const GetServiceImage = (data) => {
  const getImage = useQuery({
    queryKey: ["get-service-image"],
    queryFn: () => client.services.serviceFeaturedImage(data),
  });
  return getImage;
};

export const GetAdcLinker = () => {
  const getAdc = useQuery({
    queryKey: ["get-adc-linker"],
    queryFn: () => client.services.getAdcLinker(),
  });
  return getAdc;
};

export const GetTherapeuticsBottom = () => {
  const getBottom = useQuery({
    queryKey: ["get-therapeutics-bottom"],
    queryFn: () => client.services.getTherapeuticsBottom(),
  });
  return getBottom;
};

// complex carbohydrates

export const GetCarbohydrateBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-carbohydrate-banner"],
    queryFn: () => client.services.getCarbohydrateBanner(),
  });
  return getBanner;
};

export const AllCarbohydrateTimeline = () => {
  const getTimeline = useQuery({
    queryKey: ["get-carbohydrate-timeline"],
    queryFn: () => client.services.allCarbohydrateTimeline(),
  });
  return getTimeline;
};

export const GetCarbohydrateDiagram = () => {
  const getDiagram = useQuery({
    queryKey: ["carbohydrate-diagram"],
    queryFn: () => client.services.getCarbohydrateDiagram(),
  });
  return getDiagram;
};

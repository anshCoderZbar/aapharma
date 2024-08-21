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

// research and development

export const GetResearchDevelopmentBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-research-development-banner"],
    queryFn: () => client.services.getResearchDevelopmentBanner(),
  });
  return getBanner;
};

export const GetResearchDevelopmentSort = () => {
  const getSort = useQuery({
    queryKey: ["get-research-development-sort"],
    queryFn: () => client.services.getResearchDevelopmentSort(),
  });
  return getSort;
};

export const GetResearchDevelopmentTabs = () => {
  const getTabs = useQuery({
    queryKey: ["get-research-development-tabs"],
    queryFn: () => client.services.getAllResearchTabs(),
  });
  return getTabs;
};

// process-research-and-development

export const GetProcessBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-process-banner-section"],
    queryFn: () => client.services.getProcessBanner(),
  });
  return bannerSection;
};

export const GetProcessMidSectionMutation = () => {
  const midSection = useQuery({
    queryKey: ["get-process-mid-section"],
    queryFn: () => client.services.getProcessMidSection(),
  });
  return midSection;
};

export const GetProcessTabsMutation = () => {
  const getTabs = useQuery({
    queryKey: ["get-all-process-tabs"],
    queryFn: () => client.services.getProcessTabs(),
  });
  return getTabs;
};

// small-molecule-drug-discovery

export const GetSmallMoleculeBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-small-molecule-banner-section"],
    queryFn: () => client.services.getSmallMoleculeBanner(),
  });
  return bannerSection;
};

export const GetHTSMutation = () => {
  const htsSection = useQuery({
    queryKey: ["hts-section"],
    queryFn: () => client.services.getHTS(),
  });
  return htsSection;
};

export const GetSBDDMutation = () => {
  const sdbbSection = useQuery({
    queryKey: ["sdbb-section"],
    queryFn: () => client.services.getSBDD(),
  });
  return sdbbSection;
};

export const GetSARMutation = () => {
  const sarSection = useQuery({
    queryKey: ["sar-section"],
    queryFn: () => client.services.getSAR(),
  });
  return sarSection;
};

export const GetLeadDevelopmentMutation = () => {
  const leadDevelopmentSection = useQuery({
    queryKey: ["lead-development-section"],
    queryFn: () => client.services.getLeadDevelopment(),
  });
  return leadDevelopmentSection;
};

export const GetAllSmallMoleculeTabs = () => {
  const allSmallMolecule = useQuery({
    queryKey: ["all-small-molules"],
    queryFn: () => client.services.getAllSmallTabs(),
  });
  return allSmallMolecule;
};

export const GetScaffHoppingMutation = (data) => {
  const scallHopping = useQuery({
    queryKey: ["scaff-hopping-list"],
    queryFn: () => client.services.getScaffHolding(data),
  });
  return scallHopping;
};

// isotope

export const GetIsotopeBannerMutation = () => {
  const isotopeBanner = useQuery({
    queryKey: ["isotope-banner"],
    queryFn: () => client.services.getIsotopeBanner(),
  });
  return isotopeBanner;
};

export const GetIsotopeAssessmentMutation = () => {
  const isotopeAssessment = useQuery({
    queryKey: ["isotope-assessment"],
    queryFn: () => client.services.getIsotopeAssessment(),
  });
  return isotopeAssessment;
};

export const GetIsotopeTableMutation = () => {
  const isotopeTable = useQuery({
    queryKey: ["get-isotope-table"],
    queryFn: () => client.services.getIsotopeTable(),
  });
  return isotopeTable;
};

export const GetIsotopeDetailsMutation = () => {
  const isotopeDetails = useQuery({
    queryKey: ["get-isotope-details"],
    queryFn: () => client.services.getIsotopeDetails(),
  });
  return isotopeDetails;
};

export const GetIsotopeButtonMutation = () => {
  const isotopeButton = useQuery({
    queryKey: ["get-isotope-button"],
    queryFn: () => client.services.getIsotopeButton(),
  });
  return isotopeButton;
};

// project management

export const GetProjectManagementBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-project-management-banner"],
    queryFn: () => client.services.getProjectManagementBanner(),
  });
  return getBanner;
};

export const GetProjectManagementDescription = () => {
  const getDesc = useQuery({
    queryKey: ["get-project-management-description"],
    queryFn: () => client.services.getProjectManagementBottomDesc(),
  });
  return getDesc;
};

export const GetProjectManagementLists = () => {
  const getDesc = useQuery({
    queryKey: ["get-project-management-lists"],
    queryFn: () => client.services.getAllProjectManagementList(),
  });
  return getDesc;
};

// others

export const GetOthersBannerMutation = () => {
  const othersBanner = useQuery({
    queryKey: ["get-others-banner"],
    queryFn: () => client.services.getOtherBanner(),
  });
  return othersBanner;
};

export const GetOthersListMutation = () => {
  const othersList = useQuery({
    queryKey: ["get-all-others-list"],
    queryFn: () => client.services.allOtherList(),
  });
  return othersList;
};

import { useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetChemistryBannerMutation = () => {
  const chemistryBanner = useQuery({
    queryKey: ["get-chemistry-banner"],
    queryFn: () => client.capabilities.getChemistryExpertiseBanner(),
  });
  return chemistryBanner;
};

export const GetChemistryTabsMutation = () => {
  const chemistryTabs = useQuery({
    queryKey: ["get-all-chemistry-tabs"],
    queryFn: () => client.capabilities.getAllChemistryTabs(),
  });
  return chemistryTabs;
};

// export const GetSingleChemistryTabsMutation = () => {
//   const chemistryTabs = useMutation({
//     mutationFn: (data) => client.capabilities.singleChemistryTabs(data),
//     onSuccess: () => {
//       // queryClient.invalidateQueries({ queryKey: ["get-all-chemistry-tabs"] });
//     },

//     // onError: () => notify("OOPS! some error occured", "error"),
//   });
//   return chemistryTabs;
// };

export const GetPartnerBannerMutation = () => {
  const partnerBanner = useQuery({
    queryKey: ["get-partner-banner"],
    queryFn: () => client.capabilities.getPartnerBanner(),
  });
  return partnerBanner;
};

export const GetAllPartnerCardMutation = () => {
  const partnerCard = useQuery({
    queryKey: ["get-all-partner-card"],
    queryFn: () => client.capabilities.getAllPartnerCards(),
  });
  return partnerCard;
};

export const GetPartnerBottomMutation = () => {
  const partnerBottom = useQuery({
    queryKey: ["get-partner-bottom"],
    queryFn: () => client.capabilities.getPartnersbottom(),
  });
  return partnerBottom;
};

export const GetAllPartnerLogo = () => {
  const partnerLogo = useQuery({
    queryKey: ["get-partner-logo"],
    queryFn: () => client.capabilities.allPartnersLogo(),
  });
  return partnerLogo;
};

export const GetPartnerFifthCard = () => {
  const partnerFifthCard = useQuery({
    queryKey: ["get-partner-fifth-card"],
    queryFn: () => client.capabilities.getPartnerFifthCard(),
  });
  return partnerFifthCard;
};

// capabilities overview

export const GetCapabilitiesOverviewMutation = () => {
  const capabilitiesOverview = useQuery({
    queryKey: ["get-capabilities-overview"],
    queryFn: () => client.capabilities.getCapabilitiesOverview(),
  });
  return capabilitiesOverview;
};

// analytical-instrumentation

export const GetAnalyticalInstrumentationMutation = () => {
  const analyticalInstrumentation = useQuery({
    queryKey: ["get-analytical-instrumentation"],
    queryFn: () => client.capabilities.getAnalyticalInstrumentation(),
  });
  return analyticalInstrumentation;
};

// accredation

export const GetAccredationMutation = () => {
  const accredation = useQuery({
    queryKey: ["get-accredation"],
    queryFn: () => client.capabilities.getAccreditations(),
  });
  return accredation;
};

// lab equipment

export const GetLabEquipmentBannerMutation = () => {
  const labEquipment = useQuery({
    queryKey: ["get-lab-equipment-banner"],
    queryFn: () => client.capabilities.getLabEquipmentBanner(),
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

// overview

export const GetOverviewBannerMutation = () => {
  const overviewBanner = useQuery({
    queryKey: ["get-overview-banner"],
    queryFn: () => client.capabilities.getOverviewBanner(),
  });
  return overviewBanner;
};

export const AllOverviewTabsMutation = () => {
  const overviewTabs = useQuery({
    queryKey: ["get-all-overview-tabs"],
    queryFn: () => client.capabilities.allOverviewTabs(),
  });
  return overviewTabs;
};

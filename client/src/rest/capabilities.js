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

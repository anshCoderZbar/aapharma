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

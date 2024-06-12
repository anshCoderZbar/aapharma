import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const EditSmallMoleculeBannerMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.smallMolecule.editSmallMoleculeBanner(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-small-molecule-banner-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetSmallMoleculeBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-small-molecule-banner-section"],
    queryFn: () => client.smallMolecule.getSmallMoleculeBanner(),
  });
  return bannerSection;
};

export const EditHTSMutation = () => {
  const { notify } = useNotifications();
  const htsSection = useMutation({
    mutationFn: (data) => client.smallMolecule.editHTS(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["hts-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return htsSection;
};

export const GetHTSMutation = () => {
  const htsSection = useQuery({
    queryKey: ["hts-section"],
    queryFn: () => client.smallMolecule.getHTS(),
  });
  return htsSection;
};

export const EditSBDDMutation = () => {
  const { notify } = useNotifications();
  const sdbbSection = useMutation({
    mutationFn: (data) => client.smallMolecule.editSBDD(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["sdbb-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return sdbbSection;
};

export const GetSBDDMutation = () => {
  const sdbbSection = useQuery({
    queryKey: ["sdbb-section"],
    queryFn: () => client.smallMolecule.getSBDD(),
  });
  return sdbbSection;
};

export const EditSARMutation = () => {
  const { notify } = useNotifications();
  const sarSection = useMutation({
    mutationFn: (data) => client.smallMolecule.editSAR(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["sar-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return sarSection;
};

export const GetSARMutation = () => {
  const sarSection = useQuery({
    queryKey: ["sar-section"],
    queryFn: () => client.smallMolecule.getSAR(),
  });
  return sarSection;
};

export const EditLeadDevelopmentMutation = () => {
  const { notify } = useNotifications();
  const leadDevelopmentSection = useMutation({
    mutationFn: (data) => client.smallMolecule.editLeadDevelopment(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["lead-development-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return leadDevelopmentSection;
};

export const GetLeadDevelopmentMutation = () => {
  const leadDevelopmentSection = useQuery({
    queryKey: ["lead-development-section"],
    queryFn: () => client.smallMolecule.getLeadDevelopment(),
  });
  return leadDevelopmentSection;
};

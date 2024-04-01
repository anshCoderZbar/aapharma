import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreatePartnerBannerMutation = () => {
  const { notify } = useNotifications();
  const partnerBanner = useMutation({
    mutationFn: (data) => client.partner.createPartnerBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-partner-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerBanner;
};

export const GetPartnerBannerMutation = () => {
  const partnerBanner = useQuery({
    queryKey: ["get-partner-banner"],
    queryFn: () => client.partner.getPartnerBanner(),
  });
  return partnerBanner;
};

export const GetAllPartnerCardMutation = () => {
  const partnerCard = useQuery({
    queryKey: ["get-all-partner-card"],
    queryFn: () => client.partner.getAllPartnerCards(),
  });
  return partnerCard;
};

export const GetSinglePartnerCartMutation = (data) => {
  const singlePartner = useQuery({
    queryKey: ["get-single-partner-card"],
    queryFn: () => client.partner.getSinglePartnerCards(data),
  });
  return singlePartner;
};

export const EditPartnerCartMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const partnerBanner = useMutation({
    mutationFn: (data) => client.partner.editPartnerCards(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-partner-card"] });
      navigate("/partner-cards");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerBanner;
};

export const EditPartnerBottomMutation = () => {
  const { notify } = useNotifications();
  const partnerBottom = useMutation({
    mutationFn: (data) => client.partner.editPartnersbottom(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-partner-bottom"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerBottom;
};

export const GetPartnerBottomMutation = () => {
  const partnerBottom = useQuery({
    queryKey: ["get-partner-bottom"],
    queryFn: () => client.partner.getPartnersbottom(),
  });
  return partnerBottom;
};

export const GetAllPartnerLogo = () => {
  const partnerLogo = useQuery({
    queryKey: ["get-partner-logo"],
    queryFn: () => client.partner.allPartnersLogo(),
  });
  return partnerLogo;
};

export const CreatePartnerLogoMutation = (setPreviewImages) => {
  const { notify } = useNotifications();
  const partnerLogo = useMutation({
    mutationFn: (data) => client.partner.addPartnerLogo(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-partner-logo"] });
      setPreviewImages("");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerLogo;
};

export const DeletePartnerLogoMutation = () => {
  const { notify } = useNotifications();
  const partnerLogo = useMutation({
    mutationFn: (data) => client.partner.deletePartnerLogo(data),
    onSuccess: () => {
      notify("Data Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-partner-logo"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerLogo;
};

export const GetPartnerFifthCard = () => {
  const partnerFifthCard = useQuery({
    queryKey: ["get-partner-fifth-card"],
    queryFn: () => client.partner.getPartnerFifthCard(),
  });
  return partnerFifthCard;
};

export const EditPartnerFifthCard = () => {
  const { notify } = useNotifications();
  const partnerFifthCard = useMutation({
    mutationFn: (data) => client.partner.createPartnerFifthCard(data),
    onSuccess: () => {
      notify("Detaile Edited Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-partner-fifth-card"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return partnerFifthCard;
};

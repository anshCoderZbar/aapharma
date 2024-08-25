import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateResearchCollaborationBanner = () => {
  const { notify } = useNotifications();
  const bannerMutation = useMutation({
    mutationFn: (data) =>
      client.researchCollaboration.createResearchCollaborationBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-collaboration-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerMutation;
};

export const GetResearchCollaborationBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-research-collaboration-banner"],
    queryFn: () =>
      client.researchCollaboration.getResearchCollaborationBanner(),
  });
  return getBanner;
};

export const CreateResearchCollaborationMidSection = () => {
  const { notify } = useNotifications();
  const midSection = useMutation({
    mutationFn: (data) =>
      client.researchCollaboration.createResearchCollaborationMidSection(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-collaboration-mid-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return midSection;
};

export const GetResearchCollaborationMidSection = () => {
  const midSection = useQuery({
    queryKey: ["get-research-collaboration-mid-section"],
    queryFn: () =>
      client.researchCollaboration.getResearchCollaborationMidSection(),
  });
  return midSection;
};

export const CreateResearchCollaborationDiagram = () => {
  const { notify } = useNotifications();
  const diagram = useMutation({
    mutationFn: (data) =>
      client.researchCollaboration.createResearchCollaborationDiagram(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-collaboration-diagram"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return diagram;
};

export const GetResearchCollaborationDiagram = () => {
  const diagram = useQuery({
    queryKey: ["get-research-collaboration-diagram"],
    queryFn: () =>
      client.researchCollaboration.getResearchCollaborationDiagram(),
  });
  return diagram;
};

export const GetAllResearchCollaborationAcademia = () => {
  const academia = useQuery({
    queryKey: ["get-all-research-collaboration-academia"],
    queryFn: () =>
      client.researchCollaboration.getAllResearchCollaborationAcademia(),
  });
  return academia;
};

export const GetSingleResearchCollaborationAcademia = (data) => {
  const academia = useQuery({
    queryKey: ["get-single-research-collaboration-academia"],
    queryFn: () =>
      client.researchCollaboration.singleResearchCollaborationAcademia(data),
  });
  return academia;
};

export const EditResearchCollaborationAcademiaMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const academia = useMutation({
    mutationFn: (data) =>
      client.researchCollaboration.editResearchCollaborationAcademia(data),
    onSuccess: () => {
      notify("Details updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-research-collaboration-academia"],
      });
      navigate("/research-collaboration-academia");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return academia;
};

export const GetAllResearchCollaborationCompany = () => {
  const company = useQuery({
    queryKey: ["get-all-research-collaboration-company"],
    queryFn: () =>
      client.researchCollaboration.getAllResearchCollaborationCompany(),
  });
  return company;
};

export const GetSingleResearchCollaborationCompany = (data) => {
  const company = useQuery({
    queryKey: ["get-single-research-collaboration-company"],
    queryFn: () =>
      client.researchCollaboration.singleResearchCollaborationCompany(data),
  });
  return company;
};

export const EditResearchCollaborationCompanyMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const company = useMutation({
    mutationFn: (data) =>
      client.researchCollaboration.editResearchCollaborationCompany(data),
    onSuccess: () => {
      notify("Details updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-research-collaboration-company"],
      });
      navigate("/research-collaboration-company");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return company;
};

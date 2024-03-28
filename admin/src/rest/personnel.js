import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const CreatePersonnelBanner = () => {
  const { notify } = useNotifications();
  const bannerMutation = useMutation({
    mutationFn: (data) => client.personnel.createPersonnelBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerMutation;
};

export const GetPeronnelBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-personnel-banner"],
    queryFn: () => client.personnel.getPersonnelBanner(),
  });
  return getBanner;
};

export const CreatePersonnelCharacterized = () => {
  const { notify } = useNotifications();
  const personnelCharacterizedMutation = useMutation({
    mutationFn: (data) => client.personnel.createPersonnelCharacterized(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return personnelCharacterizedMutation;
};

export const GetPersonnelCharacterized = () => {
  const getCharacterized = useQuery({
    queryKey: ["get-personnel-characterized"],
    queryFn: () => client.personnel.getPersonnelCharacterized(),
  });
  return getCharacterized;
};

export const AddTeamMemberMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const addMemberMutation = useMutation({
    mutationFn: (data) => client.personnel.addTeamMember(data),
    onSuccess: () => {
      notify("Member Added Successfully", "success");
      navigate("/our-team");
      queryClient.invalidateQueries({
        queryKey: ["get-all-personnel-team-members"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return addMemberMutation;
};

export const GetTeamMemberMutation = () => {
  const getTeamMember = useQuery({
    queryKey: ["get-all-personnel-team-members"],
    queryFn: () => client.personnel.getTeamMember(),
  });
  return getTeamMember;
};

export const GetSingleTeamMemberMutation = (data) => {
  const getSingleMember = useQuery({
    queryKey: ["get-single-personnel-team-members"],
    queryFn: () => client.personnel.singleTeamMember(data),
  });
  return getSingleMember;
};

export const EditTeamMemberMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editMemberMutation = useMutation({
    mutationFn: (data) => client.personnel.editTeamMember(data),
    onSuccess: () => {
      notify("Member Edited Successfully", "success");
      navigate("/our-team");
      queryClient.invalidateQueries({
        queryKey: ["get-all-personnel-team-members"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editMemberMutation;
};
export const DeleteTeamMemberMutation = () => {
  const { notify } = useNotifications();
  const deleteMemberMutation = useMutation({
    mutationFn: (data) => client.personnel.deleteTeamMember(data),
    onSuccess: () => {
      notify("Member Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-personnel-team-members"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteMemberMutation;
};

// operating philosophy

export const OperatingPhilosophyMutation = () => {
  const { notify } = useNotifications();
  const operatingMutation = useMutation({
    mutationFn: (data) =>
      client.operatingPhilosophy.createOperatingPhilosophy(data),
    onSuccess: () => {
      notify("Data Added Successfully", "success");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return operatingMutation;
};

export const GetOperatingPhilosophyMutation = () => {
  const getOperatingMutation = useQuery({
    queryKey: ["get-operating-philosophy"],
    queryFn: () => client.operatingPhilosophy.getOperatingPhilosophy(),
  });
  return getOperatingMutation;
};

export const GetOperatingPhilosophyDiagram = () => {
  const getOperatingDiagramMutation = useQuery({
    queryKey: ["get-operating-philosophy-diagram"],
    queryFn: () => client.operatingPhilosophy.getOperatingPhilosophyDiagram(),
  });
  return getOperatingDiagramMutation;
};

export const GetSingleOperatingPhilosophyDiagram = (data) => {
  const getOperatingDiagramMutation = useQuery({
    queryKey: ["get-single-operating-philosophy-diagram"],
    queryFn: () =>
      client.operatingPhilosophy.singleOperatingPhilosophyDiagram(data),
  });
  return getOperatingDiagramMutation;
};

export const EditOperatingPhilosophyDiagramMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const operatingMutation = useMutation({
    mutationFn: (data) =>
      client.operatingPhilosophy.editSingleOperatingPhilosophyDiagram(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-operating-philosophy-diagram"],
      });
      navigate("/operating-philosophy");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return operatingMutation;
};

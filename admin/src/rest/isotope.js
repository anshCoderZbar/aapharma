import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const EditIsotopeBannerMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeBanner(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-banner-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetIsotopeBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-isotope-banner-section"],
    queryFn: () => client.isotope.getIsotopeBanner(),
  });
  return bannerSection;
};

export const EditIsotopeAssessmentMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeAssessment(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-assessment"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetIsotopeAssessmentMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-isotope-assessment"],
    queryFn: () => client.isotope.getIsotopeAssessment(),
  });
  return bannerSection;
};

export const EditIsotopeDetailsMutation = () => {
  const { notify } = useNotifications();
  const isotopeDetails = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeDetails(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-details"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return isotopeDetails;
};

export const GetIsotopeDetailsMutation = () => {
  const isotopeDetails = useQuery({
    queryKey: ["get-isotope-details"],
    queryFn: () => client.isotope.getIsotopeDetails(),
  });
  return isotopeDetails;
};

export const GetIsotopeTableMutation = () => {
  const isotopeTable = useQuery({
    queryKey: ["get-isotope-table"],
    queryFn: () => client.isotope.getIsotopeTable(),
  });
  return isotopeTable;
};

export const AddIsotopeTableMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const isotopeTable = useMutation({
    mutationFn: (data) => client.isotope.addIsotopeTable(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-table"],
      });
      navigate("/services-table");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return isotopeTable;
};

export const GetSingleIsotopeTableMutation = (data) => {
  const singleIsotopeTable = useQuery({
    queryKey: ["get-single-isotope-table"],
    queryFn: () => client.isotope.singleIsotopeTable(data),
  });
  return singleIsotopeTable;
};

export const EditIsotopeTableMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const isotopeTable = useMutation({
    mutationFn: (data) => client.isotope.updateIsotopeTable(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-table"],
      });
      navigate("/services-table");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return isotopeTable;
};

export const DeleteIsotopeTableMutation = () => {
  const { notify } = useNotifications();
  const isotopeTable = useMutation({
    mutationFn: (data) => client.isotope.deleteIsotopeTable(data),
    onSuccess: () => {
      notify("Details Deleted Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-table"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return isotopeTable;
};

export const GetIsotopeButtonMutation = () => {
  const isotopeButton = useQuery({
    queryKey: ["get-isotope-button"],
    queryFn: () => client.isotope.getIsotopeButton(),
  });
  return isotopeButton;
};

export const EditIsotopeButtonMutation = () => {
  const { notify } = useNotifications();
  const isotopeButton = useMutation({
    mutationFn: (data) => client.isotope.editIsotopeButton(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-isotope-button"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return isotopeButton;
};

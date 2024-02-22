import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const CreateChemicalFn = (reset) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const chemicalMutation = useMutation({
    mutationFn: (data) => client.chemical.addChemical(data),
    onSuccess: () => {
      notify("Chemial created successfully", "success");
      reset({
        sortNo: "",
        heading: "",
        description: "",
        mainCategory: "",
        subCategory: "",
        superCategory: "",
        productClass: "",
        clogP: "",
        mv: "",
        hbd: "",
        hba: "",
        rotb: "",
        fap3: "",
        price: "",
      });
      navigate("/product-management");
      queryClient.invalidateQueries({ queryKey: ["fetch-chemical"] });
    },
    onError: (error) => {
      notify(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : "OOPS! some error occured",
        "error"
      );
    },
  });
  return chemicalMutation;
};

export const FetchAllChemical = () => {
  const fetchChemical = useQuery({
    queryKey: ["fetch-chemical"],
    queryFn: () => client.chemical.chemical(),
  });
  return fetchChemical;
};

export const FetchSingleChemical = (id) => {
  const fetchChemical = useQuery({
    queryKey: ["fetch-single-chemical"],
    queryFn: () => client.chemical.singleChemical(id),
    staleTime: 0,
    cacheTime: 0,
  });
  return fetchChemical;
};

export const DeleteChemical = () => {
  const { notify } = useNotifications();
  const deleteChemical = useMutation({
    mutationFn: (id) => client.chemical.deleteChemical(id),
    onSuccess: () => {
      notify("Chemical Deleted Successfull", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-chemical"] });
    },
    onError: () => notify("OOPS! something went wrong", "error"),
  });
  return deleteChemical;
};

export const UpdateChemical = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateChemical = useMutation({
    mutationFn: (data) => client.chemical.updateChemical(data),
    onSuccess: (data) => {
      notify("Chemical updated successfully", "success");
      navigate("/product-management");
    },
    onError: (error) => {
      notify(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : "OOPS! some error occured",
        "error"
      );
      console.log(error);
    },
  });
  return updateChemical;
};

export const CreateUtility = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const utility = useMutation({
    mutationFn: (data) => client.chemical.createUtility(data),
    onSuccess: () => {
      notify("Utility Created successfully", "success");
      navigate("/product-management");
    },
    onError: (error) => {
      notify("OOPS! some error occured", "error");
    },
  });
  return utility;
};

export const GetUtility = (id) => {
  const utility = useQuery({
    queryKey: ["fetch-utility"],
    queryFn: () => client.chemical.getUtility(id),
  });
  return utility;
};

export const GetChemicalStock = () => {
  const { notify } = useNotifications();
  const stock = useMutation({
    mutationFn: (data) => client.chemical.chemicalInStock(data),
    onSuccess: () => {
      notify("Stock Updated successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-chemical"] });
    },
    onError: (error) => {
      notify("OOPS! some error occured", "error");
    },
  });
  return stock;
};

export const DublicateChemicalMutation = () => {
  const { notify } = useNotifications();
  const chemical = useMutation({
    mutationFn: (data) => client.chemical.dublicateChemical(data),
    onSuccess: () => {
      notify("Stock Updated successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-chemical"] });
    },
    onError: (error) => {
      notify("OOPS! some error occured", "error");
    },
  });
  return chemical;
};

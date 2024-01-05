import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const AddCatalogL1Fn = (reset) => {
  const { notify } = useNotifications();
  const addCatalogMutation = useMutation({
    mutationFn: (data) =>
      client.catalog.addCatalogL1({
        sortNo: data?.sortNo,
        heading: data?.heading,
      }),
    onSuccess: (data) => {
      notify(
        data?.message ? data?.message : "Category created successfully",
        "success"
      );
      reset({
        heading: "",
        sortNo: "",
      });
      queryClient.invalidateQueries({ queryKey: ["fetch-catalog-l1"] });
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
  return addCatalogMutation;
};

export const FetchAllCatalogsL1 = () => {
  const fetchCatalog = useQuery({
    queryKey: ["fetch-catalog-l1"],
    queryFn: () => client.catalog.catalogL1(),
  });
  return fetchCatalog;
};

export const FetchSingleCatalog = (id) => {
  const fetchSingleCatalog = useQuery({
    queryKey: ["single-catalog-l1"],
    queryFn: () => client.catalog.singleCatalogL1(id),
    enabled: id?.length > 0,
  });
  return fetchSingleCatalog;
};

export const UpdateCatalogL1 = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateCatalog = useMutation({
    mutationFn: (data) =>
      client.catalog.updateCatalogL1({
        id: id,
        sortNo: data?.sortNo,
        heading: data?.heading,
      }),
    onSuccess: () => {
      notify("Category Updated successfully", "success");
      navigate("/master-category");
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
  return updateCatalog;
};

export const DeleteCatalogL1 = () => {
  const { notify } = useNotifications();
  const deleteCatalogMutation = useMutation({
    mutationFn: (id) => client.catalog.deleteCatalogL1(id),
    onSuccess: () => {
      notify("Category Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-catalog-l1"] });
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
  return deleteCatalogMutation;
};

export const AddCatalogL2Fn = (reset) => {
  const { notify } = useNotifications();
  const addCatalogL2 = useMutation({
    mutationFn: (data) =>
      client.catalog.addCatalogL2({
        sortNo: data?.sortNo,
        heading: data?.heading,
        catalog: data?.subCategory,
      }),
    onSuccess: (data) => {
      console.log(data);
      notify(
        data?.message ? data?.message : "Category created successfully",
        "success"
      );
      reset({
        sortNo: "",
        heading: "",
        subCategory: "",
      });
      queryClient.invalidateQueries({ queryFn: ["fetch-catalog-l2"] });
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
  return addCatalogL2;
};

export const FetchAllCatalogsL2 = () => {
  const fetchCatalogL2 = useQuery({
    queryKey: ["fetch-catalog-l2"],
    queryFn: () => client.catalog.catalogL2(),
  });
  return fetchCatalogL2;
};

export const DeleteCatalogL2 = () => {
  const { notify } = useNotifications();
  const deleteCatalogMutation = useMutation({
    mutationFn: (id) => client.catalog.deleteCatalogL2(id),
    onSuccess: () => {
      notify("Category Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-catalog-l2"] });
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
  return deleteCatalogMutation;
};

export const FetchSubSingleCatalog = (id) => {
  const subSingleCatalog = useQuery({
    queryKey: ["sub-single-catalog-l2"],
    queryFn: () => client.catalog.singleCatalogL2(id),
    enabled: id?.length > 0,
  });

  return subSingleCatalog;
};

export const UpdateCatalogL2 = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateCatalogL2 = useMutation({
    mutationFn: (data) =>
      client.catalog.updateCatalogL2({
        id: id,
        sortNo: data?.sortNo,
        heading: data?.heading,
        catalog: data?.subCategory,
      }),
    onSuccess: (data) => {
      notify(
        data?.message ? data?.message : "Category created successfully",
        "success"
      );
      navigate("/sub-category");
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
  return updateCatalogL2;
};

export const AddCatalogL3Fn = (reset) => {
  const { notify } = useNotifications();
  const addCatalogL3 = useMutation({
    mutationFn: (data) =>
      client.catalog.addCatalogL3({
        sortNo: data?.sortNo,
        heading: data?.heading,
        catalog: data?.subCategory,
        catalog2: data?.superSubCategoryName,
      }),
    onSuccess: (data) => {
      console.log(data);
      notify(
        data?.message ? data?.message : "Category created successfully",
        "success"
      );
      reset({
        sortNo: "",
        heading: "",
        subCategory: "",
        superSubCategoryName: "",
      });
      queryClient.invalidateQueries({ queryFn: ["fetch-catalog-l3"] });
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
  return addCatalogL3;
};

export const FetchAllCatalogsL3 = () => {
  const fetchCatalogL3 = useQuery({
    queryKey: ["fetch-catalog-l3"],
    queryFn: () => client.catalog.catalogL3(),
  });
  return fetchCatalogL3;
};

export const FetchSuperSubSingleCatalog = (id) => {
  const superSubSingleCatalog = useQuery({
    queryKey: ["sub-single-catalog-l3"],
    queryFn: () => client.catalog.singleCatalogL3(id),
    enabled: id?.length > 0,
  });

  return superSubSingleCatalog;
};

export const UpdateCatalogL3 = (id) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const updateCatalogL2 = useMutation({
    mutationFn: (data) =>
      client.catalog.updateCatalogL3({
        id: id,
        sortNo: data?.sortNo,
        heading: data?.heading,
        catalog: data?.subCategory,
        catalog2: data?.superSubCategoryName,
      }),
    onSuccess: (data) => {
      notify(
        data?.message ? data?.message : "Category created successfully",
        "success"
      );
      navigate("/sub-child-category");
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
  return updateCatalogL2;
};

export const DeleteCatalogL3 = () => {
  const { notify } = useNotifications();
  const deleteCatalogMutation = useMutation({
    mutationFn: (id) => client.catalog.deleteCatalogL3(id),
    onSuccess: () => {
      notify("Category Deleted successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["fetch-catalog-l3"] });
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
  return deleteCatalogMutation;
};

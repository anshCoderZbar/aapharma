import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useAtom } from "jotai";
import { filteredCatalogs } from "store/CatalogStore";

export const CatalogCategory1 = (filterNo) => {
  const getCatalogCategory1 = useQuery({
    queryKey: ["catalog-category-1"],
    queryFn: () => client.catalog.catalogCategory1(),
    enabled: filterNo === 1,
  });
  return getCatalogCategory1;
};

export const CatalogCategory2 = (filterNo) => {
  const getCatalogCategory2 = useQuery({
    queryKey: ["catalog-category-2"],
    queryFn: () => client.catalog.catalogCategory2(),
    enabled: filterNo === 2,
  });
  return getCatalogCategory2;
};
export const CatalogCategory3 = (filterNo) => {
  const getCatalogCategory3 = useQuery({
    queryKey: ["catalog-category-3"],
    queryFn: () => client.catalog.catalogCategory3(),
    enabled: filterNo === 3,
  });
  return getCatalogCategory3;
};

export const AllChemical = () => {
  const fetchChemical = useQuery({
    queryKey: ["fetch-chemical"],
    queryFn: () => client.chemical.chemical(),
  });
  return fetchChemical;
};

export const SingleChemical = (id) => {
  const fetchChemical = useQuery({
    queryKey: ["fetch-single-chemical"],
    queryFn: () => client.chemical.singleChemical(id),
    enabled: id?.length >= 1,
  });
  return fetchChemical;
};

export const FilterChemical = (catalog) => {
  const [_, setFilteredData] = useAtom(filteredCatalogs);
  const filterChemicalMutation = useMutation({
    mutationFn: () => client.chemical.filterChemical(catalog),
    onSuccess: (data) => {
      setFilteredData(data);
    },
  });
  return filterChemicalMutation;
};

export const GetUtility = (id) => {
  const utility = useQuery({
    queryKey: ["utility"],
    queryFn: () => client.chemical.getUtility(id),
  });
  return utility;
};

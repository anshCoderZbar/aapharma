import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";

export const AllSettings = () => {
  const { notify } = useNotifications();
  const allSetting = useMutation({
    mutationFn: (data) => client.main.settings(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-settings"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return allSetting;
};

export const GetSettings = () => {
  const allSetting = useQuery({
    queryKey: ["get-all-settings"],
    queryFn: () => client.main.getSettings(),
  });
  return allSetting;
};

// orders

export const GetAllOrders = () => {
  const orders = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: () => client.cart.allOrders(),
  });
  return orders;
};

export const GetSingleOrders = (data) => {
  const orders = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: () => client.cart.singleOrders(data),
  });
  return orders;
};

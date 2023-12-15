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

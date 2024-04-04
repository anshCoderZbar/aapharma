import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

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

export const CreateNewCoupon = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const createCoupon = useMutation({
    mutationFn: (data) => client.cart.createCoupon(data),
    onSuccess: () => {
      notify("Coupon Created Successfully", "success");
      navigate("/all-coupons");
      queryClient.invalidateQueries({ queryKey: ["get-all-coupons"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createCoupon;
};

export const GetAllCoupon = () => {
  const coupons = useQuery({
    queryKey: ["get-all-coupons"],
    queryFn: () => client.cart.getAllCoupon(),
  });
  return coupons;
};

export const GetSingleCoupon = (data) => {
  const coupons = useQuery({
    queryKey: ["get-single-coupons"],
    queryFn: () => client.cart.singleCoupon(data),
  });
  return coupons;
};

export const EditCouponMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editCoupon = useMutation({
    mutationFn: (data) => client.cart.updateCoupon(data),
    onSuccess: () => {
      notify("Coupon Updated Successfully", "success");
      navigate("/all-coupons");
      queryClient.invalidateQueries({ queryKey: ["get-all-coupons"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editCoupon;
};

export const DeleteCouponMutation = () => {
  const { notify } = useNotifications();
  const deleteCoupon = useMutation({
    mutationFn: (data) => client.cart.deleteCoupon(data),
    onSuccess: () => {
      notify("Coupon Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-coupons"] });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteCoupon;
};

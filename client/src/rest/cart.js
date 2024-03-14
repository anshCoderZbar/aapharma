import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { Modal } from "bootstrap";
import { queryClient } from "queryClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddToCartMutation = () => {
  const addCart = useMutation({
    mutationFn: (data) => client.cart.addCart(data),
    onSuccess: () => {
      const modal = Modal.getOrCreateInstance("#cartModal");
      modal.show();
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
    onError: (err) => {
      // alert("err");
    },
  });
  return addCart;
};

export const GetCartMutation = (data) => {
  const getQuery = useQuery({
    queryKey: ["get-cart"],
    queryFn: () => client.cart.getCart(data),
  });
  return getQuery;
};

export const DeleteFromCartMutation = () => {
  const deleteCart = useMutation({
    mutationFn: (data) => client.cart.deleteCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
    onError: (err) => {
      // alert("err");
    },
  });
  return deleteCart;
};

export const UpdateCartMutation = () => {
  const updateCart = useMutation({
    mutationFn: (data) => client.cart.updateCart(data),
    onSuccess: () => {
      toast.success("Quantity Updated Successfully");
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
    onError: () => {
      toast.error("OOPS! Some error occured");
    },
  });
  return updateCart;
};

export const CheckoutCartMutation = () => {
  const navigate = useNavigate();
  const checkour = useMutation({
    mutationFn: (data) => client.cart.checkout(data),
    onSuccess: () => {
      toast.success("Order Places Successfully");
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error("OOPS! Some error occured");
    },
  });
  return checkour;
};

import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { Modal } from "bootstrap";
import { queryClient } from "queryClient";

export const AddToCartMutation = () => {
  const addCart = useMutation({
    mutationFn: (data) => client.cart.addCart(data),
    onSuccess: () => {
      const modal = Modal.getOrCreateInstance("#cartModal");
      modal.show();
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
    onError: (err) => {
      alert("err");
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

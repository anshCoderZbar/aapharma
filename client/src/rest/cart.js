import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { Modal } from "bootstrap";
import { queryClient } from "queryClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { initialCheckout, setPaypal } from "store/Cart";

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
  const [, setIsPaypal] = useAtom(setPaypal);
  const [, setCheckoutData] = useAtom(initialCheckout);
  const checkout = useMutation({
    mutationFn: (data) => client.cart.checkout(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });

      if (data?.data?.paymentMethod === "checkPayment") {
        toast.success("Order Places Successfully");
        navigate("/");
      }
      if (
        data?.data?.paymentMethod === "paypal" &&
        data?.data?.payment === "false"
      ) {
        toast.success("Redirecting you to payment page");
        navigate("/paypal-payment");
        setIsPaypal(true);
        setCheckoutData(data?.data);
      }
    },
    onError: (err) => {
      toast.error("OOPS! Some error occured");
    },
  });
  return checkout;
};

export const CreatePaymentMutation = () => {
  const navigate = useNavigate();
  const createPayment = useMutation({
    mutationFn: (data) => client.cart.createPayment(data),
    onSuccess: () => {
      //
    },
    onError: () => {
      toast.error("OOPS! some error occured");
      navigate("/cart");
    },
  });
  return createPayment;
};

export const SuccessPaymentMutation = () => {
  const navigate = useNavigate();
  const createPayment = useMutation({
    mutationFn: (data) => client.cart.paymentSuccess(data),
    onSuccess: () => {
      toast.success("Payment Successful");
      navigate("/");
    },
    onError: () => {
      toast.error("OOPS! some error occured");
    },
  });
  return createPayment;
};

export const ErrorPaymentMutation = () => {
  const navigate = useNavigate();
  const createPayment = useMutation({
    mutationFn: (data) => client.cart.paymentCancel(data),
    onSuccess: () => {
      toast.error("Payment Unsuccessful, Please try again");
    },
    onError: () => {
      toast.error("OOPS! some error occured");
      navigate("/cart");
    },
  });
  return createPayment;
};

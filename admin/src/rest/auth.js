import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import client from "./client";
import { useToken } from "lib/utils/useToken";
import { userDetails } from "store/authentication";
import { useAuth } from "lib/utils/useAuth";
import { useNotifications } from "reapop";

export const AdminLogin = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { setAuth } = useAuth();
  const [, setAuthentication] = useAtom(userDetails);

  const loginMutation = useMutation({
    mutationFn: (credentials) =>
      client.auth.login({
        email: credentials?.email,
        password: credentials?.password,
      }),
    onSuccess: (data) => {
      setAuth(data);
      setToken(data?.token);
      navigate("/");
      setAuthentication(data);
      notify(
        data?.message ? data?.message : "Logged in Successfully",
        "success"
      );
    },
    onError: (error) => {
      notify(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : "Incorrect Credentials",
        "error"
      );
    },
  });
  return loginMutation;
};

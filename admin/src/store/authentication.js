import Cookies from "js-cookie";
import { atom } from "jotai";
import { USER_AUTH } from "lib/constants";

export const userDetails = atom(
  Cookies.get(USER_AUTH) ? JSON.parse(Cookies.get(USER_AUTH)) : {}
);

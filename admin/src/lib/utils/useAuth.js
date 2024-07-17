import Cookies from "js-cookie";
import { USER_AUTH } from "lib/constants";

export function useAuth() {
  return {
    setAuth(user) {
      Cookies.set(USER_AUTH, JSON.stringify(user), { expires: 1 });
    },
    removeAuth() {
      Cookies.remove(USER_AUTH);
    },
  };
}
